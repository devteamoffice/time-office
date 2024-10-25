import React from "react";
import Pagination from "../Common/Pagination";

const Wishlist = () => {
  return (
    <div class="col-lg-9">
      <div class="row">
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <img
              src="assets/images/product/p-1.png"
              alt=""
              class="img-fluid "
            />
            <div class="card-body bg-light-subtle rounded-bottom">
              <a href="product-details.html" class="text-dark fw-medium fs-16">
                Men Black Slim Fit T-shirt
              </a>
              <div class="my-1">
                <div class="d-flex gap-2 align-items-center">
                  <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
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
                  <p class="mb-0 fw-medium fs-15 text-dark">
                    4.5 <span class="text-muted fs-13">(55 Review)</span>
                  </p>
                </div>
              </div>
              <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                <span class="text-muted text-decoration-line-through">
                  $100
                </span>{" "}
                $80 <small class="text-muted"> (30% Off)</small>
              </h4>
              <div class="mt-3">
                <div class="d-flex gap-2">
                  <a
                    href="order-cart.html"
                    class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"
                  >
                    <i class="bx bx-cart align-middle"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <span class="position-absolute top-0 end-0 p-3">
              <button
                type="button"
                class="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
              >
                <iconify-icon icon="solar:heart-broken"></iconify-icon>
              </button>
            </span>
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default Wishlist;
