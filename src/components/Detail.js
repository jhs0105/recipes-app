import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function Detail() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const title = useParams().title;
  const list = [];

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
  //console.log(list);

  return (
    <>
      {loading ? (
        <div>잠시만 기다려주세요</div>
      ) : (
        <>
          <Header></Header>
          <div className="image-box">
            <img src={recipe.ATT_FILE_NO_MAIN} alt="" />
          </div>
          <div className="contents">
            <div>{recipe.RCP_PARTS_DTLS}</div>
            <ul>
              {list.map((item, idx) => {
                return item.food ? (
                  <li>
                    {" "}
                    <img src={item.foodImg} alt="" /> {item.food}
                  </li>
                ) : (
                  ""
                );
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
