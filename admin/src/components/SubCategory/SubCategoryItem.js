import React, { useState, useEffect } from "react";
import Actions from "../Common/Actions";
import { API_URL } from "../../constants";
import axios from "axios";
import DeleteModal from "./DeleteModal";
import { SOCKET_URL } from "../../constants";
const SubCategoryItem = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (selectedSubCategory) {
      try {
        await axios.delete(`${API_URL}/subcategory/${selectedSubCategory.id}`);
        setSelectedSubCategory((prev) =>
          prev.filter(
            (subcategory) => subcategory.id !== selectedSubCategory.id
          )
        );
      } catch (error) {
        console.log("Error deleteing subcategory:", error);
      } finally {
        setSelectedSubCategory(null);
        setModalVisible(false);
      }
    }
  };
  useEffect(() => {
    const fetchAllSubCategories = async () => {
      try {
        // Fetch subcategories from the API
        const response = await axios.get(`${API_URL}/subcategory`);

        // Check if response data structure matches and update state
        setSubcategories(response.data); // Adjusted based on JSON structure
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllSubCategories();
  }, []);

  if (loading) return <p>Loading subcategories...</p>;
  if (!Array.isArray(subcategories) || subcategories.length === 0)
    return <p>No subcategories available.</p>;

  return (
    <>
      <DeleteModal
        subcategory={selectedSubCategory}
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)}
        isVisible={modalVisible}
      />
      {subcategories.map((subcategory) => (
        <tr key={subcategory.id}>
          <td>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`customCheck${subcategory.id}`}
              />
              <label
                className="form-check-label"
                htmlFor={`customCheck${subcategory.id}`}
              ></label>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <p className="text-dark fw-medium fs-15 mb-0">
                {subcategory.name}
              </p>
            </div>
          </td>
          <td>{subcategory.isActive ? "Active" : "Inactive"}</td>
          <td>
            {subcategory.created
              ? new Date(subcategory.created).toLocaleDateString()
              : "N/A"}
          </td>
          <td>{subcategory.categoryId}</td>
          <td>
            <Actions
              id={subcategory.id}
              name={subcategory.name}
              viewUrl={`${SOCKET_URL}/products?category=${subcategory.name}`}
              editUrl={`/subcategory/${subcategory.id}/edit`}
              deleteAction={() => {
                setSelectedSubCategory(subcategory); // Set the selected product for deletion
                setModalVisible(true); // Show the modal
              }}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default SubCategoryItem;
