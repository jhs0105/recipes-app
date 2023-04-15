import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div>오늘의 메뉴는?</div>
      {recipes.length > 0 ? (
        <div>
          <Link to={"/list"} state={{ food: recipes }}>
            Main
          </Link>
        </div>
      ) : (
        <div>잠시만 기다려 주세요</div>
      )}
    </>
  );
  // if (recipes.length > 0) {
  //   return (
  //     <>
  //       <div>오늘의 메뉴는?</div>
  //       <div>
  //         <Link
  //           to={"/list"}
  //           state={{ food: recipes, main: mainRecipes, side: sideRecipes }}
  //         >
  //           Main
  //         </Link>
  //       </div>
  //     </>
  //   );
  // } else {
  //   return <div>오늘의 메뉴는?</div>;
  // }
}

export default Main;
