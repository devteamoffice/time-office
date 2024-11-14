import { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  SET_AUTH,
  CLEAR_AUTH,
} from "../../containers/Authentication/constants";
import { jwtDecode as jwt_decode } from "jwt-decode";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        setIsAuthenticated(true);
        dispatch({ type: SET_AUTH });
        const decodedUser = jwt_decode(token.replace("Bearer ", "")); // Decode without 'Bearer'
        setUser(decodedUser);
      } catch (error) {
        console.error("Token decoding error:", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    }
  }, [dispatch]);

  const login = (token) => {
    const formattedToken = token.startsWith("Bearer ")
      ? token
      : `Bearer ${token}`;
    localStorage.setItem("token", formattedToken);
    setIsAuthenticated(true);
    dispatch({ type: SET_AUTH });
    const decodedUser = jwt_decode(formattedToken.replace("Bearer ", ""));
    setUser(decodedUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    dispatch({ type: CLEAR_AUTH });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
