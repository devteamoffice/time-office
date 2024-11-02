import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Actions from "../Common/Actions";
import { SOCKET_URL } from "../../constants";
const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const cartCount = useSelector((state) => state.cart.cartItems.length); // Get cart count from Redux

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/product`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (!Array.isArray(products) || products.length === 0)
    return <p>No products available.</p>;
  return (
    <>
      {products.map((product) => (
        <tr key={product.id}>
          <td>
            <div class="form-check ms-1">
              <input
                type="checkbox"
                class="form-check-input"
                id="customCheck2"
              />
              <label class="form-check-label" for="customCheck2">
                &nbsp;
              </label>
            </div>
          </td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <div class="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                <img
                  src="assets/images/product/p-1.png"
                  alt=""
                  class="avatar-md"
                />
              </div>
              <div>
                <a href="#!" class="text-dark fw-medium fs-15">
                  {product.name}
                </a>
                <p class="text-muted mb-0 mt-1 fs-13">
                  <span>Size : </span>S , M , L , Xl{" "}
                </p>
              </div>
            </div>
          </td>
          <td>Rs {product.price}</td>
          <td>
            <p class="mb-1 text-muted">
              <span class="text-dark fw-medium">{product.sku}</span>
            </p>
          </td>
          <td> {product.categoryId}</td>
          <td>
            {" "}
            <span class="badge p-1 bg-light text-dark fs-12 me-1">
              <i class="bx bxs-star align-text-top fs-14 text-warning me-1"></i>{" "}
              4.5
            </span>{" "}
            55 Review
          </td>
          <td>
            <Actions
              viewUrl={`${SOCKET_URL}/product/${product.id}`}
              editUrl={`/product/${product.id}/edit`}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductItem;
