import React from "react";
import Subtotal from "./Subtotal";
import ProductCart from "./ProductCart";
import { useStateValue } from "../StateProvider";
import "../assets/stylesheets/Checkout.css";
import Product from "./Product";

function Checkout() {
  // get the content of our basket
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket.length === 0 ? (
          <div>
            <h2 className="checkout_title">Your shopping cart is empty</h2>
            <p>You have no items in your basket. Buy one.</p>
          </div>
        ) : (
          <div>
            <h2 className="shoppingbaskettitle">Items in the Shopping Cart</h2>
            {basket.map((item) => (
              <ProductCart
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
