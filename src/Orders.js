import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";

import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
function Orders() {
  // now we are using usestate as its storing all the orders
  // use state is initially empty
  const [orders, SetOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue(); // we are actually getting the user or pulling the user to make it use in the code below

  // so now when the app loads
  useEffect(() => {
    if (user) {
      // if user wxists then we only want to do this

      // so when the page renders so we need to run it once so we used [] if not give this so it will not work
      db.collection("users") // this is accessing the user collection of the database
        .doc(user?.uid) // then go inside the collection and then inside the document of user.uid and gettinf that specific user logged at that time
        .collection("orders") // go inside the collection orders and accesss that users orders
        .orderBy("created", "desc") // actually we are pushing in a created field so order everything by created and give it  back in descending order
        // this orderby is setting the orders in descending order based on field created or based on date created in descending order
        .onSnapshot(
          // its just like going through that list
          (snapshot) =>
            SetOrders(
              snapshot.docs.map((doc) => ({
                // it is returning this object for each doc that is mapped
                id: doc.id, // this will set the orders id as per collection
                data: doc.data(), // this will put all the data of that order in this
              }))
            ) // as this function is returning all the data in form of docs so we setted these docs in setorders and map for each doc
        ); // it actually snapshot the data in real time
      // this means that when we add or remove data from a database it will actually provide a realtime update or response

      // we will show this snapshot at last
      // snap shot is row time
    } else {
      SetOrders([]); // otherwise we are setting order as an empty array
    }
  }, [user]); // as we are using user variable so need to mention it
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders.map((order) => (
          <Order order={order} />
          // now we will create this order element
        ))}
      </div>
    </div>
  );
}

export default Orders;
