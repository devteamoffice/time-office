import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleRemoveFromCart,
  handleIncrement,
  handleDecrement,
} from "../../containers/Cart/actions";
import { TrashIcon, HeartIcon } from "../Common/Icon";
const CartItem = (props) => {
  const { cartItems, handleRemoveFromCart } = props;
  const handleProductClick = () => {
    props.toggleCart();
  };
  return (
    <div className="cart-container">
      {cartItems.map((item, index) => (
        <div class="card cart-detail">
          <div class="card-body">
            <div class="row gy-3">
              <div class="col-sm-auto">
                <div class="rounded bg-light avatar-lg d-flex align-items-center justify-content-center">
                  <img
                    src={`${
                      item.imageUrl
                        ? item.imageUrl
                        : "/images/placeholder-image.png"
                    }`}
                    alt=""
                    class="avatar-lg"
                  />
                </div>
              </div>
              <div class="col-sm">
                <div class="ms-lg-3">
                  <a
                    href={`/product/${item.id}`}
                    class="fw-medium text-dark fs-18"
                  >
                    {item.name}
                  </a>
                  <div class="d-flex align-items-center gap-3 mt-2">
                    <p class="text-dark fw-medium">
                      Color : <span class="text-muted"> Dark </span>
                    </p>
                    <p class="text-dark fw-medium">
                      Size : <span class="text-muted"> M </span>
                    </p>
                  </div>
                  <div class="quantity mt-2">
                    <div class="input-step border bg-body-secondary p-1 rounded d-inline-flex overflow-visible">
                      <button
                        type="button"
                        class="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        class="text-dark text-center border-0 bg-body-secondary rounded h-100"
                        value="1"
                        min="0"
                        max="100"
                        readonly=""
                      />
                      <button
                        type="button"
                        class="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-auto">
                <div class="text-lg-end">
                  <p class="fw-medium mb-0">Items Price</p>
                  <p class="mt-2 mb-0 fw-semibold fs-17">
                    {item.price}{" "}
                    <span class="fw-normal fs-14">/ $3.00 Tex</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer bg-light-subtle">
            <div class="row g-3">
              <div class="col-sm">
                <div class="d-flex gap-3">
                  <a
                    href="#!"
                    class="text-dark fs-14 d-flex align-items-center gap-1"
                  >
                    <TrashIcon />
                    Remove
                  </a>
                  <a
                    href="#!"
                    class="text-dark fs-14 d-flex align-items-center gap-1 ms-3"
                  >
                    <HeartIcon />
                    Add Wishlist
                  </a>
                </div>
              </div>
              <div class="col-sm-auto">
                <p class="text-dark fw-medium mb-0">
                  Total : <span class="text-muted">$83.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
