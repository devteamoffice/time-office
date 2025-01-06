/*
 *
 * ResetPassword actions
 *
 */

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import {
  RESET_PASSWORD_CHANGE,
  RESET_PASSWORD_RESET,
  SET_RESET_PASSWORD_FORM_ERRORS,
} from "./constants";

import { signOut } from "../Login/actions";
import handleError from "../../utils/error";
import { allFieldsValidation } from "../../utils/validation";
import { API_URL } from "../../constants";

// Action creators for resetting the password
export const resetPasswordChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: RESET_PASSWORD_CHANGE,
    payload: formData,
  };
};

// Reset password using a token
export const resetPassword = (token) => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        password: "required|min:6",
        confirmPassword: "required|min:6|same:password",
      };
      const user = getState().resetPassword.resetFormData;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        "required.password": "Password is required.",
        "min.password": "Password must be at least 6 characters.",
        "required.confirmPassword": "Confirm password is required.",
        "min.confirmPassword":
          "Confirm password must be at least 6 characters.",
        "same.confirmPassword":
          "Confirm password and password fields must match.",
      });

      if (!isValid) {
        return dispatch({
          type: SET_RESET_PASSWORD_FORM_ERRORS,
          payload: errors,
        });
      }

      const response = await axios.post(`${API_URL}/auth/reset/${token}`, user);

      if (response.data.success === true) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        const navigate = useNavigate();
        navigate("/login");

        dispatch({ type: RESET_PASSWORD_RESET });
      }
    } catch (error) {
      const title = `Please try to reset again!`;
      handleError(error, dispatch, title);
    }
  };
};

// Reset account password
export const resetAccountPassword = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        password: "required|min:6",
        confirmPassword: "required|min:6",
      };

      const user = getState().resetPassword.resetFormData;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        "required.password": "Password is required.",
        "min.password": "Password must be at least 6 characters.",
        "required.confirmPassword": "Confirm password is required.",
        "min.confirmPassword":
          "Confirm password must be at least 6 characters.",
      });

      if (!isValid) {
        return dispatch({
          type: SET_RESET_PASSWORD_FORM_ERRORS,
          payload: errors,
        });
      }

      const response = await axios.post(`${API_URL}/auth/reset`, user);

      if (response.data.success === true) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        dispatch(signOut());
        dispatch({ type: RESET_PASSWORD_RESET });
      }
    } catch (error) {
      const title = `Please try to reset again!`;
      handleError(error, dispatch, title);
    }
  };
};
