import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ isState1, isState2, isState3, isState4, isState5 }) => {
  if (isState1 || isState2 || isState3 || isState4 || isState5) {
    return (
      <nav id="Detail">
        <div id="menu">
          <div className="innermenu">
            <ul className="coffee">
              <li>
                <Link to="/Coffee1">콜드 브루</Link>
              </li>
              <li>브루드 커피</li>
              <li>에스프레소</li>
              <li>프라푸치노</li>
              <li>블렌디드</li>
            </ul>

            <div>
              <ul className="location">
                <li>매장 위치</li>
              </ul>
            </div>
            <div>
              <ul className="quest">
                <li>자주 하는 질문</li>
              </ul>
            </div>
            <div>
              <ul className="event">
                <li>이벤트</li>
              </ul>
            </div>
            <div>
              <ul className="notice">
                <li>공지사항</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
