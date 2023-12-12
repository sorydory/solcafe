import React from "react";
import "./NewsView1.css";

const NewsView1 = () => {
  return (
    <div className="lookonewrap">
      <div className="looknoe">
        <span className="eventtext">이벤트</span>
        <ul className="lookoneul">
          <li>
            <img src="images/icon_home.png" alt="" />
            <img src="images/icon_arrow.png" alt="" />
          </li>
          <li>
            WHAT'S NEW
            <img src="images/icon_arrow.png" alt="" />
          </li>
          <li>이벤트</li>
        </ul>
      </div>
      <div className="newyear">
        <ul className="newyearul">
          <li>
            <h3>
              Christmas Ph2 프로모션 <span>2023-11-29 ~ 2023-12-31</span>
            </h3>
          </li>
          <li>
            <div className="sns_wrap">
              <a
                href="https://www.facebook.com/v2.4/dialog/share_open_graph?action_properties=%7B%22object%22%3A%7B%22og%3Aurl%22%3A%22https%3A%2F%2Fwww.starbucks.co.kr%2Fwhats_new%2Fcampaign_view.do%3Fpro_seq%3D2344%22%2C%22og%3Atitle%22%3A%22Christmas%20Ph2%20%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98%22%2C%22og%3Adescription%22%3A%22%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4%20%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98%EC%97%90%20%EC%B0%B8%EC%97%AC%ED%95%98%EC%8B%9C%EA%B3%A0%20%EB%8B%A4%EC%96%91%ED%95%9C%20%EA%B8%B0%EC%81%A8%EC%9D%84%20%EB%8A%90%EA%BB%B4%EB%B3%B4%EC%84%B8%EC%9A%94%22%2C%22og%3Aimage%22%3A%22https%3A%2F%2Fimage.istarbucks.co.kr%2Fupload%2Fpromotion%2FWEB_THUM_20231128082512445.jpg%22%7D%7D&action_type=og.shares&app_id=179159949450639&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3fb5e386b4c5b%26domain%3Dwww.starbucks.co.kr%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.starbucks.co.kr%252Ff136801ab177d0c%26relation%3Dopener&display=popup&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fwww.starbucks.co.kr%2Fwhats_new%2Fcampaign_view.do%3Fpro_seq%3D2344&locale=ko_KR&next=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3e3213127f21c4%26domain%3Dwww.starbucks.co.kr%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.starbucks.co.kr%252Ff136801ab177d0c%26relation%3Dopener%26frame%3Df2dd8c352e4f3c%26result%3D%2522xxRESULTTOKENxx%2522&sdk=joey&version=v2.4"
                target="_blank"
              >
                <img
                  className="facebookicon"
                  src="images/icon_cpv_f.png"
                  alt=""
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div id="post">
        <img src="images/wn_christmas2_01_231122.jpg" alt="" />
      </div>
      <button id="list">목록</button>
    </div>
  );
};

export default NewsView1;
