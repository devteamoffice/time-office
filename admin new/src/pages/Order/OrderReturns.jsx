import React from "react";
import Navigation from "../../components/Common/Navigation";
import Actions from "../../components/Common/Actions";

const OrderReturns = () => {
  return (
    <div class="container-xxl">
      <div class="row">
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2 d-flex align-items-center gap-2">
                    Return Order{" "}
                    <span class="badge text-danger bg-danger-subtle fs-12">
                      <i class="bx bx-down-arrow-alt"></i>6.9%
                    </span>
                  </h4>
                  <p class="text-muted fw-medium fs-22 mb-0">
                    367 <span class="fs-14">Items</span>
                  </p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:check-circle-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2 d-flex align-items-center gap-2">
                    Pending Return Order
                  </h4>
                  <p class="text-muted fw-medium fs-22 mb-0">
                    201 <span class="fs-14">Items</span>
                  </p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:close-circle-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2 d-flex align-items-center gap-2">
                    Total Customer{" "}
                    <span class="badge text-success bg-success-subtle fs-12">
                      <i class="bx bx-up-arrow-alt"></i>8.9%
                    </span>
                  </h4>
                  <p class="text-muted fw-medium fs-22 mb-0">5,634</p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:user-plus-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2 d-flex align-items-center gap-2">
                    Return Order Received
                    <span class="badge text-danger bg-danger-subtle fs-12">
                      <i class="bx bx-down-arrow-alt"></i>9.1%
                    </span>
                  </h4>
                  <p class="text-muted fw-medium fs-22 mb-0">
                    864 <span class="fs-14">Items</span>
                  </p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:bag-smile-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="d-flex card-header justify-content-between align-items-center">
              <div>
                <h4 class="card-title">All Return Items</h4>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle btn btn-sm btn-outline-light rounded"
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
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table align-middle mb-0 table-hover table-centered">
                  <thead class="bg-light-subtle">
                    <tr>
                      <th style={{ width: "20px" }}>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="customCheck1"
                          />
                          <label
                            class="form-check-label"
                            for="customCheck1"
                          ></label>
                        </div>
                      </th>
                      <th>ID</th>
                      <th>Order By</th>
                      <th>Items</th>
                      <th>Return Date</th>
                      <th>Total</th>
                      <th>Return Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="customCheck2"
                          />
                          <label class="form-check-label" for="customCheck2">
                            &nbsp;
                          </label>
                        </div>
                      </td>
                      <td>
                        <a href="javascript: void(0);" class="text-body">
                          #INV2540
                        </a>{" "}
                      </td>
                      <td>
                        <img
                          src="assets/images/users/avatar-2.jpg"
                          class="avatar-sm rounded-circle me-2"
                          alt="..."
                        />{" "}
                        Michael A. Miner
                      </td>
                      <td> T-shirt , Wallet</td>
                      <td> 07 Jan, 2023</td>
                      <td>$289.00</td>
                      <td>
                        <span class="badge bg-success-subtle text-success py-1 px-2">
                          Completed
                        </span>
                      </td>
                      <td>
                        <Actions />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReturns;
