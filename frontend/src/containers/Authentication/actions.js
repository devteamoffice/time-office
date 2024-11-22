import { SET_AUTH, CLEAR_AUTH, LOGOUT } from "./constants";
import setToken from "../../utils/token";
import { jwtDecode as jwt_decode } from "jwt-decode";
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
      try {
        const decoded = jwt_decode(token.replace("Bearer ", ""));
        const currentTime = Date.now() / 1000; // Get current time in seconds
        if (decoded.exp < currentTime) {
          dispatch({ type: LOGOUT }); // Token is expired
        } else {
          setToken(token); // Set token in headers
          dispatch({ type: SET_AUTH });
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        dispatch({ type: LOGOUT }); // Invalid token
      }
    } else {
      dispatch({ type: LOGOUT }); // No token found
    }
  };
};
