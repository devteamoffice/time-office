import React from "react";

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
        <div class="col-xl-3 col-md-6">
          <div class="card overflow-hidden">
            <div class="card-body">
              <p class="mb-2 text-dark fw-semibold fs-15">
                Reviewed in U.S.A on 21 December 2023
              </p>
              <p class="mb-0">
                " I recently purchased a t-shirt that I was quite excited about,
                and I must say, there are several aspects that I really
                appreciate about it. Firstly, the material is absolutely
                wonderful."
              </p>
              <div class="d-flex align-items-center gap-2 mt-2 mb-1">
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
            </div>
            <div class="card-footer bg-primary position-relative mt-3">
              <div class="position-absolute top-0 start-0 translate-middle-y ms-3">
                <img
                  src="assets/images/users/avatar-2.jpg"
                  alt=""
                  class="avatar-lg border border-light border-3 rounded-circle"
                />
              </div>
              <div class="position-absolute top-0 end-0 translate-middle-y me-3">
                <img src="assets/images/double.png" alt="" class="avatar-md" />
              </div>
              <div class="mt-4">
                <h4 class="text-white mb-1">Michael B. Coch</h4>
                <p class="text-white mb-0">Kaika Hill, CEO / Hill & CO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
