import React, { useState } from "react";
import { APP_URL, API_URL } from "../../constants";
import Actions from "../Common/Actions";
import DeleteModal from "../Common/DeleteModal";
import axios from "axios";
const ProductItem = ({ products, currentPage, itemNo }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/product/delete/${productId}`, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      // Optionally, handle deletion in the parent component
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const startIndex = (currentPage - 1) * itemNo;
  const paginatedProducts = products.slice(startIndex, startIndex + itemNo);

  return (
    <>
      <DeleteModal
        onConfirm={() => handleDelete(selectedProduct.id)}
        onCancel={() => setModalVisible(false)}
        isVisible={modalVisible}
        item={selectedProduct}
        itemType="product"
      />

      {paginatedProducts.map((product) => (
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
                  src={JSON.parse(product.images)?.[0] || ""}
                  alt="Product"
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
              <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
              4.5
            </span>
            55 Reviews
          </td>
          <td>
            <Actions
              id={product.id}
              name={product.name}
              viewUrl={`${APP_URL}/product/${product.id}`}
              editUrl={`/product/${product.id}/edit`}
              deleteAction={() => {
                setSelectedProduct(product);
                setModalVisible(true);
              }}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductItem;
