import React, { useEffect, useState } from "react";

import p1 from "../../assets/Product Page/images/product/p-1.png";
import Pagination from "../../component/Extras/Pagination";
import axios from "axios";

const Product = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalItems = data.length;
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const displayedItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page-content">
      {/* Start Container Fluid */}
      <div className="container-xxl">
        <div className="row">
          {isFilterVisible && (
            <div className="col-lg-3">
              <div className="card- bg-light-subtle">
                <div className="card-header border-0">
                  <div className="search-bar me-3 mb-1">
                    <span>
                      <i className="bx bx-search-alt"></i>
                    </span>
                    <input
                      type="search"
                      className="form-control"
                      id="search"
                      placeholder="Search ..."
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body border-light">
                  <a
                    href="#"
                    className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#categories"
                    aria-expanded="false"
                    aria-controls="other"
                  >
                    Categories
                    <i className="bx bx-chevron-down ms-auto fs-20"></i>
                  </a>
                  <div id="categories" className="collapse show">
                    <div className="categories-list d-flex flex-column gap-2 mt-2">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="all-categories"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="all-categories"
                        >
                          All Categories
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="fashion-categories"
                        />
                        <label
                          className="form-check-label"
                          for="fashion-categories"
                        >
                          Attendance and Access Control Systems
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="sunglass-categories"
                        />
                        <label
                          className="form-check-label"
                          for="sunglass-categories"
                        >
                          Door Locks and Controllers
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="watches-categories"
                        />
                        <label
                          className="form-check-label"
                          for="watches-categories"
                        >
                          Barcode Scanners
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="electronics-categories"
                        />
                        <label
                          className="form-check-label"
                          for="electronics-categories"
                        >
                          Accessories
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="furniture-categories"
                        />
                        <label
                          className="form-check-label"
                          for="furniture-categories"
                        >
                          Switches for Access Control
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="headphones-categories"
                        />
                        <label
                          className="form-check-label"
                          for="headphones-categories"
                        >
                          Readers
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href="#"
                      className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#price"
                      aria-expanded="false"
                      aria-controls="other"
                    >
                      Product Price
                      <i className="bx bx-chevron-down ms-auto fs-20"></i>
                    </a>
                    <div id="price" className="collapse show">
                      <div className="categories-list d-flex flex-column gap-2 mt-2">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="all-price"
                          />
                          <label className="form-check-label" for="all-price">
                            All Price
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="price-1"
                          />
                          <label className="form-check-label" for="price-1">
                            Below $200 (145)
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="price-2"
                          />
                          <label className="form-check-label" for="price-2">
                            $200 - $500 (1,885)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="price-3"
                          />
                          <label className="form-check-label" for="price-3">
                            $500 - $800 (2,276)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="price-4"
                          />
                          <label className="form-check-label" for="price-4">
                            $800 - $1000 (12,676)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="price-5"
                          />
                          <label className="form-check-label" for="price-5">
                            $1000 - $1100 (13,123)
                          </label>
                        </div>
                        <h5 className="text-dark fw-medium mt-3">
                          Custom Price Range :
                        </h5>
                        <div
                          id="product-price-range"
                          data-slider-size="md"
                          className=""
                        ></div>
                        <div className="formCost d-flex gap-2 align-items-center mt-2">
                          <input
                            className="form-control form-control-sm text-center"
                            type="text"
                            id="minCost"
                            value="0"
                          />
                          <span className="fw-semibold text-muted">to</span>
                          <input
                            className="form-control form-control-sm text-center"
                            type="text"
                            id="maxCost"
                            value="1000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <a
                      href="#"
                      className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#rating"
                      aria-expanded="false"
                      aria-controls="other"
                    >
                      Rating
                      <i className="bx bx-chevron-down ms-auto fs-20"></i>
                    </a>
                    <div id="rating" className="collapse show">
                      <div className="categories-list d-flex flex-column gap-2 mt-2">
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="rating-number"
                            id="rate-1"
                          />
                          <label className="form-check-label" for="rate-1">
                            1 <i className="bx bxs-star text-warning"></i> &
                            Above (437)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="rating-number"
                            id="rate-2"
                          />
                          <label className="form-check-label" for="rate-2">
                            2 <i className="bx bxs-star text-warning"></i> &
                            Above (657)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="rating-number"
                            id="rate-3"
                          />
                          <label className="form-check-label" for="rate-3">
                            3 <i className="bx bxs-star text-warning"></i> &
                            Above (1,897)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="rating-number"
                            id="rate-4"
                          />
                          <label className="form-check-label" for="rate-4">
                            4 <i className="bx bxs-star text-warning"></i> &
                            Above (3,571)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="#!" className="btn btn-primary w-100">
                    Apply
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className={isFilterVisible ? "col-lg-9" : "col-lg-12"}>
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
                        onClick={handleFilter}
                      >
                        <i className="bx bx-filter-alt me-1"></i> Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {displayedItems.map((card) => (
                <div className="col-md-6 col-xl-4" key={card.id}>
                  <div className="card">
                    <img src={p1} alt="" className="img-fluid" />
                    <div className="card-body bg-light-subtle rounded-bottom">
                      <a
                        href="product-details.html"
                        className="text-dark fw-medium fs-16"
                      >
                        {card.title}
                      </a>
                      <div className="my-1">
                        <div className="d-flex gap-2 align-items-center">
                          <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
                            <li>
                              <i className="bx bxs-star"></i>
                            </li>
                            <li>
                              <i className="bx bxs-star"></i>
                            </li>
                            <li>
                              <i className="bx bxs-star"></i>
                            </li>
                            <li>
                              <i className="bx bxs-star"></i>
                            </li>
                            <li>
                              <i className="bx bxs-star-half"></i>
                            </li>
                          </ul>
                          <p className="mb-0 fw-medium fs-15 text-dark">
                            4.5{" "}
                            <span className="text-muted fs-13">
                              (55 Review)
                            </span>
                          </p>
                        </div>
                      </div>
                      <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                        <span className="text-muted text-decoration-line-through">
                          $100
                        </span>
                        $80 <small className="text-muted">(30% Off)</small>
                      </h4>
                      <div className="mt-3">
                        <a
                          href="order-cart.html"
                          className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-1"
                        >
                          <i className="bx bx-cart align-middle"></i> Add To
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Component */}
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
