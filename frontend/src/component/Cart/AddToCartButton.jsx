import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../constants";

const AddToCartButton = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");

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
    if (!product?.id) {
      toast.error("Invalid product selection!");
      return;
    }
    try {
      const itemInCart = cartItems.find((item) => item.id === product.id);
      const quantity = itemInCart ? itemInCart.quantity + 1 : 1;

      const response = await axios.post(
        `${API_URL}/cart/add`,
        { productId: product.id, quantity },
        {
          headers: { Authorization: `${token}` },
        }
      );

      setCartItems(response.data.cartItems || []);
      toast.success("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart.");
    }
  };

  useEffect(() => {
    if (token) {
      fetchCartItems();
    }
  }, [token]);

  const itemInCart = cartItems.find((item) => item.id === product.id);

  return (
    <a
      onClick={addToCart}
      // href="order-cart.html"
      class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
    >
      <i class="bx bx-cart align-middle"></i>{" "}
      {itemInCart ? `Add More (${itemInCart.quantity})` : "Add to Cart"}
    </a>
  );
};

export default AddToCartButton;
