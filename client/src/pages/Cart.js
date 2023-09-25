import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userCart } from "../functions/user";
import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  // const history = useHistory();

  // Get Total price
  const getTotal = () => {
    return cart?.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user?.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          <th scope="col">Color</th>
          <th scope="col">Count</th>
          <th scope="col">Shipping</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <>
      <Header />
      <div
        style={{ width: "80%", margin: "auto", justifyItems: "center" }}
        className="cartglobal p-0"
      >
        <div className="cardheader pt-3 pb-3 d-flex flex-row justify-content-between align-items-center ">
          <div className="p-2 d-flex flex-row gap-3 align-items-center">
            <h4 className="p-0 m-0">Cart</h4>
          </div>
          <div
            style={{ width: "50%" }}
            className="checkoutbuttondiv d-flex flex-row gap-3 align-items-center justify-content-end p-4 m-0"
          >
            <Link
              to="#"
              style={{ color: "black" }}
              className="p-0 m-0"
              onClick={() => history.goBack()}
            >
              <u style={{ fontWeight: "500" }}>Continue Shopping</u>
            </Link>
          </div>
        </div>
        {/* {JSON.stringify(cart)} */}
        <div style={{ height: "100vh" }} className="cardsection w-100 m-0 p-1">
          <div className="row">
            <div className="col-md-8">
              {!cart.length ? (
                <p>
                  No products in cart.{" "}
                  <Link style={{ color: "black" }} to="/categories">
                    Continue Shopping.
                  </Link>
                </p>
              ) : (
                showCartItems()
              )}
            </div>
            <div
              style={{ position: "relative", overflowX: "hidden" }}
              className="col-md-4"
            >
              <div
                style={{ borderBottom: "10px solid #EEEEEE" }}
                className="promocode w-100 p-0 mb-4 d-flex flex-column"
              >
                <h4 style={{ fontWeight: "400" }}>Offers & Promo Codes</h4>
                <u style={{ color: "#D7002A" }}>
                  Apply an Ace Rewards Offer or Promo Code
                </u>
                <p>Limit 1 offer or promo code per order.</p>
              </div>
              <h4>Order Summary</h4>
              <hr />
              <p>Products</p>
              {cart.map((c, i) => (
                <div key={i}>
                  <p style={{ fontSize: "16px" }}>
                    {c.title} x {c.count} = ${c.price * c.count}
                  </p>
                </div>
              ))}
              <hr />
              <div
                style={{ fontSize: "22px" }}
                className="ordertotal w-100 p-0 m-0 d-flex flex-row justify-content-between"
              >
                <b>Order Total:</b> <b>&#x24;{getTotal().toFixed(2)}</b>
              </div>
              <hr />
              {user ? (
                <Link className="p-0 m-0 text-white" to="/checkout">
                  <button
                    style={{ backgroundColor: "#D7002A", width: "100%" }}
                    className="rounded p-3 border-0 text-white"
                    disabled={!cart.length}
                    onClick={saveOrderToDb}
                  >
                    Checkout
                  </button>
                </Link>
              ) : (
                <Link
                  style={{ color: "white" }}
                  className="p-0 m-0"
                  to={{
                    pathname: "/login",
                    state: {
                      from: "cart",
                    },
                  }}
                >
                  <button
                    style={{ backgroundColor: "#D7002A", width: "100%" }}
                    className="rounded p-3 border-0 text-white"
                  >
                    Login to Checkout
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
