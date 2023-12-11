import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footermain">
      <div id="footer">
        <ul id="top">
          <li>
            <p className="first">COMPANY</p>
            <p>
              <a>한눈에 보기</a>
            </p>
            <p>
              <a>SOL CAFE 사명</a>
            </p>
            <p>
              <a>SOL CAFE 소개</a>
            </p>
            <p>
              <a>컴플라이언스</a>
            </p>
            <p>
              <a>국내 뉴스룸</a>
            </p>
            <p>
              <a>세계의 SOL CAFE</a>
            </p>
            <p>
              <a>글로벌 뉴스룸</a>
            </p>
          </li>
          <li>
            <p className="first">CORPORATE SALES</p>
            <p>
              <a>단체 및 기업 구매 안내</a>
            </p>
            <p>
              <a>단체 주문 배달 안내</a>
            </p>
          </li>
          <li>
            <p className="first">PARTNERSHIP</p>
            <p>
              <a>신규 입점 제의</a>
            </p>
            <p>
              <a>협력 고객사 등록신청</a>
            </p>
            <p>
              <a>중개업체 확인</a>
            </p>
          </li>
          <li>
            <p className="first">ONLINE COMMUNITY</p>
            <p>
              <a>페이스북</a>
            </p>
            <p>
              <a>트위터</a>
            </p>
            <p>
              <a>유튜브</a>
            </p>
            <p>
              <a>인스타그램</a>
            </p>
          </li>
          <li>
            <p className="first">RECRUIT</p>
            <p>
              <a>채용 소개</a>
            </p>
            <p>
              <a>채용 지원하기</a>
            </p>
          </li>
        </ul>
        <ul id="bottom">
          <li id="one">
            <span className="highlight">
              <a>개인정보처리방침</a>
            </span>
            <span>
              <a>영상정보처리기기 운영관리 방침</a>
            </span>
            <span>
              <a>홈페이지 이용약관</a>
            </span>
            <span className="highlight">
              <a>위치정보 이용약관</a>
            </span>
            <span>
              <a>CARD 이용약관</a>
            </span>
            <span>
              <a>비회원 이용약관</a>
            </span>
            <span>
              <a>My DT Pass 서비스 이용약관</a>
            </span>
            <span>
              <a>윤리경영 핫라인</a>
            </span>
          </li>
          <li className="flex">
            <p>
              <a>찾아오시는길</a>
            </p>
            <p>
              <a>신규입점제의</a>
            </p>
            <p>
              <a>사이트 맵</a>
            </p>
          </li>
          <li className="three">
            <span>사업자등록번호 : 123-45-67890</span>
            <span>주식회사 SOLCAFE 대표이사 : SOL</span>
            <span>TEL : 1234-5678</span>
            <span>개인정보 책임자 : SOL</span>
          </li>
          <li className="four">ⓒ 2023 SOLCAFE Company. All Rights Reserved.</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
