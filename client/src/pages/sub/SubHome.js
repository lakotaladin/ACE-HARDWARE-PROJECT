import React, { useState, useEffect } from "react";
import { getSub } from "../../functions/sub";
import { getCategory } from "../../functions/category";
import ProductCard from "../../components/cards/ProductCard";
import BestSellers from "../../components/bestsellers/BestSellers";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import ScrollOnTopButton from "../../components/ScrollOnTop/ScrollOnTopButton";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LoadingCard from "../../components/cards/LoadingCard";

const SubHome = ({ match }) => {
  const [sub, setSub] = useState({});
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getSub(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setSub(res.data.sub);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <div
        style={{ width: "80%", margin: "auto", paddingBottom: "3%" }}
        className="container-fluid"
      >
        <Breadcrumb
          className="breadcrumb mt-3"
          items={[
            {
              title: <Link to="/">Ace Hardware</Link>,
            },
            {
              title: <Link to="/shop">Category</Link>,
            },
            {
              title: <Link to="/shop">{slug}</Link>,
            },
          ]}
        />
        <div className="row">
          <div className="col">
            {loading ? (
              <LoadingCard count={3} />
            ) : (
              <h2 className="text-center p-3 mt-5 mb-5 jumbotron">
                {sub.name} ({products.length} items found)
              </h2>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: "wrap",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          className="row"
        >
          {products.map((p) => (
            <div className="productsubs col p-0 m-auto" key={p._id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
      <div className="p-0 mb-2 w-100 d-flex flex-column text-center">
        <h2 className="mb-2">Best Sellers</h2>
        <BestSellers />
      </div>
      <ScrollOnTopButton />
      <Footer />
    </>
  );
};

export default SubHome;
