import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Row from "./Row";

function List() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef();
  const [recipes, setRecipes] = useState(location.state.food);
  const [mainRecipes, setMainRecipes] = useState([]);
  const [sideRecipes, setSideRecipes] = useState([]);
  const [soupRecipes, setSoupRecipes] = useState([]);
  const [active, setActive] = useState({
    all: true,
    main: false,
    soup: false,
    side: false,
  });
  //console.log(location);
  //console.log(soupRecipes);

  useEffect(() => {
    axios.get("http://localhost:5000/main").then((res) => {
      setMainRecipes(res.data);
      axios.get("http://localhost:5000/soup").then((res) => {
        setSoupRecipes(res.data);
        axios.get("http://localhost:3000/side").then((res) => {
          setSideRecipes(res.data);
        });
      });
    });
  }, []);

  function firstList() {
    setRecipes(location.state);
  }

  function cookrecipes(food) {
    axios.post("http://localhost:5000/search", { food: food }).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <Header></Header>
      <div className="searchbox">
        <input
          type="text"
          ref={searchRef}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              cookrecipes(searchRef.current.value);

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
      <div>
        <button
          onClick={() => {
            setActive({
              all: true,
              main: false,
              soup: false,
              side: false,
            });
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setActive({
              all: false,
              main: true,
              soup: false,
              side: false,
            });
          }}
        >
          밥
        </button>
        <button
          onClick={() => {
            setActive({
              all: false,
              main: false,
              soup: true,
              side: false,
            });
          }}
        >
          국 & 찌개
        </button>
        <button
          onClick={() => {
            setActive({
              all: false,
              main: false,
              soup: false,
              side: true,
            });
          }}
        >
          반찬
        </button>
      </div>
      <Row recipes={recipes} firstList={firstList} active={active.all}></Row>
      <Row
        recipes={mainRecipes}
        firstList={firstList}
        active={active.main}
      ></Row>
      <Row
        recipes={sideRecipes}
        firstList={firstList}
        active={active.side}
      ></Row>
      <Row
        recipes={soupRecipes}
        firstList={firstList}
        active={active.soup}
      ></Row>
    </>
  );
}

export default List;
