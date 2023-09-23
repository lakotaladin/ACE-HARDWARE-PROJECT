import React from "react";
import "./singleProductStyle.css";
import pplogo from "../../resources/pp-logo.png";
import service from "../../resources/serviceace.png";
import instock from "../../resources/instock.png";
import addtowish from "../../resources/addtowish.png";
import { Checkbox } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { RightOutlined } from "@ant-design/icons";

const SingleProduct = ({ product }) => {
  const { title, _id, price, description, images, slug } = product;
  return (
    <>
      <div className="container-fluid d-flex flex-column p-0 m-0">
        <div
          style={{ margin: "auto" }}
          className="row w-100 d-flex flex-row p-1"
        >
          <div className="col-md-7 image-container bg-success">
            image carusel
          </div>
          <div className="col-md-5 d-flex flex-column product-info">
            <div className="block d-flex flex-column align-text-start p-0 m-0">
              <b style={{ fontSize: "22px" }}>{title}</b>
              <p>Item # {_id} </p>
              <p>Rating....</p>
              <b style={{ fontSize: "30px" }}> &#x24;{price}</b>
            </div>
            <div className="block d-flex flex-row align-text-start align-items-center p-0 m-0">
              <img
                style={{ width: "20px", margin: "1%" }}
                src={pplogo}
                alt="PayPal Logo"
              />
              <p style={{ paddingTop: "3%" }}>
                <a style={{ color: "black" }} href="#" target="_blank">
                  Make 6 payments of &#x24;83.33/mo at 0% APR.{" "}
                  <u style={{ color: "blue" }}>Learn more</u>
                </a>
              </p>
            </div>
            <div className="block d-flex flex-column align-text-start p-0 m-0">
              <div className="d-flex flex-row">
                <b style={{ marginTop: "2%" }}>Add-on Service</b>
              </div>
              <div className="d-flex flex-row align-items-center align-text-center">
                <Checkbox
                  style={{
                    transform: "scale(1.4)",
                    borderRadius: "4px",
                    padding: "0px 3px",
                  }}
                />
                <img
                  style={{ width: "20px", margin: "1%" }}
                  src={service}
                  alt="Service Logo"
                />
                <p style={{ marginTop: "3%" }}>
                  Assembly avaible <b> &#x24;20.00</b>
                </p>
              </div>
            </div>
            <div className="block d-flex flex-column align-text-start p-0 m-0">
              <div className="d-flex flex-row mt-3 mb-3 justify-content-between">
                <select
                  style={{
                    width: "70px",
                    height: "48px",
                    textAlign: "left",
                    color: "#333",
                    padding: "10px",
                    marginRight: "7%",
                    maxWidth: "70px",
                    borderRadius: "4px",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    border: "1px solid #8b8b8b",
                  }}
                  className="qty-box dropdown"
                  name="qty"
                >
                  {" "}
                  <option value="1" selected="selected">
                    1
                  </option>{" "}
                  <option value="2">2</option> <option value="3">3</option>{" "}
                  <option value="4">4</option> <option value="5">5</option>{" "}
                  <option value="6">6</option> <option value="7">7</option>{" "}
                  <option value="8">8</option> <option value="9">9</option>{" "}
                  <option value="10">10</option> <option value="11">11</option>{" "}
                  <option value="12">12</option> <option value="13">13</option>{" "}
                  <option value="14">14</option> <option value="15">15</option>
                </select>
                {/* Add to card */}
                <button
                  style={{
                    height: "48px",
                    fontWeight: "500",
                    fontSize: "14px",
                    backgroundColor: "#d40029",
                    padding: "15px 20px",
                    lineHeight: "normal",
                    overflow: "hidden",
                    display: "inline-block",
                    color: "white",
                    letterSpacing: "1.25px",
                    boxShadow:
                      "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  id="add-to-cart"
                  className="show-loading-animation w-100 mz-button mz-animated-btn ace-add-to-cart-btn "
                  data-mz-action="addToCart"
                >
                  {" "}
                  ADD TO CART{" "}
                </button>
              </div>
              {/* Add to wish list */}
              <Link to="#" style={{ margin: "1% auto " }}>
                <img
                  style={{ width: "120px", margin: "3% auto " }}
                  src={addtowish}
                  alt="Add to Wish list"
                />
              </Link>
            </div>
            <div className="block d-flex flex-column align-text-start pt-3 pb-3 m-0">
              <div className="d-flex flex-row p-0 m-0 justify-content-between">
                <b>Get item from: </b>
                <Link to="/location" style={{ color: "black" }}>
                  <u>Change store</u>
                  <RightOutlined style={{ transform: "scale(0.9)" }} />
                </Link>
              </div>

              <div className="d-flex flex-row p-0 m-0">
                <b>Calais Ace Home Center, Calais ME</b>
              </div>
              <div className="d-flex flex-row p-0 m-0">
                <img
                  style={{ width: "100%", margin: "1%" }}
                  src={instock}
                  alt="In stock"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
