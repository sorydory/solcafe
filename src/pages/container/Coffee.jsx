import React, { useState } from "react";
import Blend from "../detailcoffee/Blend";
import Brewdcoffee from "../detailcoffee/Brewdcoffee";
import Coldbrew from "../detailcoffee/Coldbrew";
import Esopress from "../detailcoffee/Esopress";
import Fizzio from "../detailcoffee/Fizzio";
import Frapp from "../detailcoffee/Frapp";
import Refres from "../detailcoffee/Refres";
import "./Coffee.css";

const Coffee = () => {
  const [coffee, setCoffee] = useState(true);
  const [coffee1, setCoffee1] = useState(true);
  const [coffee2, setCoffee2] = useState(true);
  const [coffee3, setCoffee3] = useState(true);
  const [coffee4, setCoffee4] = useState(true);
  const [coffee5, setCoffee5] = useState(true);
  const [coffee6, setCoffee6] = useState(true);
  const [coffee7, setCoffee7] = useState(true);

  const [ischecked, setIsCheck] = useState(true);
  const onChange = (e) => {
    setIsCheck(!ischecked);
    console.log(ischecked);
    setCoffee(!coffee);
    setCoffee1(!coffee1);
    setCoffee2(!coffee2);
    setCoffee3(!coffee3);
    setCoffee4(!coffee4);
    setCoffee5(!coffee5);
    setCoffee6(!coffee6);
    setCoffee7(!coffee7);
  };
  return (
    <div id="Coffee">
      <h2>COFFEE</h2>
      <div id="select">
        <div id="selecttitle">
          <p className="look">분류보기</p>
        </div>
        <div>
          <div id="check">
            <button className="green">카테고리</button>
          </div>
          <ul className="selectmenu">
            <li>
              <input type="checkbox" onChange={onChange} checked={ischecked} />
              <label>전체상품보기</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => setCoffee(!coffee)} />
              <label>콜드 브루 커피</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => setCoffee1(!coffee1)} />
              <label>브루드 커피</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => setCoffee2(!coffee2)} />
              <label>에스프레소</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => setCoffee3(!coffee3)} />
              <label>프라푸치노</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => setCoffee4(!coffee4)} />
              <label>블렌디드</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => setCoffee5(!coffee5)} />
              <label>SOL 리프레셔</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => setCoffee6(!coffee6)} />
              <label>SOL 피지오</label>
            </li>
            <li>
              <input type="checkbox" onChange={() => setCoffee7(!coffee7)} />
              <label>티(티바나)</label>
            </li>
          </ul>
          <div className="menuview">
            {coffee && <Coldbrew />}
            {coffee1 && <Brewdcoffee />}
            {coffee2 && <Esopress />}
            {coffee3 && <Frapp />}
            {coffee4 && <Blend />}
            {coffee5 && <Refres />}
            {coffee6 && <Fizzio />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
