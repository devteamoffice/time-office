// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is already logged in (for example, using localStorage token)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Set the isAuthenticated state to true if token is found
    }
  }, []);

  const login = (token) => {
    // Save the token to localStorage or sessionStorage
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Clear the token and set isAuthenticated to false
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
