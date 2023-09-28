import React, { useEffect, useState } from "react";
// import "./shop.css";
import { Breadcrumb } from "antd";
import Header from "../../components/nav/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../components/ScrollOnTop/ScrollOnTopButton";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  getProductsByCount,
  fetchProductsByFilter,
} from "../../functions/product";
import ProductCard from "../../components/cards/ProductCard";
import LoadingCard from "../../components/cards/LoadingCard";
import { useSelector } from "react-redux";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  // 1. load products by default on page load
  useEffect(() => {
    loadAllProducts();
  }, []);

  // 2. load products on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
      if (!text) {
        loadAllProducts();
      }
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);

  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
      setProducts(res.data);
    });
  };

  const loadAllProducts = () => {
    setLoading(true);
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="countainer-fluid d-flex flex-column global p-0 m-0 d-flex">
        <Header />
        <div className="header-bottom d-flex flex-column p-0 m-0">
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
            <Breadcrumb.Item>Shop</Breadcrumb.Item>
          </Breadcrumb>
          <div className="page-title d-flex flex-row justify-content-between p-0 m-0">
            <h2 className="mt-3">Items ({products.length} Found)</h2>
            <div className="recommended d-flex flex-row align-items-center p-0 m-0">
              <p style={{ fontSize: "14px" }} className="p-0 m-0">
                Sort by
              </p>
              <select
                style={{ marginLeft: "2%" }}
                data-mz-value="sortBy"
                className="category-dropdown-arrow p-2 w-75"
                autocomplete="off"
              >
                <option data-mz-url="?" value="" selected="selected">
                  {" "}
                  Recommended
                </option>
                <option
                  data-mz-url="?sortBy=tenant%7eweighted-rating+desc"
                  value="tenant~weighted-rating desc"
                >
                  Top Rated
                </option>
                <option data-mz-url="?sortBy=price+asc" value="price asc">
                  {" "}
                  Price: Low to High
                </option>
                <option data-mz-url="?sortBy=price+desc" value="price desc">
                  {" "}
                  Price: High to Low
                </option>
                <option
                  data-mz-url="?sortBy=productName+asc"
                  value="productName asc"
                >
                  {" "}
                  Alphabetical: A-Z
                </option>
                <option
                  data-mz-url="?sortBy=productName+desc"
                  value="productName desc"
                >
                  {" "}
                  Alphabetical: Z-A
                </option>
                <option
                  data-mz-url="?sortBy=createDate+desc"
                  value="createDate desc"
                >
                  {" "}
                  Date Added: Most Recent First
                </option>
                <option
                  data-mz-url="?sortBy=createDate+asc"
                  value="createDate asc"
                >
                  {" "}
                  Date Added: Most Recent Last
                </option>
              </select>
            </div>
          </div>
        </div>
        <div
          style={{ width: "80%" }}
          className="shopsection m-auto p-1 m-0 mb-5 row"
        >
          <div className="col-md-3 p-0 m-0">search/filter menu</div>

          <div className="col-md-9">
            {loading ? (
              <LoadingCard count={3} />
            ) : (
              <h4 className="text-danger">Products</h4>
            )}

            {products.length < 1 && <p>No products found</p>}

            <div className="row pb-5">
              {products.map((p) => (
                <div key={p._id} className="col-md-4 mt-3">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Shop;
