import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";

const ProductFilter = ({ handleFilter }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [priceRange, setPriceRange] = useState(""); // State for selected price range

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

  const handleCategoryChange = (categorySlug) => {
    handleFilter(categorySlug, priceRange); // Pass the category slug and selected price range to handleFilter
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
    handleFilter(null, range); // Only pass price range if category isn't selected
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
                    value={category.slug}
                    onChange={() => handleCategoryChange(category.slug)}
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
                    type="radio"
                    className="form-check-input"
                    id="price-all"
                    name="price"
                    value="all"
                    onChange={() => handlePriceChange("")}
                  />
                  <label className="form-check-label" htmlFor="price-all">
                    All Price
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="price-1"
                    name="price"
                    value="0-1000"
                    onChange={() => handlePriceChange("0-1000")}
                  />
                  <label className="form-check-label" htmlFor="price-1">
                    $0 - $1000
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="price-2"
                    name="price"
                    value="1000-5000"
                    onChange={() => handlePriceChange("1000-5000")}
                  />
                  <label className="form-check-label" htmlFor="price-2">
                    $1000 - $5000
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="price-3"
                    name="price"
                    value="5000-10000"
                    onChange={() => handlePriceChange("5000-10000")}
                  />
                  <label className="form-check-label" htmlFor="price-3">
                    $5000 - $10000
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="price-4"
                    name="price"
                    value="10000-above"
                    onChange={() => handlePriceChange("10000-above")}
                  />
                  <label className="form-check-label" htmlFor="price-4">
                    $10000 and above
                  </label>
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
                  <label className="form-check-label" htmlFor="rate-1">
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
                  <label className="form-check-label" htmlFor="rate-2">
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
                  <label className="form-check-label" htmlFor="rate-3">
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
                  <label className="form-check-label" htmlFor="rate-4">
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
