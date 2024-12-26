import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/Socket/AuthContext";
import { addProductReview } from "../../containers/Review/actions";

const ProductReviews = (props) => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext); // Assuming AuthContext provides user details

  const [reviewData, setReviewData] = useState({
    title: "",
    rating: 5,
    review: "", // Changed message to review
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user && user.token) {
      const reviewPayload = {
        title: reviewData.title,
        rating: reviewData.rating,
        review: reviewData.review, // Changed message to review
        userId: user.id, // Assuming the `user` object has an `id`
        token: user.token,
      };

      // Dispatch the action to add the review
      dispatch(addProductReview(reviewPayload));

      // Reset the form or show a success message
      setReviewData({ title: "", rating: 5, review: "" });
    } else {
      alert("You must be logged in to submit a review.");
    }
  };

  const { reviews, isLoading, advancedFilters } = props;

  return (
    <div className="col-lg-6">
      <div className="card">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#reviewModal"
        >
          Write A Review
        </button>

        <div
          className="modal fade"
          id="reviewModal"
          tabIndex="-1"
          aria-labelledby="reviewModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="reviewModalLabel">
                  Add Your Review
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="reviewForm" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="reviewTitle" className="form-label">
                      Title
                    </label>
                    <input
                      id="reviewTitle"
                      className="form-control"
                      type="text"
                      name="title"
                      value={reviewData.title}
                      onChange={handleChange}
                      required
                      placeholder="Enter review title"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="reviewRating" className="form-label">
                      Rating
                    </label>
                    <select
                      id="reviewRating"
                      className="form-control"
                      name="rating"
                      value={reviewData.rating}
                      onChange={handleChange}
                      required
                    >
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Good</option>
                      <option value="3">3 - Average</option>
                      <option value="2">2 - Poor</option>
                      <option value="1">1 - Terrible</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="reviewMessage" className="form-label">
                      Review
                    </label>
                    <textarea
                      id="reviewMessage"
                      className="form-control"
                      name="review" // Changed to review
                      value={reviewData.review} // Changed to review
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write your review here..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Render reviews */}
      </div>
    </div>
  );
};

export default ProductReviews;
