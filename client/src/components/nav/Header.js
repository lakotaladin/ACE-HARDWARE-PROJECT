import React, { useState } from "react";
import "../nav/Header.css";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Menu } from "antd";
import userLogo from "../../resources/header_user-circle-light_red.svg";
import starLogo from "../../resources/header_AR icon.svg";
import cartLogo from "../../resources/Korpa.svg";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../resources/ace_logo.png";
import location from "../../resources/location_icon.svg";
import Item from "antd/es/list/Item";

const { SubMenu } = Menu;

const Header = () => {
  const [currnet, setCurrent] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  let dispatch = useDispatch();
  let history = useHistory();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = {
    width: "100%",
    height: "50px",
    fontSize: "16px",
    border: isFocused ? "2px solid red" : "1px solid lightgrey",
    padding: "4px",
    margin: "0px 0px 0px 35px",
  };

  const buttonStyle = {
    border: "none",
    width: "150px",
    height: "50px",
    backgroundColor: "lightgrey",
    color: isFocused ? "red" : "black",
    padding: "4px",
    margin: "0px 20px 0px 0px",
  };

  const handleClick = () => {
    // bla bla
  };
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    history.push("/login");
  };
  return (
    <>
      <div className="global-header p-0 m-0">
        <div className="info-div d-flex">
          <div className="info-one">
            <p className="info-text">
              <b>We Deliver.</b> Get what you need, when you need it.
              <u>
                <a href="https://www.acehardware.com/we-deliver">Learn more</a>
              </u>
            </p>
          </div>
          <div className="info-two">
            <a href="https://www.acehardware.com/b2b-home">Business Accounts</a>
            <a href="https://acehardware.bold360ps.com/?Touchpoint=Support%20Center">
              Customer Service
            </a>
            <Link to="/Location">Store Locator</Link>
          </div>
        </div>

        <div className="Header-global-center-div w-100">
          <div className="Logo-search-global">
            <div className="Logo-search-div d-flex w-100">
              <Link to="/">
                <img id="ace_logo" src={logo} alt="Ace Hardware logo" />
              </Link>

              <input
                type="text"
                style={inputStyle}
                placeholder="What can we help you find?"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button
                type="button"
                id="buttonSearch"
                style={buttonStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <SearchOutlined id="search-icon" />
              </button>

              <div className="login-and-register-section gap-2">
                <div className="header-login-register-section gap-2 w-50">
                  <img
                    className="headerLogo"
                    src={userLogo}
                    alt="Login/Register"
                  />
                  <p className="p-0 m-0">
                    <b>Hi there,</b>
                    <br /> <Link to="/login">Sign in</Link> |{" "}
                    <Link to="/register">New Account</Link>
                  </p>
                </div>
                <div className="header-login-register-section">
                  <img src={starLogo} alt="Login/Register" />
                  <p className="p-2 m-0">
                    <b>Ace Rewards</b>
                    <br /> <Link to="/">Learn more</Link>
                  </p>
                </div>
                <div className="header-login-register-section">
                  <img
                    className="headerLogo"
                    src={cartLogo}
                    alt="Login/Register"
                  />
                  <p className="p-2 m-0">
                    <b>Cart</b>
                    <br />
                    <p>0 Items</p>
                  </p>
                </div>
              </div>
            </div>
            <Menu
              onClick={handleClick}
              selectedKeys={[currnet]}
              mode="horizontal"
            >
              <SubMenu className="custom-menu-item" title="Departments">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
              <Menu.Item className="custom-menu-item">
                Sales & Specials
              </Menu.Item>
              <Menu.Item className="custom-menu-item">Local Ad</Menu.Item>
              <Menu.Item className="custom-menu-item">
                The Paint Studio
              </Menu.Item>
              <Menu.Item className="custom-menu-item">
                Ace Project Place
              </Menu.Item>
              <Menu.Item className="custom-menu-item">
                Ace Handyman Services
              </Menu.Item>
              <Menu.Item className="custom-menu-item">
                <Item className="custom-menu-item" onClick={logout}>
                  {" "}
                  Logout
                </Item>
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="location-header-section w-100 p-0 m-0">
          <img
            src={location}
            id="location-img"
            style={{ width: "1.7%", padding: "0px", marginLeft: "50px" }}
            alt="Location"
          />
          <div className="location-container p-0 m-0">
            <div className="location-content p-0 m-0 d-flex">
              <div className="location-text p-0 m-1 d-flex">
                <div className="p-0 m-0">
                  <p>You're shopping</p>
                </div>
                <div className="p-0 m-0">
                  <p>
                    <b>Calais Ace Home Center</b> - Calais, ME{" "}
                    <b>
                      <span className="text-success">Open</span>
                    </b>{" "}
                    until 6 PM | <b>Store Info & Directions</b> |{" "}
                    <b>Services & Brands</b> | <u>Change store</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
