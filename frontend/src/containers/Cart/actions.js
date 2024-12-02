import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/Socket/AuthContext";
import {
  SET_AUTH,
  CLEAR_AUTH,
} from "../../containers/Authentication/constants";
import {
  HANDLE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  HANDLE_CART_TOTAL,
  SET_CART_ID,
  CLEAR_CART,
} from "./constants";
import handleError from "../../utils/error"; // Your error handling utility
import { API_URL, CART_ID, CART_ITEMS, CART_TOTAL } from "../../constants"; // Your constants
import { toggleCart } from "../Navigation/actions";
// Handle Add To Cart
export const handleAddToCart = (product) => {
  return async (dispatch, getState) => {
    try {
      const { user } = useContext(AuthContext); // Access user from AuthContext
      const userId = user?.id; // Get userId

      if (!userId) {
        throw new Error("User is not authenticated");
      }

      // Post request to add product to cart
      const response = await axios.post(`${API_URL}/cart/${userId}/add`, {
        product: {
          product: product._id,
          quantity: product.quantity || 1,
        },
      });

      const updatedCart = response.data.cart;

      // Save updated cart to local storage
      localStorage.setItem(CART_ITEMS, JSON.stringify(updatedCart.products));

      // Dispatch to update Redux state
      dispatch({ type: ADD_TO_CART, payload: updatedCart });

      // Calculate the total of the cart after adding the item
      dispatch(calculateCartTotal());

      // Optionally, toggle the cart visibility
      dispatch(toggleCart());
    } catch (error) {
      handleError(error, dispatch);
      toast.error("Failed to add product to cart");
    }
  };
};

// Handle Remove From Cart
export const handleRemoveFromCart = (productId) => {
  return async (dispatch, getState) => {
    try {
      const { user } = useContext(AuthContext); // Get user from AuthContext
      const userId = user?.id; // Access userId

      if (!userId) {
        throw new Error("User is not authenticated");
      }

      // Post request to remove product from cart
      const response = await axios.delete(
        `${API_URL}/cart/${userId}/remove/${productId}`
      );

      const updatedCart = response.data.cart;

      // Save updated cart to local storage
      localStorage.setItem(CART_ITEMS, JSON.stringify(updatedCart.products));

      // Dispatch to update Redux state
      dispatch({ type: REMOVE_FROM_CART, payload: updatedCart });

      // Calculate the total of the cart after removing the item
      dispatch(calculateCartTotal());
    } catch (error) {
      handleError(error, dispatch);
      toast.error("Failed to remove product from cart");
    }
  };
};

// Calculate Cart Total
export const calculateCartTotal = () => {
  return (dispatch, getState) => {
    const cartItems = JSON.parse(localStorage.getItem(CART_ITEMS)) || [];
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const roundedTotal = parseFloat(total.toFixed(2)); // Round the total to 2 decimal places
    localStorage.setItem(CART_TOTAL, roundedTotal);

    // Dispatch to update Redux state with the total
    dispatch({ type: HANDLE_CART_TOTAL, payload: roundedTotal });
  };
};

// Set Cart State from Local Storage
export const handleCart = () => {
  return (dispatch) => {
    const cart = {
      cartItems: JSON.parse(localStorage.getItem(CART_ITEMS)) || [],
      cartTotal: parseFloat(localStorage.getItem(CART_TOTAL)) || 0,
      cartId: localStorage.getItem(CART_ID) || "",
    };

    // Dispatch to update Redux state with the cart data
    dispatch({ type: HANDLE_CART, payload: cart });

    // Calculate cart total (if needed)
    dispatch(calculateCartTotal());
  };
};

// Get or Create Cart ID for the User
export const getCartId = () => {
  return async (dispatch, getState) => {
    try {
      const { user } = useContext(AuthContext); // Access user from AuthContext
      const userId = user?.id; // Get userId

      if (!userId) {
        throw new Error("User is not authenticated");
      }

      const cartId = localStorage.getItem(CART_ID);

      if (!cartId) {
        // If there's no cart ID, create a new cart
        const response = await axios.post(`${API_URL}/cart/add`, {
          userId,
          products: [],
        });

        const newCartId = response.data.cartId;

        localStorage.setItem(CART_ID, newCartId);
        dispatch({ type: SET_CART_ID, payload: newCartId });
      }
    } catch (error) {
      handleError(error, dispatch);
      toast.error("Failed to retrieve or create cart ID");
    }
  };
};

// Clear Cart
export const clearCart = () => {
  return async (dispatch) => {
    try {
      const { user } = useContext(AuthContext); // Access user from AuthContext
      const userId = user?.id; // Get userId

      if (!userId) {
        throw new Error("User is not authenticated");
      }

      const cartId = localStorage.getItem(CART_ID);

      if (cartId) {
        await axios.delete(`${API_URL}/cart/${cartId}`);
      }

      // Remove cart data from local storage
      localStorage.removeItem(CART_ITEMS);
      localStorage.removeItem(CART_TOTAL);
      localStorage.removeItem(CART_ID);

      // Dispatch to clear cart data from Redux
      dispatch({ type: CLEAR_CART });
    } catch (error) {
      handleError(error, dispatch);
      toast.error("Failed to clear cart");
    }
  };
};
