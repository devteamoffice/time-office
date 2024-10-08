import React from "react";
<<<<<<< HEAD
import "../../assets/Product Page/css/vendor.min.css";
import "../../assets/Product Page/css/icons.min.css";
import "../../assets/Product Page/css/app.min.css";
import "./ProductDetails.css";

import p1 from "../../assets/Product Page/images/product/p-1.png";
=======
// import "../../assets/Product Page/css/vendor.min.css";
// import "../../assets/Product Page/css/icons.min.css";
// import "../../assets/Product Page/css/app.min.css";
import "./ProductDetails.css";

import p1 from "../../assets/Product Page/images/product/p-1.png";
import Pagination from "../Extras/Pagination";
>>>>>>> b2ab9b79cc264f301f32d301eabbf7bf2b76c3d7
const Product = () => {
  return (
    <>
      {/* START Wrapper */}
      <div className="wrapper  " style={{ marginTop: "6rem" }}>
        {/* ========== Topbar Start ========== */}

        {/* Activity Timeline */}
        <div>
          <div
            className="offcanvas offcanvas-end border-0"
            tabindex="-1"
            id="theme-activity-offcanvas"
            style={{ maxWidth: "450px", width: "100%" }}
          >
            <div className="d-flex align-items-center bg-primary p-3 offcanvas-header">
              <h5 className="text-white m-0 fw-semibold">Activity Stream</h5>
              <button
                type="button"
                className="btn-close btn-close-white ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body p-0">
              <div data-simplebar className="h-100 p-4">
                <div className="position-relative ms-2">
                  <span className="position-absolute start-0  top-0 border border-dashed h-100"></span>
                  <div className="position-relative ps-4">
                    <div className="mb-4">
                      <span className="position-absolute start-0 avatar-sm translate-middle-x bg-danger d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                        <iconify-icon icon="iconamoon:folder-check-duotone"></iconify-icon>
                      </span>
                      <div className="ms-2">
                        <h5 className="mb-1 text-dark fw-semibold fs-15 lh-base">
                          Report-Fix / Update{" "}
                        </h5>
                        <p className="d-flex align-items-center">
                          Add 3 files to{" "}
                          <span className=" d-flex align-items-center text-primary ms-1">
                            <iconify-icon icon="iconamoon:file-light"></iconify-icon>
                            Tasks
                          </span>
                        </p>
                        <div className="bg-light bg-opacity-50 rounded-2 p-2">
                          <div className="row">
                            <div className="col-lg-6 border-end border-light">
                              <div className="d-flex align-items-center gap-2">
                                <i className="bx bxl-figma fs-20 text-red"></i>
                                <a href="#!" className="text-dark fw-medium">
                                  Concept.fig
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="d-flex align-items-center gap-2">
                                <i className="bx bxl-file-doc fs-20 text-success"></i>
                                <a href="#!" className="text-dark fw-medium">
                                  larkon.docs
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h6 className="mt-2 text-muted">Monday , 4:24 PM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative ps-4">
                    <div className="mb-4">
                      <span className="position-absolute start-0 avatar-sm translate-middle-x bg-success d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                        <iconify-icon icon="iconamoon:check-circle-1-duotone"></iconify-icon>
                      </span>
                      <div className="ms-2">
                        <h5 className="mb-1 text-dark fw-semibold fs-15 lh-base">
                          Project Status
                        </h5>
                        <p className="d-flex align-items-center mb-0">
                          Marked
                          <span className=" d-flex align-items-center text-primary mx-1">
                            <iconify-icon icon="iconamoon:file-light"></iconify-icon>{" "}
                            Design
                          </span>{" "}
                          as{" "}
                          <span className="badge bg-success-subtle text-success px-2 py-1 ms-1">
                            Completed
                          </span>
                        </p>
                        <div className="d-flex align-items-center gap-3 mt-1 bg-light bg-opacity-50 p-2 rounded-2">
                          <a href="#!" className="fw-medium text-dark">
                            UI/UX Figma Design
                          </a>
                          <div className="ms-auto">
                            <a
                              href="#!"
                              className="fw-medium text-primary fs-18"
                              data-bs-toggle="tooltip"
                              data-bs-title="Download"
                              data-bs-placement="bottom"
                            >
                              <iconify-icon icon="iconamoon:cloud-download-duotone"></iconify-icon>
                            </a>
                          </div>
                        </div>
                        <h6 className="mt-3 text-muted">Monday , 3:00 PM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative ps-4">
                    <div className="mb-4">
                      <span className="position-absolute start-0 avatar-sm translate-middle-x bg-primary d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-16">
                        UI
                      </span>
                      <div className="ms-2">
                        <h5 className="mb-1 text-dark fw-semibold fs-15">
                          Larkon Application UI v2.0.0{" "}
                          <span className="badge bg-primary-subtle text-primary px-2 py-1 ms-1">
                            Latest
                          </span>
                        </h5>
                        <p>
                          Get access to over 20+ pages including a dashboard
                          layout, charts, kanban board, calendar, and pre-order
                          E-commerce & Marketing pages.
                        </p>
                        <div className="mt-2">
                          <a href="#!" className="btn btn-light btn-sm">
                            Download Zip
                          </a>
                        </div>
                        <h6 className="mt-3 text-muted">Monday , 2:10 PM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative ps-4">
                    <div className="mb-4">
                      <span className="position-absolute start-0 translate-middle-x bg-success bg-gradient d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                        <img
                          src="assets/images/users/avatar-7.jpg"
                          alt="avatar-5"
                          className="avatar-sm rounded-circle"
                        />
                      </span>
                      <div className="ms-2">
                        <h5 className="mb-0 text-dark fw-semibold fs-15 lh-base">
                          Alex Smith Attached Photos
                        </h5>
                        <div className="row g-2 mt-2">
                          <div className="col-lg-4">
                            <a href="#!">
                              <img
                                src="assets/images/small/img-6.jpg"
                                alt=""
                                className="img-fluid rounded"
                              />
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a href="#!">
                              <img
                                src="assets/images/small/img-3.jpg"
                                alt=""
                                className="img-fluid rounded"
                              />
                            </a>
                          </div>
                          <div className="col-lg-4">
                            <a href="#!">
                              <img
                                src="assets/images/small/img-4.jpg"
                                alt=""
                                className="img-fluid rounded"
                              />
                            </a>
                          </div>
                        </div>
                        <h6 className="mt-3 text-muted">Monday 1:00 PM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative ps-4">
                    <div className="mb-4">
                      <span className="position-absolute start-0 translate-middle-x bg-success bg-gradient d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                        <img
                          src="assets/images/users/avatar-6.jpg"
                          alt="avatar-5"
                          className="avatar-sm rounded-circle"
                        />
                      </span>
                      <div className="ms-2">
                        <h5 className="mb-0 text-dark fw-semibold fs-15 lh-base">
                          Rebecca J. added a new team member
                        </h5>
                        <p className="d-flex align-items-center gap-1">
                          <iconify-icon
                            icon="iconamoon:check-circle-1-duotone"
                            className="text-success"
                          ></iconify-icon>{" "}
                          Added a new member to Front Dashboard
                        </p>
                        <h6 className="mt-3 text-muted">Monday 10:00 AM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative ps-4">
                    <div className="mb-4">
                      <span className="position-absolute start-0 avatar-sm translate-middle-x bg-warning d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                        <iconify-icon icon="iconamoon:certificate-badge-duotone"></iconify-icon>
                      </span>
                      <div className="ms-2">
                        <h5 className="mb-0 text-dark fw-semibold fs-15 lh-base">
                          Achievements
                        </h5>
                        <p className="d-flex align-items-center gap-1 mt-1">
                          Earned a{" "}
                          <iconify-icon
                            icon="iconamoon:certificate-badge-duotone"
                            className="text-danger fs-20"
                          ></iconify-icon>
                          " Best Product Award"
                        </p>
                        <h6 className="mt-3 text-muted">Monday 9:30 AM</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#!" className="btn btn-outline-dark w-100">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar (Theme Settings) */}
        <div>
          <div
            className="offcanvas offcanvas-end border-0"
            tabindex="-1"
            id="theme-settings-offcanvas"
          >
            <div className="d-flex align-items-center bg-primary p-3 offcanvas-header">
              <h5 className="text-white m-0">Theme Settings</h5>
              <button
                type="button"
                className="btn-close btn-close-white ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body p-0">
              <div data-simplebar className="h-100">
                <div className="p-3 settings-bar">
                  <div>
                    <h5 className="mb-3 font-16 fw-semibold">Color Scheme</h5>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-bs-theme"
                        id="layout-color-light"
                        value="light"
                      />
                      <label
                        className="form-check-label"
                        for="layout-color-light"
                      >
                        Light
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-bs-theme"
                        id="layout-color-dark"
                        value="dark"
                      />
                      <label
                        className="form-check-label"
                        for="layout-color-dark"
                      >
                        Dark
                      </label>
                    </div>
                  </div>

                  <div>
                    <h5 className="my-3 font-16 fw-semibold">Topbar Color</h5>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-topbar-color"
                        id="topbar-color-light"
                        value="light"
                      />
                      <label
                        className="form-check-label"
                        for="topbar-color-light"
                      >
                        Light
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-topbar-color"
                        id="topbar-color-dark"
                        value="dark"
                      />
                      <label
                        className="form-check-label"
                        for="topbar-color-dark"
                      >
                        Dark
                      </label>
                    </div>
                  </div>

                  <div>
                    <h5 className="my-3 font-16 fw-semibold">Menu Color</h5>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-menu-color"
                        id="leftbar-color-light"
                        value="light"
                      />
                      <label
                        className="form-check-label"
                        for="leftbar-color-light"
                      >
                        Light
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-menu-color"
                        id="leftbar-color-dark"
                        value="dark"
                      />
                      <label
                        className="form-check-label"
                        for="leftbar-color-dark"
                      >
                        Dark
                      </label>
                    </div>
                  </div>

                  <div>
                    <h5 className="my-3 font-16 fw-semibold">Sidebar Size</h5>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-menu-size"
                        id="leftbar-size-default"
                        value="default"
                      />
                      <label
                        className="form-check-label"
                        for="leftbar-size-default"
                      >
                        Default
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-menu-size"
                        id="leftbar-size-small"
                        value="condensed"
                      />
                      <label
                        className="form-check-label"
                        for="leftbar-size-small"
                      >
                        Condensed
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-menu-size"
                        id="leftbar-hidden"
                        value="hidden"
                      />
                      <label className="form-check-label" for="leftbar-hidden">
                        Hidden
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-menu-size"
                        id="leftbar-size-small-hover-active"
                        value="sm-hover-active"
                      />
                      <label
                        className="form-check-label"
                        for="leftbar-size-small-hover-active"
                      >
                        Small Hover Active
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-menu-size"
                        id="leftbar-size-small-hover"
                        value="sm-hover"
                      />
                      <label
                        className="form-check-label"
                        for="leftbar-size-small-hover"
                      >
                        Small Hover
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== Topbar End ========== */}

        {/* ========== App Menu Start ========== */}

        {/* ========== App Menu End ========== */}

        {/* ==================================================== */}
        {/* Start right Content here */}
        {/* ==================================================== */}
        <div className="page-content mt-4">
          {/* Start Container Fluid */}
          <div className="container-xxl">
            <div className="row">
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
              <div className="col-lg-9">
                <div className="card bg-light-subtle">
                  <div className="card-header border-0">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <ol className="breadcrumb mb-0">
                          <li className="breadcrumb-item fw-medium">
                            <a
                              href="javascript: void(0);"
                              className="text-dark"
                            >
                              Categories
                            </a>
                          </li>
                          <li className="breadcrumb-item active">
                            All Product
                          </li>
                        </ol>
                        <p className="mb-0 text-muted">
                          Showing all{" "}
                          <span className="text-dark fw-semibold">780</span>{" "}
                          items results
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
                  <div className="col-md-6 col-xl-4">
                    <div className="card">
                      <img src={p1} alt="" className="img-fluid " />
                      <div className="card-body bg-light-subtle rounded-bottom">
                        <a
                          href="product-details.html"
                          className="text-dark fw-medium fs-16"
                        >
                          Men Black Slim Fit T-shirt
                        </a>
                        <div className="my-1">
                          <div className="d-flex gap-2 align-items-center">
                            <ul className="d-flex text-warning m-0 fs-18  list-unstyled">
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
                          $80 <small className="text-muted"> (30% Off)</small>
                        </h4>
                        <div className="mt-3">
                          <div className="d-flex gap-2">
                            <a
                              href="order-cart.html"
                              className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                            >
                              <i className="bx bx-cart align-middle"></i> Add To
                              Cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <span className="position-absolute top-0 end-0 p-3">
                        {/* <button
                          type="button"
                          className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                        >
                          <FaHeart style={{ fontSize: "48px", color: "red" }} />
                        </button> */}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card">
                      <img src={p1} alt="" className="img-fluid " />
                      <div className="card-body bg-light-subtle rounded-bottom">
                        <a
                          href="product-details.html"
                          className="text-dark fw-medium fs-16"
                        >
                          Men Black Slim Fit T-shirt
                        </a>
                        <div className="my-1">
                          <div className="d-flex gap-2 align-items-center">
                            <ul className="d-flex text-warning m-0 fs-18  list-unstyled">
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
                          $80 <small className="text-muted"> (30% Off)</small>
                        </h4>
                        <div className="mt-3">
                          <div className="d-flex gap-2">
                            <a
                              href="order-cart.html"
                              className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                            >
                              <i className="bx bx-cart align-middle"></i> Add To
                              Cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <span className="position-absolute top-0 end-0 p-3">
                        {/* <button
                          type="button"
                          className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                        >
                          <FaHeart style={{ fontSize: "48px", color: "red" }} />
                        </button> */}
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-4">
                    <div className="card">
                      <img src={p1} alt="" className="img-fluid " />
                      <div className="card-body bg-light-subtle rounded-bottom">
                        <a
                          href="product-details.html"
                          className="text-dark fw-medium fs-16"
                        >
                          Men Black Slim Fit T-shirt
                        </a>
                        <div className="my-1">
                          <div className="d-flex gap-2 align-items-center">
                            <ul className="d-flex text-warning m-0 fs-18  list-unstyled">
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
                          $80 <small className="text-muted"> (30% Off)</small>
                        </h4>
                        <div className="mt-3">
                          <div className="d-flex gap-2">
                            <a
                              href="order-cart.html"
                              className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                            >
                              <i className="bx bx-cart align-middle"></i> Add To
                              Cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <span className="position-absolute top-0 end-0 p-3">
                        {/* <button
                          type="button"
                          className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                        >
                          <FaHeart style={{ fontSize: "48px", color: "red" }} />
                        </button> */}
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-4">
                    <div className="card">
                      <img src={p1} alt="" className="img-fluid " />
                      <div className="card-body bg-light-subtle rounded-bottom">
                        <a
                          href="product-details.html"
                          className="text-dark fw-medium fs-16"
                        >
                          Men Black Slim Fit T-shirt
                        </a>
                        <div className="my-1">
                          <div className="d-flex gap-2 align-items-center">
                            <ul className="d-flex text-warning m-0 fs-18  list-unstyled">
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
                          $80 <small className="text-muted"> (30% Off)</small>
                        </h4>
                        <div className="mt-3">
                          <div className="d-flex gap-2">
                            <a
                              href="order-cart.html"
                              className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                            >
                              <i className="bx bx-cart align-middle"></i> Add To
                              Cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <span className="position-absolute top-0 end-0 p-3">
                        {/* <button
                          type="button"
                          className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                        >
                          <FaHeart style={{ fontSize: "48px", color: "red" }} />
                        </button> */}
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-4">
                    <div className="card">
                      <img src={p1} alt="" className="img-fluid " />
                      <div className="card-body bg-light-subtle rounded-bottom">
                        <a
                          href="product-details.html"
                          className="text-dark fw-medium fs-16"
                        >
                          Men Black Slim Fit T-shirt
                        </a>
                        <div className="my-1">
                          <div className="d-flex gap-2 align-items-center">
                            <ul className="d-flex text-warning m-0 fs-18  list-unstyled">
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
                          $80 <small className="text-muted"> (30% Off)</small>
                        </h4>
                        <div className="mt-3">
                          <div className="d-flex gap-2">
                            <a
                              href="order-cart.html"
                              className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                            >
                              <i className="bx bx-cart align-middle"></i> Add To
                              Cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <span className="position-absolute top-0 end-0 p-3">
                        {/* <button
                          type="button"
                          className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                        >
                          <FaHeart style={{ fontSize: "48px", color: "red" }} />
                        </button> */}
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-4">
                    <div className="card">
                      <img src={p1} alt="" className="img-fluid " />
                      <div className="card-body bg-light-subtle rounded-bottom">
                        <a
                          href="product-details.html"
                          className="text-dark fw-medium fs-16"
                        >
                          Men Black Slim Fit T-shirt
                        </a>
                        <div className="my-1">
                          <div className="d-flex gap-2 align-items-center">
                            <ul className="d-flex text-warning m-0 fs-18  list-unstyled">
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
                          $80 <small className="text-muted"> (30% Off)</small>
                        </h4>
                        <div className="mt-3">
                          <div className="d-flex gap-2">
                            <a
                              href="order-cart.html"
                              className="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                            >
                              <i className="bx bx-cart align-middle"></i> Add To
                              Cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <span className="position-absolute top-0 end-0 p-3">
                        {/* <button
                          type="button"
                          className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                        >
                          <FaHeart style={{ fontSize: "48px", color: "red" }} />
                        </button> */}
                      </span>
                    </div>
                  </div>

                  {/* ************************************************ */}
                </div>

<<<<<<< HEAD
                <div className="py-3 border-top">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end mb-0">
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          Previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="javascript:void(0);">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0);">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
=======
                <Pagination />
>>>>>>> b2ab9b79cc264f301f32d301eabbf7bf2b76c3d7
              </div>
            </div>
          </div>
          {/* End Container Fluid */}

          {/* ========== Footer Start ========== */}

          {/* ========== Footer End ========== */}
        </div>
        {/* ==================================================== */}
        {/* End Page Content */}
        {/* ==================================================== */}
      </div>
    </>
  );
};

export default Product;
