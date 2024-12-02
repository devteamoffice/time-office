import { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  SET_AUTH,
  CLEAR_AUTH,
} from "../../containers/Authentication/constants";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { API_URL } from "../../constants";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Keep this name consistent
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const tokenWithoutBearer = token.replace("Bearer ", "");
        const decodedUser = jwt_decode(tokenWithoutBearer);

        if (decodedUser.id) {
          setUser(decodedUser);
          setIsAuthenticated(true); // Set state here when token is valid
          dispatch({ type: SET_AUTH });
        } else {
          console.error("ID not found in token payload.");
          logout();
        }
      } catch (error) {
        console.error("Token decoding error:", error);
        logout();
      }
    } else {
      setIsLoading(false); // Stop loading if no token
    }
  }, [dispatch]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/user/me`);
      const userData = await response.data;

      setUser((prevUser) => ({
        ...prevUser,
        name: userData.name,
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
      }));
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const login = (token) => {
    localStorage.setItem("token", token);
    const decodedToken = jwt_decode(token.replace("Bearer ", ""));

    const userDetails = {
      id: decodedToken.id,
      role: decodedToken.role,
    };

    setUser(userDetails);
    setIsAuthenticated(true); // Ensure it's set to true when logged in
    dispatch({ type: SET_AUTH });

    // Fetch additional details
    fetchUserDetails(decodedToken.id);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false); // Set to false when logged out
    setUser(null);
    dispatch({ type: CLEAR_AUTH });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
