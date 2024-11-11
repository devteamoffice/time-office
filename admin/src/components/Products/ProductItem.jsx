import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { useSelector } from "react-redux";
import axios from "axios";
import Actions from "../Common/Actions";
import { SOCKET_URL } from "../../constants";
import DeleteModal from "../Common/DeleteModal";
const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage the selected product for deletion
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

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

  const handleDelete = async () => {
    if (selectedProduct) {
      try {
        await axios.delete(`${API_URL}/product/${selectedProduct.id}`);
        setProducts((prev) =>
          prev.filter((product) => product.id !== selectedProduct.id)
        );
      } catch (error) {
        console.error("Error deleting product:", error);
      } finally {
        setSelectedProduct(null); // Clear the selection after deletion
        setModalVisible(false); // Hide the modal after deletion
      }
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (!Array.isArray(products) || products.length === 0)
    return <p>No products available.</p>;

  return (
    <>
      <DeleteModal
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)} // Close the modal without deleting
        isVisible={modalVisible}
        item={selectedProduct}
        itemType="product"
      />

      {products.map((product) => (
        <tr key={product.id}>
          <td>
            <div className="form-check ms-1">
              <input
                type="checkbox"
                className="form-check-input"
                id={`customCheck-${product.id}`}
              />
              <label
                className="form-check-label"
                htmlFor={`customCheck-${product.id}`}
              >
                &nbsp;
              </label>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                <img
                  src="assets/images/product/p-1.png"
                  alt=""
                  className="avatar-md"
                />
              </div>
              <div>
                <a href="#!" className="text-dark fw-medium fs-15">
                  {product.name}
                </a>
              </div>
            </div>
          </td>
          <td>Rs {product.price}</td>
          <td>
            <p className="mb-1 text-muted">
              <span className="text-dark fw-medium">{product.sku}</span>
            </p>
          </td>
          <td>{product.categoryId}</td>
          <td>
            <span className="badge p-1 bg-light text-dark fs-12 me-1">
              <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>{" "}
              4.5
            </span>
            55 Reviews
          </td>
          <td>
            <Actions
              id={product.id}
              name={product.name}
              viewUrl={`${SOCKET_URL}/product/${product.id}`}
              editUrl={`/product/${product.id}/edit`}
              deleteAction={() => {
                setSelectedProduct(product); // Set the selected product for deletion
                setModalVisible(true); // Show the modal
              }}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductItem;
