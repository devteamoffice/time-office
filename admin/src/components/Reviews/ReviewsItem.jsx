import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
const ReviewsItem = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch reviews from API_URL/REVIEWS
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/review`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setReviews(response.data.reviews); // Assuming the response contains an array of reviews
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch reviews.");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="bx bxs-star"></i>);
    }

    if (halfStar) {
      stars.push(<i key={fullStars} className="bx bxs-star-half"></i>);
    }

    // Add empty stars to make it 5 stars in total
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
      stars.push(<i key={i} className="bx bx-star"></i>);
    }

    return stars;
  };

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="row">
      {reviews.map((reviiew) => {
        const { title, rating, review, created, userId, userImage, userRole } =
          reviiew;

        return (
          <div className="col-xl-3 col-md-6" key={reviiew.id}>
            <div className="card overflow-hidden">
              <div className="card-body">
                <p className="mb-2 text-dark fw-semibold fs-15">
                  Reviewed in {userRole} on {created}
                </p>
                <p className="mb-0">"{review}"</p>
                <div className="d-flex align-items-center gap-2 mt-2 mb-1">
                  <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                    {generateStars(rating)}
                  </ul>
                  <p className="fw-medium mb-0 text-dark fs-15">{title}</p>
                </div>
              </div>
              <div className="card-footer bg-primary position-relative mt-3">
                <div className="position-absolute top-0 start-0 translate-middle-y ms-3">
                  <img
                    src={userImage}
                    alt="User Avatar"
                    className="avatar-lg border border-light border-3 rounded-circle"
                  />
                </div>
                <div className="position-absolute top-0 end-0 translate-middle-y me-3">
                  <img
                    src="assets/images/double.png"
                    alt=""
                    className="avatar-md"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-white mb-1">{userId}</h4>
                  <p className="text-white mb-0">{userRole}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsItem;
