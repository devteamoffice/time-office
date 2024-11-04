import React from "react";

import p1 from "../../assets/Product Page/images/product/p-1.png";
import Pagination from "../../component/Common/Pagination";
import ProductFilter from "../../component/Product/ProductFilter";
import SingleProduct from "../../component/Product/SingleProduct";
const Product = (props) => {
  // Assuming totalItems and itemsPerPage are being fetched from somewhere
  const totalItems = 100; // Replace with actual total items count
  const itemsPerPage = 10; // Replace with actual items per page count

  // Calculate the total number of pages
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <ProductFilter />
          <div className="col-lg-9">
            <div className="card bg-light-subtle">
              <div className="card-header border-0">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item fw-medium">
                        <a href="javascript: void(0);" className="text-dark">
                          Categories
                        </a>
                      </li>
                      <li className="breadcrumb-item active">All Product</li>
                    </ol>
                    <p className="mb-0 text-muted">
                      Showing all{" "}
                      <span className="text-dark fw-semibold">780</span> items
                      results
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-md-end mt-3 mt-md-0">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-1"
                      >
                        <i className="bx bx-filter-alt me-1"></i> Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <SingleProduct />
            </div>
            <Pagination pageCount={pageCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
