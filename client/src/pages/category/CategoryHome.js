import React, { useState, useEffect } from "react";
import { getCategory } from "../../functions/category";
import ProductCard from "../../components/cards/ProductCard";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import ScrollOnTopButton from "../../components/ScrollOnTop/ScrollOnTopButton";
import LoadingCard from "../../components/cards/LoadingCard";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import BestSellers from "../../components/bestsellers/BestSellers";

const CategoryHome = ({ match }) => {
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getCategory(slug).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setCategory(res.data.category);
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
              title: (
                <Link to={`/category/${category.slug}`}>{category.name}</Link>
              ),
            },
          ]}
        />
        <div className="row">
          <div className="w-100 p-0 m-0">
            {loading ? (
              <LoadingCard count={3} />
            ) : (
              <h2
                style={{ fontWeight: "400" }}
                className="p-3 mt-5 mb-5 jumbotron"
              >
                {category.name} ({products.length} items found)
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
            <div className="productrow col p-0 m-auto" key={p._id}>
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

export default CategoryHome;
