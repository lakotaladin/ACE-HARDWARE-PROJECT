import React, { useState } from "react";
import "../nav/Header.css";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "antd";
import userLogo from "../../resources/header_user-circle-light_red.svg";
import starLogo from "../../resources/header_AR icon.svg";
import cartLogo from "../../resources/Korpa.svg";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import logo from "../../resources/ace_logo.png";
import location from "../../resources/location_icon.svg";

const { SubMenu } = Menu;

const Header = () => {
  const [currnet, setCurrent] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));
  let history = useHistory();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const toggleMenu2 = () => {
    setOpenMenu2(!openMenu2);
  };
  const toggleMenu3 = () => {
    setOpenMenu3(!openMenu3);
  };

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
          {!user ? (
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
                      <b style={{ fontWeight: "500", fontSize: "14px" }}>
                        Hi there,
                      </b>
                      <br /> <Link to="/login">Sign in</Link> |{" "}
                      <Link to="/register">New Account</Link>
                    </p>
                  </div>
                  <div className="header-login-register-section">
                    <img src={starLogo} alt="Login/Register" />
                    <p className="p-2 m-0">
                      <b style={{ fontWeight: "500", fontSize: "14px" }}>
                        Ace Rewards
                      </b>
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
                      <b style={{ fontWeight: "500", fontSize: "14px" }}>
                        Cart
                      </b>
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
          ) : (
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
                  <div className="header-login-register-section d-flex gap-2 w-50">
                    <img
                      className="headerLogo"
                      src={userLogo}
                      alt="Login/Register"
                    />
                    <p className="p-0 m-0">
                      <b style={{ fontWeight: "500", fontSize: "14px" }}>
                        Hi, Aladin
                      </b>
                      <br />
                      <div className="dropdown-container">
                        <b
                          style={{ fontWeight: "500", fontSize: "14px" }}
                          onClick={toggleMenu}
                        >
                          Your Account
                        </b>{" "}
                        {openMenu ? (
                          <CaretUpOutlined className="arrow-user" />
                        ) : (
                          <CaretDownOutlined className="arrow-user" />
                        )}
                        {openMenu && (
                          <div className="dropdown-content p-0">
                            <Link to="/myaccount">Account</Link>
                            <Link to="#">Profile</Link>
                            <Link to="#">Purchase History</Link>
                            <Link to="#">Ace Rewards</Link>
                            <Link to="#">My Local Ace</Link>
                            <Link onClick={logout}>Sign Out</Link>
                          </div>
                        )}
                      </div>
                    </p>
                  </div>
                  <div className="header-login-register-section-logged">
                    <img src={starLogo} alt="Login/Register" />
                    <p className="p-2 m-0">
                      <b style={{ fontWeight: "500", fontSize: "14px" }}>
                        Ace Rewards
                      </b>
                      <br />
                      <span style={{ fontSize: "14px" }}>
                        1,000/2,500 Points
                      </span>
                    </p>
                  </div>
                  <div className="header-login-register-section">
                    <img
                      className="headerLogo"
                      src={cartLogo}
                      alt="Login/Register"
                    />
                    <p className="p-2 m-0">
                      <b style={{ fontWeight: "500", fontSize: "14px" }}>
                        Cart
                      </b>
                      <br />
                      <p>0 Item</p>
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
          )}
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
                  <Link style={{ textDecoration: "none" }} to="/store-details">
                    <p>You're shopping</p>
                  </Link>
                </div>
                <div className="p-0 m-0">
                  <p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/store-details"
                    >
                      {" "}
                      <b>Calais Ace Home Center</b> - Calais, ME {"  "}
                      <b>
                        <span className="text-success">Open</span>
                      </b>{" "}
                      until 6 PM
                    </Link>{" "}
                    |{" "}
                    <div className="dropdown-container">
                      <b onClick={toggleMenu2}>Store Info & Directions</b>{" "}
                      {openMenu2 ? <CaretUpOutlined /> : <CaretDownOutlined />}
                      {openMenu2 && (
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                      )}
                    </div>{" "}
                    | {"  "}
                    <div className="dropdown-container">
                      <b onClick={toggleMenu3}>Services & Brands</b>{" "}
                      {openMenu3 ? <CaretUpOutlined /> : <CaretDownOutlined />}
                      {openMenu3 && (
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                      )}
                    </div>{" "}
                    |{" "}
                    <Link to="/location">
                      <u style={{ fontSize: "14px", marginLeft: "5px" }}>
                        Change store
                      </u>
                    </Link>
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
