import React from "react";

const StatsRow = () => {
  return (
    <div class="row">
      <div class="col-xxl-5">
        <div class="row">
          <div class="col-12">
            <div class="alert alert-primary text-truncate mb-3" role="alert">
              We regret to inform you that our server is currently experiencing
              technical difficulties.
            </div>
          </div>

          <div class="col-md-6">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="avatar-md bg-soft-primary rounded">
                      <iconify-icon
                        icon="solar:cart-5-bold-duotone"
                        class="avatar-title fs-32 text-primary"
                      ></iconify-icon>
                    </div>
                  </div>
                  <div class="col-6 text-end">
                    <p class="text-muted mb-0 text-truncate">Total Orders</p>
                    <h3 class="text-dark mt-1 mb-0">13, 647</h3>
                  </div>
                </div>
              </div>
              <div class="card-footer py-2 bg-light bg-opacity-50">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <span class="text-success">
                      {" "}
                      <i class="bx bxs-up-arrow fs-12"></i> 2.3%
                    </span>
                    <span class="text-muted ms-1 fs-12">Last Week</span>
                  </div>
                  <a href="#!" class="text-reset fw-semibold fs-12">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="avatar-md bg-soft-primary rounded">
                      <i class="bx bx-award avatar-title fs-24 text-primary"></i>
                    </div>
                  </div>
                  <div class="col-6 text-end">
                    <p class="text-muted mb-0 text-truncate">New Leads</p>
                    <h3 class="text-dark mt-1 mb-0">9, 526</h3>
                  </div>
                </div>
              </div>
              <div class="card-footer py-2 bg-light bg-opacity-50">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <span class="text-success">
                      {" "}
                      <i class="bx bxs-up-arrow fs-12"></i> 8.1%
                    </span>
                    <span class="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <a href="#!" class="text-reset fw-semibold fs-12">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="avatar-md bg-soft-primary rounded">
                      <i class="bx bxs-backpack avatar-title fs-24 text-primary"></i>
                    </div>
                  </div>
                  <div class="col-6 text-end">
                    <p class="text-muted mb-0 text-truncate">Deals</p>
                    <h3 class="text-dark mt-1 mb-0">976</h3>
                  </div>
                </div>
              </div>
              <div class="card-footer py-2 bg-light bg-opacity-50">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <span class="text-danger">
                      {" "}
                      <i class="bx bxs-down-arrow fs-12"></i> 0.3%
                    </span>
                    <span class="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <a href="#!" class="text-reset fw-semibold fs-12">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="avatar-md bg-soft-primary rounded">
                      <i class="bx bx-dollar-circle avatar-title text-primary fs-24"></i>
                    </div>
                  </div>
                  <div class="col-6 text-end">
                    <p class="text-muted mb-0 text-truncate">Booked Revenue</p>
                    <h3 class="text-dark mt-1 mb-0">$123.6k</h3>
                  </div>
                </div>
              </div>
              <div class="card-footer py-2 bg-light bg-opacity-50">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <span class="text-danger">
                      {" "}
                      <i class="bx bxs-down-arrow fs-12"></i> 10.6%
                    </span>
                    <span class="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <a href="#!" class="text-reset fw-semibold fs-12">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-7">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="card-title">Performance</h4>
              <div>
                <button type="button" class="btn btn-sm btn-outline-light">
                  ALL
                </button>
                <button type="button" class="btn btn-sm btn-outline-light">
                  1M
                </button>
                <button type="button" class="btn btn-sm btn-outline-light">
                  6M
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-light active"
                >
                  1Y
                </button>
              </div>
            </div>

            <div dir="ltr">
              <div id="dash-performance-chart" class="apex-charts"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
