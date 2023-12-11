import React from "react";
import { Link } from "react-router-dom";
import "./SecondWrap.css";

const SecondWrap = () => {
  return (
    <div className="main2">
      <div className="left">
        <img
          className="toplogo2"
          src="images/2023_m_christmas_promotion_img.png"
          alt=""
        ></img>
        <Link to="/Menu">
          <div className="Detailbtn2">
            <p>자세히 보기</p>
          </div>
        </Link>
      </div>
      <div className="bean_txt_box">
        <h2>크리스마스 블렌드 250g</h2>
        <h5>
          크리스마스를 더욱 특별하게 만들어 줄 원두
          <br />
          신선한 라틴 아메리카 원두에 풍부한 인도네시아 원두와
          <br />
          진귀한 숙성 수마트라 원두가 블렌딩 된
          <br />
          크리스마스 시즌 한정 원두를 소개합니다.
        </h5>
      </div>
    </div>
  );
};

export default SecondWrap;
