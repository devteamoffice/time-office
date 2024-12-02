import { SET_AUTH, CLEAR_AUTH } from "./constants";

const initialState = {
  isAuthenticated: false, // Renamed to match the context
  isLoading: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: true, // Updated to match the context state
        isLoading: false,
      };
    case CLEAR_AUTH:
      return {
        ...state,
        isAuthenticated: false, // Updated to match the context state
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
