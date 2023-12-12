import React from "react";
import { Link } from "react-router-dom";
import "./TopWrap.css";

const TopWrap = () => {
  return (
    <div className="main1">
      <div className="mainTop">
        <div className="toplogo1">
          <img
            className=""
            src="images/2023_christmas2_top_logo.png"
            alt=""
          ></img>
        </div>
        <div className="Topdrink">
          <img
            className="topdrink1"
            src="images/2023_m_christmas2_top_drink1.png"
            alt=""
          ></img>
          <img
            className="topdrink2"
            src="images/2023_christmas2_top_drink3.png"
            alt=""
          ></img>
          <img
            className="topdrink3"
            src="images/2023_m_christmas2_top_drink5.png"
            alt=""
          ></img>
          <img
            className="topdrink4"
            src="images/2023_christmas2_top_drink2.png"
            alt=""
          ></img>
          <img
            className="topdrink5"
            src="images/2023_christmas2_top_drink4.png"
            alt=""
          ></img>
          <img
            className="topdrink6"
            src="images/2023_christmas2_top_drink6.png"
            alt=""
          ></img>
        </div>
      </div>
      <Link to="/NewsView1">
        <div className="Detailbtn1">
          <p>자세히 보기</p>
        </div>
      </Link>
    </div>
  );
};

export default TopWrap;
