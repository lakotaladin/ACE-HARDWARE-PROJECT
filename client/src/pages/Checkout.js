import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserCart,
  emptyUserCart,
  saveUserAddress,
  applyCoupon,
} from "../functions/user";
import { toast } from "react-toastify";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Checkout = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAdress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [coupon, setCoupon] = useState("");
  // discount price
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getUserCart(user?.token).then((res) => {
      console.log("user cart res", JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user?.token).then((res) => {
      setProducts([]);
      setTotal(0);
      setTotalAfterDiscount(0);
      setCoupon("");
      toast.success("Cart is emapty. Contniue shopping.");
    });
  };

  const saveAddressToDb = () => {
    saveUserAddress(user?.token, address).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true);
        toast.success("Address is saved");
      }
    });
  };

  const applyDiscountCoupon = () => {
    console.log("send coupon to backend", coupon);
    applyCoupon(user?.token, coupon).then((res) => {
      console.log("RES ON COUPON APPLIED", res.data);
      if (res.data) {
        setTotalAfterDiscount(res.data);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: true,
        });
      }
      // error
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
      }
    });
  };

  const showApplyCoupon = () => (
    <>
      <input
        onChange={(e) => {
          setCoupon(e.target.value);
          setDiscountError("");
        }}
        value={coupon}
        type="text"
        className="form-control"
      />
      <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">
        Apply
      </button>
    </>
  );

  return (
    <>
      <Header />
      <div
        style={{ backgroundColor: "#EEEE", height: "100vh" }}
        className="checkoutdiv w-100 p-2 d-flex flex-column m-0 gap-3 justify-content-center"
      >
        <div
          style={{ width: "80%" }}
          className="col-md-6  m-auto mt-4 mb-4 p-3 rounded bg-white"
        >
          <h4>Delivery Address</h4>
          <br />
          <br />
          <ReactQuill theme="snow" value={address} onChange={setAdress} />
          <button className="btn btn-primary mt-2" onClick={saveAddressToDb}>
            Save
          </button>
          <hr />
          <h4>Got Coupon?</h4>
          <br />
          {showApplyCoupon()}
          <br />
          {discountError && <p className="text-danger p-2">{discountError}</p>}
        </div>

        <div
          style={{ width: "80%" }}
          className="col-md-6 m-auto mt-0 p-3 rounded bg-white"
        >
          <h4>Order Summary</h4>
          <hr />
          <p>
            Number of products in cart: <b>{products.length}</b>
          </p>
          <hr />
          {products.map((p, i) => (
            <div key={i}>
              <p>
                {p.product.title} ({p.color}) x {p.count} ={" "}
                {p.product.price * p.count}
              </p>
            </div>
          ))}
          <hr />
          <p style={{ fontSize: "18px" }}>
            <b>Cart Total: &#x24; {total}</b>
          </p>
          {/* Give discount on total if user use coupon */}
          {totalAfterDiscount > 0 && (
            <p
              style={{ fontSize: "18px" }}
              className="bg-success rounded text-white mt-2 mb-4 p-2"
            >
              Discount applied, your total price is:{" "}
              <b style={{ fontSize: "22px" }}>&#x24; {totalAfterDiscount}</b>
            </p>
          )}

          <div className="row">
            <div className="col-md-6">
              <button
                disabled={!addressSaved || !products.length}
                className="btn btn-primary"
                onClick={() => history.pushState("/payment")}
              >
                Place Order
              </button>
            </div>

            <div className="col-md-6">
              <button
                disabled={!products.length}
                onClick={emptyCart}
                className="btn btn-primary"
              >
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
