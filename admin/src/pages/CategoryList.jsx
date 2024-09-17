import React from "react";
import Navigation from "../components/Common/Navigation";
import Actions from "../components/Common/Actions";

const CategoryList = () => {
  return (
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center gap-1">
              <h4 class="card-title flex-grow-1">All Categories List</h4>

              <a href="product-add.html" class="btn btn-sm btn-primary">
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
                      <th style={{ width: "20px;" }}>
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
                      <th>Categories</th>
                      <th>Starting Price</th>
                      <th>Create by</th>
                      <th>ID</th>
                      <th>Product Stock</th>
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
                      <td>
                        <div class="d-flex align-items-center gap-2">
                          <div class="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                            <img
                              src="assets/images/product/p-1.png"
                              alt=""
                              class="avatar-md"
                            />
                          </div>
                          <p class="text-dark fw-medium fs-15 mb-0">
                            Fashion Men , Women & Kid's
                          </p>
                        </div>
                      </td>
                      <td>$80 to $400</td>
                      <td>Seller</td>
                      <td>FS16276</td>
                      <td>46233</td>
                      <td>
                        <Actions />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer border-top">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
