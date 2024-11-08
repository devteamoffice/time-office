import { SET_AUTH, CLEAR_AUTH, LOGOUT } from "./constants";
import setToken from "../../utils/token";

export const setAuth = () => {
  return {
    type: SET_AUTH,
  };
};

export const clearAuth = () => {
  return {
    type: CLEAR_AUTH,
  };
};
export const checkAuth = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token); // Set token in headers
      dispatch({ type: SET_AUTH });
    } else {
      dispatch({ type: LOGOUT });
    }
  };
};
