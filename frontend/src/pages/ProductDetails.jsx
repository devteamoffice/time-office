import React from "react";
import SingleProductDetails from "../component/Product/SingleProductDetails";
import ProductReviews from "../component/Reviews/ProductReviews";
import { FaShippingFast } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaGift } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
const ProductDetails = ({ productId }) => {
  return (
    <div className="container">
      <div class="wrapper">
        <div class="page-content">
          {/* Start Container Fluid */}
          <div class="container-xxl">
            <SingleProductDetails productId={productId} />
            <div class="row">
              <div class="col-lg-12">
                <div class="card bg-light-subtle">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="d-flex align-items-center gap-3">
                          <div class="avatar bg-light d-flex align-items-center justify-content-center rounded">
                            <FaShippingFast />
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
                            <RiDiscountPercentFill />
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
                            <FaGift />
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
                            <RiCustomerServiceFill />
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
                          <span class="fw-medium text-dark">Manufacturer </span>
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
                          <span class="fw-medium text-dark">Manufacturer </span>
                          <span class="mx-2">:</span>Suite 941 89157 Baumbach
                          Views, Gilbertmouth, TX 31542-2135
                        </li>
                        <li>
                          <span class="fw-medium text-dark">Packer </span>
                          <span class="mx-2">:</span>Apt. 726 80915 Hung Stream,
                          Rowetown, WV 44364
                        </li>
                        <li>
                          <span class="fw-medium text-dark">Importer</span>
                          <span class="mx-2">:</span>Apt. 726 80915 Hung Stream,
                          Rowetown, WV 44364
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
                          <span class="fw-medium text-dark">Generic Name</span>
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
              <ProductReviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
