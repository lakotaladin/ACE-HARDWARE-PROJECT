import React, { useEffect, useState } from "react";
import "./productpage.css";
import { getProduct, productStar } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ScrollToTopButton from "../components/ScrollOnTop/ScrollOnTopButton";
import { useSelector } from "react-redux";
import { getRelated } from "../functions/product";
import ProductCard from "../components/cards/ProductCard";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [star, setStar] = useState(0);
  const { user } = useSelector((state) => ({ ...state }));
  const { slug } = match.params;

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  useEffect(() => {
    if (product.ratings && user) {
      let existingRatingObject = product.ratings.find(
        (ele) => ele.postedBy.toString() === user._id.toString()
      );
      existingRatingObject && setStar(existingRatingObject.star); // current user star
    }
  });
  const loadSingleProduct = () => {
    getProduct(slug).then((res) => {
      setProduct(res.data);
      // load related
      getRelated(res.data._id).then((res) => setRelated(res.data));
    });
  };

  const onStarClick = (newRating, name) => {
    setStar(newRating);
    productStar(name, newRating, user?.token).then((res) => {
      console.log("Rating clicked", res.data);
      loadSingleProduct(); // Show updated rating in real time
    });
  };
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
            <SingleProduct
              product={product}
              onStarClick={onStarClick}
              star={star}
            />
          </div>
          <div className="row">
            <h4>Related Products</h4>
          </div>
        </div>
        <div className="row w-100 pb-5 col-md-4">
          {related.length ? (
            related.map((r) => (
              <div key={r._id}>
                <ProductCard product={r} />
              </div>
            ))
          ) : (
            <div className="text-center col">No Products Found</div>
          )}
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Product;
