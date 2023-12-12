import React from "react";
import "./NewsView3.css";

const NewsView3 = () => {
  return (
    <div className="news_view_wrap">
      <div className="news_view_info">
        <img className="newsimg" src="images/news_tit_20210218.jpg" alt="" />
        <ul className="whereul">
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
      <div className="news_view_title">
        <ul className="news_view_title_ul">
          <li>
            <h3>
              10월 26일, 리저브 크리스마스 신규 커피 & 원두 출시
              <span className="date">2023-10-25</span>
            </h3>
          </li>
          <li>
            <img src="images/icon_cpv_f.png" alt="페이스북 공유하기 새창" />
          </li>
        </ul>
      </div>
      <div className="news_view_info_inner">
        <img
          src="images/wn_reserve_christmas_231017_01.jpg"
          alt="리저브 크리스마스 원두"
        />
        <img
          src="images/wn_reserve_christmas_231017_02_1.jpg"
          alt="크리스마스 2023"
        />
        <img
          src="images/wn_reserve_christmas_231017_03.jpg"
          alt="store event"
        />
        <img
          src="images/wn_reserve_christmas_231017_04.jpg"
          alt="store event"
        />
      </div>
      <button id="list">목록</button>
      <div className="pn_content_tb">
        <table>
          <tbody>
            <td className="td">
              <tr>
                <th className="toptd">윗글</th>
                <td className="toptd">12월 21일, 프로젝트 종료 </td>
              </tr>
              <tr>
                <th>아랫글</th>
                <td>12월 06일, SOLCAFE 창립일</td>
              </tr>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsView3;
