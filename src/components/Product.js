import React from "react";
import "../assets/stylesheets/Product.css";

function Product({id, title,image,price,rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>¥</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default Product;
