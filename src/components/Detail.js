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
          for (let i = 1; i < 20; i++) {
            list.push({
              food: recipe[`MANUAL0${i}`],
              foodImg: recipe[`MANUAL_IMG0${i}`],
            });
          }
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
  //console.log(recipe.RCP_PARTS_DTLS);

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
            <div className="ingredient">{recipe.RCP_PARTS_DTLS}</div>
            <div className="nutrition">
              <div>{recipe.INFO_ENG} Calories</div>
              <div>{recipe.INFO_CAR} Carbs</div>
              <div>{recipe.INFO_PRO} Protein</div>
              <div>{recipe.INFO_FAT} Fat</div>
              <div>{recipe.INFO_NA} Natrium</div>
            </div>
            <ul>
              {list.map((item, idx) => {
                return item.food ? (
                  <li key={idx}>
                    {" "}
                    <img src={item.foodImg} alt="" /> {item.food}
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
      .ingredient {
        white-space: pre;
      }
    }
  }
`;
export default Detail;
