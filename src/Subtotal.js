import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(
          value //renderText-render on the screen
        ) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2} //how to many decimal places
        value={getBasketTotal(basket)} //price of all items
        displayType="text" //display value is string/text
        thousandSeparator={true} // separate by thousand
        prefix={"₹"} //currency type
      />

      <button onClick={(e) => navigate("/payment")}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
