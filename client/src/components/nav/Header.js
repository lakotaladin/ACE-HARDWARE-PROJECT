import React, { useState } from "react";
import "../nav/Header.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Menu, Space } from "antd";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import userLogo from "../../resources/header_user-circle-light_red.svg";
import starLogo from "../../resources/header_AR icon.svg";
import cartLogo from "../../resources/Korpa.svg";
import acestore from "../../resources/ace_store.png";
import acerewards from "../../resources/acerewards.png";
import ace_services from "../../resources/services.png";
import ace_services2 from "../../resources/services2.png";
import brands from "../../resources/brandsheader.png";
import brands2 from "../../resources/brandsheader2.png";


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
  let { user, cart } = useSelector((state) => ({ ...state }));
  let history = useHistory();

  const items = [
    {
      key: "1",
      label: <span style={{ fontWeight: "bold" }}>Shop by Brand</span>,
      children: [
        {
          key: "2-1",
          label: (
            <div className="brandscascader w-100 d-flex flex-row gap-4 p-1 m-0">
              <div className="brand-1" style={{ width: "100%" }}>
                <h5 style={{ borderBottom: "1px solid lightgrey" }}>
                  Featured brands
                </h5>
                <img
                  style={{ width: "100%" }}
                  src={brands}
                  alt="Brands images"
                />
              </div>
              <div className="brand-2" style={{ width: "100%" }}>
                <h5 style={{ borderBottom: "1px solid lightgrey" }}>
                  Brands A-Z
                </h5>
                <img style={{ width: "100%" }} src={brands2} alt="Brands" />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      key: "2",
      label: <span style={{ fontWeight: "bold" }}>Ace Gift Card</span>,
      children: [],
    },
    {
      key: "3",
      label: "Grills & Smokers",
    },
    {
      key: "4",
      label: "Outdoor Living and Patio",
    },
    {
      key: "5",
      label: "Lawn and Garden",
    },
    {
      key: "6",
      label: "Tools",
    },
    {
      key: "7",
      label: "Paint and Supplies",
    },
    {
      key: "8",
      label: "Heating and Cooling",
    },
    {
      key: "9",
      label: "Home and Decor",
    },
    {
      key: "10",
      label: "Building Supplies",
    },
    {
      key: "11",
      label: "Hardware",
    },
  ];

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

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
                    <Link className="d-flex flex-row p-0 m-0" to="/cart">
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
                    </Link>
                  </div>
                </div>
              </div>
              <Menu
                className="custom-menu-items"
                onClick={handleClick}
                selectedKeys={[currnet]}
                mode="horizontal"
              >
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Link
                    className="cascader"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>Departments</Space>
                  </Link>
                </Dropdown>

                <Link href="#" className="cascader">
                  <Space>Sales & Specials</Space>
                </Link>

                <Link
                  className="cascader"
                  href="https://www.acehardware.com/local-ad"
                >
                  <Space>Local Ad</Space>
                </Link>
                <Link
                  className="cascader"
                  href="https://www.acehardware.com/thepaintstudio"
                >
                  <Space>The Paint Studio</Space>
                </Link>
                <Link
                  className="cascader"
                  href="https://www.acehardware.com/aceprojectplace"
                >
                  <Space>Ace Project Place</Space>
                </Link>
                <Link
                  className="cascader"
                  href="https://www.acehandymanservices.com/?utm_source=acehardware.com&utm_medium=referral&utm_campaign=header_link&source=ace_site"
                >
                  <Space>Ace Handyman Services</Space>
                </Link>
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
                        Hi, {user?.email.split("@")[0]}
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
                            {user && user?.role === "admin" && (
                              <Link to="/admin/dashboard">Dashboard</Link>
                            )}
                            <Link to="/account">Account</Link>
                            <Link to="/myaccount">Profile</Link>
                            <Link to="/user/wishlist">Wishlist</Link>
                            <Link to="/user/history">History</Link>

                            <Link to="#" onClick={logout}>
                              Sign Out
                            </Link>
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
                    <Link to="/cart">
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
                        <p> {cart.length} Item</p>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <Menu
                className="custom-menu-items"
                onClick={handleClick}
                selectedKeys={[currnet]}
                mode="horizontal"
              >
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Link
                    className="cascader"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>Departments</Space>
                  </Link>
                </Dropdown>

                <Link href="#" className="cascader">
                  <Space>Sales & Specials</Space>
                </Link>

                <Link
                  className="cascader"
                  href="https://www.acehardware.com/local-ad"
                >
                  <Space>Local Ad</Space>
                </Link>
                <Link
                  className="cascader"
                  href="https://www.acehardware.com/thepaintstudio"
                >
                  <Space>The Paint Studio</Space>
                </Link>
                <Link
                  className="cascader"
                  href="https://www.acehardware.com/aceprojectplace"
                >
                  <Space>Ace Project Place</Space>
                </Link>
                <Link
                  className="cascader"
                  href="https://www.acehandymanservices.com/?utm_source=acehardware.com&utm_medium=referral&utm_campaign=header_link&source=ace_site"
                >
                  <Space>Ace Handyman Services</Space>
                </Link>
              </Menu>
            </div>
          )}
        </div>
        <div className="location-header-section w-100 p-1 m-0">
          <img
            src={location}
            id="location-img"
            style={{
              width: "30px",
              height: "35px",
              padding: "0px",
              marginLeft: "50px",
              marginTop: "2px",
              marginBottom: "1%",
            }}
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
                    <div className="dropdown-containerr">
                      <b onClick={toggleMenu2}>Store Info & Directions</b>{" "}
                      {openMenu2 ? <CaretUpOutlined /> : <CaretDownOutlined />}
                      {openMenu2 && (
                        <div className="dropdown-contentt">
                          <div className="store-dropdown d-flex flex-row justify-content-between bg-white">
                            <div className="drop-content d-flex flex-column m-0 p-0">
                              <MapContainer
                                center={[45.18047, -67.28653]}
                                zoom={13}
                                style={{ height: "400px", width: "100%" }}
                              >
                                <TileLayer
                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker
                                  position={[45.18047, -67.28653]}
                                ></Marker>
                              </MapContainer>
                              <Link
                                style={{ width: "100%", textAlign: "center" }}
                                to="/Location"
                              >
                                <button
                                  className="details"
                                  style={{
                                    width: "100%",
                                    marginTop: "2px",
                                    padding: "2%",
                                    border: "1px solid grey",
                                    backgroundColor: "white",
                                  }}
                                >
                                  Get Directions
                                </button>
                              </Link>
                            </div>
                            <div className="drop-content justify-content-between d-flex flex-column m-0 p-0">
                              <img src={acestore} alt="Ace Store" />
                              <Link
                                style={{ width: "100%", textAlign: "center" }}
                                to="/store-details"
                              >
                                <button
                                  className="details"
                                  style={{
                                    width: "100%",
                                    marginTop: "2px",
                                    padding: "2%",
                                    border: "1px solid grey",
                                    backgroundColor: "white",
                                  }}
                                >
                                  Full store details
                                </button>
                              </Link>
                            </div>
                            <div className="drop-content-contact justify-content-between align-text-start d-flex flex-column gap-3 m-0 p-0">
                              <div className="p-0 m-0 w-100 d-flex flex-column">
                                <b className="p-0 m-0">
                                  Calais Ace Home Center
                                </b>
                                <p className="p-0 m-0">295 North St</p>
                                <p className="p-0 m-0">Calais, ME 04619</p>
                              </div>
                              <div className="p-0 m-0 w-100 d-flex flex-column">
                                <p className="p-0 m-0">
                                  Mon - Fri 7:00am - 6:00pm
                                </p>
                                <p className="p-0 m-0">Sat 8:00am - 5:00pm</p>
                                <p className="p-0 m-0">Sun 9:00am - 4:00pm</p>
                              </div>
                              <div className="pb-5 m-0 w-100 d-flex flex-column">
                                <p className="p-0 m-0">Phone: (207) 454-2309</p>
                                <p className="p-0 m-0">
                                  Email address: contactus@calaisace.com
                                </p>
                                <p className="p-0 m-0">Owner: Drew Case</p>
                                <p className="p-0 m-0">Manager: Drew Case</p>
                              </div>
                            </div>
                            <div className="rewards align-items-center d-flex flex-column m-0">
                              <img
                                style={{ margin: "auto" }}
                                src={acerewards}
                                alt="Ace Rewards"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>{" "}
                    | {"  "}
                    <div className="dropdown-container">
                      <b onClick={toggleMenu3}>Services & Brands</b>{" "}
                      {openMenu3 ? <CaretUpOutlined /> : <CaretDownOutlined />}
                      {openMenu3 && (
                        <div className="dropdown-contenttt">
                          <div className="store-dropdownn d-flex flex-row justify-content-between bg-white">
                            <div className="drop-contentt justify-content-between d-flex flex-column m-0 p-0">
                              <div className="p-0 m-0 w-100 d-flex flex-column">
                                <b
                                  style={{ fontSize: "18px" }}
                                  className="p-0 m-0"
                                >
                                  Store Services
                                </b>
                                <img
                                  src={ace_services}
                                  style={{ width: "80%" }}
                                />
                              </div>
                            </div>
                            <div className="drop-contentt justify-content-between d-flex flex-column m-0 p-0">
                              <div className="p-0 m-0 w-100 d-flex flex-column">
                                <img
                                  src={ace_services2}
                                  style={{ width: "70%", marginTop: "10%" }}
                                />
                              </div>
                            </div>
                            <div className="drop-contentt justify-content-between d-flex flex-column m-0 p-0">
                              <div className="p-0 m-0 w-100 d-flex flex-column">
                                <b
                                  style={{ fontSize: "18px" }}
                                  className="p-0 m-0"
                                >
                                  Featured Brands
                                </b>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  KeyStart
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  LARSON
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  BLACK+DECKER
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  DEWALT
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  Craftsman
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  Amy Howard
                                </p>
                              </div>
                            </div>
                            <div className="drop-content-contact justify-content-between align-text-start d-flex flex-column gap-3 m-0 p-0">
                              <div className="p-0 m-0 w-100 d-flex flex-column">
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 mt-4"
                                >
                                  Scotts
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  ThermaTru Doors
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  Toro
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  Parcel Depot
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  Clark+Kensington
                                </p>
                                <p
                                  style={{ fontSize: "17px" }}
                                  className="p-0 m-0"
                                >
                                  Benjamin Moore
                                </p>
                              </div>
                            </div>
                            <div className="rewardss align-items-center d-flex flex-column m-0">
                              <Link
                                style={{ width: "100%", textAlign: "center" }}
                                to="/store-details"
                              >
                                <button
                                  className="details"
                                  style={{
                                    width: "100%",
                                    marginTop: "2px",
                                    padding: "2%",
                                    border: "1px solid grey",
                                    backgroundColor: "white",
                                  }}
                                >
                                  Full store details
                                </button>
                              </Link>
                            </div>
                          </div>
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
