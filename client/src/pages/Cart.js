import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";

const Cart = () => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="cartglobal w-100 p-0 m-0">
        <div className="cardheader w-100 p-0 m-0 d-flex flex-row justify-content-between align-items-center ">
          <div>
            <h4 className="p-0 m-0">Cart</h4>
          </div>
          <div className="d-flex flex-row gap-3 align-items-center p-0 m-0">
            <u>Continue Shopping</u>
            <button className="bg-primary rounded p-3 m-2">Checkout</button>
          </div>
          {JSON.stringify(cart)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
