import React, { useEffect, useState } from "react";
import "./user.css";
import { RightOutlined } from "@ant-design/icons";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import { Input } from "antd";
import logo_ace from "../../resources/ace_logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import firebase from "firebase/compat/app";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Profile = () => {
  const [activeLink, setActiveLink] = useState("Profile");
  const [newEmail, setNewEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState(""); 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  //   Map location
  const latitude = 45.18047;
  const longitude = -67.28653;

  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));
  let history = useHistory();

  const updateEmail = async () => {
    try {
      await firebase.auth().currentUser.updateEmail(newEmail);
      toast.success("Email is succesffuly updated!");
    } catch (error) {
      toast.error("Error with updating email: " + error.message);
    }
  };

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
    if (email) {
      setCurrentEmail(email); // Postavite trenutnu e-mail adresu u stanje
      setNewEmail(email); // Postavite trenutnu e-mail adresu kao početnu vrijednost input polja
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
        <div className="container-profile d-flex flex-column p-2 mt-4 mb-4">
          <div className="w-100 d-flex flex-row p-3">
            <h2 className="m-4" style={{ color: "#D91F43" }}>
              My information
            </h2>
          </div>
          <div className="card-section d-flex flex-row p-0 m-0 w-100">
            <div className="card-one w-50">
              <p style={{ fontWeight: "400", fontSize: "18px" }}>
                Account Information
              </p>
              <br />

              <p>
                Following is the email and password information we have on file
                for your online account. If you would like to make any changes
                to this information, you may do so below.
              </p>
              <form className="form-account d-flex flex-column w-100 p-0 m-0">
                <label>First Name</label>
                <input type="text" required />
                <label>Last name</label>
                <input type="text" required />
                <label>Email</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  required
                />
                <div className="d-flex flex-row align-items-center w-100 p-0 m-0">
                  <input className="check-box" type="checkbox" />
                  <p className="pt-1 m-0">Sync rewards account information.</p>
                </div>
                <br />
                <p style={{ fontWeight: "400", fontSize: "18px" }}>
                  Email Preferences
                </p>
                <div className="d-flex flex-row align-items-center w-100 p-0 m-0">
                  <input className="check-box" type="checkbox" />
                  <p className="pt-1 m-0">
                    Yes, I would like to receive email offers & helpful tips.
                  </p>
                </div>
                <button
                  type="submit"
                  onClick={updateEmail}
                  className="button-save"
                >
                  SAVE
                </button>
              </form>
              <div className="change-password w-100 p-0 mt-5 d-flex flex-column">
                <p style={{ fontWeight: "400", fontSize: "18px" }}>
                  Change Password
                </p>
                <form className="form-account d-flex flex-column w-100 p-0 m-0">
                  <label>Old Password</label>
                  <Input.Password
                    className="input-password"
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                    type="password"
                  />
                  <label>New Password</label>
                  <Input.Password
                    className="input-password"
                    visibilityToggle={{
                      visible: passwordVisible2,
                      onVisibleChange: setPasswordVisible2,
                    }}
                    type="password"
                  />

                  <button className="button-save">SAVE</button>
                </form>
              </div>
              <p
                style={{ fontWeight: "400", fontSize: "18px", marginTop: "4%" }}
              >
                My Store
              </p>
              <p>
                Below is your local Ace store. As you shop, we will display
                store-specific information based on this location.
              </p>
              <div className="store-location d-flex w-100 p-0 m-0">
                <div className="card-store-location d-flex flex-row w-100 p-0 m-0">
                  <div className="section-one w-100 p-2 m-0">
                    <img
                      className="logo-ace"
                      src={logo_ace}
                      alt="Ace Hardware logo"
                    />
                    <div className="card-store-location w-100 pt-4 m-0">
                      <b>Calais Ace Home Center</b>
                      <p className="p-0 m-0">295 North St</p>
                      <p className="p-0 m-0">Calais, ME 04619</p>
                      <br />
                      <div className="w-100 d-flex flex-column p-o m-0">
                        <a href="tel:+207 454-2309">(207) 454-2309</a>
                        <u>
                          <a href="mailto:contactus@calaisace.com">
                            contactus@calaisace.com
                          </a>
                        </u>
                        <Link to="/Location">
                          <button className="change-store p-3 ml-3 text-white">
                            CHANGE STORE
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="section-two d-flex flex-column w-100 p-0 m-0">
                    <MapContainer
                      center={[latitude, longitude]}
                      zoom={13}
                      style={{ height: "400px", width: "100%" }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={[latitude, longitude]}></Marker>
                    </MapContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-two w-50">
              <p style={{ fontWeight: "400", fontSize: "18px" }}>
                Credit Card Information
              </p>
              <br />
              <p>You have no saved credit cards.</p>
              <br />
              <button className="button-pay">Add new card</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;