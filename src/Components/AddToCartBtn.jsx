import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";

function AddToCartBtn({ product }) {
  const { addToCart } = useContext(cartContext);
  return (
    <button
      onClick={() => addToCart(product)}
      className="btn btn-outline-dark mt-auto"
    >
      Add to cart
    </button>
  );
}

export default AddToCartBtn;
