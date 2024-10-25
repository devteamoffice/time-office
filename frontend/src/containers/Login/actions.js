import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  LOGIN_CHANGE,
  LOGIN_RESET,
  SET_LOGIN_LOADING,
  SET_LOGIN_FORM_ERRORS,
  SET_LOGIN_SUBMITTING,
} from "./constants";
import { setAuth, clearAuth } from "../Authentication/actions";
import setToken from "../../utils/token";
import handleError from "../../utils/error";
import { clearCart } from "../Cart/actions";
import { clearAccount } from "../Account/actions";
import { allFieldsValidation } from "../../utils/validation";
import { API_URL } from "../../constants";

export const loginChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: LOGIN_CHANGE,
    payload: formData,
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    const rules = { email: "required|email", password: "required|min:6" };
    const user = getState().login.loginFormData;

    const { isValid, errors } = allFieldsValidation(user, rules, {
      "required.email": "Email is required.",
      "email.email": "Email format is invalid.",
      "required.password": "Password is required.",
      "min.password": "Password must be at least 6 characters.",
    });

    if (!isValid) {
      return dispatch({ type: SET_LOGIN_FORM_ERRORS, payload: errors });
    }

    dispatch({ type: SET_LOGIN_SUBMITTING, payload: true });
    dispatch({ type: SET_LOGIN_LOADING, payload: true });

    try {
      const response = await axios.post(`${API_URL}/auth/login`, user);
      const firstName = response.data.user.firstName;

      const successfulMessage = `Hey${
        firstName ? ` ${firstName}` : ""
      }, Welcome Back!`;

      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);

      dispatch(setAuth());
      toast.success(successfulMessage, {
        position: "top-right",
        autoClose: 1000,
      });
      dispatch({ type: LOGIN_RESET });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again!";
      handleError(errorMessage, dispatch, "Login Error");
    } finally {
      dispatch({ type: SET_LOGIN_SUBMITTING, payload: false });
      dispatch({ type: SET_LOGIN_LOADING, payload: false });
    }
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    const successfulMessage = `You have signed out!`;

    dispatch(clearAuth());
    dispatch(clearAccount());
    useNavigate().push("/login");

    localStorage.removeItem("token");

    toast.success(successfulMessage, {
      position: "top-right",
      autoClose: 1000,
    });
    // dispatch(clearCart());
  };
};
