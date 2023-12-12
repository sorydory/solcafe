import React, { useReducer, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { setLogin, setLogout } from "../modules/logincheck";
import { getCookie, removeCookie } from "../util/cookie";
import "./Header.css";

function reducer1(state1, action) {
  switch (action.type) {
    case "OPEN1":
      return true;
    case "CLOSE":
      return false;
    default:
      return state1;
  }
}
function reducer2(state2, action) {
  switch (action.type) {
    case "OPEN2":
      return true;
    case "CLOSE":
      return false;
    default:
      return state2;
  }
}
function reducer3(state3, action) {
  switch (action.type) {
    case "OPEN3":
      return true;
    case "CLOSE":
      return false;
    default:
      return state3;
  }
}
function reducer4(state4, action) {
  switch (action.type) {
    case "OPEN4":
      return true;
    case "CLOSE":
      return false;
    default:
      return state4;
  }
}
function reducer5(state5, action) {
  switch (action.type) {
    case "OPEN5":
      return true;
    case "CLOSE":
      return false;
    default:
      return state5;
  }
}

const Header = () => {
  const isLogin = useSelector((state) => state.logincheck.isLogin);
  const username = getCookie("aw_nickname");
  const dispatch = useDispatch();
  const logoutClick = () => {
    removeCookie("aw_id");
    removeCookie("aw_nickname");
    dispatch(setLogout());
  };
  useEffect(() => {
    if (username) {
      dispatch(setLogin());
    }
  }, [dispatch, username]);
  const [state1, dispatch1] = useReducer(reducer1, false);
  const [state2, dispatch2] = useReducer(reducer2, false);
  const [state3, dispatch3] = useReducer(reducer3, false);
  const [state4, dispatch4] = useReducer(reducer4, false);
  const [state5, dispatch5] = useReducer(reducer5, false);
  return (
    <header>
      <div className="gnb_wrap">
        <div>
          <h1>
            <Link to="/">
              <img className="cscafe" src="images/logo.png" alt=""></img>
            </Link>
          </h1>
          <div id="Bar">
            <ul id="header1">
              {isLogin ? (
                <>
                  <li onClick={logoutClick}>Sign out</li>
                </>
              ) : (
                <li>
                  <Link to="/Login">Sign In</Link>
                </li>
              )}
              {isLogin ? (
                <>
                  <li>SOL Coffee</li>
                </>
              ) : (
                <li>
                  <Link to="/Login">SOL CAFE</Link>
                </li>
              )}
              <li>Customer Service & Ideas</li>
              <li>Find a Store</li>
              {isLogin && username === "admin" ? (
                <>
                  <li className="coffeeadd">
                    <Link to="/Writecoffee">음료등록</Link>
                  </li>
                  <li className="foodadd">
                    <Link to="/Writefood">음식등록</Link>
                  </li>
                  <li className="productadd">
                    <Link to="/Writeproduct">상품등록</Link>
                  </li>
                </>
              ) : null}
              <li id="icon">
                <img src="images/icon_magnifier_black.png" alt=""></img>
              </li>
            </ul>
            <div id="header2">
              <ul id="header2ul">
                <li
                  className="header2li"
                  onMouseEnter={() => dispatch1({ type: "OPEN1" })}
                  onMouseLeave={() => dispatch1({ type: "CLOSE" })}
                >
                  <Link to="/Coffee">COFFEE</Link>
                  <Nav isState1={state1} />
                </li>
                <li
                  className="header2li"
                  onMouseEnter={() => dispatch2({ type: "OPEN2" })}
                  onMouseLeave={() => dispatch2({ type: "CLOSE" })}
                >
                  <Link to="/Store">STORE</Link>
                  <Nav isState2={state2} />
                </li>
                <li
                  className="header2li"
                  onMouseEnter={() => dispatch3({ type: "OPEN3" })}
                  onMouseLeave={() => dispatch3({ type: "CLOSE" })}
                >
                  <Link to="/Responsibility">RESPONSIBILITY</Link>
                  <Nav isState3={state3} />
                </li>
                <li
                  className="header2li"
                  onMouseEnter={() => dispatch4({ type: "OPEN4" })}
                  onMouseLeave={() => dispatch4({ type: "CLOSE" })}
                >
                  EVENT
                  <Nav isState4={state4} />
                </li>
                <li
                  className="header2li"
                  onMouseEnter={() => dispatch5({ type: "OPEN5" })}
                  onMouseLeave={() => dispatch5({ type: "CLOSE" })}
                >
                  NOTICE
                  <Nav isState5={state5} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
