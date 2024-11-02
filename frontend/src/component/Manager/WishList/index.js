/**
 *
 * WishList
 *
 */

import React from "react";

import { Link } from "react-router-dom";

import { formatDate } from "../../../utils/date";
import Button from "../../Common/Button";
import { XIcon } from "../../Common/Icon";

const WishList = (props) => {
  const { wishlist, updateWishlist } = props;

  const getProductImage = (item) => {
    if (item.product) {
      const product = item.product;
      return (
        <img
          className="img-fluid "
          src={`${
            product.imageUrl
              ? product.imageUrl
              : "/images/placeholder-image.png"
          }`}
        />
      );
    }
  };

  return (
    <div className="col-md-6 col-xl-3">
      {wishlist.map((item, index) => (
        <div key={index} className="card">
          <div class="col-md-6 col-xl-3">
            <div class="card">
              <img
                src="assets/images/product/p-1.png"
                alt=""
                class="img-fluid "
              />
              <div class="card-body bg-light-subtle rounded-bottom">
                <a
                  href="product-details.html"
                  class="text-dark fw-medium fs-16"
                >
                  {item.product.name}
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
                    {item.product.price}
                  </span>{" "}
                  $80 <small class="text-muted"> (30% Off)</small>
                  <label className="text-truncate">{`Wishlist Added on ${formatDate(
                    item.created
                  )}`}</label>
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
          <div className="remove-wishlist-box">
            <Button
              variant="danger"
              icon={<XIcon className="text-white" width={15} />}
              round={20}
              onClick={(e) => {
                updateWishlist(!item.isLiked, item.product._id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
