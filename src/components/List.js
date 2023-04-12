import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef();
  const [recipes, setRecipes] = useState(location.state);

  function firstList() {
    setRecipes(location.state);
  }

  function cookrecipes(food) {
    axios
      .get(
        `http://openapi.foodsafetykorea.go.kr/api/${process.env.REACT_APP_API_KEY}/COOKRCP01/json/1/5/RCP_NM=${food}`
      )
      .then((response) => {
        setRecipes(response.data.COOKRCP01.row);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Header></Header>
      <div className="searchbox">
        <input
          type="text"
          ref={searchRef}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              cookrecipes(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button
          onClick={() => {
            cookrecipes(searchRef.current.value);
            searchRef.current.value = "";
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {recipes ? (
        <div>
          {recipes.map((item, idx) => {
            return (
              <ul>
                <li>
                  <Link to={`detail/${item.RCP_NM}`}>
                    <img src={item.ATT_FILE_NO_MAIN} alt="" />
                    <div>{item.RCP_NM}</div>
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
      ) : (
        <>
          <div>다시 검색해 주세요</div>
          <button onClick={firstList}>go back</button>
        </>
      )}
    </>
  );
}

export default List;
