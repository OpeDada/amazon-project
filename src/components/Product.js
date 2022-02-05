import React from "react";
import "../assets/stylesheets/Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>¥</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating) // makes an array with empty values, 4 in this case [empty, empty. empty, empty]
              .fill() // fills up the empty array with undefined because in JS u cant map an empty vale. Hence, [undefined, undefined, undefined, undefined]
              .map((_) => (
                <p>*</p>
              )) // .map loops over the array and replaces the undefined with the star. It will be compiled to an array of HTML paragraph elements with a ⭐ as its text, each.
          }
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
