import React from "react";
import "./Order.css";
import moment from "moment";
// moments is used for passing time  stamps and parsing timestamps
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
  return (
    <div className="order">
      <h2>Orders</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      {/* this is just a time stamp */}
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />

        // when we have ordered something so not need any remove button as now no cart exist so remove the button
        // so we pass this hide button and modify inside checkout product.js file
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Order Total : {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        /* as we have passed in subunits so thats why divided the amount by 100 */
        displayType={"text"}
        thousandSeparator={true}
        prefix={" ₹"}
      />
    </div>
  );
}
// for this we have installed moment

export default Order;
