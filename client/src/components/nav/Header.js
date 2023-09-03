import React, { useState } from "react";
import "../nav/Header.css";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import userLogo from "../../resources/header_user-circle-light_red.svg";
import starLogo from "../../resources/header_AR icon.svg";
import cartLogo from "../../resources/Korpa.svg";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../resources/ace_logo.png";

const { SubMenu } = Menu;

const Header = () => {
  const [currnet, setCurrent] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = {
    width: "1400px",
    height: "50px",
    fontSize: "16px",
    border: isFocused ? "2px solid red" : "1px solid lightgrey",
    padding: "4px",
    margin: "0px 0px 0px 35px",
  };

  const buttonStyle = {
    border: "none",
    width: "100px",
    height: "50px",
    backgroundColor: "lightgrey",
    color: isFocused ? "red" : "black",
    padding: "4px",
    margin: "0px 20px 0px 0px",
  };

  const handleClick = () => {
    // bla bla
  };

  return (
    <>
      <div className="global-header p-0 m-0">
        <div className="info-div d-flex">
          <div className="info-one">
            <p className="info-text">
              <b>We Deliver.</b> Get what you need, when you need it.
              <u>
                <a href="#">Learn more</a>
              </u>
            </p>
          </div>
          <div className="info-two">
            <a href="#">Business Accounts</a>
            <a href="#">Customer Service</a>
            <a href="#">Store Locator</a>
          </div>
        </div>

        <div className="Header-global-center-div w-100">
          <div className="Logo-search-global">
            <div className="Logo-search-div d-flex w-100">
              <img id="ace_logo" src={logo} alt="Ace Hardware logo" />

              <input
                type="text"
                style={inputStyle}
                placeholder="What can we help you find?"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button
                type="button"
                style={buttonStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <SearchOutlined id="search-icon" />
              </button>

              <div className="login-and-register-section">
                <div className="header-login-register-section gap-2">
                  <img
                    className="headerLogo"
                    src={userLogo}
                    alt="Login/Register"
                  />
                  <p>
                    <b>Hi there,</b>
                    <br /> <Link to="/login">Sign in</Link> |{" "}
                    <Link to="/register">New Account</Link>
                  </p>
                </div>
                <div className="header-login-register-section gap-2">
                  <img src={starLogo} alt="Login/Register" />
                  <p>
                    <b>Ace Rewards</b>
                    <br /> <Link to="/">Learn more</Link>
                  </p>
                </div>
                <div className="header-login-register-section gap-2">
                  <img
                    className="headerLogo"
                    src={cartLogo}
                    alt="Login/Register"
                  />
                  <p>
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
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
