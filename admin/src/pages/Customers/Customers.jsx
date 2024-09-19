import React from "react";
import Navigation from "../../components/Common/Navigation";
import Actions from "../../components/Common/Actions";

const Customers = () => {
  return (
    <div class="container-xxl">
      <div class="row">
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center gap-2 mb-3">
                <div class="avatar-md bg-primary bg-opacity-10 rounded">
                  <iconify-icon
                    icon="solar:users-group-two-rounded-bold-duotone"
                    class="fs-32 text-primary avatar-title"
                  ></iconify-icon>
                </div>
                <div>
                  <h4 class="mb-0">All Customers</h4>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p class="text-muted fw-medium fs-22 mb-0">+22.63k</p>
                <div>
                  <span class="badge text-success bg-success-subtle fs-12">
                    <i class="bx bx-up-arrow-alt"></i>34.4%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center gap-2 mb-3">
                <div class="avatar-md bg-primary bg-opacity-10 rounded">
                  <iconify-icon
                    icon="solar:box-bold-duotone"
                    class="fs-32 text-primary avatar-title"
                  ></iconify-icon>
                </div>
                <div>
                  <h4 class="mb-0">Orders</h4>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p class="text-muted fw-medium fs-22 mb-0">+4.5k</p>
                <div>
                  <span class="badge text-danger bg-danger-subtle fs-12">
                    <i class="bx bx-down-arrow-alt"></i>8.1%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center gap-2 mb-3">
                <div class="avatar-md bg-primary bg-opacity-10 rounded">
                  <iconify-icon
                    icon="solar:headphones-round-sound-bold-duotone"
                    class="fs-32 text-primary avatar-title"
                  ></iconify-icon>
                </div>
                <div>
                  <h4 class="mb-0">Services Request</h4>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p class="text-muted fw-medium fs-22 mb-0">+1.03k</p>
                <div>
                  <span class="badge text-success bg-success-subtle fs-12">
                    <i class="bx bx-up-arrow-alt"></i>12.6%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center gap-2 mb-3">
                <div class="avatar-md bg-primary bg-opacity-10 rounded">
                  <iconify-icon
                    icon="solar:bill-list-bold-duotone"
                    class="fs-32 text-primary avatar-title"
                  ></iconify-icon>
                </div>
                <div>
                  <h4 class="mb-0">Invoice & Payment</h4>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p class="text-muted fw-medium fs-22 mb-0">$38,908.00</p>
                <div>
                  <span class="badge text-success bg-success-subtle fs-12">
                    <i class="bx bx-up-arrow-alt"></i>45.9%
                  </span>
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
                <h4 class="card-title">All Customers List</h4>
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
            <div>
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
                      <th>Customer Name</th>
                      <th>Invoice ID</th>
                      <th>Status</th>
                      <th>Total Amount</th>
                      <th>Amount Due</th>
                      <th>Due Date</th>
                      <th>Payment Method</th>
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
                        <img
                          src="assets/images/users/avatar-2.jpg"
                          class="avatar-sm rounded-circle me-2"
                          alt="..."
                        />{" "}
                        Michael A. Miner
                      </td>
                      <td>
                        <a href="javascript: void(0);" class="text-body">
                          #INV2540
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <span class="badge bg-success-subtle text-success py-1 px-2">
                          Completed
                        </span>{" "}
                      </td>
                      <td> $4,521 </td>
                      <td> $8,901 </td>
                      <td> 07 Jan, 2023</td>
                      <td> Mastercard </td>
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

export default Customers;
