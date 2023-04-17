import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import main from "../assets/images/main.jpg";
import Row from "./Row";

function List() {
  const location = useLocation();
  const searchRef = useRef();
  const [recipes, setRecipes] = useState([]);
  const map = location.state.map;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://openapi.foodsafetykorea.go.kr/api/${process.env.REACT_APP_API_KEY}/COOKRCP01/json/1/10/${map}`
      )
      .then((res) => {
        setRecipes(res.data.COOKRCP01.row);
      });
  }, [map]);

  function cookrecipes(food) {
    axios
      .get(
        `http://openapi.foodsafetykorea.go.kr/api/${process.env.REACT_APP_API_KEY}/COOKRCP01/json/1/10/RCP_NM=${food} &${map}`
      )
      .then((res) => {
        setRecipes(res.data.COOKRCP01.row);
        searchRef.current.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <div className="searchbox" style={{ backgroundImage: `url(${main})` }}>
        <div className="title">
          <h1>오늘의 {location.state.name}!</h1>
        </div>
        <div className="item">
          <input
            type="text"
            ref={searchRef}
            placeholder="search food"
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                cookrecipes(searchRef.current.value);
              }
            }}
          />
          <button
            onClick={() => {
              cookrecipes(searchRef.current.value);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fa-solid fa-list"></i>
          </button>
        </div>
      </div>
      {recipes == "" ? (
        <div className="comment">잠시 기다려주세요</div>
      ) : (
        <Row recipes={recipes}></Row>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  .searchbox {
    background-size: cover;
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0 0 30px 30px;
    position: relative;
    .title {
      max-width: 800px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-weight: 800;
        font-size: 30px;
        color: white;
        text-shadow: 2px 2px 2px #333;
        padding: 20px 0;
      }
    }
    .item {
      max-width: 800px;
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      position: absolute;
      margin-top: 90px;
      input {
        padding: 0 10px;
        box-sizing: border-box;
        width: 100%;
        height: 30px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 20px 0 0 20px;
      }
      button {
        border: none;
        background-color: transparent;
        display: flex;
        .fa-list {
          background-color: rgba(255, 255, 255, 1);
          border-radius: 0 20px 20px 0;
          height: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fa-magnifying-glass {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          margin-left: -20px;
        }
      }
    }
  }
  .comment {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default List;
