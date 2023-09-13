import React from "react";
import "./user.css";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import Userheader from "../userHeader/Userheader";

const User = () => {
  return (
    <>
      <Header />
      <Userheader />
      <div className="global w-100 d-flex flex-column m-0 p-0">
        <h1>User</h1>
      </div>
      <Footer />
    </>
  );
};

export default User;
