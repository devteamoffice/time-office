import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";

const ProductFilter = ({ handleFilter }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/category`);
        setCategories(response.data.categories || []);
        setError("");
      } catch (err) {
        setError(err.message || "Failed to fetch categories");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (category) => {
    handleFilter(category);
  };

  return (
    <div className="col-lg-3">
      <div className="card- bg-light-subtle">
        <div className="card-header border-0">
          <div className="search-bar me-3 mb-1">
            <span>
              <i className="bx bx-search-alt"></i>
            </span>
            <input
              type="search"
              className="form-control"
              id="search"
              placeholder="Search ..."
            />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body border-light">
          <a
            href="#"
            className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
            data-bs-toggle="collapse"
            data-bs-target="#categories"
            aria-expanded="false"
            aria-controls="other"
          >
            Categories
            <i className="bx bx-chevron-down ms-auto fs-20"></i>
          </a>
          <div id="categories" className="collapse show">
            <div className="categories-list d-flex flex-column gap-2 mt-2">
              {categories.map((category) => (
                <div className="form-check" key={category.id}>
                  <input
                    type="radio"
                    className="form-check-input"
                    id={`category-${category.id}`}
                    name="category"
                    value={category.name}
                    onChange={() => handleCategoryChange(category.name)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`category-${category.id}`}
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <a
              href="#"
              className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
              data-bs-toggle="collapse"
              data-bs-target="#price"
              aria-expanded="false"
              aria-controls="other"
            >
              Product Price
              <i className="bx bx-chevron-down ms-auto fs-20"></i>
            </a>
            <div id="price" className="collapse show">
              <div className="categories-list d-flex flex-column gap-2 mt-2">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="all-price"
                  />
                  <label className="form-check-label" for="all-price">
                    All Price
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="price-1"
                  />
                  <label className="form-check-label" for="price-1">
                    Below $200 (145)
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="price-2"
                  />
                  <label className="form-check-label" for="price-2">
                    $200 - $500 (1,885)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="price-3"
                  />
                  <label className="form-check-label" for="price-3">
                    $500 - $800 (2,276)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="price-4"
                  />
                  <label className="form-check-label" for="price-4">
                    $800 - $1000 (12,676)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="price-5"
                  />
                  <label className="form-check-label" for="price-5">
                    $1000 - $1100 (13,123)
                  </label>
                </div>
                <h5 className="text-dark fw-medium mt-3">
                  Custom Price Range :
                </h5>
                <div
                  id="product-price-range"
                  data-slider-size="md"
                  className=""
                ></div>
                <div className="formCost d-flex gap-2 align-items-center mt-2">
                  <input
                    className="form-control form-control-sm text-center"
                    type="text"
                    id="minCost"
                    value="0"
                  />
                  <span className="fw-semibold text-muted">to</span>
                  <input
                    className="form-control form-control-sm text-center"
                    type="text"
                    id="maxCost"
                    value="1000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <a
              href="#"
              className="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0"
              data-bs-toggle="collapse"
              data-bs-target="#rating"
              aria-expanded="false"
              aria-controls="other"
            >
              Rating
              <i className="bx bx-chevron-down ms-auto fs-20"></i>
            </a>
            <div id="rating" className="collapse show">
              <div className="categories-list d-flex flex-column gap-2 mt-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="rating-number"
                    id="rate-1"
                  />
                  <label className="form-check-label" for="rate-1">
                    1 <i className="bx bxs-star text-warning"></i> & Above (437)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="rating-number"
                    id="rate-2"
                  />
                  <label className="form-check-label" for="rate-2">
                    2 <i className="bx bxs-star text-warning"></i> & Above (657)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="rating-number"
                    id="rate-3"
                  />
                  <label className="form-check-label" for="rate-3">
                    3 <i className="bx bxs-star text-warning"></i> & Above
                    (1,897)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="rating-number"
                    id="rate-4"
                  />
                  <label className="form-check-label" for="rate-4">
                    4 <i className="bx bxs-star text-warning"></i> & Above
                    (3,571)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <a href="#!" className="btn btn-primary w-100">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
