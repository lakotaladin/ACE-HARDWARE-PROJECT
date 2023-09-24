import React, { useEffect, useState } from "react";
import "./account.css";
import { RightOutlined } from "@ant-design/icons";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import firebase from "firebase/compat/app";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const History = () => {
  const [activeLink, setActiveLink] = useState("History");

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

  return (
    <>
      <Header />
      {/* User header */}
      <div className="accountInfo  bg-white d-flex flex-column">
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
              to="/user/wishlist"
              onClick={() => handleNavLinkClick("Wishlist")}
              className={`nav ${activeLink === "Wishlist" ? "active" : ""}`}
            >
              Wishlist
            </Link>
            <Link
              to="/user/history"
              onClick={() => handleNavLinkClick("History")}
              className={`nav ${activeLink === "History" ? "active" : ""}`}
            >
              History
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
        <div className="col">
          <p style={{ fontWeight: "400", fontSize: "18px", color: "#D91F43" }}>
            User History Page
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;
