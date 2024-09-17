import React from "react";
import Navigation from "../components/Common/Navigation";
import { BsBoxSeamFill } from "react-icons/bs";
import { TbReorder } from "react-icons/tb";
import { BsFillBagXFill } from "react-icons/bs";
import { TbUsersGroup } from "react-icons/tb";
import Actions from "../components/Common/Actions";
const Warehouse = () => {
  return (
    <div class="container-xxl">
      <div class="row">
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2 d-flex align-items-center gap-2">
                    Total Product Items{" "}
                  </h4>
                  <p class="text-muted fw-medium fs-22 mb-0">
                    3521 <span class="fs-12">(Items)</span>
                  </p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <BsBoxSeamFill class="fs-32 text-primary avatar-title" />
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
                    In Stock Product{" "}
                  </h4>
                  <p class="text-muted fw-medium fs-22 mb-0">
                    1311 <span class="fs-12">(Items)</span>
                  </p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <TbReorder class="fs-32 text-primary avatar-title" />
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
                    Out Of Stock Product{" "}
                  </h4>
                  <p class="text-muted fw-medium fs-22 mb-0">
                    231 <span class="fs-12">(Items)</span>
                  </p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <BsFillBagXFill class="fs-32 text-primary avatar-title" />
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
                    Total Visited Customer
                  </h4>
                  <p class="text-muted fw-medium fs-22 mb-0">
                    2334{" "}
                    <span class="badge text-danger bg-danger-subtle fs-12">
                      <i class="bx bx-down-arrow-alt"></i>4.5%
                    </span>{" "}
                    <span class="fs-12">(Last Week)</span>
                  </p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <TbUsersGroup class="fs-32 text-primary avatar-title" />
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
                <h4 class="card-title">All Warehouse List</h4>
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
                      <th>Warehouse ID</th>
                      <th>Warehouse Name</th>
                      <th>Location</th>
                      <th>Manager</th>
                      <th>Contact Number</th>
                      <th>Stock Available </th>
                      <th>Stock Shipping</th>
                      <th>Warehouse Revenue</th>
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
                          <label
                            class="form-check-label"
                            for="customCheck2"
                          ></label>
                        </div>
                      </td>
                      <td>#WH-001</td>
                      <td>Central Fulfillment</td>
                      <td>123 Commerce St, NY </td>
                      <td>John Doe</td>
                      <td>+1 (555) 123-4567</td>
                      <td>6490</td>
                      <td>3022</td>
                      <td>$25,737</td>
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

export default Warehouse;
