import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { currentUser } from "./functions/auth";
import { useDispatch } from "react-redux";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SideDrawer from "./components/drawer/SideDrawer";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterComplete from "./pages/auth/RegisterComplete";
import Storeinfo from "./pages/Storeinfo";
import Profile from "./pages/userPages/User";
import Account from "./pages/userPages/Account";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import History from "./pages/userPages/History";
import Wishlist from "./pages/userPages/Wishlist";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import SubCreate from "./pages/admin/sub/SubCreate";
import SubUpdate from "./pages/admin/sub/SubUpdate";
import ProductCreate from "./pages/admin/product/ProductCreate";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import AllProducts from "./pages/admin/product/AllProducts";
import LayoutPage from "./components/layout/LayoutPage";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import CreateCouponPage from "./pages/admin/coupon/CreateCouponPage";
import Payment from "./pages/Payment";
import GlobalSpinner from "./components/Spinners/GlobalSpinner";
import Shop from "./pages/shop/Shop";

const App = () => {
  const dispatch = useDispatch();
  const [loadingGlobal, setLoadingGlobal] = useState(false);

  // to check firebase auth state
  useEffect(() => {
    setLoadingGlobal(true);
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user?.getIdTokenResult();
        console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                lastName: res.data.lastName,
                adress: res.data.streetAddress,
                email: res.data.email,
                phone: res.data.phone,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
      setLoadingGlobal(false);
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <SideDrawer />
      <ToastContainer />
      {loadingGlobal ? (
        <GlobalSpinner />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/product/:slug" component={Product} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/categories" component={LayoutPage} />
          <Route exact path="/store-details" component={Storeinfo} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <UserRoute exact path="/myaccount" component={Profile} />
          <UserRoute exact path="/account" component={Account} />
          <UserRoute exact path="/checkout" component={Checkout} />
          <UserRoute exact path="/payment" component={Payment} />
          <UserRoute exact path="/user/history" component={History} />
          <UserRoute exact path="/user/wishlist" component={Wishlist} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <AdminRoute exact path="/admin/category" component={CategoryCreate} />
          <AdminRoute exact path="/admin/sub" component={SubCreate} />
          <AdminRoute
            exact
            path="/admin/category/:slug"
            component={CategoryUpdate}
          />
          <AdminRoute exact path="/admin/sub/:slug" component={SubUpdate} />
          <AdminRoute exact path="/admin/product" component={ProductCreate} />
          <AdminRoute exact path="/admin/coupon" component={CreateCouponPage} />
          <AdminRoute exact path="/admin/products" component={AllProducts} />
          <AdminRoute
            exact
            path="/admin/product/:slug"
            component={ProductUpdate}
          />
        </Switch>
      )}
    </>
  );
};

export default App;
