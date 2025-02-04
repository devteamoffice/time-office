import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";
import ProductImageUploader from "./ProductImageUploader";

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
  const [uploadedImages, setUploadedImages] = useState([]);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    if (formData.category) {
      axios
        .get(`${API_URL}/subcategory?categoryId=${formData.category}`)
        .then((response) => {
          console.log(response.data);
          setSubcategories(response.data || []);
        })
        .catch((err) => {
          console.error("Error fetching subcategories:", err);
          setError("Failed to fetch subcategories.");
        });
    } else {
      setSubcategories([]); // Reset subcategories when no category is selected
    }
  }, [formData.category]);

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
          setUploadedImages(product.images || []);
        })
        .catch((err) => {
          console.error("Error fetching product details:", err);
          setError("Failed to fetch product details.");
        });
    }
  }, [productId]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
      ...(id === "category" ? { subcategory: "" } : {}), // Reset subcategory when category changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("categoryId", formData.category);
    formDataToSubmit.append("subcategoryId", formData.subcategory);
    // Append form fields
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });

    // Append image files
    uploadedImages.forEach((file) => formDataToSubmit.append("images", file));

    const token = localStorage.getItem("token");
    console.log(token);
    const action = productId
      ? axios.put(`${API_URL}/product/${productId}`, formDataToSubmit, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
      : axios.post(`${API_URL}/product/add`, formDataToSubmit, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "multipart/form-data",
          },
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

      <div className="col-xl-3 col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="mt-3">
              <h4>{formData.name || "Product Name"}</h4>
              <h5 className="text-dark fw-medium mt-3">Price:</h5>
              <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
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
                  {productId ? "Update Product" : "Create Product"}
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
        <ProductImageUploader
          existingImages={uploadedImages}
          onImagesChange={setUploadedImages}
        />

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
