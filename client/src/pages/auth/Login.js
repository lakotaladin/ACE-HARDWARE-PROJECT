import React from "react";
import "./login.css";
import aceLogo from "../../resources/ace_logo.png";
import arrow from "../../resources/arrow.png";
import { Link } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <>
      <div className="global-login w-100 p-0 m-0">
        <div className="navigation-login justify-content-center w-100 p-4 m-0 d-flex flex-row">
          <div className="nav-container d-flex p-0">
            <div className="back-div gap-1 d-flex p-0 m-0 flex-row align-items-center">
              <Link to="/" className="link-arrow p-0 m-0">
                <img src={arrow} alt="Arrow" className="arrow-back" />
              </Link>
              <Link to="/" className="link-arrow p-0">
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "10px",
                  }}
                  className="p-1 m-0"
                >
                  Back
                </p>
              </Link>
            </div>
            <div className="ace-logo">
              <Link to="/">
                <img style={{ width: "95px" }} src={aceLogo} alt="Ace logo" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section login */}
        <div className="section-global w-100 m-0 p-0 d-flex">
          <div className="form-container p-0 d-flex flex-column">
            <form className="form w-100 m-0 d-flex flex-column">
              <h6
                style={{
                  color: "#D40029",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Sign In
              </h6>
              <p
                style={{ fontSize: "14px", marginBottom: "15px" }}
                className="p-0"
              >
                Sign in to access your account and Ace Rewards.
              </p>
              <input
                className="input-form"
                placeholder="Email"
                type="email"
              ></input>
              <input
                className="input-form"
                placeholder="Password"
                type="password"
              ></input>
              <Link
                to="/forgotten-password"
                className="fogotten-password-link p-0 m-0"
              >
                Forgot Password
              </Link>

              <div className="button-form m-0 p-0 w-100 d-flex justify-content-center align-items-center">
                <button type="submit" className="button w-100 mt-4">
                  Sign In
                </button>
              </div>
            </form>
            {/* Create account */}
            <div className="account-container w-100 d-flex flex-column m-0">
              <h6
                style={{
                  marginTop: "15%",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                New to Ace online?
              </h6>
              <p
                style={{ fontSize: "14px", marginBottom: "15px" }}
                className="p-0"
              >
                Create an account and join Ace Rewards for:
              </p>
              <div className="check-text d-flex flex-row gap-2 p-0 w-100">
                <CheckOutlined />{" "}
                <p style={{ fontSize: "12px" }} className="p-0 ">
                  Free delivery from store with qualifying online purchases of
                  $50 or more.
                </p>
              </div>
              <div className="check-text d-flex gap-2  p-0 w-100">
                <CheckOutlined />
                <p style={{ fontSize: "12px" }} className="p-0 m-0">
                  Exclusive offers and instant savings.
                </p>
              </div>
              <div className="check-text d-flex gap-2 p-0 w-100">
                <CheckOutlined />
                <p style={{ fontSize: "12px" }} className="p-0 ">
                  $5 reward earned every 2,500 points.
                </p>
              </div>
              <p
                style={{ fontSize: "12px", marginBottom: "15px" }}
                className="p-0"
              >
                If you’ve already signed up for Ace Rewards, we’ll link your
                <br />
                accounts when you create your online account.
              </p>
              <div className="m-0 p-0 w-100 d-flex flex-column justify-content-center align-items-center">
                <Link to="/register" className="w-100 p-0 m-0">
                  <button type="submit" className="button-account w-100">
                    Create Account
                  </button>
                </Link>
                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "15px",
                    marginTop: "10px",
                  }}
                  className="p-0"
                >
                  Note: joining Ace Rewards or linking accounts is optional (but
                  why not, it’s free!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer w-100 p-2 m-0 d-flex flex-column">
        <div className="contact-div w-100 d-flex gap-5 flex-row p-0 text-align-center align-items-end">
          <h4
            style={{
              alignItems: "end",
            }}
          >
            Need Help? Call or Email US!
          </h4>
          <a
            href="phone: 1-888-827-4223"
            style={{
              color: "white",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            1-888-827-4223
          </a>
          <a
            href="mailto: acehardware@gmail.com"
            style={{
              color: "white",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            Email Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
