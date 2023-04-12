import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function Detail() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const title = useParams().title;

  useEffect(
    function () {
      axios
        .get(
          `http://openapi.foodsafetykorea.go.kr/api/${process.env.REACT_APP_API_KEY}/COOKRCP01/json/1/1/RCP_NM=${title}`
        )
        .then((response) => {
          setRecipe(response.data.COOKRCP01.row[0]);
          setLoading(false);
        });
    },
    [title]
  );

  return (
    <>
      {loading ? (
        <div>잠시만 기다려주세요</div>
      ) : (
        <>
          <Header></Header>
          <div>
            <div>{recipe.RCP_NM}</div>
            <img src={recipe.ATT_FILE_NO_MAIN} alt="" />
            <div>{recipe.RCP_PARTS_DTLS}</div>
            <ul>
              <li>{recipe.MANUAL01 && recipe.MANUAL01}</li>
              <li>{recipe.MANUAL02 && recipe.MANUAL02}</li>
              <li>{recipe.MANUAL03 && recipe.MANUAL03}</li>
              <li>{recipe.MANUAL04 && recipe.MANUAL04}</li>
              <li>{recipe.MANUAL05 && recipe.MANUAL05}</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
