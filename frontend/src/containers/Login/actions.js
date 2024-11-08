import axios from "axios";
import { toast } from "react-toastify";
import {
  LOGIN_CHANGE,
  SET_LOGIN_LOADING,
  SET_LOGIN_FORM_ERRORS,
} from "./constants";
import { API_URL } from "../../constants";
import { setAuth } from "../Authentication/actions";
import { clearAuth } from "../Authentication/actions";

export const loginChange = (name, value) => ({
  type: LOGIN_CHANGE,
  payload: { [name]: value },
});

export const login = () => async (dispatch, getState) => {
  const { email, password } = getState().login.loginFormData;

  if (!email || !password) {
    dispatch({
      type: SET_LOGIN_FORM_ERRORS,
      payload: { email: "Email is required", password: "Password is required" },
    });
    return;
  }

  dispatch({ type: SET_LOGIN_LOADING, payload: true });

  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    dispatch(setAuth());
    toast.success(`Welcome back, ${user.firstName || "User"}!`);
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed");
  } finally {
    dispatch({ type: SET_LOGIN_LOADING, payload: false });
  }
};

export const signOut = () => (dispatch) => {
  dispatch(clearAuth());
  localStorage.removeItem("token");
  toast.success("You have signed out!");
};
