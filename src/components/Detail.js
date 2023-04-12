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
          <div className="image-box">
            <img src={recipe.ATT_FILE_NO_MAIN} alt="" />
          </div>
          <div className="contents">
            <div>{recipe.RCP_PARTS_DTLS}</div>
            <ul>
              {recipe.MANUAL01 && (
                <li>
                  {recipe.MANUAL_IMG01 && (
                    <img src={recipe.MANUAL_IMG01} alt="" />
                  )}
                  {recipe.MANUAL01}
                </li>
              )}
              {recipe.MANUAL02 && (
                <li>
                  {recipe.MANUAL_IMG02 && (
                    <img src={recipe.MANUAL_IMG02} alt="" />
                  )}
                  {recipe.MANUAL02}
                </li>
              )}
              {recipe.MANUAL03 && (
                <li>
                  {recipe.MANUAL_IMG03 && (
                    <img src={recipe.MANUAL_IMG03} alt="" />
                  )}
                  {recipe.MANUAL03}
                </li>
              )}
              {recipe.MANUAL04 && (
                <li>
                  {recipe.MANUAL_IMG04 && (
                    <img src={recipe.MANUAL_IMG04} alt="" />
                  )}
                  {recipe.MANUAL04}
                </li>
              )}
              {recipe.MANUAL05 && (
                <li>
                  {recipe.MANUAL_IMG05 && (
                    <img src={recipe.MANUAL_IMG05} alt="" />
                  )}
                  {recipe.MANUAL05}
                </li>
              )}
              {recipe.MANUAL06 && (
                <li>
                  {recipe.MANUAL_IMG06 && (
                    <img src={recipe.MANUAL_IMG06} alt="" />
                  )}
                  {recipe.MANUAL06}
                </li>
              )}
              {recipe.MANUAL07 && (
                <li>
                  {recipe.MANUAL_IMG07 && (
                    <img src={recipe.MANUAL_IMG07} alt="" />
                  )}
                  {recipe.MANUAL07}
                </li>
              )}
              {recipe.MANUAL08 && (
                <li>
                  {recipe.MANUAL_IMG08 && (
                    <img src={recipe.MANUAL_IMG08} alt="" />
                  )}
                  {recipe.MANUAL08}
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
