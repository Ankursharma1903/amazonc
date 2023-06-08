import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";
function Subtotal() {
  //const history = useHistory(); // it will give us the browser history it is the feature of react router   but now it is updated as navigate as i told earlier so use navigate instead of history
  const navigate = useNavigate(); // it will also give the user browser history
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        //   renderText will show us how and what will render on the screen
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={
          2
        } /*this will change the user input in perfect decimal place */
        // it will go only till 2 decimal places used for currency
        value={getBasketTotal(basket)}
        //in this function we passed basket
        displayType={
          "text"
        } /*it will help us show the content in format we want */
        thousandSeparator={true} /*it will separate the numbers using commas */
        prefix={"₹"}
      />
      <button onClick={e => navigate("/Payment")}>Proceed to Buy</button>
      {/* this will push the page in the browser and something like redirecting */}
    </div>
  );
}

export default Subtotal;
