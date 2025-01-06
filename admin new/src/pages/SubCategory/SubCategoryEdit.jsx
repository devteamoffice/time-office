import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../constants";
import { useParams } from "react-router-dom";
const SubCategoryEdit = () => {
  const { id } = useParams(); // Retrieve subcategory ID from the URL
  const [title, setTitle] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/category/`);
        if (
          response.status === 200 &&
          Array.isArray(response.data.categories)
        ) {
          setCategories(response.data.categories);
        } else {
          toast.error("Fetched data is not in the expected format.");
        }
      } catch (error) {
        toast.error("Failed to fetch categories");
      }
    };

    const fetchSubCategory = async () => {
      try {
        const response = await axios.get(`${API_URL}/subcategory/${id}`);
        if (response.status === 200) {
          const { name, isActive, categoryId } = response.data;
          setTitle(name);
          setIsActive(isActive);
          setCategoryId(categoryId);
        } else {
          toast.error("Failed to fetch subcategory details");
        }
      } catch (error) {
        toast.error("Error fetching subcategory details");
      }
    };

    fetchCategories();
    if (id) fetchSubCategory(); // Fetch subcategory only if ID exists
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: title,
      isActive,
      categoryId,
    };

    try {
      const response = await axios.put(`${API_URL}/subcategory/${id}`, payload);
      if (response.status === 200) {
        toast.success("Subcategory updated successfully!");
      } else {
        toast.error("Failed to update subcategory");
      }
    } catch (error) {
      toast.error("Error updating subcategory");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-xl-9 col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Edit Subcategory</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Title */}
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="subcategory-title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        id="subcategory-title"
                        className="form-control"
                        placeholder="Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* IsActive */}
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="is-active" className="form-label">
                        Is Active
                      </label>
                      <select
                        id="is-active"
                        className="form-control"
                        value={isActive}
                        onChange={(e) => setIsActive(e.target.value === "true")}
                        required
                      >
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <select
                        id="category"
                        className="form-control"
                        value={categoryId} // Changed value to categoryId
                        onChange={(e) => setCategoryId(e.target.value)} // Updated handler to set categoryId
                        required
                      >
                        <option value="">Select Category</option>
                        {Array.isArray(categories) &&
                          categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit and Reset Buttons */}
                <div className="p-3 bg-light rounded">
                  <div className="row justify-content-end g-2">
                    <div className="col-lg-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Add Subcategory"}
                      </button>
                    </div>
                    <div className="col-lg-3">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100"
                        onClick={() => {
                          setTitle("");
                          setIsActive(false);
                          setCategoryId(""); // Reset categoryId on reset
                        }}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryEdit;
