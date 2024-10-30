// src/reducers/authReducer.js
export const initialAuthState = {
  isAuthenticated: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
