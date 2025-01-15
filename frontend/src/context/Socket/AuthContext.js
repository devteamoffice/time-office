import { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  SET_AUTH,
  CLEAR_AUTH,
} from "../../containers/Authentication/constants";
import api from "./api";
import { API_URL } from "../../constants";
import { jwtDecode as jwt_decode } from "jwt-decode";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const decodedUser = decodeAndValidateToken(token);
        setUser(decodedUser);
        setIsAuthenticated(true);
        dispatch({ type: SET_AUTH });
        await fetchUserDetails(token);
      } catch (error) {
        console.error("Auth initialization error:", error.message);
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, [dispatch]);

  const decodeAndValidateToken = (token) => {
    try {
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        throw new Error("Token expired.");
      }
      return decodedToken;
    } catch (error) {
      console.error("Token validation error:", error.message);
      throw error;
    }
  };

  const fetchUserDetails = async (token) => {
    try {
      const { data: userData } = await api.get(`${API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setUser((prevUser) => ({ ...prevUser, ...userData }));
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      if (error.response?.status === 401) logout();
    }
  };

  const login = async (token) => {
    try {
      localStorage.setItem("token", token);
      const decodedToken = decodeAndValidateToken(token);

      setUser(decodedToken);
      setIsAuthenticated(true);
      dispatch({ type: SET_AUTH });

      await fetchUserDetails(token);
    } catch (error) {
      console.error("Login error:", error.message);
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    dispatch({ type: CLEAR_AUTH });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        login,
        logout,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
