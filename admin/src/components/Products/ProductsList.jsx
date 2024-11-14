import React, { useState } from "react";
import Navigation from "../Common/Navigation";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 50; // Example total items
  const itemNo = 10; // Items per page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center gap-1">
              <h4 className="card-title flex-grow-1">All Product List</h4>
              <a href="/product/add" className="btn btn-sm btn-primary">
                Add Product
              </a>
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle btn btn-sm btn-outline-light"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  This Month
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="#!" className="dropdown-item">
                    Download
                  </a>
                  <a href="#!" className="dropdown-item">
                    Export
                  </a>
                  <a href="#!" className="dropdown-item">
                    Import
                  </a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table align-middle mb-0 table-hover table-centered">
                <thead className="bg-light-subtle">
                  <tr>
                    <th style={{ width: "20px" }}>
                      <div className="form-check ms-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheck1"
                        ></label>
                      </div>
                    </th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>SKU</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <ProductItem currentPage={currentPage} itemNo={itemNo} />
                </tbody>
              </table>
            </div>
            <Navigation
              totalItems={totalItems}
              itemNo={itemNo}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
