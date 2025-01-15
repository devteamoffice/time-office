import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";

const ProductAdd = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subcategory: "",
    sku: "",
    slug: "",
    isActive: "",
    description: "",
    price: "",
    discount: "",
    tax: "",
  });
  const [subcategories, setSubcategories] = useState([]);

  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  // Fetch categories and product details
  useEffect(() => {
    // Fetch categories
    axios
      .get(`${API_URL}/category`)
      .then((response) => {
        setCategories(response.data.categories || []);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setError("Failed to fetch categories.");
      });

    // If editing an existing product
    if (productId) {
      axios
        .get(`${API_URL}/product/${productId}`)
        .then((response) => {
          const product = response.data;
          setFormData({
            name: product.name || "",
            category: product.category || "",
            sku: product.sku || "",
            slug: product.slug || "",
            isActive: product.isActive ? "true" : "false",
            description: product.description || "",
            price: product.price || "",
            discount: product.discount || "",
            tax: product.tax || "",
          });
          setImages(product.images || []);
        })
        .catch((err) => {
          console.error("Error fetching product details:", err);
          setError("Failed to fetch product details.");
        });
    }
  }, [productId]);
  useEffect(() => {
    if (formData.category) {
      axios
        .get(`${API_URL}/subcategory?categoryId=${formData.category.id}`) // Pass category ID as a query parameter
        .then((response) => {
          setSubcategories(response.data.subcategories || []);
        })
        .catch((err) => {
          console.error("Error fetching subcategories:", err);
          setSubcategories([]); // Clear subcategories if there's an error
        });
    } else {
      setSubcategories([]); // Clear subcategories if no category is selected
    }

    // Reset subcategory field if the category changes
    setFormData((prevData) => ({ ...prevData, subcategory: "" }));
  }, [formData.category]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const action = productId
      ? axios.put(`${API_URL}/product/${productId}`, formData, {
          headers: { Authorization: `${token}` },
        })
      : axios.post(`${API_URL}/product/add`, formData, {
          headers: { Authorization: `${token}` },
        });

    action
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Error saving product:", err);
        setError("Failed to save product.");
      });
  };
  return (
    <div className="row">
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Product Card */}
      <div className="col-xl-3 col-lg-4">
        <div className="card">
          <div className="card-body">
            {images.length > 0 ? (
              <div className="carousel">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img.url}
                    alt={`Product Image ${index + 1}`}
                    className="img-fluid rounded bg-light"
                  />
                ))}
              </div>
            ) : (
              <img
                src="assets/images/product/placeholder.png"
                alt="Placeholder"
                className="img-fluid rounded bg-light"
              />
            )}
            <div className="mt-3">
              <h4>{formData.name || "Product Name"}</h4>
              <h5 className="text-dark fw-medium mt-3">Price:</h5>
              <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                <span className="text-muted text-decoration-line-through">
                  {formData.discount
                    ? `$${(
                        formData.price *
                        (1 + formData.discount / 100)
                      ).toFixed(2)}`
                    : ""}
                </span>{" "}
                ${formData.price}{" "}
                {formData.discount && (
                  <small className="text-muted">
                    ({formData.discount}% Off)
                  </small>
                )}
              </h4>
            </div>
          </div>

          <div className="card-footer bg-light-subtle">
            <div className="row g-2">
              <div className="col-lg-6">
                <button
                  onClick={handleSubmit}
                  className="btn btn-outline-secondary w-100"
                >
                  Create Product
                </button>
              </div>
              <div className="col-lg-6">
                <button
                  onClick={() => navigate("/")}
                  className="btn btn-primary w-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-9 col-lg-8">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Add Product Photo</h4>
          </div>
          <div class="card-body">
            <form
              class="dropzone"
              id="myAwesomeDropzone"
              data-plugin="dropzone"
              data-previews-container="#file-previews"
              data-upload-preview-template="#uploadPreviewTemplate"
            >
              <div class="fallback">
                <input name="file" type="file" multiple />
              </div>
              <div class="dz-message needsclick">
                <i class="bx bx-cloud-upload fs-48 text-primary"></i>
                <h3 class="mt-4">
                  Drop your images here, or{" "}
                  <span class="text-primary">click to browse</span>
                </h3>
                <span class="text-muted fs-13">
                  1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are
                  allowed
                </span>
              </div>
            </form>
          </div>
        </div>
        {/* Product Photo and Form Section */}
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Product Information</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Item Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="category" className="form-label">
                    Product Category
                  </label>
                  <select
                    id="category"
                    className="form-control"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Choose a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>{" "}
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <label htmlFor="subcategory" className="form-label">
                    Subcategory
                  </label>
                  <select
                    id="subcategory"
                    className="form-control"
                    value={formData.subcategory}
                    onChange={handleChange}
                    disabled={!formData.category} // Disable if no category is selected
                  >
                    <option value="">Choose a subcategory</option>
                    {subcategories.map((subcategory) => (
                      <option key={subcategory.id} value={subcategory.id}>
                        {subcategory.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="sku" className="form-label">
                      SKU
                    </label>
                    <input
                      type="text"
                      id="sku"
                      className="form-control"
                      placeholder="SKU"
                      value={formData.sku}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <label htmlFor="isActive" className="form-label">
                    Is Active
                  </label>
                  <select
                    id="isActive"
                    className="form-control"
                    value={formData.isActive}
                    onChange={handleChange}
                  >
                    <option value="">Choose an option</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label htmlFor="slug" className="form-label">
                      Slug
                    </label>
                    <textarea
                      id="slug"
                      className="form-control bg-light-subtle"
                      rows="2"
                      placeholder="Product Slug"
                      value={formData.slug}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      id="description"
                      className="form-control bg-light-subtle"
                      rows="7"
                      placeholder="Product description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Pricing Details */}
              <div className="row">
                <div className="col-lg-4">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    placeholder="0"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <label htmlFor="discount" className="form-label">
                    Discount
                  </label>
                  <input
                    type="number"
                    id="discount"
                    className="form-control"
                    placeholder="0"
                    value={formData.discount}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-4">
                  <label htmlFor="tax" className="form-label">
                    Tax
                  </label>
                  <input
                    type="number"
                    id="tax"
                    className="form-control"
                    placeholder="0"
                    value={formData.tax}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="p-3 bg-light mb-3 rounded">
          <div className="row justify-content-end g-2">
            <div className="col-lg-2">
              <button
                onClick={handleSubmit}
                className="btn btn-outline-secondary w-100"
              >
                Create Product
              </button>
            </div>
            <div className="col-lg-2">
              <button
                onClick={() => navigate("/")}
                className="btn btn-primary w-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
