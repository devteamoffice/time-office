import React from "react";
import Navigation from "../Common/Navigation";
import ProductItem from "./ProductItem";

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
                    <ProductItem />
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
