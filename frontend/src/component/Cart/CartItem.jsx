import React from "react";
import { TrashIcon, HeartIcon } from "../Common/Icon";

const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <div className="card cart-detail">
      <div className="card-body">
        <div className="row gy-3">
          <div className="col-sm-auto">
            <div className="rounded bg-light avatar-lg d-flex align-items-center justify-content-center">
              <img
                src={item.imageUrl || "/images/placeholder-image.png"}
                alt=""
                className="avatar-lg"
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="ms-lg-3">
              <a
                href={`/product/${item.id}`}
                className="fw-medium text-dark fs-18"
              >
                {item.name}
              </a>
              <div className="d-flex align-items-center gap-3 mt-2">
                <p className="text-dark fw-medium">
                  Color: <span className="text-muted">Dark</span>
                </p>
                <p className="text-dark fw-medium">
                  Size: <span className="text-muted">M</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="text-lg-end">
              <p className="fw-medium mb-0">Items Price</p>
              <p className="mt-2 mb-0 fw-semibold fs-17">
                ${item.price}
                <span className="fw-normal fs-14"> / Tax: $3.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer bg-light-subtle">
        <div className="row g-3">
          <div className="col-sm">
            <div className="d-flex gap-3">
              <button
                className="text-dark fs-14 d-flex align-items-center gap-1 btn btn-link"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                <TrashIcon />
                Remove
              </button>
              <button className="text-dark fs-14 d-flex align-items-center gap-1 ms-3 btn btn-link">
                <HeartIcon />
                Add Wishlist
              </button>
            </div>
          </div>
          <div className="col-sm-auto">
            <p className="text-dark fw-medium mb-0">
              Total: <span className="text-muted">${item.total}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
