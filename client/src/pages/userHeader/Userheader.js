import { LeftOutlined } from "@ant-design/icons";
import React from "react";
import "../userHeader/userHeader.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Userheader = () => {
  return (
    <div className="container d-flex flex-column">
      <div className="navigation-container d-flex flex-row">
        <p className="p-0 m-0" style={{ color: "grey", fontSize: "12px" }}>
          <LeftOutlined className="arrow-left" />
          <Link style={{ textDecoration: "none" }} to="/">
            Ace Hardware
          </Link>{" "}
          / Store Details
        </p>
      </div>
    </div>
  );
};

export default Userheader;
