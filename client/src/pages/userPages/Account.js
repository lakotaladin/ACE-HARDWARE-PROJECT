import React, { useEffect, useState } from "react";
import "./account.css";
import { RightOutlined } from "@ant-design/icons";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
// import { Input } from "antd";
// import logo_ace from "../../resources/ace_logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import firebase from "firebase/compat/app";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Account = () => {
  const [activeLink, setActiveLink] = useState("Account");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  // const [passwordVisible, setPasswordVisible] = useState(false);
  // const [passwordVisible2, setPasswordVisible2] = useState(false);

  //   Map location
  // const latitude = 45.18047;
  // const longitude = -67.28653;

  //  Fetch user from firebase

  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));
  let history = useHistory();

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    toast.success("Succesfully Log Out!");
    history.push("/login");
  };

  useEffect(() => {
    const email = firebase.auth().currentUser?.email;
    const name = firebase.auth().currentUser?.email.split("@gmail.com");
    if (email) {
      setUserEmail(email);
      setUserName(name);
    } else {
      if (!email) {
        toast.success("You need to Sign In first");
        history.push("/login");
      }
    }
  }, []);
  return (
    <>
      <Header />
      {/* User header */}
      <div className="container d-flex flex-column">
        <div className="navigation-container d-flex flex-row">
          <p className="p-0 m-0" style={{ color: "grey", fontSize: "12px" }}>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>{" "}
            <RightOutlined className="arrow-left" /> Account
          </p>
        </div>
        <div className="container-h1-link d-flex flex-row w-100 p-0 m-0">
          <div className="p-0 m-0 w-50 d-flex">
            <h1 style={{ fontWeight: "400" }}>My Account</h1>
          </div>
          <div className="nav-bar">
            <Link
              to="/account"
              onClick={() => handleNavLinkClick("Account")}
              className={`nav ${activeLink === "Account" ? "active" : ""}`}
            >
              Account
            </Link>
            <Link
              to="/myaccount"
              onClick={() => handleNavLinkClick("Profile")}
              className={`nav ${activeLink === "Profile" ? "active" : ""}`}
            >
              Profile
            </Link>
            <Link
              to="#"
              onClick={() => handleNavLinkClick("Ace Rewards")}
              className={`nav ${activeLink === "Ace Rewards" ? "active" : ""}`}
            >
              Ace Rewards
            </Link>
            <Link
              to="#"
              onClick={() => handleNavLinkClick("Adress Book")}
              className={`nav ${activeLink === "Adress Book" ? "active" : ""}`}
            >
              Adress Book
            </Link>
            <Link
              to="#"
              onClick={() => handleNavLinkClick("Purachase History")}
              className={`nav ${
                activeLink === "Purachase History" ? "active" : ""
              }`}
            >
              Purachase History
            </Link>
            <Link
              to="#"
              onClick={() => handleNavLinkClick("Lists")}
              className={`nav ${activeLink === "Lists" ? "active" : ""}`}
            >
              Lists
            </Link>
            <button
              style={{ background: "none", border: "none" }}
              onClick={logout}
              className={`nav ${activeLink === "Log Out" ? "active" : ""}`}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      {/* Section */}
      <div className="global-profile w-100 d-flex flex-column mb-3 p-0">
        <h3 style={{ margin: "auto", paddingTop: "2%" }}>
          Welcome to Your Account, {userName}
        </h3>
        <div className="container-profilee d-flex flex-row gap-2 p-2 mt-4 mb-4">
          <div className="card-onee w-50 d-flex flex-column  m-0">
            <p
              style={{
                fontSize: "30px",
                color: "#D40029",
                fontWeight: "500",
                marginTop: "4%",
              }}
            >
              Recent Orders
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                marginTop: "0%",
              }}
            >
              No order history
            </p>
          </div>
          <div className="card-twoo w-50 d-flex flex-column p-0">
            <p
              style={{
                fontWeight: "500",
                fontSize: "30px",
                color: "#D40029",
                marginTop: "5%",
              }}
            >
              My Information
            </p>
            <div className="info-section w-100 p-0 m-0 d-flex flex-row">
              <div className="info-card w-50 d-flex flex-column p-0 m-0">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    textAlign: "start",
                    marginTop: "2%",
                    marginLeft: "20%",
                  }}
                >
                  Account Information
                </p>
                <div className="info-containerr w-100 d-flex flex-column m-0">
                  <b className="p-text">Email address:</b>
                  <p className="p-text">{userEmail}</p>
                  <b className="p-text">Password:</b>
                  <p className="p-text">********</p>
                </div>
              </div>
              <div className="info-card w-50 d-flex flex-column p-0 m-0">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    textAlign: "start",
                    marginTop: "2%",
                    marginLeft: "20%",
                  }}
                >
                  Account Adress
                </p>
                <div className="info-containerr w-100 d-flex flex-column m-0">
                  <p className="p-text">Aladin</p>
                  <p className="p-text p-0">
                    5811 Danbury Ln, Sarasota, FL 34233 Novi Pazar, FL 36300
                  </p>
                  <p className="p-text">(064) 406-2670</p>
                </div>
              </div>
            </div>
            <div className="info-section w-100 p-0 m-0 d-flex flex-row">
              <div className="info-card w-50 d-flex flex-column p-0 m-0">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    textAlign: "start",
                    marginTop: "2%",
                    marginLeft: "20%",
                  }}
                >
                  Email Preferences
                </p>
              </div>
              <div className="info-card w-50 d-flex flex-column p-0 m-0">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    textAlign: "start",
                    marginTop: "2%",
                    marginLeft: "20%",
                  }}
                >
                  Credit Card Information
                </p>
              </div>
            </div>
            <Link to="/myaccount">
              <button className="edit-info">EDIT MY INFORMATION</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
