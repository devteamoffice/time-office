import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../../containers/Cart/actions";

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  // Get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart?.cartItems || []);

  // Calculate the cart count
  const cartCount = cartItems.length;

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
