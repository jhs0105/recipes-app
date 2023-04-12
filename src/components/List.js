import React from "react";
import Header from "./Header";
import { Link, useLocation } from "react-router-dom";

function List() {
  const location = useLocation();
  //console.log(location.state);
  const recipes = location.state;
  return (
    <>
      <Header></Header>
      <div>
        {recipes.map((item, idx) => {
          return (
            <ul>
              <li>
                <Link to={`detail/${item.RCP_NM}`}>
                  <img src={item.ATT_FILE_NO_MAIN} alt="" />
                  <div>{item.RCP_NM}</div>
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default List;
