import React from "react";

const ProductEditCard = () => {
  return (
    <div class="col-xl-3 col-lg-4">
      <div class="card">
        <div class="card-body">
          <img
            src="assets/images/product/p-1.png"
            alt=""
            class="img-fluid rounded bg-light"
          />
          <div class="mt-3">
            <h4>
              Men Black Slim Fit T-shirt{" "}
              <span class="fs-14 text-muted ms-1">(Fashion)</span>
            </h4>
            <h5 class="text-dark fw-medium mt-3">Price :</h5>
            <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
              <span class="text-muted text-decoration-line-through">$100</span>{" "}
              $80 <small class="text-muted"> (30% Off)</small>
            </h4>
            <div class="mt-3">
              <h5 class="text-dark fw-medium">Size :</h5>
              <div
                class="d-flex flex-wrap gap-2"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input type="checkbox" class="btn-check" id="size-s" />
                <label
                  class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                  htmlFor="size-s"
                >
                  S
                </label>

                <input type="checkbox" class="btn-check" id="size-m" checked />
                <label
                  class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                  htmlFor="size-m"
                >
                  M
                </label>

                <input type="checkbox" class="btn-check" id="size-xl" />
                <label
                  class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                  htmlFor="size-xl"
                >
                  Xl
                </label>

                <input type="checkbox" class="btn-check" id="size-xxl" />
                <label
                  class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                  htmlFor="size-xxl"
                >
                  XXL
                </label>
              </div>
            </div>
            <div class="mt-3">
              <h5 class="text-dark fw-medium">Colors :</h5>
              <div
                class="d-flex flex-wrap gap-2"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input type="checkbox" class="btn-check" id="color-dark" />
                <label
                  class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                  htmlFor="color-dark"
                >
                  {" "}
                  <i class="bx bxs-circle fs-18 text-dark"></i>
                </label>

                <input type="checkbox" class="btn-check" id="color-yellow" />
                <label
                  class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                  htmlFor="color-yellow"
                >
                  {" "}
                  <i class="bx bxs-circle fs-18 text-warning"></i>
                </label>

                <input type="checkbox" class="btn-check" id="color-white" />
                <label
                  class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                  htmlFor="color-white"
                >
                  {" "}
                  <i class="bx bxs-circle fs-18 text-white"></i>
                </label>

                <input type="checkbox" class="btn-check" id="color-red" />
                <label
                  class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                  htmlFor="color-red"
                >
                  {" "}
                  <i class="bx bxs-circle fs-18 text-danger"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEditCard;
