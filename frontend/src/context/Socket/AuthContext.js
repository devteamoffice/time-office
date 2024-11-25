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

        console.log("Decoded Token:", decodedUser);

        // Validate token payload
        if (decodedUser.id) {
          console.log("User ID:", decodedUser.id);
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

  const login = (token) => {
    localStorage.setItem("jwtToken", token);
    const decodedToken = jwt_decode(token);
    setUser({ id: decodedToken.id, role: decodedToken.role });
    setIsAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      login(token); // Re-authenticate user on page refresh.
    }
  }, []);

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
