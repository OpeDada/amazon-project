import React from "react"
import { useStateValue } from "../StateProvider";
import "../assets/stylesheets/ProductCart.css";


function ProductCart({id, title, image, price, rating}){

  const [{basket}, dispatch] = useStateValue()
  return(
    <div className="productcart">

    </div>
  )
}

export default ProductCart
