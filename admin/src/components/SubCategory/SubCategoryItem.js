import React, { useState, useEffect } from "react";
import Actions from "../Common/Actions";
import { API_URL } from "../../constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
const SubCategoryItem = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllSubCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/subcategory`);
      setSubcategories(response.data.subcategories);
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
      {subcategories.map((subcategories) => (
        <tr>
          <td>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="customCheck2"
              />
              <label class="form-check-label" for="customCheck2"></label>
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
              <p class="text-dark fw-medium fs-15 mb-0">{subcategories.name}</p>
            </div>
          </td>
          <td>{subcategories.categoryId}</td>
          <td>Seller</td>
          <td>FS16276</td>
          <td>46233</td>
          <td>
            <Actions />
          </td>
        </tr>
      ))}
    </>
  );
};

export default SubCategoryItem;
