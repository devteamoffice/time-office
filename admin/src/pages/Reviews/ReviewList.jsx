import React from "react";
import ReviewsItem from "../../components/Reviews/ReviewsItem";

const ReviewList = () => {
  return (
    <div class="container-xxl">
      <div class="row">
        <div class="card-header d-flex justify-content-between align-items-center gap-1">
          <h4 class="card-title flex-grow-1">All Reviews List</h4>

          <a href="/reviews/add" class="btn btn-sm btn-primary">
            Add Review
          </a>

          <div class="dropdown">
            <a
              href="#"
              class="dropdown-toggle btn btn-sm btn-outline-light"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              This Month
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a href="#!" class="dropdown-item">
                Download
              </a>

              <a href="#!" class="dropdown-item">
                Export
              </a>

              <a href="#!" class="dropdown-item">
                Import
              </a>
            </div>
          </div>
        </div>
        <ReviewsItem />
      </div>
    </div>
  );
};

export default ReviewList;
