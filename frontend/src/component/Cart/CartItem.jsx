import React, { useState } from "react";
import { TrashIcon, HeartIcon } from "../Common/Icon";
import { API_URL } from "../../constants";
// Define the API URLs

const WISHLIST_URL = `${API_URL}/wishlist`; // Wishlist endpoint
const REMOVE_FROM_CART_URL = (cartId, productId) =>
  `${API_URL}/cart/${cartId}/${productId}`; // Remove from cart URL

const CartItem = ({ item, handleRemoveFromCart, handleQuantityChange }) => {
  const product = item.product; // Access the product data from the cart item
  const [quantity, setQuantity] = useState(item.quantity); // Set initial quantity
  const token = localStorage.getItem("token");
  // Handle quantity changes
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    handleQuantityChange(item.id, quantity + 1); // Update parent component or backend
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      handleQuantityChange(item.id, quantity - 1); // Update parent component or backend
    }
  };

  // Parse the images string to array if not already an array
  const images = Array.isArray(product.images)
    ? product.images
    : JSON.parse(product.images || "[]");

  // Function to add product to wishlist
  const addToWishlist = async () => {
    try {
      const response = await fetch(
        WISHLIST_URL,
        {
          headers: { Authorization: `${token}` },
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product.id, // Assuming you need the product ID
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add to wishlist");
      }

      // Handle success (e.g., show a message or update UI)
      console.log("Product added to wishlist!");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  // Function to remove product from the cart
  const removeFromCart = async () => {
    try {
      const response = await fetch(
        REMOVE_FROM_CART_URL(item.cartId, product.id),
        {
          headers: { Authorization: `${token}` },
        },
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove from cart");
      }

      // Handle success (e.g., update UI or call parent handler)
      handleRemoveFromCart(item.id); // Call parent component handler to remove the item from UI
      console.log("Product removed from cart!");
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <div className="card cart-detail">
      <div className="card-body">
        <div className="row gy-3">
          <div className="col-sm-auto">
            <div className="rounded bg-light avatar-lg d-flex align-items-center justify-content-center">
              <img
                src={images[0] || "/images/placeholder-image.png"}
                alt={product.name}
                className="avatar-lg"
                style={{ maxHeight: "100px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="ms-lg-3">
              <a
                href={`/product/${product.id}`}
                className="fw-medium text-dark fs-18"
              >
                {product.name}
              </a>
              <div className="d-flex align-items-center gap-3 mt-2">
                <p className="text-dark fw-medium">
                  Quantity:
                  <span className="text-muted">{quantity}</span>
                </p>
                <div className="quantity-controls d-flex align-items-center">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="btn btn-sm btn-outline-dark"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <button
                    onClick={handleIncreaseQuantity}
                    className="btn btn-sm btn-outline-dark ms-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="text-lg-end">
              <p className="fw-medium mb-0">Items Price</p>
              <p className="mt-2 mb-0 fw-semibold fs-17">
                Rs {product.price}
                <span className="fw-normal fs-14"> / Tax: Rs 3.00</span>
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
                onClick={removeFromCart}
              >
                <TrashIcon />
                Remove
              </button>
              <button
                className="text-dark fs-14 d-flex align-items-center gap-1 ms-3 btn btn-link"
                onClick={addToWishlist}
              >
                <HeartIcon />
                Add to Wishlist
              </button>
            </div>
          </div>
          <div className="col-sm-auto">
            <p className="text-dark fw-medium mb-0">
              Total: <span className="text-muted">${item.totalPrice}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
