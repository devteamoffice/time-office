import { toast } from "react-toastify";
import axios from "axios";

import {
  NEWSLETTER_CHANGE,
  SET_NEWSLETTER_FORM_ERRORS,
  NEWSLETTER_RESET,
} from "./constants";
import handleError from "../../utils/error";
import { allFieldsValidation } from "../../utils/validation";
import { API_URL } from "../../constants";

export const newsletterChange = (name, value) => {
  return {
    type: NEWSLETTER_CHANGE,
    payload: value,
  };
};

export const subscribeToNewsletter = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        email: "required|email",
      };

      const user = {};
      user.email = getState().newsletter.email;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        "required.email": "Email is required.",
        "email.email": "Email format is invalid.",
      });

      if (!isValid) {
        return dispatch({ type: SET_NEWSLETTER_FORM_ERRORS, payload: errors });
      }

      const response = await axios.post(
        `${API_URL}/newsletter/subscribe`,
        user
      );

      const successfulMessage = `${response.data.message}`;

      dispatch({ type: NEWSLETTER_RESET });
      toast.success(successfulMessage, {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};
