import React, { useState, useEffect } from "react";
import Actions from "../Common/Actions";
import { API_URL } from "../../constants";
import axios from "axios";

const SubCategoryItem = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchAllSubCategories();
  }, []);

  if (loading) return <p>Loading subcategories...</p>;
  if (!Array.isArray(subcategories) || subcategories.length === 0)
    return <p>No subcategories available.</p>;

  return (
    <>
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
            <Actions />
          </td>
        </tr>
      ))}
    </>
  );
};

export default SubCategoryItem;
