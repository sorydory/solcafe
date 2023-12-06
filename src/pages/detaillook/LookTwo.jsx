import React from "react";
import "./LookTwo.css";

const LookTwo = () => {
  return (
    <div className="lookonewrap">
      <div className="looknoe">
        <img className="newsimg" src="images/news_tit_20210218.jpg" alt="" />
        <ul className="lookoneul">
          <li>
            <img src="images/icon_home.png" alt="" />
            <img src="images/icon_arrow.png" alt="" />
          </li>
          <li>
            WHAT'S NEW
            <img src="images/icon_arrow.png" alt="" />
          </li>
          <li>
            뉴스
            <img src="images/icon_arrow.png" alt="" />
          </li>
        </ul>
      </div>
      <div className="newyear">
        <ul className="newyearul">
          <li>
            <h3>리저브 뉴이어 커피 & 원두 출시</h3>
          </li>
          <li>
            <img src="images/icon_cpv_f.png" alt="" />
          </li>
        </ul>
      </div>
      <div id="post">
        <img src="images/wn_new_year_R_01_221214.jpg" alt="" />
        <img src="images/wn_new_year_R_02_01_221214.jpg" alt="" />
      </div>
      <button id="list">목록</button>
      <div className="newyear">
        <table>
          <tbody>
            <td className="td">
              <tr>
                <th>윗글</th>
                <td>12월 07일, 프로젝트 종료 </td>
              </tr>
              <tr>
                <th>아랫글</th>
                <td>11월 16일, SOLCAFE 창립일</td>
              </tr>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LookTwo;
