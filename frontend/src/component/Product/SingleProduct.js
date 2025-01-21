import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { API_URL } from "../../constants";
import AddToCartButton from "../Cart/AddToCartButton";
import placeholder from "../../assets/images/placeholder.png";

const SingleProduct = ({ products }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch wishlist items
  const fetchWishlistItems = async () => {
    try {
      const response = await axios.get(`${API_URL}/wishlist`, {
        headers: { Authorization: `${token}` },
      });
      setWishlistItems(
        Array.isArray(response.data.products) ? response.data.products : []
      );
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    }
  };

  // Handle add/remove wishlist actions
  const handleWishlistUpdate = async (product) => {
    try {
      const isInWishlist = wishlistItems.some((item) => item.id === product.id);

      if (isInWishlist) {
        await axios.delete(`${API_URL}/wishlist/${product.id}`, {
          headers: { Authorization: `${token}` },
        });
        setWishlistItems((prev) =>
          prev.filter((item) => item.id !== product.id)
        );
      } else {
        const response = await axios.post(
          `${API_URL}/wishlist`,
          { productIds: [product.id], isLiked: true },
          {
            headers: { Authorization: `${token}` },
          }
        );
        setWishlistItems(
          Array.isArray(response.data.products) ? response.data.products : []
        );
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchWishlistItems();
    }
  }, [token]);

  return (
    <div className="row">
      {products.map((product) => {
        let imageUrl = "";
        try {
          const images = JSON.parse(product.images);
          imageUrl = Array.isArray(images) && images[0] ? images[0] : "";
        } catch (error) {
          console.error("Error parsing images JSON:", error);
        }

        const isInWishlist = wishlistItems.some(
          (item) => item.id === product.id
        );

        return (
          <div key={product.id} className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body bg-light-subtle rounded-bottom">
                {imageUrl ? (
                  <img
                    className="img-fluid"
                    src={imageUrl}
                    alt={product.name}
                  />
                ) : (
                  <img
                    className="img-fluid"
                    src={placeholder}
                    alt="Placeholder"
                  />
                )}
              </div>

              <div className="card-body item-body bg-light-subtle rounded-bottom">
                <Link
                  to={`/product/${product.id}`}
                  className="item-link d-flex flex-column h-100"
                >
                  <span className="text-dark fw-medium fs-16">
                    {product.name}
                  </span>
                </Link>
                <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                  <span className="text-muted text-decoration-line-through">
                    Rs {product.discount}
                  </span>
                  Rs {product.price}{" "}
                  <small className="text-muted">(30% Off)</small>
                </h4>
                <div className="mt-3">
                  <AddToCartButton product={product} />
                </div>

                <span className="position-absolute top-0 end-0 p-3">
                  <button
                    type="button"
                    className={`btn ${
                      isInWishlist ? "btn-danger" : "btn-soft-danger"
                    } avatar-sm d-inline-flex align-items-center justify-content-center fs-24 rounded-circle`}
                    onClick={() => handleWishlistUpdate(product)}
                  >
                    <FaHeart
                      style={{
                        fontSize: "32px",
                        color: isInWishlist ? "#dc3545" : "#6c757d",
                      }}
                    />
                  </button>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
