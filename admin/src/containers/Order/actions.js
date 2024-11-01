import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import axios from "axios";
import { toast } from "react-toastify"; // Import toast from react-toastify

import {
  FETCH_ORDERS,
  FETCH_SEARCHED_ORDERS,
  FETCH_ORDER,
  UPDATE_ORDER_STATUS,
  SET_ORDERS_LOADING,
  SET_ADVANCED_FILTERS,
  CLEAR_ORDERS,
} from "./constants";

import { clearCart, getCartId } from "../Cart/actions";
import { toggleCart } from "../Navigation/actions";
import handleError from "../../utils/error";
import { API_URL } from "../../constants";

export const updateOrderStatus = (value) => {
  return {
    type: UPDATE_ORDER_STATUS,
    payload: value,
  };
};

export const setOrderLoading = (value) => {
  return {
    type: SET_ORDERS_LOADING,
    payload: value,
  };
};

export const fetchOrders = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setOrderLoading(true));

      const response = await axios.get(`${API_URL}/order`, {
        params: {
          page: page ?? 1,
          limit: 20,
        },
      });

      const { orders, totalPages, currentPage, count } = response.data;

      dispatch({
        type: FETCH_ORDERS,
        payload: orders,
      });

      dispatch({
        type: SET_ADVANCED_FILTERS,
        payload: { totalPages, currentPage, count },
      });
    } catch (error) {
      dispatch(clearOrders());
      handleError(error, dispatch);
    } finally {
      dispatch(setOrderLoading(false));
    }
  };
};

export const fetchAccountOrders = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setOrderLoading(true));

      const response = await axios.get(`${API_URL}/order/me`, {
        params: {
          page: page ?? 1,
          limit: 20,
        },
      });

      const { orders, totalPages, currentPage, count } = response.data;

      dispatch({
        type: FETCH_ORDERS,
        payload: orders,
      });

      dispatch({
        type: SET_ADVANCED_FILTERS,
        payload: { totalPages, currentPage, count },
      });
    } catch (error) {
      dispatch(clearOrders());
      handleError(error, dispatch);
    } finally {
      dispatch(setOrderLoading(false));
    }
  };
};

export const searchOrders = (filter) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setOrderLoading(true));

      const response = await axios.get(`${API_URL}/order/search`, {
        params: {
          search: filter.value,
        },
      });

      dispatch({
        type: FETCH_SEARCHED_ORDERS,
        payload: response.data.orders,
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setOrderLoading(false));
    }
  };
};

export const fetchOrder = (id, withLoading = true) => {
  return async (dispatch, getState) => {
    try {
      if (withLoading) {
        dispatch(setOrderLoading(true));
      }

      const response = await axios.get(`${API_URL}/order/${id}`);

      dispatch({
        type: FETCH_ORDER,
        payload: response.data.order,
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      if (withLoading) {
        dispatch(setOrderLoading(false));
      }
    }
  };
};

export const cancelOrder = () => {
  return async (dispatch, getState) => {
    const navigate = useNavigate(); // Use useNavigate hook to navigate
    try {
      const order = getState().order.order;

      await axios.delete(`${API_URL}/order/cancel/${order._id}`);

      navigate(`/dashboard/orders`); // Use navigate function instead of dispatch(push)
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const updateOrderItemStatus = (itemId, status) => {
  return async (dispatch, getState) => {
    try {
      const order = getState().order.order;

      const response = await axios.put(
        `${API_URL}/order/status/item/${itemId}`,
        {
          orderId: order._id,
          cartId: order.cartId,
          status,
        }
      );

      if (response.data.orderCancelled) {
        useNavigate(`/dashboard/orders`); // Use useNavigate function
      } else {
        dispatch(updateOrderStatus({ itemId, status }));
        dispatch(fetchOrder(order._id, false));
      }

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1000,
      }); // Use toast for notifications
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const addOrder = () => {
  return async (dispatch, getState) => {
    const navigate = useNavigate(); // Use useNavigate hook to navigate
    try {
      const cartId = localStorage.getItem("cart_id");
      const total = getState().cart.cartTotal;

      if (cartId) {
        const response = await axios.post(`${API_URL}/order/add`, {
          cartId,
          total,
        });

        navigate(`/order/success/${response.data.order._id}`); // Use navigate function instead of dispatch(push)
        dispatch(clearCart());
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const placeOrder = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem("token");

    const cartItems = getState().cart.cartItems;

    if (token && cartItems.length > 0) {
      Promise.all([dispatch(getCartId())]).then(() => {
        dispatch(addOrder());
      });
    }

    dispatch(toggleCart());
  };
};

export const clearOrders = () => {
  return {
    type: CLEAR_ORDERS,
  };
};
