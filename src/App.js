import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51LmWt9SCFhSPZ8bDOPaw0gXCMZKyYjNY8PICGEynbKqb2h7KkRhv7RE44mD4efHNj8Ge5zltpzDNiGSmeayFS4Ez004vsL6Skm"
);
// make mobile friendly
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // only run once when app component loads...if in condition there is something it will run if condition changes
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={[<Login />]} />
          {/* <Route path="/" element={<><Header/><Home/></>} />or */}
          <Route path="/" element={[<Header />, <Home />]} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Header />
            <Home />
          </Route> */}
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment/orders" element={[<Header />, <Orders />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
