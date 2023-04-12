import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div>
      요리 레시피
      <button onClick={back}>dd</button>
    </div>
  );
}

export default Header;
