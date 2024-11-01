import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FETCH_PRODUCTS,
  FETCH_STORE_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_STORE_PRODUCT,
  PRODUCT_CHANGE,
  PRODUCT_EDIT_CHANGE,
  PRODUCT_SHOP_CHANGE,
  SET_PRODUCT_FORM_ERRORS,
  SET_PRODUCT_FORM_EDIT_ERRORS,
  RESET_PRODUCT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  FETCH_PRODUCTS_SELECT,
  SET_PRODUCTS_LOADING,
  SET_ADVANCED_FILTERS,
  RESET_ADVANCED_FILTERS,
} from "./constants";

import { API_URL, ROLES } from "../../constants";
import handleError from "../../utils/error";
import { formatSelectOptions, unformatSelectOptions } from "../../utils/select";
import { allFieldsValidation } from "../../utils/validation";

export const fetchAllProducts = () => {
  return async (dispatch) => {
    try {
      // // Set loading state to true
      // dispatch({ type: SET_PRODUCTS_LOADING, payload: true });

      // Make the API call to fetch all products
      const response = await axios.get(`${API_URL}/product/`);
      const data = await response.json();
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });
      console.log("Products fetched:", data); // Debug log

      // Dispatch the result to the Redux store
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data.products,
      });
    } catch (error) {
      // Handle any errors and display a toast notification
      handleError(error, dispatch);
      toast.error("Failed to fetch products. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      // Set loading state to false after the request is done
      dispatch({ type: SET_PRODUCTS_LOADING, payload: false });
    }
  };
};

export const productChange = (name, value) => {
  let formData = {};
  formData[name] = value;
  return {
    type: PRODUCT_CHANGE,
    payload: formData,
  };
};

export const productEditChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: PRODUCT_EDIT_CHANGE,
    payload: formData,
  };
};

export const productShopChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: PRODUCT_SHOP_CHANGE,
    payload: formData,
  };
};

export const resetProduct = () => {
  return async (dispatch, getState) => {
    dispatch({ type: RESET_PRODUCT });
  };
};

export const setProductLoading = (value) => {
  return {
    type: SET_PRODUCTS_LOADING,
    payload: value,
  };
};

export const filterProducts2 = (n, v) => {
  return async (dispatch, getState) => {
    const advancedFilters = getState().product.advancedFilters;
    const payload = productsFilterOrganizer(n, v, advancedFilters);

    dispatch({ type: SET_ADVANCED_FILTERS, payload });
  };
};

// fetch/filter store products api
export const filterProducts = (n, v) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setProductLoading(true));
      const advancedFilters = getState().product.advancedFilters;
      const payload = productsFilterOrganizer(n, v, advancedFilters);

      dispatch({ type: SET_ADVANCED_FILTERS, payload });
      const sortOrder = getSortOrder(payload.order);
      const response = await axios.get(`${API_URL}/product/list`, {
        params: { ...payload, sortOrder },
      });
      const { products, totalPages, currentPage, count } = response.data;

      dispatch({
        type: FETCH_STORE_PRODUCTS,
        payload: products,
      });

      const newPayload = {
        ...payload,
        totalPages,
        currentPage,
        count,
      };
      dispatch({
        type: SET_ADVANCED_FILTERS,
        payload: newPayload,
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setProductLoading(false));
    }
  };
};

