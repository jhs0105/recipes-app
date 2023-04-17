import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/main.jpg";
import rice from "../assets/images/rice.jpg";
import soup from "../assets/images/soup.jpg";
import sidedish from "../assets/images/sidedish.jpg";
import dessert from "../assets/images/dessert.jpg";
import styled from "styled-components";

function Main() {
  return (
    <Wrapper>
      <div className="title" style={{ backgroundImage: `url(${main})` }}>
        Today's Recipes!
      </div>
      <ul>
        <li>
          <Link to={"/list"} state={{ map: "RCP_PAT2=밥", name: "밥" }}>
            <div className="imgbox">
              <img src={rice} alt="" />
            </div>
            <p>오늘의 밥!</p>
          </Link>
        </li>
        <li>
          <Link to={"/list"} state={{ map: "RCP_PAT2=국", name: "국&찌개" }}>
            <div className="imgbox">
              <img src={soup} alt="" />
            </div>
            <p>오늘의 국&찌개!</p>
          </Link>
        </li>
        <li>
          <Link to={"/list"} state={{ map: "RCP_PAT2=반찬", name: "반찬" }}>
            <div className="imgbox">
              <img src={sidedish} alt="" />
            </div>
            <p>오늘의 반찬!</p>
          </Link>
        </li>
        <li>
          <Link to={"/list"} state={{ map: "RCP_PAT2=후식", name: "후식" }}>
            <div className="imgbox">
              <img src={dessert} alt="" />
            </div>
            <p>오늘의 후식!</p>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
  width: 100vw;
  .title {
    height: 200px;
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 30px;
    text-shadow: 2px 2px 2px #333;
    border-radius: 0 0 30px 30px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    li {
      width: 45%;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      text-align: center;
      p {
        padding-top: 6px;
        font-weight: 800;
      }
      .imgbox {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        overflow: hidden;
        img {
          height: 100%;
        }
      }
    }
  }
`;

export default Main;
