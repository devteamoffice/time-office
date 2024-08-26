import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import {
  FORGOT_PASSWORD_CHANGE,
  FORGOT_PASSWORD_RESET,
  SET_FORGOT_PASSWORD_FORM_ERRORS,
} from "./constants";
import handleError from "../../utils/error";
import { allFieldsValidation } from "../../utils/validation";
import { API_URL } from "../../constants";

export const forgotPasswordChange = (name, value) => {
  return {
    type: FORGOT_PASSWORD_CHANGE,
    payload: value,
  };
};

export const forgotPassword = () => {
  return async (dispatch, getState) => {
    const navigate = useNavigate(); // useNavigate hook for navigation

    try {
      const rules = {
        email: "required|email",
      };

      const user = getState().forgotPassword.forgotFormData;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        "required.email": "Email is required.",
      });

      if (!isValid) {
        return dispatch({
          type: SET_FORGOT_PASSWORD_FORM_ERRORS,
          payload: errors,
        });
      }

      const response = await axios.post(`${API_URL}/auth/forgot`, user);

      if (response.data.success === true) {
        toast.success(response.data.message); // Display success notification
        navigate("/login"); // Navigate to login page
      } else {
        toast.error("There was an issue processing your request."); // Display error notification
      }

      dispatch({ type: FORGOT_PASSWORD_RESET });
    } catch (error) {
      const title = `Please try again!`;
      handleError(error, dispatch, title);
      toast.error(title); // Display error notification
    }
  };
};
