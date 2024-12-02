// reducers/alertReducer.js
import {
  ALERT_SUCCESS,
  ALERT_ERROR,
  ALERT_INFO,
  ALERT_WARNING,
  CLEAR_ALERT,
} from "./constants";

const initialState = {
  type: null,
  message: null,
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
    case ALERT_ERROR:
    case ALERT_INFO:
    case ALERT_WARNING:
      return {
        type: action.type,
        message: action.payload,
      };

    case CLEAR_ALERT:
      return initialState;

    default:
      return state;
  }
};
