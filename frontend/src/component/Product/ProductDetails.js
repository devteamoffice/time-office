import React, { useState } from "react";
import "../../assets/Product Page/css/vendor.min.css";
import "../../assets/Product Page/css/icons.min.css";
import "../../assets/Product Page/css/app.min.css";
import { FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      {/* START Wrapper */}
      <div className="container">
        <div class="wrapper">
          {/* Activity Timeline */}
          <div>
            <div
              class="offcanvas offcanvas-end border-0"
              tabindex="-1"
              id="theme-activity-offcanvas"
              style={{ maxWidth: "450px", width: "100%" }}
            >
              <div class="d-flex align-items-center bg-primary p-3 offcanvas-header">
                <h5 class="text-white m-0 fw-semibold">Activity Stream</h5>
                <button
                  type="button"
                  class="btn-close btn-close-white ms-auto"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div class="offcanvas-body p-0">
                <div data-simplebar class="h-100 p-4">
                  <div class="position-relative ms-2">
                    <span class="position-absolute start-0  top-0 border border-dashed h-100"></span>
                    <div class="position-relative ps-4">
                      <div class="mb-4">
                        <span class="position-absolute start-0 avatar-sm translate-middle-x bg-danger d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                          <iconify-icon icon="iconamoon:folder-check-duotone"></iconify-icon>
                        </span>
                        <div class="ms-2">
                          <h5 class="mb-1 text-dark fw-semibold fs-15 lh-base">
                            Report-Fix / Update{" "}
                          </h5>
                          <p class="d-flex align-items-center">
                            Add 3 files to{" "}
                            <span class=" d-flex align-items-center text-primary ms-1">
                              <iconify-icon icon="iconamoon:file-light"></iconify-icon>{" "}
                              Tasks
                            </span>
                          </p>
                          <div class="bg-light bg-opacity-50 rounded-2 p-2">
                            <div class="row">
                              <div class="col-lg-6 border-end border-light">
                                <div class="d-flex align-items-center gap-2">
                                  <i class="bx bxl-figma fs-20 text-red"></i>
                                  <a href="#!" class="text-dark fw-medium">
                                    Concept.fig
                                  </a>
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="d-flex align-items-center gap-2">
                                  <i class="bx bxl-file-doc fs-20 text-success"></i>
                                  <a href="#!" class="text-dark fw-medium">
                                    larkon.docs
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h6 class="mt-2 text-muted">Monday , 4:24 PM</h6>
                        </div>
                      </div>
                    </div>
                    <div class="position-relative ps-4">
                      <div class="mb-4">
                        <span class="position-absolute start-0 avatar-sm translate-middle-x bg-success d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                          <iconify-icon icon="iconamoon:check-circle-1-duotone"></iconify-icon>
                        </span>
                        <div class="ms-2">
                          <h5 class="mb-1 text-dark fw-semibold fs-15 lh-base">
                            Project Status
                          </h5>
                          <p class="d-flex align-items-center mb-0">
                            Marked
                            <span class=" d-flex align-items-center text-primary mx-1">
                              <iconify-icon icon="iconamoon:file-light"></iconify-icon>{" "}
                              Design{" "}
                            </span>{" "}
                            as{" "}
                            <span class="badge bg-success-subtle text-success px-2 py-1 ms-1">
                              {" "}
                              Completed
                            </span>
                          </p>
                          <div class="d-flex align-items-center gap-3 mt-1 bg-light bg-opacity-50 p-2 rounded-2">
                            <a href="#!" class="fw-medium text-dark">
                              UI/UX Figma Design
                            </a>
                            <div class="ms-auto">
                              <a
                                href="#!"
                                class="fw-medium text-primary fs-18"
                                data-bs-toggle="tooltip"
                                data-bs-title="Download"
                                data-bs-placement="bottom"
                              >
                                <iconify-icon icon="iconamoon:cloud-download-duotone"></iconify-icon>
                              </a>
                            </div>
                          </div>
                          <h6 class="mt-3 text-muted">Monday , 3:00 PM</h6>
                        </div>
                      </div>
                    </div>
                    <div class="position-relative ps-4">
                      <div class="mb-4">
                        <span class="position-absolute start-0 avatar-sm translate-middle-x bg-primary d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-16">
                          UI
                        </span>
                        <div class="ms-2">
                          <h5 class="mb-1 text-dark fw-semibold fs-15">
                            Larkon Application UI v2.0.0{" "}
                            <span class="badge bg-primary-subtle text-primary px-2 py-1 ms-1">
                              {" "}
                              Latest
                            </span>
                          </h5>
                          <p>
                            Get access to over 20+ pages including a dashboard
                            layout, charts, kanban board, calendar, and
                            pre-order E-commerce & Marketing pages.
                          </p>
                          <div class="mt-2">
                            <a href="#!" class="btn btn-light btn-sm">
                              Download Zip
                            </a>
                          </div>
                          <h6 class="mt-3 text-muted">Monday , 2:10 PM</h6>
                        </div>
                      </div>
                    </div>
                    <div class="position-relative ps-4">
                      <div class="mb-4">
                        <span class="position-absolute start-0 translate-middle-x bg-success bg-gradient d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                          <img
                            src="assets/images/users/avatar-7.jpg"
                            alt="avatar-5"
                            class="avatar-sm rounded-circle"
                          />
                        </span>
                        <div class="ms-2">
                          <h5 class="mb-0 text-dark fw-semibold fs-15 lh-base">
                            Alex Smith Attached Photos
                          </h5>
                          <div class="row g-2 mt-2">
                            <div class="col-lg-4">
                              <a href="#!">
                                <img
                                  src="assets/images/small/img-6.jpg"
                                  alt=""
                                  class="img-fluid rounded"
                                />
                              </a>
                            </div>
                            <div class="col-lg-4">
                              <a href="#!">
                                <img
                                  src="assets/images/small/img-3.jpg"
                                  alt=""
                                  class="img-fluid rounded"
                                />
                              </a>
                            </div>
                            <div class="col-lg-4">
                              <a href="#!">
                                <img
                                  src="assets/images/small/img-4.jpg"
                                  alt=""
                                  class="img-fluid rounded"
                                />
                              </a>
                            </div>
                          </div>
                          <h6 class="mt-3 text-muted">Monday 1:00 PM</h6>
                        </div>
                      </div>
                    </div>
                    <div class="position-relative ps-4">
                      <div class="mb-4">
                        <span class="position-absolute start-0 translate-middle-x bg-success bg-gradient d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                          <img
                            src="assets/images/users/avatar-6.jpg"
                            alt="avatar-5"
                            class="avatar-sm rounded-circle"
                          />
                        </span>
                        <div class="ms-2">
                          <h5 class="mb-0 text-dark fw-semibold fs-15 lh-base">
                            Rebecca J. added a new team member
                          </h5>
                          <p class="d-flex align-items-center gap-1">
                            <iconify-icon
                              icon="iconamoon:check-circle-1-duotone"
                              class="text-success"
                            ></iconify-icon>{" "}
                            Added a new member to Front Dashboard
                          </p>
                          <h6 class="mt-3 text-muted">Monday 10:00 AM</h6>
                        </div>
                      </div>
                    </div>
                    <div class="position-relative ps-4">
                      <div class="mb-4">
                        <span class="position-absolute start-0 avatar-sm translate-middle-x bg-warning d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                          <iconify-icon icon="iconamoon:certificate-badge-duotone"></iconify-icon>
                        </span>
                        <div class="ms-2">
                          <h5 class="mb-0 text-dark fw-semibold fs-15 lh-base">
                            Achievements
                          </h5>
                          <p class="d-flex align-items-center gap-1 mt-1">
                            Earned a{" "}
                            <iconify-icon
                              icon="iconamoon:certificate-badge-duotone"
                              class="text-danger fs-20"
                            ></iconify-icon>
                            " Best Product Award"
                          </p>
                          <h6 class="mt-3 text-muted">Monday 9:30 AM</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#!" class="btn btn-outline-dark w-100">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar (Theme Settings) */}
          <div>
            <div
              class="offcanvas offcanvas-end border-0"
              tabindex="-1"
              id="theme-settings-offcanvas"
            >
              <div class="d-flex align-items-center bg-primary p-3 offcanvas-header">
                <h5 class="text-white m-0">Theme Settings</h5>
                <button
                  type="button"
                  class="btn-close btn-close-white ms-auto"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div class="offcanvas-body p-0">
                <div data-simplebar class="h-100">
                  <div class="p-3 settings-bar">
                    <div>
                      <h5 class="mb-3 font-16 fw-semibold">Color Scheme</h5>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-bs-theme"
                          id="layout-color-light"
                          value="light"
                        />
                        <label
                          class="form-check-label"
                          for="layout-color-light"
                        >
                          Light
                        </label>
                      </div>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-bs-theme"
                          id="layout-color-dark"
                          value="dark"
                        />
                        <label class="form-check-label" for="layout-color-dark">
                          Dark
                        </label>
                      </div>
                    </div>

                    <div>
                      <h5 class="my-3 font-16 fw-semibold">Topbar Color</h5>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-topbar-color"
                          id="topbar-color-light"
                          value="light"
                        />
                        <label
                          class="form-check-label"
                          for="topbar-color-light"
                        >
                          Light
                        </label>
                      </div>
                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-topbar-color"
                          id="topbar-color-dark"
                          value="dark"
                        />
                        <label class="form-check-label" for="topbar-color-dark">
                          Dark
                        </label>
                      </div>
                    </div>

                    <div>
                      <h5 class="my-3 font-16 fw-semibold">Menu Color</h5>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-menu-color"
                          id="leftbar-color-light"
                          value="light"
                        />
                        <label
                          class="form-check-label"
                          for="leftbar-color-light"
                        >
                          Light
                        </label>
                      </div>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-menu-color"
                          id="leftbar-color-dark"
                          value="dark"
                        />
                        <label
                          class="form-check-label"
                          for="leftbar-color-dark"
                        >
                          Dark
                        </label>
                      </div>
                    </div>

                    <div>
                      <h5 class="my-3 font-16 fw-semibold">Sidebar Size</h5>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-menu-size"
                          id="leftbar-size-default"
                          value="default"
                        />
                        <label
                          class="form-check-label"
                          for="leftbar-size-default"
                        >
                          Default
                        </label>
                      </div>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-menu-size"
                          id="leftbar-size-small"
                          value="condensed"
                        />
                        <label
                          class="form-check-label"
                          for="leftbar-size-small"
                        >
                          Condensed
                        </label>
                      </div>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-menu-size"
                          id="leftbar-hidden"
                          value="hidden"
                        />
                        <label class="form-check-label" for="leftbar-hidden">
                          Hidden
                        </label>
                      </div>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-menu-size"
                          id="leftbar-size-small-hover-active"
                          value="sm-hover-active"
                        />
                        <label
                          class="form-check-label"
                          for="leftbar-size-small-hover-active"
                        >
                          Small Hover Active
                        </label>
                      </div>

                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="data-menu-size"
                          id="leftbar-size-small-hover"
                          value="sm-hover"
                        />
                        <label
                          class="form-check-label"
                          for="leftbar-size-small-hover"
                        >
                          Small Hover
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="offcanvas-footer border-top p-3 text-center">
                <div class="row">
                  <div class="col">
                    <button
                      type="button"
                      class="btn btn-danger w-100"
                      id="reset-layout"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========== Topbar End ========== */}

          {/* ========== App Menu End ========== */}

          {/* ==================================================== */}
          {/* Start right Content here */}
          {/* ==================================================== */}
          <div class="page-content">
            {/* Start Container Fluid */}
            <div class="container-xxl">
              <div class="row">
                <div class="col-lg-4">
                  <div class="card">
                    <div class="card-body">
                      {/* Crossfade */}
                      <div
                        id="carouselExampleFade"
                        class="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-inner" role="listbox">
                          <div class="carousel-item active">
                            <img
                              src="https://shorturl.at/zXYcP"
                              alt=""
                              class="img-fluid bg-light rounded"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src="https://shorturl.at/RLxTc"
                              alt=""
                              class="img-fluid bg-light rounded"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              src="https://shorturl.at/kOdsN"
                              alt=""
                              class="img-fluid bg-light rounded"
                            />
                          </div>

                          {/* <a class="carousel-control-prev rounded" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                                                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                   <span class="visually-hidden">Previous</span>
                                              </a>
                                              <a class="carousel-control-next rounded" href="#carouselExampleFade" role="button" data-bs-slide="next">
                                                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                   <span class="visually-hidden">Next</span>
                                              </a> */}
                        </div>
                        <div class="carousel-indicators m-0 mt-2 d-lg-flex d-none position-static h-100">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                            class="w-auto h-auto rounded bg-light active"
                          >
                            <img
                              src="https://shorturl.at/zXYcP"
                              class="d-block avatar-xl"
                              alt="swiper-indicator-img"
                            />
                          </button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                            class="w-auto h-auto rounded bg-light"
                          >
                            <img
                              src="https://shorturl.at/RLxTc"
                              class="d-block avatar-xl"
                              alt="swiper-indicator-img"
                            />
                          </button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleFade"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                            class="w-auto h-auto rounded bg-light"
                          >
                            <img
                              src="https://shorturl.at/kOdsN"
                              class="d-block avatar-xl"
                              alt="swiper-indicator-img"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer border-top">
                      <div class="row g-2">
                        <div class="col-lg-5">
                          <a
                            href="#!"
                            class="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100"
                          >
                            <i class="bx bx-cart fs-18"></i> Add To Cart
                          </a>
                        </div>
                        <div class="col-lg-5">
                          <a
                            href="#!"
                            class="btn btn-light d-flex align-items-center justify-content-center gap-2 w-100"
                          >
                            <i class="bx bx-shopping-bag fs-18"></i> Buy Now
                          </a>
                        </div>
                        <div class="col-lg-2">
                          <button
                            type="button"
                            class="btn btn-soft-danger d-inline-flex align-items-center justify-content-center fs-20 rounded w-100"
                          >
                            <iconify-icon icon="solar:heart-broken"></iconify-icon>
                            {/* <FaRegHeart /> */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="badge bg-success text-light fs-14 py-1 px-2">
                        New Arrival
                      </h4>
                      <p class="mb-1">
                        <a href="#!" class="fs-24 text-dark fw-medium">
                          Attendance System
                        </a>
                      </p>
                      <div class="d-flex gap-2 align-items-center">
                        <ul class="d-flex text-warning m-0 fs-20  list-unstyled">
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star-half"></i>
                          </li>
                        </ul>
                        <p class="mb-0 fw-medium fs-18 text-dark">
                          4.5 <span class="text-muted fs-13">(55 Review)</span>
                        </p>
                      </div>
                      <h2 class="fw-medium my-3">
                        $80.00{" "}
                        <span class="fs-16 text-decoration-line-through">
                          $100.00
                        </span>
                        <small class="text-danger ms-2">(30%Off)</small>
                      </h2>

                      {/* quantity */}
                      <div class="quantity mt-4">
                        <h4 class="text-dark fw-medium mt-3">Quantity :</h4>
                        <div class="input-step border bg-body-secondary p-1 mt-1 rounded d-inline-flex overflow-visible">
                          <button
                            onClick={() => count > 1 && setCount(count - 1)}
                            type="button"
                            class="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            -
                          </button>
                          <div className="mx-2"> {count}</div>
                          <button
                            onClick={() => setCount(count + 1)}
                            type="button"
                            class="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <ul class="d-flex flex-column gap-2 list-unstyled fs-15 my-3">
                        <li>
                          <i class="bx bx-check text-success"></i> In Stock
                        </li>
                        <li>
                          <i class="bx bx-check text-success"></i> Free delivery
                          available
                        </li>
                        <li>
                          <i class="bx bx-check text-success"></i> Sales 10% Off
                          Use Code:{" "}
                          <span class="text-dark fw-medium">CODE123</span>
                        </li>
                      </ul>
                      <h4 class="text-dark fw-medium">Description :</h4>
                      <p class="text-muted">
                        Top in sweatshirt fabric made from a cotton blend with a
                        soft brushed inside. Relaxed fit with dropped shoulders,
                        long sleeves and ribbing around the neckline, cuffs and
                        hem. Small metal text applique.{" "}
                        <a href="#!" class="link-primary">
                          Read more
                        </a>
                      </p>
                      <h4 class="text-dark fw-medium mt-3">
                        Available offers :
                      </h4>
                      <div class="d-flex align-items-center mt-2">
                        <i class="bx bxs-bookmarks text-success me-3 fs-20 mt-1"></i>
                        <p class="mb-0">
                          <span class="fw-medium text-dark">Bank Offer</span>{" "}
                          10% instant discount on Bank Debit Cards, up to $30 on
                          orders of $50 and above
                        </p>
                      </div>
                      <div class="d-flex align-items-center mt-2">
                        <i class="bx bxs-bookmarks text-success me-3 fs-20 mt-1"></i>
                        <p class="mb-0">
                          <span class="fw-medium text-dark">Bank Offer</span>{" "}
                          Grab our exclusive offer now and save 20% on your next
                          purchase! Don't miss out, shop today!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="card bg-light-subtle">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-3">
                          <div class="d-flex align-items-center gap-3">
                            <div class="avatar bg-light d-flex align-items-center justify-content-center rounded">
                              <iconify-icon
                                icon="solar:kick-scooter-bold-duotone"
                                class="fs-35 text-primary"
                              ></iconify-icon>
                            </div>

                            <div>
                              <p class="text-dark fw-medium fs-16 mb-1">
                                Free shipping for all orders over $200
                              </p>
                              <p class="mb-0">Only in this week</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div class="d-flex align-items-center gap-3">
                            <div class="avatar bg-light d-flex align-items-center justify-content-center rounded">
                              <iconify-icon
                                icon="solar:ticket-bold-duotone"
                                class="fs-35 text-primary"
                              ></iconify-icon>
                            </div>

                            <div>
                              <p class="text-dark fw-medium fs-16 mb-1">
                                Special discounts for customers
                              </p>
                              <p class="mb-0">Coupons up to $ 100</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div class="d-flex align-items-center gap-3">
                            <div class="avatar bg-light d-flex align-items-center justify-content-center rounded">
                              <iconify-icon
                                icon="solar:gift-bold-duotone"
                                class="fs-35 text-primary"
                              ></iconify-icon>
                            </div>

                            <div>
                              <p class="text-dark fw-medium fs-16 mb-1">
                                Free gift wrapping
                              </p>
                              <p class="mb-0">With 100 letters custom note</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div class="d-flex align-items-center gap-3">
                            <div class="avatar bg-light d-flex align-items-center justify-content-center rounded">
                              <iconify-icon
                                icon="solar:headphones-round-sound-bold-duotone"
                                class="fs-35 text-primary"
                              ></iconify-icon>
                            </div>

                            <div>
                              <p class="text-dark fw-medium fs-16 mb-1">
                                Expert Customer Service
                              </p>
                              <p class="mb-0">8:00 - 20:00, 7 days/wee</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">Items Detail</h4>
                    </div>
                    <div class="card-body">
                      <div class="">
                        <ul class="d-flex flex-column gap-2 list-unstyled fs-14 text-muted mb-0">
                          <li>
                            <span class="fw-medium text-dark">
                              Product Dimensions
                            </span>
                            <span class="mx-2">:</span>53.3 x 40.6 x 6.4 cm; 500
                            Grams
                          </li>
                          <li>
                            <span class="fw-medium text-dark">
                              Date First Available
                            </span>
                            <span class="mx-2">:</span>22 September 2023
                          </li>
                          <li>
                            <span class="fw-medium text-dark">Department</span>
                            <span class="mx-2">:</span>Men
                          </li>
                          <li>
                            <span class="fw-medium text-dark">
                              Manufacturer{" "}
                            </span>
                            <span class="mx-2">:</span>Greensboro, NC 27401
                            Prospa-Pal
                          </li>
                          <li>
                            <span class="fw-medium text-dark">ASIN</span>
                            <span class="mx-2">:</span>B0CJMML118
                          </li>
                          <li>
                            <span class="fw-medium text-dark">
                              Item model number
                            </span>
                            <span class="mx-2">:</span> 1137AZ
                          </li>
                          <li>
                            <span class="fw-medium text-dark">
                              Country of Origin
                            </span>
                            <span class="mx-2">:</span>U.S.A
                          </li>
                          <li>
                            <span class="fw-medium text-dark">
                              Manufacturer{" "}
                            </span>
                            <span class="mx-2">:</span>Suite 941 89157 Baumbach
                            Views, Gilbertmouth, TX 31542-2135
                          </li>
                          <li>
                            <span class="fw-medium text-dark">Packer </span>
                            <span class="mx-2">:</span>Apt. 726 80915 Hung
                            Stream, Rowetown, WV 44364
                          </li>
                          <li>
                            <span class="fw-medium text-dark">Importer</span>
                            <span class="mx-2">:</span>Apt. 726 80915 Hung
                            Stream, Rowetown, WV 44364
                          </li>
                          <li>
                            <span class="fw-medium text-dark">Item Weight</span>
                            <span class="mx-2">:</span>500 g
                          </li>
                          <li>
                            <span class="fw-medium text-dark">
                              Item Dimensions LxWxH
                            </span>
                            <span class="mx-2">:</span>53.3 x 40.6 x 6.4
                            Centimeters
                          </li>
                          <li>
                            <span class="fw-medium text-dark">
                              Generic Name
                            </span>
                            <span class="mx-2">:</span>T-Shirt
                          </li>
                          <li>
                            <span class="fw-medium text-dark">
                              Best Sellers Rank
                            </span>
                            <span class="mx-2">:</span>#13 in Clothing &
                            Accessories
                          </li>
                        </ul>
                      </div>
                      <div class="mt-3">
                        <a
                          href="#!"
                          class="link-primary text-decoration-underline link-offset-2"
                        >
                          View More Details{" "}
                          <i class="bx bx-arrow-to-right align-middle fs-16"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">Top Review From World</h4>
                    </div>
                    <div class="card-body">
                      <div class="d-flex align-items-center gap-2">
                        <img
                          src="https://shorturl.at/YJeGX"
                          alt=""
                          class="avatar-md rounded-circle"
                        />
                        <div>
                          <h5 class="mb-0">Henny K. Mark</h5>
                        </div>
                      </div>
                      <div class="d-flex align-items-center gap-2 mt-3 mb-1">
                        <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star-half"></i>
                          </li>
                        </ul>
                        <p class="fw-medium mb-0 text-dark fs-15">
                          Excellent Quality
                        </p>
                      </div>

                      <p class="mb-0 text-dark fw-medium fs-15">
                        Reviewed in Canada on 16 November 2023
                      </p>
                      <p class="text-muted">
                        Medium thickness. Did not shrink after wash. Good
                        elasticity . XL size Perfectly fit for 5.10 height and
                        heavy body. Did not fade after wash. Only for maroon
                        colour t-shirt colour lightly gone in first wash but not
                        faded. I bought 5 tshirt of different colours. Highly
                        recommended in so low price.
                      </p>
                      <div class="mt-2">
                        <a href="#!" class="fs-14 me-3 text-muted">
                          <i class="bx bx-like"></i> Helpful
                        </a>
                        <a href="#!" class="fs-14 text-muted">
                          Report
                        </a>
                      </div>

                      <hr class="my-3" />

                      <div class="d-flex align-items-center gap-2">
                        <img
                          src="https://shorturl.at/YJeGX"
                          alt=""
                          class="avatar-md rounded-circle"
                        />
                        <div>
                          <h5 class="mb-0">Jorge Herry</h5>
                        </div>
                      </div>
                      <div class="d-flex align-items-center gap-2 mt-3 mb-1">
                        <ul class="d-flex text-warning m-0 fs-20 list-unstyled">
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star"></i>
                          </li>
                          <li>
                            <i class="bx bxs-star-half"></i>
                          </li>
                        </ul>
                        <p class="fw-medium mb-0 text-dark fs-15">
                          Good Quality
                        </p>
                      </div>

                      <p class="mb-0 text-dark fw-medium fs-15">
                        Reviewed in U.S.A on 21 December 2023
                      </p>
                      <p class="text-muted mb-0">
                        I liked the tshirt, it's pure cotton &amp; skin
                        friendly, but the size is smaller to compare standard
                        size.
                      </p>
                      <p class="text-muted mb-0">best rated</p>

                      <div class="mt-2">
                        <a href="#!" class="fs-14 me-3 text-muted">
                          <i class="bx bx-like"></i> Helpful
                        </a>
                        <a href="#!" class="fs-14 text-muted">
                          Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Container Fluid */}
          </div>
          {/* ==================================================== */}
          {/* End Page Content */}
          {/* ==================================================== */}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