// fetch store product api
export const fetchStoreProduct = (slug) => {
  return async (dispatch, getState) => {
    dispatch(setProductLoading(true));

    try {
      const response = await axios.get(`${API_URL}/product/item/${slug}`);

      const inventory = response.data.product.quantity;
      const product = { ...response.data.product, inventory };

      dispatch({
        type: FETCH_STORE_PRODUCT,
        payload: product,
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setProductLoading(false));
    }
  };
};

export const fetchProductsSelect = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/product/list/select`);

      const formattedProducts = formatSelectOptions(response.data.products);

      dispatch({
        type: FETCH_PRODUCTS_SELECT,
        payload: formattedProducts,
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// fetch products api
export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setProductLoading(true));

      const response = await axios.get(`${API_URL}/product`);

      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data.products,
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(setProductLoading(false));
    }
  };
};

// fetch product api
export const fetchProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST }); // Set loading state

    try {
      // Call API to get the product based on SKU
      const response = await axios.get(`${API_URL}/product/${id}`);
      const product = response.data.product;

      // Dispatch success action with the product data
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: product,
      });
    } catch (error) {
      // Dispatch failure action if error occurs
      dispatch({
        type: FETCH_PRODUCT_FAILURE,
        payload: error.message || "Failed to fetch product.",
      });
    }
  };
};

export const addProduct = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        /* your validation rules */
      };
      const navigate = useNavigate(); // initiate in your function
      const product = getState().product.productFormData;
      const user = getState().account.user;
      const brands = getState().brand.brandsSelect;

      const brand = unformatSelectOptions([product.brand]);
      const newProduct = {
        /* form newProduct object */
      };

      const { isValid, errors } = allFieldsValidation(newProduct, rules, {
        // validation messages
      });

      if (!isValid) {
        return dispatch({ type: SET_PRODUCT_FORM_ERRORS, payload: errors });
      }

      const formData = new FormData();
      for (const key in newProduct) {
        if (newProduct.hasOwnProperty(key)) {
          formData.set(key, newProduct[key]);
        }
      }

      const response = await axios.post(`${API_URL}/product/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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

        dispatch({ type: ADD_PRODUCT, payload: response.data.product });
        dispatch(resetProduct());
        navigate("/"); // Use react-router-dom's useNavigate
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const updateProduct = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        /* validation rules */
      };
      const product = getState().product.product;
      const newProduct = {
        /* form newProduct object */
      };
      const navigate = useNavigate(); // initiate in your function
      const { isValid, errors } = allFieldsValidation(newProduct, rules, {
        // validation messages
      });

      if (!isValid) {
        return dispatch({
          type: SET_PRODUCT_FORM_EDIT_ERRORS,
          payload: errors,
        });
      }

      const response = await axios.put(`${API_URL}/product/${product._id}`, {
        product: newProduct,
      });

      if (response.data.success === true) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1000,
        });
        navigate("/products"); // Navigate back to the product list or other appropriate page
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// activate product API action
export const activateProduct = (id, value) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${API_URL}/product/${id}/active`, {
        product: {
          isActive: value,
        },
      });

      if (response.data.success === true) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(`${API_URL}/product/delete/${id}`);
      const navigate = useNavigate(); // initiate in your function
      if (response.data.success === true) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1000,
        });
        dispatch({
          type: REMOVE_PRODUCT,
          payload: id,
        });
        navigate("/products"); // Navigate back after deletion
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

const productsFilterOrganizer = (n, v, s) => {
  switch (n) {
    case "category":
      return {
        name: s.name,
        category: v,
        brand: "all",
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: s.order,
        page: s.currentPage,
        limit: s.limit,
      };
    case "brand":
      return {
        name: s.name,
        category: "all",
        brand: v,
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: s.order,
        page: s.currentPage,
        limit: s.limit,
      };
    case "sorting":
      return {
        name: s.name,
        category: s.category,
        brand: s.brand,
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: v,
        page: s.currentPage,
        limit: s.limit,
      };
    case "price":
      return {
        name: s.name,
        category: s.category,
        brand: s.brand,
        min: v[0],
        max: v[1],
        rating: s.rating,
        order: s.order,
        page: s.currentPage,
        limit: s.limit,
      };
    case "rating":
      return {
        name: s.name,
        category: s.category,
        brand: s.brand,
        min: s.min,
        max: s.max,
        rating: v,
        order: s.order,
        page: s.currentPage,
        limit: s.limit,
      };
    case "pagination":
      return {
        name: s.name,
        category: s.category,
        brand: s.brand,
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: s.order,
        page: v ?? s.currentPage,
        limit: s.limit,
      };
    default:
      return {
        name: s.name,
        category: "all",
        brand: "all",
        min: s.min,
        max: s.max,
        rating: s.rating,
        order: s.order,
        page: s.currentPage,
        limit: s.limit,
      };
  }
};

const getSortOrder = (value) => {
  let sortOrder = {};
  switch (value) {
    case 0:
      sortOrder._id = -1;
      break;
    case 1:
      sortOrder.price = -1;
      break;
    case 2:
      sortOrder.price = 1;
      break;

    default:
      break;
  }

  return sortOrder;
};
