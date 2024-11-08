import { createContext, useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  SET_AUTH,
  CLEAR_AUTH,
} from "../../containers/Authentication/constants";
import { fetchProfile } from "../../containers/Account/actions";
import { useSelector } from "react-redux";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      dispatch({ type: SET_AUTH });
      dispatch(fetchProfile());
    }
  }, [dispatch]);

  const login = (token) => {
    const formattedToken = token.startsWith("Bearer ")
      ? token
      : `Bearer ${token}`;
    localStorage.setItem("token", formattedToken);
    setIsAuthenticated(true);
    dispatch({ type: SET_AUTH });
    dispatch(fetchProfile());
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    dispatch({ type: CLEAR_AUTH });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Optional: Create a custom hook for easier access
export const useAuth = () => useContext(AuthContext);
