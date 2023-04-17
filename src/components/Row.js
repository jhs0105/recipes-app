import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Row({ recipes, firstList }) {
  //const [recipes, setRecipes] = useState(location.state);
  const ellipsis = (str, total) => {
    return str.length > total ? str.substr(0, total - 1) + "..." : str;
  };
  return (
    <Wrapper>
      {recipes ? (
        <ul>
          {recipes.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to={`detail/${item.RCP_NM}`}>
                  <div className="imgbox">
                    <img src={item.ATT_FILE_NO_MAIN} alt="" />
                  </div>
                  <div className="foodname">{ellipsis(item.RCP_NM, 10)}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <>
          <div>다시 검색해 주세요</div>
          <button onClick={firstList}>go back</button>
        </>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    li {
      width: 40%;
      border-radius: 10px;
      margin-top: 10px;
      padding: 12px 0;
      box-shadow: 2px 2px 10px #ccc;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        .imgbox {
          width: 120px;
          height: 120px;
          border-radius: 100%;
          overflow: hidden;
          img {
            height: 140px;
            object-fit: fill;
          }
        }

        .foodname {
          margin-top: 10px;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
`;

export default Row;
