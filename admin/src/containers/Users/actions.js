import axios from "axios";

import {
  FETCH_USERS,
  FETCH_SEARCHED_USERS,
  SET_ADVANCED_FILTERS,
  SET_USERS_LOADING,
} from "./constants";
import handleError from "../../utils/error";
import { API_URL } from "../../constants";

export const setUserLoading = (value) => {
  return {
    type: SET_USERS_LOADING,
    payload: value,
  };
};

export const fetchUsers =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(setUserLoading(true));

      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Authorization token not found");
      }

      const response = await axios.get(`${API_URL}/user`, {
        params: { page, limit: 20 },
        headers: {
          Authorization: `${token}`,
        },
      });

      const { users, totalPages, currentPage, count } = response.data;

      dispatch({
        type: FETCH_USERS,
        payload: {
          users,
          totalPages,
          currentPage,
          count, // Total customers count
        },
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setUserLoading(false));
    }
  };

// Action creator for setting loading state

export const searchUsers = (filter) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setUserLoading(true));

      const response = await axios.get(`${API_URL}/user/search`, {
        params: {
          search: filter.value,
        },
      });

      dispatch({
        type: FETCH_SEARCHED_USERS,
        payload: response.data.users,
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setUserLoading(false));
    }
  };
};
