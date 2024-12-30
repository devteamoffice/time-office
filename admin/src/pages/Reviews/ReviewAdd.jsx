import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";

const ReviewAdd = () => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [rating, setRating] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate fields
    if (!reviewTitle || !rating || !reviewMessage) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/review/add`, {
        reviewTitle,
        rating: parseInt(rating, 10), // Convert rating to number
        reviewMessage,
      });

      if (response.status === 201 || response.status === 200) {
        alert("Review added successfully!");
        setReviewTitle("");
        setRating("");
        setReviewMessage("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setReviewTitle("");
    setRating("");
    setReviewMessage("");
    setError("");
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-xl-9 col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add Review</h4>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Review Title */}
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="review-title" className="form-label">
                        Review Title
                      </label>
                      <input
                        type="text"
                        id="review-title"
                        className="form-control"
                        placeholder="Enter Review Title"
                        value={reviewTitle}
                        onChange={(e) => setReviewTitle(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="rating" className="form-label">
                        Rating (1-5)
                      </label>
                      <select
                        id="rating"
                        className="form-control"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                      >
                        <option value="">Select Rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </select>
                    </div>
                  </div>

                  {/* Review Message */}
                  <div className="col-12">
                    <div className="mb-3">
                      <label htmlFor="review-message" className="form-label">
                        Review Message
                      </label>
                      <textarea
                        id="review-message"
                        className="form-control"
                        placeholder="Write your review here"
                        rows="4"
                        value={reviewMessage}
                        onChange={(e) => setReviewMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit and Reset Buttons */}
                <div className="p-3 bg-light rounded">
                  <div className="row justify-content-end g-2">
                    <div className="col-lg-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Add Review"}
                      </button>
                    </div>
                    <div className="col-lg-3">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAdd;
