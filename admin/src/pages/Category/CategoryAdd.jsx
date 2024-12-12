import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../containers/Category/actions";

const CategoryAdd = () => {
  const dispatch = useDispatch();

  const [categoryTitle, setCategoryTitle] = useState("");
  const [isActive, setIsActive] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!categoryTitle.trim()) {
      alert("Category title is required!");
      return;
    }
    if (isActive === "") {
      alert("Please select the active status!");
      return;
    }

    // Dispatch the action with form data
    dispatch(
      addCategory({
        name: categoryTitle,
        isActive: isActive === "True",
        categorySlug,
      })
    );

    // Reset form fields
    setCategoryTitle("");
    setIsActive("");
    setCategorySlug("");
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-xl-9 col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add New Category</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Category Title Input */}
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="category-title" className="form-label">
                        Category Title
                      </label>
                      <input
                        type="text"
                        id="category-title"
                        className="form-control"
                        placeholder="Enter Title"
                        value={categoryTitle}
                        onChange={(e) => setCategoryTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="category-slug" className="form-label">
                        Category Slug
                      </label>
                      <input
                        type="text"
                        id="category-slug"
                        className="form-control"
                        placeholder="Enter Slug"
                        value={categorySlug}
                        onChange={(e) => setCategorySlug(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Is Active Dropdown */}
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="is-active" className="form-label">
                        Is Active?
                      </label>
                      <select
                        className="form-control"
                        id="is-active"
                        value={isActive}
                        onChange={(e) => setIsActive(e.target.value)}
                      >
                        <option value="">Select option</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-3 bg-light mb-3 rounded">
                  <div className="row justify-content-end g-2">
                    <div className="col-lg-2">
                      <button
                        type="submit"
                        className="btn btn-outline-secondary w-100"
                      >
                        Save Changes
                      </button>
                    </div>
                    <div className="col-lg-2">
                      <button
                        type="button"
                        className="btn btn-primary w-100"
                        onClick={() => {
                          setCategoryTitle("");
                          setIsActive("");
                        }}
                      >
                        Cancel
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

export default CategoryAdd;
