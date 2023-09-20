import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterComplete from "./pages/auth/RegisterComplete";
import { auth } from "./firebase";
import { currentUser } from "./functions/auth";
import { useDispatch } from "react-redux";
import Storeinfo from "./pages/Storeinfo";
import Profile from "./pages/userPages/User";
import Account from "./pages/userPages/Account";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import History from "./pages/userPages/History";
import Wishlist from "./pages/userPages/Wishlist";
import CategoryCreate from "./pages/admin/category/CategoryCreate";

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user?.getIdTokenResult();
        console.log("user", user);

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <UserRoute exact path="/myaccount" component={Profile} />
        <UserRoute exact path="/account" component={Account} />
        <UserRoute exact path="/user/history" component={History} />
        <UserRoute exact path="/user/wishlist" component={Wishlist} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/category" component={CategoryCreate} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/store-details" component={Storeinfo} />
      </Switch>
    </>
  );
};

export default App;
