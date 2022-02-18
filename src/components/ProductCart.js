import React from "react";
import { useStateValue } from "../StateProvider";
import "../assets/stylesheets/ProductCart.css";

function ProductCart({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="productcart">
      <img className="productcart__image" src={image} alt="" />
      <div className="productcart__info">
        <p className="productcart__title">{title}</p>
        <p className="productcart__price">¥{price}</p>
      <div className="product__rating" key={id}>
        {Array(rating)
          .fill()
          .map((_) => {
            <p>*</p>;
          })}
      </div>
      <button onClick={removeItem}>Remove from the Cart</button>
          </div>
    </div>
  );
}

export default ProductCart;
