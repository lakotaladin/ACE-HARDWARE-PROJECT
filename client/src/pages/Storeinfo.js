import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import "./storeinfo.css";
import React from "react";
import check from "../resources/ace_check.png";
import { LeftOutlined } from "@ant-design/icons";

const Storeinfo = () => {
  return (
    <>
      <Header />
      <div className="global-store d-flex flex-column w-100 p-0 m-0">
        <div className="global w-100 p-0 d-flex flex-column">
          <div className="container d-flex flex-column">
            <div className="navigation-container d-flex flex-row">
              <p
                className="p-0 m-0"
                style={{ color: "grey", fontSize: "12px" }}
              >
                <LeftOutlined className="arrow-left" />
                <Link style={{ textDecoration: "none" }} to="/">
                  Ace Hardware
                </Link>{" "}
                / Store Details
              </p>
            </div>
            <div className="name-store d-flex flex-row justify-content-between w-100 p-3 m-0">
              <div className="store-text d-flex flex-column p-4 m-0">
                <h4>Calais Ace Home Center</h4>
                <h6>Calais, ME 04619</h6>
                <p style={{ fontSize: "14px" }}>
                  <span style={{ fontWeight: "500" }} className="text-success">
                    Open
                  </span>{" "}
                  until 6:00 PM
                </p>
              </div>
              <div className="store-right text-center align-items-center d-flex flex-column p-4 m-0">
                <div className="check w-100 d-flex flex-row p-0 m-0">
                  <img className="check" src={check} alt="check" />
                  <h6>This is your store</h6>
                </div>
                <Link to="/location">
                  <button className="change-store p-2 bg-white">
                    Change Store
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Storeinfo;
