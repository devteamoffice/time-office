/*
 *
 * WishList actions
 *
 */

import { toast } from "react-toastify";
import axios from "axios";

import { FETCH_WISHLIST, SET_WISHLIST_LOADING } from "./constants";
import handleError from "../../utils/error";
import { API_URL } from "../../constants";

export const updateWishlist = (isLiked, productId) => async (dispatch) => {
  try {
    if (!productId || typeof productId !== "string") {
      toast.error("Invalid product selected for the wishlist.", {
        position: "top-right",
        autoClose: 1000,
      });
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Please login to update your wishlist.", {
        position: "top-right",
        autoClose: 1000,
      });
      return;
    }

    const response = await axios.post(
      `${API_URL}/wishlist`,
      { isLiked, product: productId },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (response.data.success) {
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1000,
      });
      dispatch(fetchWishlist()); // Refresh wishlist after update
    } else {
      throw new Error(response.data.message || "Failed to update wishlist.");
    }
  } catch (error) {
    toast.error(error.message || "Error updating wishlist.", {
      position: "top-right",
      autoClose: 1000,
    });
  }
};

export const fetchWishlist = () => async (dispatch) => {
  try {
    dispatch({ type: SET_WISHLIST_LOADING, payload: true });

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authentication token is missing.");
    }

    const response = await axios.get(`${API_URL}/wishlist/`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    dispatch({ type: FETCH_WISHLIST, payload: response.data.products || [] });
  } catch (error) {
    toast.error("Error fetching wishlist.", {
      position: "top-right",
      autoClose: 1000,
    });
  } finally {
    dispatch({ type: SET_WISHLIST_LOADING, payload: false });
  }
};
