import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // generate the special stripe secret that will allow us to charge the customer
    // everytime the basket changes we will get a new secret

    // thats how we use a async function inside the useEfect

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects the total in a currency subunits example for 1 rupee have 100 paisa so give amount in paisa to pay in rupees so we multiplied by 100
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        // ? used to query from
      });
      // axios is a away of making requests and inside this we have made a object for passing in this api
      setClientSecret(response.data.clientSecret); // it will make more sense when we build the backend
    };
    getClientSecret(); // to pull the client secret afterwards
  }, [basket]);

  console.log("the secret is ", clientSecret); // for testing only  and we can see that it writes that the secret is true  so it means their is nothing iside the secret

  const handleSubmit = async (event) => {
    // this will be asynchronous function
    // do all the fancy stripe stuff
    event.preventDefault();
    setProcessing(true); // as soon we hit enter it will stop us from hitting the enter button again

    // stripe magic
    // beforing doing this   BEFORING SENDING THIS MAKE IT AS A CLIENT SECRET AND TELL THE STRIPE THAT THIS MUCH AMOUNT OF MONEY WE ARE SENDING TO U
    // so it will give u client secret to run by the card for this state we will use useEffects

    // first we are passing the client secret and then the object
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        // by client secret the stripe knows how much u charged a customer
        payment_method: {
          card: elements.getElement(CardElement), // card element is the thing present in the fform to take the card details
          // and elements are that are taken from useElements
        },
        // then will take the reposne that is returned by the above promise and we need to destructure it so used {} and get the things singledly
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmaTION

        // now we will push the data inside the firebase when ever the payment is completed
        // if we do console.log("person:"user)    so we can see in console thats its giving uid and not id so we are using this user id called uid

        db.collection("users")
          .doc(user?.uid) // it is using a low sql database  doc shows the documents that are accessing here we have taken user id called uid
          .collection("orders") // we are doin the collection of orders
          .doc(paymentIntent.id) // we are using payment intent id and create this document
          .set({
            basket: basket, // we are passing the basket items before its empty
            amount: paymentIntent.amount, // it is amount collected by this payment intent
            created: paymentIntent.created, //it will give us a time stamp that when its created
          });

        // whenn order comes back in we want to reach to the database collection
        // and add this information

        // if everything is correct then set succedded is true and others according to this
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        // history.replace("/orders"); // as when payment completes we dont want to come the customers on payment page and we are throwing them the order page
        //  this replace method is old so i m using navigate as told earlier by me
        // we dont want to make them come back to the payment page so used replace instead of push and replace means swapping the page

        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders", { replace: true }); // we will also make a orders page for this
      });
  };
  const handleChange = (event) => {
    // listent to the card details changes of the customer and display error as customers add their card details
    setDisabled(event.empty); // if event is empty dso disable the button
    setError(event.error ? event.error.message : ""); //if error so show the error otherwise show nothing
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(<Link to="/Checkout">{basket?.length} items</Link>)
          {/* it will not only give us the number of the items in the basket but also take us to the checkout page if we click on the number of the items */}
        </h1>
        {/* payment section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address </h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Amazon Usa</p>
            <p>California</p>
          </div>
        </div>
        {/* payment section - item */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items amd Delivery</h3>
          </div>
          <div className="payment_items">
            {/* reusing the components in react like basket */}
            {/* so for every item in the basket i want to return the checkout product and we will pass the props*/}
            {/* it will also give us the remove from basket button and option of the checkout product page built earlier */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section - payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* stripe magic well  */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3> Order Total : {value}</h3>
                    /* it will sums up the value and give us the total */
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displaytype={"text"}
                  thousandSeparator={true}
                  prefix={"	₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now "}</span>
                </button>
                {/* so button will be disbled based on the following states */}
              </div>
              {/* Error */}
              {error && <div>{error}</div>}
              {/* so if there is a error then only show the div witht the error */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
