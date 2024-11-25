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
        const tokenWithoutBearer = token.replace("Bearer ", "");
        const decodedUser = jwt_decode(tokenWithoutBearer);

        if (decodedUser.id) {
          setUser(decodedUser);
          setIsAuthenticated(true);
          dispatch({ type: SET_AUTH });
        } else {
          console.error("ID not found in token payload.");
          logout();
        }
      } catch (error) {
        console.error("Token decoding error:", error);
        logout();
      }
    }
  }, [dispatch]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      const userData = await response.json();

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
    setIsAuthenticated(true);
    dispatch({ type: SET_AUTH });

    // Fetch additional details
    fetchUserDetails(decodedToken.id);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    dispatch({ type: CLEAR_AUTH });
  };
  console.log(user);
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
