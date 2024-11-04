import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";
import { API_URL } from "../../constants";

const ListTable = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/category`);
        setCategories(response.data.categories);
      } catch (err) {
        setError("Failed to fetch categories");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <table className="table align-middle mb-0 table-hover table-centered">
      <thead className="bg-light-subtle">
        <tr>
          <th style={{ width: "20px" }}>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
              />
              <label
                className="form-check-label"
                htmlFor="customCheck1"
              ></label>
            </div>
          </th>
          <th>Categories</th>
          <th>State</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan="5">Loading categories...</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan="5">{error}</td>
          </tr>
        ) : (
          categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
