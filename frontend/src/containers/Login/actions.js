import axios from "axios";
import { toast } from "react-toastify";
import {
  LOGIN_CHANGE,
  SET_LOGIN_LOADING,
  SET_LOGIN_FORM_ERRORS,
  LOGIN_RESET,
  SET_LOGIN_SUBMITTING,
} from "./constants";
import { API_URL } from "../../constants";
import { setAuth } from "../Authentication/actions";
import { clearAuth } from "../Authentication/actions";
import { Navigate } from "react-router-dom";
import { allFieldsValidation } from "../../utils/validation";
import setToken from "../../utils/token";
import handleError from "../../utils/error";
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
    const rules = {
      email: "required|email",
      password: "required|min:6",
    };

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

      // Display a success toast notification
      toast.success(`Hey${firstName ? ` ${firstName}` : ""}, Welcome Back!`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      localStorage.setItem("token", response.data.token);

      setToken(response.data.token);

      dispatch(setAuth());
      dispatch({ type: LOGIN_RESET });
    } catch (error) {
      // Display an error toast notification
      toast.error("Please try to login again!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      handleError(error, dispatch);
    } finally {
      dispatch({ type: SET_LOGIN_SUBMITTING, payload: false });
      dispatch({ type: SET_LOGIN_LOADING, payload: false });
    }
  };
};

export const signOut = () => (dispatch) => {
  dispatch(clearAuth());

  localStorage.removeItem("token");
  toast.success("You have signed out!");
};
