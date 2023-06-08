import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
function App() {
  const promise = loadStripe(
    "pk_test_51LDPQjSDObcqEOkmvXbZDSlYgOLOy056CM6AD4Dol5X92Glcb7Yc8HvNE0PNjKTpF2RXNEQdbDub0NbrzLp4OKth00duD7GGEM"
  );
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // this event listener will refire this code if we login in and  out in website
    // so whenever the authentication changes it will give us the authUser
    // it is an observer for user signin and changes in user signin

    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);
      // so to do it in a poweful way we need to store the user inside the react context api so we have added a user inside the reducer.js file
      //   initially the user is null
      // so user will be null by default

      if (authUser) {
        // so if there is a user login
        dispatch({
          type: "SET_USER", // SO IT WILL GIVE THE CONTENT TO THE DATA LAYER and we know that it is connected to the firebase
          user: authUser, // so it will set the user to that auth the firebase is returned
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null, // set the user to null
        });
      }
    });
  }, []);
  // empty [] it dont take anything so no dependency but it will only going to run once when the app component loads then it wont run again
  // but if [user,basket] so everytime the user or basket changes it will run or refire this code again

  return (
    // BEM

    <Router>
      <div className="app">
        {/* <Header/> */}
        {/* instead of multiple components i pasted it here as we want it in each page */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={[<Header/>,<Orders />]} />
          <Route path="/" element={[<Header />, <Home />]} />
          {/* <Route path="/" element={[ <Header/>, <Home/>]}/> */}
          {/* i used the above way to render the multiple components  */}
          {/* it is a default page if it dont math anyting so remain at this page */}
          {/* <Header/> */}
          {/* <Home/> */}
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="/Payment"
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
