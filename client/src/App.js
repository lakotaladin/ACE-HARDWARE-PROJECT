import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterComplete from "./pages/auth/RegisterComplete";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import Storeinfo from "./pages/Storeinfo";
import Profile from "./pages/userPages/User";
import Account from "./pages/userPages/Account";

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log("user", user);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });

    //cleanup

    return () => unsubscribe();
  }, []);
  return (
    <>
      {/* <Header /> */}
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/store-details" component={Storeinfo} />
        <Route exact path="/myaccount" component={Profile} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </>
  );
};

export default App;
