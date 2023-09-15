import React from "react";
import "./home.css";
import Header from "../components/nav/Header";
import ScrollToTopButton from "../components/ScrollOnTop/ScrollOnTopButton";
import Footer from "../components/footer/Footer";
import kids from "../homeassets/kids.jpg";
import cardhuman from "../homeassets/cardhuman.jpg";
import saveyeti from "../homeassets/saveyeti.png";
import traeger from "../homeassets/traeger.png";
import solostove from "../homeassets/solostove.png";
import grill from "../homeassets/grill.jpg";
import peoplecard from "../homeassets/peoplescard.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homeglobal p-0 m-0 w-100 d-flex flex-column">
        <div className="homecontainer p-0 d-flex flex-column">
          <div className="rowcontainer d-flex flex-row gap-1 p-0 m-0">
            <div className="col-md-3 border-0">
              <Link to="/stranica1" className="text-decoration-none">
                <div className="card mb-4 h-100">
                  <img
                    src={kids}
                    alt="Image 1"
                    className="card-img-top border-0"
                  />
                  <div className="card-body pb-0 h-100 border-0">
                    <h3
                      style={{ color: "#D40029", fontWeight: "bold" }}
                      className="card-text"
                    >
                      A New Season of Savings
                    </h3>
                    <p style={{ color: "black" }}>
                      Explore Fall deals for you home and garden
                    </p>
                  </div>
                  <div className="card-footer m-0">
                    <Link to="#">
                      <u style={{ color: "#D40029" }}>Shop Fall now</u>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 border-0">
              <Link to="/stranica2" className="text-decoration-none">
                <div className="card mb-4  h-100 border-0">
                  <img
                    src={cardhuman}
                    alt="Slika 2"
                    className="card-img-top imgcard border-0"
                  />

                  <div className="card-body pb-0 bodycard border-0">
                    <img
                      src={saveyeti}
                      alt="Slika 2.1"
                      style={{
                        width: "100px",
                        margin: "0px 0px 5px 0px",
                        padding: "0px",
                      }}
                    />
                    <p className="card-text">
                      On select YETI Roadie 48 Roller Coolers
                    </p>
                  </div>
                  <div className="card-footer m-0">
                    <Link to="#">
                      <u style={{ color: "#D40029" }}>Shop YETI</u>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 border-0">
              <Link to="/stranica3" className="text-decoration-none">
                <div className="card h-100 mb-4">
                  <img
                    src={grill}
                    alt="Slika 3"
                    className="card-img-top border-0"
                  />
                  <div className="card-body pb-0 border-0">
                    <img
                      src={traeger}
                      alt="Slika 3.1"
                      style={{
                        width: "auto",
                        margin: "0px 0px 5px 0px",
                        padding: "0px",
                      }}
                    />
                    <h6 style={{ color: "#D40029" }} className="card-text"></h6>
                    <p className="card-text">
                      Save up to $700 on select Traeger Timberline Pellet
                      Grills.
                    </p>
                  </div>
                  <div className="card-footer m-0">
                    <Link to="#">
                      <u style={{ color: "#D40029" }}>Shop now</u>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 border-0">
              <Link to="/stranica4" className="text-decoration-none">
                <div className="card h-100 mb-4">
                  <img
                    src={peoplecard}
                    alt="Slika 4"
                    className="card-img-top border-0"
                  />
                  <div className="card-body pb-0 border-0">
                    <img
                      src={solostove}
                      alt="Slika 3.1"
                      style={{
                        width: "auto",
                        margin: "0px 0px 5px 0px",
                        padding: "0px",
                      }}
                    />
                    <h5 style={{ marginTop: "7%" }} className="card-text">
                      Bonfire 2.0 + Stand&nbsp;&amp;&nbsp;Shelter
                    </h5>
                    <p className="card-text">
                      <p>Bonfire 2.0 + Stand&nbsp;&amp;&nbsp;Shelter</p>
                    </p>
                  </div>
                  <div className="card-footer m-0">
                    <Link to="#">
                      <u style={{ color: "#D40029" }}>Shop Outdoor Heating</u>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Home;
