/*
 *
 * Account actions
 *
 */

import { toast } from "react-toastify"; // Updated import statement
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import axios from "axios";

import {
  ACCOUNT_CHANGE,
  FETCH_PROFILE,
  CLEAR_ACCOUNT,
  SET_PROFILE_LOADING,
} from "./constants";
import handleError from "../../utils/error";
import { API_URL } from "../../constants";

export const accountChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: ACCOUNT_CHANGE,
    payload: formData,
  };
};

export const clearAccount = () => {
  return {
    type: CLEAR_ACCOUNT,
  };
};

export const setProfileLoading = (value) => {
  return {
    type: SET_PROFILE_LOADING,
    payload: value,
  };
};

export const fetchProfile = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setProfileLoading(true));
      const response = await axios.get(`${API_URL}/user/me`);

      dispatch({ type: FETCH_PROFILE, payload: response.data.user });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setProfileLoading(false));
    }
  };
};

export const updateProfile = () => {
  return async (dispatch, getState) => {
    const profile = getState().account.user;

    try {
      const response = await axios.put(`${API_URL}/user`, {
        profile,
      });

      dispatch({ type: FETCH_PROFILE, payload: response.data.user });

      // Display success notification using react-toastify
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1000, // autoDismiss 1 is equivalent to 1000 ms
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
