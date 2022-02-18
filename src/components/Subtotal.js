import React from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
        // add a fnc to get the value
        renderText={(value) => (
          // display the price
          <p>
            Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
          </p>
        )}
        decimalScale={2}
        value={getCartTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"¥"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
