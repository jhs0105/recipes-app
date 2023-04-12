import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>오늘의 요리!</h1>
      <button onClick={back}>
        <i className="fa-solid fa-arrow-rotate-left"></i>
      </button>
    </div>
  );
}

export default Header;
