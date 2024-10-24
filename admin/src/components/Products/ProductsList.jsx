import React from "react";
import Navigation from "../Common/Navigation";

const ProductsList = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center gap-1">
              <h4 class="card-title flex-grow-1">All Product List</h4>

              <a href="/product/add" class="btn btn-sm btn-primary">
                Add Product
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
            <div>
              <div class="table-responsive">
                <table class="table align-middle mb-0 table-hover table-centered">
                  <thead class="bg-light-subtle">
                    <tr>
                      <th style={{ width: "20px" }}>
                        <div class="form-check ms-1">
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
                      <th>Product Name & Size</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Category</th>
                      <th>Rating</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-check ms-1">
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
                        <div class="d-flex align-items-center gap-2">
                          <div class="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/product/p-1.png"
                              alt=""
                              class="avatar-md"
                            />
                          </div>
                          <div>
                            <a href="#!" class="text-dark fw-medium fs-15">
                              Black T-shirt
                            </a>
                            <p class="text-muted mb-0 mt-1 fs-13">
                              <span>Size : </span>S , M , L , Xl{" "}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>$80.00</td>
                      <td>
                        <p class="mb-1 text-muted">
                          <span class="text-dark fw-medium">486 Item</span> Left
                        </p>
                        <p class="mb-0 text-muted">155 Sold</p>
                      </td>
                      <td> Fashion</td>
                      <td>
                        {" "}
                        <span class="badge p-1 bg-light text-dark fs-12 me-1">
                          <i class="bx bxs-star align-text-top fs-14 text-warning me-1"></i>{" "}
                          4.5
                        </span>{" "}
                        55 Review
                      </td>
                      <td>
                        <div class="d-flex gap-2">
                          <a href="#!" class="btn btn-light btn-sm">
                            <iconify-icon
                              icon="solar:eye-broken"
                              class="align-middle fs-18"
                            ></iconify-icon>
                          </a>
                          <a href="#!" class="btn btn-soft-primary btn-sm">
                            <iconify-icon
                              icon="solar:pen-2-broken"
                              class="align-middle fs-18"
                            ></iconify-icon>
                          </a>
                          <a href="#!" class="btn btn-soft-danger btn-sm">
                            <iconify-icon
                              icon="solar:trash-bin-minimalistic-2-broken"
                              class="align-middle fs-18"
                            ></iconify-icon>
                          </a>
                        </div>
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

export default ProductsList;
