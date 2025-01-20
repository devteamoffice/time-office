import React, { useState } from "react";
import { TrashIcon, HeartIcon } from "../Common/Icon";
import { API_URL } from "../../constants";
import axios from "axios";
import placeholder from "../../assets/images/placeholder.png";

const CartItem = ({ item, handleRemoveFromCart, handleQuantityChange }) => {
  const product = item?.product || {};
  const [quantity, setQuantity] = useState(item?.quantity || 1);
  const token = localStorage.getItem("token");

  const imageUrl = product.images?.length > 0 ? product.images[0] : placeholder;

  const addToWishlist = async () => {
    try {
      await axios.post(
        `${API_URL}/wishlist`,
        { productId: product.id },
        { headers: { Authorization: `${token}` } }
      );
      console.log("Product added to wishlist!");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  const removeFromCart = async () => {
    try {
      await axios.delete(`${API_URL}/cart/${item?.cartId}/${product.id}`, {
        headers: { Authorization: `${token}` },
      });
      handleRemoveFromCart(item.id);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <div className="card cart-detail">
      <div className="card-body">
        <div className="row gy-3">
          <div className="col-sm-auto">
            <div className="rounded bg-light avatar-lg">
              <img
                src={imageUrl}
                alt={product.name || "Product"}
                className="avatar-lg"
                style={{ maxHeight: "100px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="ms-lg-3">
              <a
                href={`/product/${product.id || "#"}`}
                className="fw-medium text-dark fs-18"
              >
                {product.name || "Unknown Product"}
              </a>
              <div className="d-flex align-items-center gap-3 mt-2">
                <p className="text-dark fw-medium">
                  Quantity: <span className="text-muted">{quantity}</span>
                </p>
                <div className="quantity-controls d-flex align-items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, quantity - 1)}
                    className="btn btn-sm btn-outline-dark"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.id, quantity + 1)}
                    className="btn btn-sm btn-outline-dark ms-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-auto">
            <p className="fw-medium mb-0">Price: Rs {product.price || 0}</p>
          </div>
        </div>
      </div>
      <div className="card-footer bg-light-subtle">
        <div className="row g-3">
          <div className="col-sm">
            <button
              className="text-dark fs-14 btn btn-link"
              onClick={removeFromCart}
            >
              <TrashIcon /> Remove
            </button>
            <button
              className="text-dark fs-14 btn btn-link ms-3"
              onClick={addToWishlist}
            >
              <HeartIcon /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
