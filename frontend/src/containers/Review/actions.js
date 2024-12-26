/*
 *
 * Review actions
 *
 */

import { toast } from "react-toastify";
import axios from "axios";
import DOMPurify from "dompurify";

import {
  FETCH_REVIEWS,
  SET_REVIEWS_LOADING,
  ADD_REVIEW,
  REMOVE_REVIEW,
  FETCH_PRODUCT_REVIEWS,
  REVIEW_CHANGE,
  RESET_REVIEW,
  SET_REVIEW_FORM_ERRORS,
  SET_ADVANCED_FILTERS,
} from "./constants";
import handleError from "../../utils/error";
import { allFieldsValidation, santizeFields } from "../../utils/validation";
import { API_URL } from "../../constants";

// Action to update review form data
export const reviewChange = (name, value) => {
  let formData = {};
  formData[name] = value;
  return {
    type: REVIEW_CHANGE,
    payload: formData,
  };
};

// Fetch reviews from API
export const fetchReviews = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_REVIEWS_LOADING, payload: true });

      const response = await axios.get(`${API_URL}/review`, {
        params: { page, limit: 20 },
      });

      const { reviews, totalPages, currentPage, count } = response.data;

      dispatch({ type: FETCH_REVIEWS, payload: reviews });
      dispatch({
        type: SET_ADVANCED_FILTERS,
        payload: { totalPages, currentPage, count },
      });
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch({ type: SET_REVIEWS_LOADING, payload: false });
    }
  };
};

// Approve a review
export const approveReview = (review) => {
  return async (dispatch) => {
    try {
      await axios.put(`${API_URL}/review/approve/${review._id}`);
      dispatch(fetchReviews());
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// Reject a review
export const rejectReview = (review) => {
  return async (dispatch) => {
    try {
      await axios.put(`${API_URL}/review/reject/${review._id}`);
      dispatch(fetchReviews());
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// Delete a review
export const deleteReview = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${API_URL}/review/delete/${id}`);

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

        dispatch({
          type: REMOVE_REVIEW,
          payload: id,
        });
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// Fetch product reviews
export const fetchProductReviews = (slug) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/review/${slug}`);

      const { ratingSummary, totalRatings, totalReviews, totalSummary } =
        getProductReviewsSummary(response.data.reviews);

      dispatch({
        type: FETCH_PRODUCT_REVIEWS,
        payload: {
          reviews: response.data.reviews,
          reviewsSummary: {
            ratingSummary,
            totalRatings,
            totalReviews,
            totalSummary,
          },
        },
      });
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// Add a product review
export const addProductReview = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        title: "required",
        review: "required",
        rating: "required|numeric|min:1",
        isRecommended: "required",
      };

      const review = getState().review.reviewFormData;
      const product = getState().product.storeProduct;

      const newReview = {
        product: product._id,
        isRecommended: review.isRecommended.value,
        rating: review.rating,
        review: review.review,
        title: review.title,
      };

      const { isValid, errors } = allFieldsValidation(newReview, rules, {
        "required.title": "Title is required.",
        "required.review": "Review is required.",
        "required.rating": "Rating is required.",
        "min.rating": "Rating must be at least 1.",
        "required.isRecommended": "Recommendation status is required.",
      });

      if (!isValid) {
        return dispatch({ type: SET_REVIEW_FORM_ERRORS, payload: errors });
      }

      const sanitizedReview = santizeFields(newReview);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_URL}/review/add`,
        sanitizedReview,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

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

        dispatch(fetchProductReviews(product.slug));
        dispatch({ type: RESET_REVIEW });
      }
    } catch (error) {
      handleError(error, dispatch);
    }
  };
};

// Get product reviews summary
export const getProductReviewsSummary = (reviews) => {
  let ratingSummary = [{ 5: 0 }, { 4: 0 }, { 3: 0 }, { 2: 0 }, { 1: 0 }];
  let totalRatings = 0;
  let totalReviews = 0;
  let totalSummary = 0;

  if (reviews.length > 0) {
    reviews.forEach((item) => {
      totalRatings += item.rating;
      totalReviews += 1;

      switch (Math.round(item.rating)) {
        case 5:
          ratingSummary[0][5] += 1;
          totalSummary += 1;
          break;
        case 4:
          ratingSummary[1][4] += 1;
          totalSummary += 1;
          break;
        case 3:
          ratingSummary[2][3] += 1;
          totalSummary += 1;
          break;
        case 2:
          ratingSummary[3][2] += 1;
          totalSummary += 1;
          break;
        case 1:
          ratingSummary[4][1] += 1;
          totalSummary += 1;
          break;
        default:
          break;
      }
    });
  }

  return { ratingSummary, totalRatings, totalReviews, totalSummary };
};
