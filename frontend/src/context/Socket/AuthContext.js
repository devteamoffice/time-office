import { createContext, useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import {
  SET_AUTH,
  CLEAR_AUTH,
} from "../../containers/Authentication/constants";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch(); // Create a dispatch function

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      dispatch({ type: SET_AUTH }); // Dispatching SET_AUTH if token exists
    }
  }, [dispatch]);

  const login = (token) => {
    const formattedToken = token.startsWith("Bearer ")
      ? token
      : `Bearer ${token}`;
    localStorage.setItem("token", formattedToken);
    setIsAuthenticated(true);
    dispatch({ type: SET_AUTH }); // Dispatch action on login
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    dispatch({ type: CLEAR_AUTH }); // Dispatch action on logout
  };

  const signup = async (userData) => {
    // Your signup logic...
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
