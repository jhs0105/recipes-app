import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function cookrecipes() {
      const foodList = await axios.get(
        `http://openapi.foodsafetykorea.go.kr/api/${process.env.REACT_APP_API_KEY}/COOKRCP01/json/1/5`
      );
      setRecipes(foodList.data.COOKRCP01.row);
    }
    cookrecipes();
  }, []);
  if (recipes.length > 0) {
    return (
      <div>
        <Link to={"/list"} state={recipes}>
          {console.log(recipes)}
          Main
        </Link>
      </div>
    );
  }
}

export default Main;
