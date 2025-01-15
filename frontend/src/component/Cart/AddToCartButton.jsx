import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";

const AddToCartButton = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token"); // Assume token is stored in localStorage

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/cart`, {
        headers: { Authorization: `${token}` },
      });
      setCartItems(response.data.cartItems || []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const addToCart = async () => {
    try {
      const itemInCart = cartItems.find((item) => item.id === product.id); // Ensure consistency with `product.id`
      const quantity = itemInCart ? itemInCart.quantity + 1 : 1;

      const response = await axios.post(
        `${API_URL}/cart/add/`,
        { productId: product.id, quantity }, // Ensure productId matches API expectations
        {
          headers: { Authorization: `${token}` },
        }
      );

      setCartItems(response.data.cartItems || []);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCartItems();
    }
  }, [token]);

  const itemInCart = cartItems.find((item) => item.id === product.id); // Consistency with product.id

  return (
    <button onClick={addToCart} className="btn btn-primary">
      {itemInCart ? `Add More (${itemInCart.quantity})` : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
