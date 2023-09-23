import React, { useEffect, useState } from "react";
import "./productpage.css";
import { getProduct } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ScrollToTopButton from "../components/ScrollOnTop/ScrollOnTopButton";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const { slug } = match.params;

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);
  const loadSingleProduct = () =>
    getProduct(slug).then((res) => setProduct(res.data));
  return (
    <>
      {/* {JSON.stringify(product)} */}
      <div className="container-fluid m-0 p-0">
        <Header />

        <div className="section-container p-0  d-flex flex-column">
          <Breadcrumb
            style={{
              height: "30px",
              margin: "0px",
              paddingTop: "1%",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Breadcrumb.Item>
              <LeftOutlined style={{ fontSize: "11px", margin: "0px" }} />
              <Link to="/" className="link">
                Ace Hardware
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
            <Breadcrumb.Item>Aladin</Breadcrumb.Item>
          </Breadcrumb>
          <div className="row pt-4">
            <SingleProduct product={product} />
          </div>
          <div className="row">
            <div>Related Products</div>
          </div>
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Product;
