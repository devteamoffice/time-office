import React from "react";

const ProductReviews = (props) => {
  // const { reviews, isLoading, advancedFilters } = props;

  // const displayPagination = advancedFilters.totalPages > 1;
  // const displayReviews = reviews && reviews.length;

  return (
    <div class="col-lg-6">
      <div class="card">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#reviewModal"
        >
          Write A Review
        </button>

        <div
          class="modal fade"
          id="reviewModal"
          tabindex="-1"
          aria-labelledby="reviewModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="reviewModalLabel">
                  Add Your Review
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form id="reviewForm">
                  <div class="mb-3">
                    <label for="reviewName" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="reviewName"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="reviewEmail" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="reviewEmail"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="reviewRating" class="form-label">
                      Rating
                    </label>
                    <select id="reviewRating" class="form-control">
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Good</option>
                      <option value="3">3 - Average</option>
                      <option value="2">2 - Poor</option>
                      <option value="1">1 - Terrible</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="reviewMessage" class="form-label">
                      Message
                    </label>
                    <textarea
                      id="reviewMessage"
                      class="form-control"
                      rows="5"
                      placeholder="Write your review here..."
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary" form="reviewForm">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-header">
          <h4 class="card-title">Top Review From World</h4>
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center gap-2">
            <img
              src="https://shorturl.at/YJeGX"
              alt=""
              class="avatar-md rounded-circle"
            />
            <div>
              <h5 class="mb-0">Henny K. Mark</h5>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2 mt-3 mb-1">
            <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
              <li>
                <i class="bx bxs-star"></i>
              </li>
              <li>
                <i class="bx bxs-star"></i>
              </li>
              <li>
                <i class="bx bxs-star"></i>
              </li>
              <li>
                <i class="bx bxs-star"></i>
              </li>
              <li>
                <i class="bx bxs-star-half"></i>
              </li>
            </ul>
            <p class="fw-medium mb-0 text-dark fs-15">Excellent Quality</p>
          </div>

          <p class="mb-0 text-dark fw-medium fs-15">
            Reviewed in Canada on 16 November 2023
          </p>
          <p class="text-muted">
            Medium thickness. Did not shrink after wash. Good elasticity . XL
            size Perfectly fit for 5.10 height and heavy body. Did not fade
            after wash. Only for maroon colour t-shirt colour lightly gone in
            first wash but not faded. I bought 5 tshirt of different colours.
            Highly recommended in so low price.
          </p>
          <div class="mt-2">
            <a href="#!" class="fs-14 me-3 text-muted">
              <i class="bx bx-like"></i> Helpful
            </a>
            <a href="#!" class="fs-14 text-muted">
              Report
            </a>
          </div>

          <hr class="my-3" />

          <div class="d-flex align-items-center gap-2">
            <img
              src="https://shorturl.at/YJeGX"
              alt=""
              class="avatar-md rounded-circle"
            />
            <div>
              <h5 class="mb-0">Jorge Herry</h5>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2 mt-3 mb-1">
            <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
              <li>
                <i class="bx bxs-star"></i>
              </li>
              <li>
                <i class="bx bxs-star"></i>
              </li>
              <li>
                <i class="bx bxs-star"></i>
              </li>
              <li>
                <i class="bx bxs-star"></i>
              </li>
              <li>
                <i class="bx bxs-star-half"></i>
              </li>
            </ul>
            <p class="fw-medium mb-0 text-dark fs-15">Good Quality</p>
          </div>

          <p class="mb-0 text-dark fw-medium fs-15">
            Reviewed in U.S.A on 21 December 2023
          </p>
          <p class="text-muted mb-0">
            I liked the tshirt, it's pure cotton &amp; skin friendly, but the
            size is smaller to compare standard size.
          </p>
          <p class="text-muted mb-0">best rated</p>

          <div class="mt-2">
            <a href="#!" class="fs-14 me-3 text-muted">
              <i class="bx bx-like"></i> Helpful
            </a>
            <a href="#!" class="fs-14 text-muted">
              Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
