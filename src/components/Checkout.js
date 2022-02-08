import React from "react"
import Subtotal from "./Subtotal"
import "../assets/stylesheets/Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout_title">Your shopping cart is empty</h2>
          <p>You have no items in your basket. Buy one.</p>
        </div>
      </div>
      <div className="checkout__right">
          <Subtotal />
      </div>
    </div>
  )
}


export default Checkout
