import React from "react";
import { Link } from "react-router-dom";

function Row({ recipes, firstList, active }) {
  //const [recipes, setRecipes] = useState(location.state);
  return (
    <>
      {active ? (
        <div>
          Row
          {recipes ? (
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
          ) : (
            <>
              <div>다시 검색해 주세요</div>
              <button onClick={firstList}>go back</button>
            </>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Row;
