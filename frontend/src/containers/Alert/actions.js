// actions/alertActions.js
import { toast } from "react-toastify";
import {
  ALERT_SUCCESS,
  ALERT_ERROR,
  ALERT_INFO,
  ALERT_WARNING,
  CLEAR_ALERT,
} from "./constants";

export const showSuccessAlert = (message) => (dispatch) => {
  toast.success(message);
  dispatch({ type: ALERT_SUCCESS, payload: message });
  console.log(message);
};

export const showErrorAlert = (message) => (dispatch) => {
  toast.error(message);
  dispatch({ type: ALERT_ERROR, payload: message });
};

export const showInfoAlert = (message) => (dispatch) => {
  toast.info(message);
  dispatch({ type: ALERT_INFO, payload: message });
};

export const showWarningAlert = (message) => (dispatch) => {
  toast.warning(message);
  dispatch({ type: ALERT_WARNING, payload: message });
};

export const clearAlert = () => (dispatch) => {
  dispatch({ type: CLEAR_ALERT });
};
