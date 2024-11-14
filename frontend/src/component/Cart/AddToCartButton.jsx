import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../../containers/Cart/actions";

const AddToCartButton = ({ product, cartItems }) => {
  const dispatch = useDispatch();

  const cartCount =
    useSelector((state) => state.cart?.cartItems?.length || 0) || 0;

  if (!product || !product._id) {
    return null; // Return null or an error message if product is undefined or missing _id
  }

  // Check if the product is already in the cart
  const itemInCart = cartItems.find((item) => item._id === product._id);

  const addToCart = () => {
    const quantity = itemInCart ? itemInCart.quantity + 1 : 1;
    dispatch(handleAddToCart({ ...product, quantity }));
  };

  return (
    <button onClick={addToCart} className="btn btn-primary">
      {itemInCart ? `Add More (${itemInCart.quantity})` : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
