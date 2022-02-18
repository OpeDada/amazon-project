import React from "react";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const getCartTotal = (basket) =>
    //similar to foreach/map. to reduce the elements in the array and return a new value
    basket?.reduce((amount, item) => item.price + amount, 0);

  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
        // add a fnc to get the value
        renderText={(value) => (
          // display the price
          <p>
            Subtotal({basket.length} item{basket.length > 1 && 's'}) : <strong>{`${value}`}</strong>
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
