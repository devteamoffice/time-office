import React from "react";
import Navigation from "../../components/Common/Navigation";
import Actions from "../../components/Common/Actions";
import CustomerCard from "../../components/Customers/CustomerCard";
import CustomerItem from "../../components/Customers/CustomerItem";

const Customers = () => {
  return (
    <div class="container-xxl">
      <CustomerCard />

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
                      <th>Avatar</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone No.</th>
                      <th>Role</th>

                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>{" "}
                  <tbody>
                    <CustomerItem />
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
