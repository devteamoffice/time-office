import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../containers/Product/actions";
const ProductAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    sku: "",
    isActive: "",
    description: "",
    price: "",
    discount: "",
    tax: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    navigate("/"); // Use navigate here after dispatch
  };

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-4">
        <div className="card">
          <div className="card-body">
            <img
              src="assets/images/product/p-1.png"
              alt=""
              className="img-fluid rounded bg-light"
            />
            <div className="mt-3">
              <h4>
                Men Black Slim Fit T-shirt
                <span className="fs-14 text-muted ms-1">(Fashion)</span>
              </h4>
              <h5 className="text-dark fw-medium mt-3">Price :</h5>
              <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                <span className="text-muted text-decoration-line-through">
                  $100
                </span>{" "}
                $80 <small className="text-muted"> (30% Off)</small>
              </h4>
              {/* Sizes */}
              <div className="mt-3">
                <h5 className="text-dark fw-medium">Size :</h5>
                <div className="d-flex flex-wrap gap-2">
                  {/* Size checkboxes */}
                </div>
              </div>
              {/* Colors */}
              <div className="mt-3">
                <h5 className="text-dark fw-medium">Colors :</h5>
                <div className="d-flex flex-wrap gap-2">
                  {/* Color checkboxes */}
                </div>
              </div>
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
                    <option value="Fashion">Fashion</option>
                    <option value="Electronics">Electronics</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="row">
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
