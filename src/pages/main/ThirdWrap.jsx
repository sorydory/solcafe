import React from "react";
import { Link } from "react-router-dom";
import "./ThirdWrap.css";

const ThirdWrap = () => {
  return (
    <div>
      <div className="main3">
        <Link to="/NewsView3">
          <div className="reserve_title">
            <img
              src="images/231023_pc_reserve_logo.png"
              alt="CHRISTMAS logo title"
            />
          </div>
          <div className="Detailbtn3">
            <p>자세히 보기</p>
          </div>
          <div className="reserve_visual">
            <img src="images/231023_pc_reserve_coffee_bg.png" alt="coffee_bg" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ThirdWrap;
