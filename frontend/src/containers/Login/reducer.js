import {
  LOGIN_CHANGE,
  SET_LOGIN_LOADING,
  SET_LOGIN_FORM_ERRORS,
} from "./constants";

const initialState = {
  loginFormData: { email: "", password: "" },
  formErrors: {},
  isLoading: false,
  loginError: null,
  loginSuccess: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CHANGE:
      return {
        ...state,
        loginFormData: { ...state.loginFormData, ...action.payload },
      };
    case SET_LOGIN_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_LOGIN_FORM_ERRORS:
      return { ...state, formErrors: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
