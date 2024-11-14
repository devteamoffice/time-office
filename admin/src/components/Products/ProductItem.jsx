import React, { useState, useEffect } from "react";
import { API_URL, APP_URL } from "../../constants";
import axios from "axios";
import Actions from "../Common/Actions";
import DeleteModal from "../Common/DeleteModal";

const ProductItem = ({ currentPage, itemNo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
        setSelectedProduct(null);
        setModalVisible(false);
      }
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (!Array.isArray(products) || products.length === 0)
    return <p>No products available.</p>;

  // Determine the start and end indices for pagination
  const startIndex = (currentPage - 1) * itemNo;
  const paginatedProducts = products.slice(startIndex, startIndex + itemNo);

  return (
    <>
      <DeleteModal
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)}
        isVisible={modalVisible}
        item={selectedProduct}
        itemType="product"
      />

      {paginatedProducts.map((product) => {
        // Parse the images JSON string
        let imageUrl = "";
        try {
          const images = JSON.parse(product.images);
          imageUrl = Array.isArray(images) && images[0] ? images[0] : "";
        } catch (error) {
          console.error("Error parsing images JSON:", error);
        }

        return (
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
                  <img src={imageUrl} alt="Product" className="avatar-md" />
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
        );
      })}
    </>
  );
};

export default ProductItem;
