import { createContext, useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  SET_AUTH,
  CLEAR_AUTH,
} from "../../containers/Authentication/constants";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      dispatch({ type: SET_AUTH });
    }
  }, [dispatch]);

  const login = (token) => {
    const formattedToken = token.startsWith("Bearer ")
      ? token
      : `Bearer ${token}`;
    localStorage.setItem("token", formattedToken);
    setIsAuthenticated(true);
    dispatch({ type: SET_AUTH });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    dispatch({ type: CLEAR_AUTH });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Optional: Create a custom hook for easier access
export const useAuth = () => useContext(AuthContext);
