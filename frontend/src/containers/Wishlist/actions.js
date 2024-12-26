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

export const updateWishlist = (isLiked, productId) => {
  return async (dispatch) => {
    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem("authToken");

      if (token) {
        const response = await axios.post(
          `${API_URL}/wishlist`,
          {
            isLiked,
            product: productId,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.data.success === true) {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          dispatch(fetchWishlist());
        }
      } else {
        toast.warning("Please login to wishlist a product", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// Fetch wishlist API
export const fetchWishlist = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_WISHLIST_LOADING, payload: true });

      const response = await axios.get(`${API_URL}/wishlist`);

      dispatch({ type: FETCH_WISHLIST, payload: response.data.wishlist });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch({ type: SET_WISHLIST_LOADING, payload: false });
    }
  };
};
