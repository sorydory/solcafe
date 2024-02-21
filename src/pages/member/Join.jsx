import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../config/apiurl";
import { useNavigate } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const navigate = useNavigate();
  //로그인 기본상태로 만드는 usestate
  const [formData, setFormData] = useState({
    sol_id: "",
    sol_password: "",
    sol_passwordch: "",
    sol_name: "",
    sol_nickname: "",
    sol_year: "",
    sol_month: "",
    sol_day: "",
    sol_yny: "",
    sol_phone: "",
    sol_sns: "",
    sol_email1: "",
    sol_email2: "",
  });
  //인풋에 값을 입력하면 name 값과 value 에 맞춰서 기본상태 (setForm 상태를 변환시켜줌)
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (formData.sol_phone.length === 11) {
      setFormData({
        ...formData,
        sol_phone: formData.sol_phone.replace(
          /(\d{3})(\d{4})(\d{4})/,
          "$1-$2-$3"
        ),
      });
    } else if (formData.sol_phone.length === 13) {
      setFormData({
        ...formData,
        sol_phone: formData.sol_phone
          //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    }
  }, [formData.sol_phone]);
  const onSubmit = (e) => {
    e.preventDefault();
    //입력이 다 외었는지 체크
    const reg1 = /^[a-z0-9A-Z]{8,45}$/;
    const reg2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,45}$/;
    const reg4 =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (reg1.test(formData.sol_id) && formData.sol_id !== "") {
      console.log("good");
      //비밀번호 확인
      if (formData.sol_password !== "" && reg2.test(formData.sol_password)) {
        console.log("passgood");
        if (formData.sol_password === formData.sol_passwordch) {
          console.log("passchgood");
          if (reg4.test(formData.sol_email1)) {
            console.log("굿굿");
            addMember();
          } else {
            alert("이메일을 다시 입력해주세요");
            setFormData({
              ...formData,
              sol_email1: "",
            });
          }
        } else {
          alert("비밀번호와 비밀번호확인이 일치 하지않습니다");
          setFormData({
            ...formData,
            sol_passwordch: "",
          });
        }
      } else {
        alert("비밀번호를 다시 입력해주세요");
        setFormData({
          ...formData,
          sol_password: "",
        });
      }
    } else {
      alert("아이디를 다시 입력해주세요");
      setFormData({
        ...formData,
        sol_id: "",
      });
    }
  };
  const addMember = () => {
    console.log("호출");
    axios
      .post(`${API_URL}/join`, formData)
      .then((res) => {
        alert("등록되었습니다.");
        navigate("/Login");
      })
      .catch((e) => {
        console.log("에러 발생!");
        console.log(e);
      });
  };
  return (
    <div id="Join">
      <p id="Joinheader">회원가입</p>
      <form onSubmit={onSubmit}>
        <div id="Jointop">
          <div id="Joinimg">
            <img src="images/logo.png" alt="" />
            <p>회원정보를 입력해 주세요.</p>
          </div>
          <div id="Jointopinput">
            <input
              type="text"
              placeholder="아이디는 최소 8자리이상 입력해주세요"
              name="sol_id"
              value={formData.sol_id}
              onChange={onChange}
            />
          </div>
          <div id="Jointopinput">
            <input
              type="password"
              placeholder="비밀번호는 영문,숫자,특수문자 포함 8자리이상"
              name="sol_password"
              value={formData.sol_password}
              onChange={onChange}
            />
          </div>
          <div id="Jointopinput">
            <input
              type="password"
              placeholder="비밀번호는 영문,숫자,특수문자 포함 8자리이상"
              name="sol_passwordch"
              value={formData.sol_passwordch}
              onChange={onChange}
            />
          </div>
        </div>
        <div id="Joinbotton">
          <div id="Joinname">
            <p>
              이름<label>(필수)</label>
            </p>
            <input
              type="text"
              placeholder="이름"
              name="sol_name"
              value={formData.sol_name}
              onChange={onChange}
            />
          </div>
          <div id="Jointopinput" className="Joinnickname">
            <p>
              별명<label>(필수)</label>
            </p>
            <input
              type="text"
              placeholder="Nickname"
              name="sol_nickname"
              value={formData.sol_nickname}
              onChange={onChange}
            />
          </div>
          <div id="Jointopinput" className="Joinbd">
            <p>
              생년월일<label>(필수)</label>
            </p>
            <div id="bd">
              <select id="year" name="sol_year" onChange={onChange}>
                <option value="">필수 선택</option>
                <option value="1996">1996년</option>
                <option value="1997">1997년</option>
                <option value="1998">1998년</option>
                <option value="1999">1999년</option>
                <option value="2000">2000년</option>
                <option value="2001">2001년</option>
                <option value="2002">2002년</option>
                <option value="2003">2003년</option>
                <option value="2004">2004년</option>
                <option value="2005">2005년</option>
                <option value="2006">2006년</option>
                <option value="2007">2007년</option>
              </select>
              <select id="month" name="sol_month" onChange={onChange}>
                <option value="">필수 선택</option>
                <option value="1">1월</option>
                <option value="2">2월</option>
                <option value="3">3월</option>
                <option value="4">4월</option>
                <option value="5">5월</option>
                <option value="6">6월</option>
                <option value="7">7월</option>
                <option value="8">8월</option>
                <option value="9">9월</option>
                <option value="10">10월</option>
                <option value="11">11월</option>
                <option value="12">12월</option>
              </select>
              <select id="day" name="sol_day" onChange={onChange}>
                <option value="">필수 선택</option>
                <option value="1">1일</option>
                <option value="2">2일</option>
                <option value="3">3일</option>
                <option value="4">4일</option>
                <option value="5">5일</option>
                <option value="6">6일</option>
                <option value="7">7일</option>
                <option value="8">8일</option>
                <option value="9">9일</option>
                <option value="10">10일</option>
                <option value="11">11일</option>
                <option value="12">12일</option>
                <option value="13">13일</option>
                <option value="14">14일</option>
                <option value="15">15일</option>
                <option value="16">16일</option>
                <option value="17">17일</option>
                <option value="18">18일</option>
                <option value="19">19일</option>
                <option value="20">20일</option>
                <option value="21">21일</option>
                <option value="22">22일</option>
                <option value="23">23일</option>
                <option value="24">24일</option>
                <option value="25">25일</option>
                <option value="26">26일</option>
                <option value="27">27일</option>
                <option value="28">28일</option>
                <option value="29">29일</option>
                <option value="30">30일</option>
                <option value="31">31일</option>
              </select>
              <select id="yny" name="sol_yny" onChange={onChange}>
                <option value="">필수 선택</option>
                <option value="양">양</option>
                <option value="음">음</option>
              </select>
            </div>
            <span>
              회원가입완료후SOL카드를등록하시면생일무료음료쿠폰이발생됩니다.
            </span>
          </div>
          <div id="Jointopinput" className="phone">
            <div>
              <p>
                휴대폰번호<label>(필수)</label>
              </p>
              <input
                className="phoneinput"
                type="text"
                placeholder="휴대폰번호"
                name="sol_phone"
                value={formData.sol_phone}
                onChange={onChange}
              />
            </div>
            <input
              type="checkbox"
              name="sol_sns"
              value="yes"
              onChange={onChange}
            />
            <span>SMS를통한이벤트및신규매장정보수신에동의합니다.[선택]</span>
          </div>
          <div id="Jointopinput" className="email">
            <div>
              <p>
                메일<label>(필수)</label>
              </p>
              <input
                className="emailinput"
                type="text"
                placeholder="E-mail@SOLCAFE.com 형식으로 맞게 입력하세요."
                name="sol_email1"
                value={formData.sol_email1}
                onChange={onChange}
              />
            </div>
            <input
              type="checkbox"
              name="sol_email2"
              value="yes"
              onChange={onChange}
            />
            <span>이메일을통한이벤트및신규매장정보수신에동의합니다.[선택]</span>
          </div>
        </div>
        <button id="Joinfooter">가입하기</button>
      </form>
    </div>
  );
};

export default Join;
