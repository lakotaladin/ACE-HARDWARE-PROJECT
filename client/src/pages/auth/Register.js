import React, { useEffect, useState } from "react";
import "./register.css";
import aceLogo from "../../resources/ace_logo.png";
import arrow from "../../resources/arrow.png";
import phone from "../../resources/phone.png";
import mail from "../../resources/mail.png";
import acerewards from "../../resources/register-rewards.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "firebase/compat/firestore";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user?.token) history.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ENV ------>", process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}, Click the link to complete registration.`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state

    setEmail("");
  };

  const handleCheckbox1Change = () => {
    setCheckbox1(!checkbox1);
  };

  const handleCheckbox2Change = () => {
    setCheckbox2(!checkbox2);
  };

  const isButtonDisabled = !(checkbox1 && checkbox2);

  const registerForm = () => (
    <form
      onSubmit={handleSubmit}
      className="form-register w-100 m-0 d-flex flex-column"
    >
      <div className="email-pass-div d-flex flex-column m-0 w-100">
        <h6
          style={{
            color: "#D40029",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          Create an account
        </h6>
        <p
          style={{
            fontSize: "14px",
            width: "400px",
            marginBottom: "15px",
          }}
          className="p-0"
        >
          Create a new online account and join Ace Rewards or link accounts
          (joining or linking is optional).
        </p>

        <label>Account sign in details</label>
        <input
          className="input-form"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        ></input>
      </div>
      <div className="email-pass-div2 d-flex flex-column m-0 w-100">
        <label>About you</label>
        <input
          className="input-form"
          placeholder="Name"
          type="text"
          autoFocus
        ></input>
        <input
          className="input-form"
          placeholder="Last Name"
          type="text"
          autoFocus
        ></input>
        <input
          className="input-form"
          placeholder="Street Adress"
          type="text"
          autoFocus
        ></input>
        <input
          className="input-form mb-0"
          placeholder="Phone Number"
          type="phone"
          autoFocus
        ></input>
        <p style={{ fontSize: "12px", margin: "0% 0% 0% 3%" }} className="p-0">
          Used to look up your account or order information.
        </p>
        <input
          className="input-form mt-3"
          placeholder="Phone Number"
          type="date"
          autoFocus
        ></input>
      </div>
      <div className="email-div3 d-flex flex-column m-0 w-100">
        <h6
          style={{
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Sign Up for offers & tips
        </h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={checkbox1}
            onChange={handleCheckbox1Change}
            id="checkbox1"
          />
          <label className="form-check-label" htmlFor="exampleCheckbox">
            Email me offers and helpful tips
          </label>
        </div>
      </div>
      <img style={{ margin: "5%" }} src={acerewards} alt="Ace Rewards" />
      {/* Create account */}
      <div className="account-container w-100 d-flex flex-column m-0">
        <div className="button-div m-0 w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="form-check">
            <input
              checked={checkbox2}
              className="form-check-input"
              type="checkbox"
              id="checkbox2"
              onChange={handleCheckbox2Change}
            />
            <label
              className="form-check-label-privacy"
              htmlFor="exampleCheckbox"
            >
              I confirm I have read and agree to the{" "}
              <a href="https://www.acehardware.com/customer-service?page=ace-rewards">
                Ace Rewards® Program Terms
              </a>
              ,
              <a href="https://www.acehardware.com/customer-service?page=privacy-policy">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://www.acehardware.com/customer-service?page=ace-rewards">
                Terms of Use.
              </a>
            </label>
          </div>
          <button
            type="submit"
            disabled={isButtonDisabled}
            className="button-account w-100"
          >
            Create Account
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <>
      <div className="global-login w-100 p-0 m-0">
        <div className="navigation-login justify-content-center w-100 p-4 m-0 d-flex flex-row">
          <div className="nav-container d-flex p-0">
            <div className="back-div gap-1 d-flex p-0 m-0 flex-row align-items-center">
              <Link to="/" className="link-arrow p-0 m-0">
                <img src={arrow} alt="Arrow" className="arrow-back" />
              </Link>
              <Link to="/login" className="link-arrow p-0">
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

        {/* Section register */}
        <div className="section-globall w-100 m-0 p-0 d-flex">
          <div className="form-container p-0 d-flex flex-column">
            {registerForm()}
          </div>
        </div>
      </div>
      <div className="footer w-100 p-4 d-flex flex-column">
        <div className="contact-div w-100 d-flex flex-row gap-5 p-2 text-align-center">
          <div className="help-div d-flex p-0 m-0 align-items-end">
            <h6
              style={{
                fontSize: "18px",
                margin: "0px",
                padding: "0px",
              }}
            >
              Need Help? Call or Email US!
            </h6>
          </div>

          <div className="d-flex p-0 m-0 align-items-end">
            <img style={{ marginRight: "5px" }} src={phone} alt="Phone logo" />
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
          </div>

          <div className="d-flex p-0 m-0 align-items-end">
            <img
              style={{
                width: "35px",
                height: "35px",
                marginBottom: "7px",
                marginRight: "8px",
              }}
              src={mail}
              alt="Mail logo"
            />
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
        <div className="d-flex flex-row gap-3 w-100 m-0 p-1 justify-content-center">
          <a style={{ color: "white", fontSize: "14px" }} href="#">
            Terms of Use
          </a>
          <a style={{ color: "white", fontSize: "14px" }} href="#">
            Privacy policy
          </a>
        </div>
        <div className="privacy d-flex flex-column w-100 m-0 p-1 justify-content-center">
          <p style={{ fontSize: "14px" }} className="p-0 m-2">
            © 2023 Ace Hardware. Ace Hardware and the Ace Hardware logo are
            registered trademarks of Ace Hardware Corporation. All rights
            reserved.
          </p>
          <p style={{ fontSize: "14px" }} className="p-0 m-0">
            For screen reader problems with this website, please call{" "}
            <a
              style={{ color: "white", textDecoration: "underline" }}
              href="tel:1-888-827-4223"
            >
              1-888-827-4223
            </a>{" "}
            or{"  "}
            <a
              style={{ color: "white", textDecoration: "underline" }}
              href="mailto: acehardware@gmail.com"
            >
              Email Us
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
