import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <div className="contents">
        <h1>오늘의 요리!</h1>
        <button onClick={back}>
          <i className="fa-solid fa-arrow-rotate-left"></i>
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 800px;
  .contents {
    max-width: 800px;
    height: 50px;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 24px;
    color: white;
  }
  button {
    right: 10px;
    position: absolute;
    background-color: transparent;
    border: none;
    color: white;
  }
`;

export default Header;
