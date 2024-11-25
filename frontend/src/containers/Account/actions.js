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
import { LOGOUT } from "../Authentication/constants";
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

export const fetchProfile = () => async (dispatch) => {
  dispatch({ type: SET_PROFILE_LOADING, payload: true });
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found in localStorage.");

    const { data } = await axios.get(`${API_URL}/user/me`, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({ type: FETCH_PROFILE, payload: data });
  } catch (error) {
    console.error("Profile fetch error:", error.response || error.message);
    handleError(error, dispatch); // Custom error handler
  } finally {
    dispatch({ type: SET_PROFILE_LOADING, payload: false });
  }
};

export const updateProfile = (profile) => async (dispatch) => {
  try {
    await axios.put(`${API_URL}/user`, profile);
    toast.success("Profile updated successfully!");
  } catch (error) {
    handleError(error);
  }
};
