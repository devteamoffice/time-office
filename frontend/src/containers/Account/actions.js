/*
 *
 * Account actions
 *
 */

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { jwtDecode as jwt_decode } from "jwt-decode";
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
  return {
    type: ACCOUNT_CHANGE,
    payload: { [name]: value },
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
  dispatch(setProfileLoading(true));

  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found in localStorage.");
    console.log(token);
    // Decode and validate the token

    // Fetch user profile
    const { data } = await axios.get(`${API_URL}/user/me`, {
      headers: { Authorization: `${token}` },
    });

    dispatch({ type: FETCH_PROFILE, payload: data });
  } catch (error) {
    console.error("Profile fetch error:", error.response || error.message);
    handleError(error, dispatch); // Custom error handler
  } finally {
    dispatch(setProfileLoading(false));
  }
};

export const updateProfile = (profile) => async (dispatch) => {
  try {
    await axios.put(`${API_URL}/user`, profile, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    toast.success("Profile updated successfully!");
  } catch (error) {
    handleError(error);
  }
};
