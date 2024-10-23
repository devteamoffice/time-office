import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddToWishList from "../Store/AddToWishList";
import axios from "axios";
import { HeartIcon } from "../Common/Icon";
import { API_URL } from "../../constants";
const SingleProduct = ({ authenticated }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch products from the API
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/product`); // Ensure this is the correct endpoint
      setProducts(response.data.products); // Assuming the API returns products in data.products
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to update the wishlist
  const updateWishlist = async (sku) => {
    try {
      const response = await axios.post(
        `${API_URL}/wishlist/${sku}`,
        { sku },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token for authentication
          },
        }
      );

      console.log("Wishlist updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts(); // Fetch products on component mount
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-6 col-xl-3">
          <div className="card">
            <Link
              to={`/product/${product.sku}`}
              className="item-link d-flex flex-column h-100"
            >
              <div className="card-body bg-light-subtle rounded-bottom">
                {product.images && product.images.length > 0 ? (
                  <img
                    className="img-fluid"
                    src={product.images[0]} // Display the first image
                    alt={product.name}
                  />
                ) : (
                  <img
                    className="img-fluid"
                    src="/images/placeholder-image.png" // Placeholder image
                    alt="Placeholder"
                  />
                )}
              </div>
              <div className="card-body item-body bg-light-subtle rounded-bottom">
                <a className="text-dark fw-medium fs-16">
                  {product.name}

                  {product.brand && (
                    <p className="by">
                      By <span>{product.brand}</span>
                    </p>
                  )}
                </a>
                <div class="my-1">
                  <div class="d-flex gap-2 align-items-center">
                    <ul class="d-flex text-warning m-0 fs-18 list-unstyled">
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
                      4.5
                      <span class="text-muted fs-13">(55 Review)</span>
                    </p>
                  </div>
                </div>
                <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                  <span className="text-muted text-decoration-line-through">
                    Rs {product.discount}
                  </span>
                  Rs {product.price} <small class="text-muted">(30% Off)</small>
                </h4>
              </div>
            </Link>
            <div class="mt-3">
              <div class="d-flex gap-2">
                <a
                  href="/cart"
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
              class="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center"
            >
              <HeartIcon />
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;
