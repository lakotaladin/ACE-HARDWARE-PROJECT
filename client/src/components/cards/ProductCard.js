import React, { useState } from "react";
import { Card, Col } from "antd"; // Dodali smo Col komponentu za Bootstrap grid
import defaultImage from "../../resources/default.jpg";
import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { showAverage } from "../../functions/rating";
import { addToWishlist } from "../../functions/user";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  // destructure
  const { title, price, images, slug } = product;
  const [hovered, setHovered] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));
  // router
  let history = useHistory();

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Added to wishlist");
      history.push("/user/wishlist");
    });
  };

  return (
    <Col className="p-0" xs={24} sm={12} md={8} lg={8} xl={8}>
      {" "}
      <Card
        style={{
          width: "350px",
          margin: "0%",
          border: "none",
          borderBottom: "1px solid #ccc",
          paddingBottom: "5px", // Smanjili smo padding za bolje povezivanje linija
          borderRadius: "0",
          height: "455px", // Postavili smo fiksnu visinu za kartice
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center"></div>
          <div style={{ position: "relative" }}>
            <a onClick={handleAddToWishlist}>
              <HeartOutlined
                style={{
                  position: "absolute",
                  fontSize: "22px",
                  color: "#ACACAC",
                  borderRadius: "50%",
                  padding: "5px 0px",
                }}
              />
            </a>
          </div>
        </div>
        <div className="w-100 p-0 m-0 ">
          <Link to={`/product/${slug}`}>
            <img
              alt="Product"
              src={
                hovered
                  ? images && images.length
                    ? images[1].url
                    : ""
                  : images && images.length
                  ? images[0].url
                  : defaultImage
              }
              style={{
                width: "100%",
                height: "300px", // Prilagodili smo visinu slike
                objectFit: "scale-down",
                transition: "transform 0.1s ease-in-out",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </Link>
        </div>
        <div className="title w-100 p-0 m-0">
          <p style={{ fontSize: "16px" }} className="w-100 p-0 m-0 ">
            {title}
          </p>
        </div>
        <div
          style={{ textAlign: "start" }}
          className="description-card w-100 p-0 m-0 d-flex flex-column"
        >
          {product && product.ratings && product.ratings.length > 0 ? (
            showAverage(product)
          ) : (
            <div className="d-flex w-100 p-0 m-0">
              <i>No rating yet</i>{" "}
            </div>
          )}
          <b style={{ fontSize: "18px" }} className="w-100 p-0 m-0 ">
            &#x24; {price}
          </b>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
