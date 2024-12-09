import React, { useState } from "react";
import Actions from "../Common/Actions";
import axios from "axios";
import { API_URL } from "../../constants";
import DeleteModal from "../Common/DeleteModal";
import { SOCKET_URL } from "../../constants";
const CategoryItem = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (selectedCategory) {
      try {
        await axios.delete(`${API_URL}/category/${selectedCategory.id}`);
        setSelectedCategory((prev) =>
          prev.filter((category) => category.id !== selectedCategory.id)
        );
      } catch (error) {
        console.error("Error deleting category:", error);
      } finally {
        setSelectedCategory(null);
        setModalVisible(false);
      }
    }
  };

  return (
    <>
      <DeleteModal
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)}
        isVisible={modalVisible}
        item={selectedCategory}
        itemType="category"
      />
      <tr>
        <td>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`customCheck${category.id}`}
            />
            <label
              className="form-check-label"
              htmlFor={`customCheck${category.id}`}
            ></label>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center gap-2">
            <p className="text-dark fw-medium fs-15 mb-0">{category.name}</p>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center gap-2">
            <p className="text-dark fw-medium fs-15 mb-0">{category.slug}</p>
          </div>
        </td>

        <td>{category.isActive ? "Active" : "Inactive"}</td>
        <td>
          <div className="d-flex align-items-center gap-2">
            <p className="text-dark fw-medium fs-15 mb-0">
              {category.productCount}
            </p>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center gap-2">
            <p className="text-dark fw-medium fs-15 mb-0">
              {category.subcategoryCount}
            </p>
          </div>
        </td>
        <td>
          {category.created
            ? new Date(category.created).toLocaleDateString()
            : "N/A"}
        </td>
        <td>
          <Actions
            id={category.id}
            name={category.name}
            viewUrl={`${SOCKET_URL}/products?category=${category.name}`}
            editUrl={`/category/${category.id}/edit`}
            deleteAction={() => {
              setSelectedCategory(category); // Set the selected product for deletion
              setModalVisible(true); // Show the modal
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default CategoryItem;
