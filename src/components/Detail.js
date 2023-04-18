import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function Detail() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const title = useParams().title;
  const list = [];

  const navigate = useNavigate();

  useEffect(
    function () {
      axios
        .get(
          `http://openapi.foodsafetykorea.go.kr/api/${process.env.REACT_APP_API_KEY}/COOKRCP01/json/1/1/RCP_NM=${title}`
        )
        .then((response) => {
          setRecipe(response.data.COOKRCP01.row[0]);
          // for (let i = 1; i < 20; i++) {
          //   list.push({
          //     food: recipe[`MANUAL0${i}`],
          //     foodImg: recipe[`MANUAL_IMG0${i}`],
          //   });
          // }
          setLoading(false);
        });
    },
    [title]
  );
  for (let i = 1; i < 20; i++) {
    list.push({
      food: recipe[`MANUAL0${i}`],
      foodImg: recipe[`MANUAL_IMG0${i}`],
    });
  }

  return (
    <Wrapper>
      {loading ? (
        <div>잠시만 기다려주세요</div>
      ) : (
        <div className="detailPage">
          <div className="title">
            <h1>{recipe.RCP_NM}</h1>
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              back
            </button>
          </div>
          <div className="imgBox">
            <img src={recipe.ATT_FILE_NO_MAIN} alt="" />
          </div>
          <div className="contents">
            <div className="nutrition">
              <div>
                <span>{recipe.INFO_ENG}</span> Calories
              </div>
              <div>
                <span>{recipe.INFO_CAR} </span>Carbs
              </div>
              <div>
                <span>{recipe.INFO_PRO}</span> Protein
              </div>
              <div>
                <span>{recipe.INFO_FAT}</span> Fat
              </div>
              <div>
                <span>{recipe.INFO_NA}</span> Natrium
              </div>
            </div>
            <div className="ingredient">{recipe.RCP_PARTS_DTLS}</div>
            <ul>
              {list.map((item, idx) => {
                return item.food ? (
                  <li key={idx}>
                    {" "}
                    <img src={item.foodImg} alt="" /> <div>{item.food}</div>
                  </li>
                ) : (
                  ""
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
  .detailPage {
    max-width: 800px;
    .title {
      width: 100%;
      max-width: 800px;
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      button {
        position: absolute;
        right: 20px;
      }
    }
    .imgBox {
      width: 100%;
      height: 350px;
      border-radius: 0 0 30px 30px;
      background-color: red;
      overflow: hidden;
      img {
        height: 350px;
        width: 100%;
        object-fit: cover;
      }
    }
    .contents {
      width: 100%;
      .ingredient {
        padding: 20px 10px;
        white-space: pre-line;
        line-height: 1.6;
        font-size: 14px;
      }
      .nutrition {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        div {
          background-color: #ccc;
          height: 32px;
          margin: 6px;
          border-radius: 30px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 10px 0 0;
          &:nth-child(1) {
            background-color: orangered;
          }
          &:nth-child(2) {
            background-color: royalblue;
          }
          &:nth-child(3) {
            background-color: skyblue;
          }
          &:nth-child(4) {
            background-color: pink;
          }
          &:nth-child(5) {
            background-color: orchid;
          }
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            width: 32px;
            aspect-ratio: 1;
            border-radius: 100%;
            border: 1px solid #ccc;
            text-align: center;
            box-sizing: border-box;
            margin-right: 4px;
            font-size: 14px;
            font-weight: 800;
          }
        }
      }
      ul {
        li {
          display: flex;
          margin: 0 10px 10px 10px;
          img {
            width: 120px;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;
export default Detail;
