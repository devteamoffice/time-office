import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../constants";
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";
import ProductEditCard from "./ProductEditCard";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dropzoneRef = useRef(null);
  const token = localStorage.getItem("token");
  // Initializing formData state to manage all fields
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    slug: "",
    price: 0,
    selectedCategory: "",
    sku: "",
    isActive: false,
    tax: "",
    images: [], // To store images
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]); // State to hold brands data
  const [error, setError] = useState(null);

  // Initialize Dropzone and handle image previews
  useEffect(() => {
    if (!dropzoneRef.current) {
      const dropzone = new Dropzone("#myAwesomeDropzone", {
        url: "#", // Not used as the images are handled manually
        autoProcessQueue: false,
        addRemoveLinks: true,
        acceptedFiles: "image/*",
        init() {
          // Add event listener for adding files
          this.on("addedfile", (file) => {
            const reader = new FileReader();
            reader.onload = (event) => {
              setFormData((prevData) => ({
                ...prevData,
                images: [
                  ...prevData.images,
                  { file, preview: event.target.result },
                ],
              }));
              toast.info(`Image "${file.name}" added.`);
            };
            reader.readAsDataURL(file);
          });

          // Add event listener for removing files
          this.on("removedfile", (file) => {
            setFormData((prevData) => ({
              ...prevData,
              images: prevData.images.filter((image) => image.file !== file),
            }));
            toast.info(`Image "${file.name}" removed.`);
          });
        },
      });
      dropzoneRef.current = dropzone;
    }

    return () => {
      // Cleanup Dropzone instance
      if (dropzoneRef.current) {
        dropzoneRef.current.destroy();
        dropzoneRef.current = null;
      }
    };
  }, []);

  // Fetch product, categories, and brands
  useEffect(() => {
    const fetchProductAndCategoriesAndBrands = async () => {
      try {
        // Fetch product data
        const productResponse = await axios.get(`${API_URL}/product/${id}`);
        const productData = productResponse.data.product;

        // Fetch categories data
        const categoriesResponse = await axios.get(`${API_URL}/category`);
        const categoriesData = categoriesResponse.data.categories;

        // Fetch brands data
        const brandsResponse = await axios.get(`${API_URL}/brand`, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        const brandsData = brandsResponse.data.brands;

        setFormData((prevData) => ({
          ...prevData,
          name: productData.name || "",
          brand: productData.brand || "",
          description: productData.description || "",
          isActive: productData.isActive || false,
          price: productData.price || 0,
          selectedCategory: productData.category || "",
          sku: productData.sku || "",
          slug: productData.slug || "",
          images: Array.isArray(productData.images) ? productData.images : [], // Ensure images is an array
        }));

        setCategories(categoriesData);
        setBrands(brandsData); // Set the brands in state
      } catch (err) {
        console.error("Failed to fetch product, categories, or brands:", err);
        setError("Failed to load data. Please try again.");
        toast.error("An error occurred while loading data.");
      }
    };

    fetchProductAndCategoriesAndBrands();
  }, [id]);

  const handleUpdate = async () => {
    if (!Array.isArray(formData.images)) {
      toast.error("Invalid images data");
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("brand", formData.brand.id); // Use brand id instead of brand name
    formDataToSubmit.append("description", formData.description.trim());
    formDataToSubmit.append("slug", formData.slug);
    formDataToSubmit.append("price", formData.price);
    formDataToSubmit.append("categoryId", formData.selectedCategory); // Fix categoryId
    formDataToSubmit.append("sku", formData.sku);
    formDataToSubmit.append("isActive", formData.isActive);
    formDataToSubmit.append("tax", formData.tax);

    formData.images.forEach((image, index) => {
      formDataToSubmit.append(`images[${index}]`, image.file, image.file.name);
    });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication token is missing!");
        return;
      }

      await axios.put(`${API_URL}/product/${id}`, formDataToSubmit, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product updated successfully!");
      navigate("/product/list");
    } catch (err) {
      console.error("Response Error:", err.response?.data || err);
      toast.error(err.response?.data?.error || "An unexpected error occurred.");
    }
  };

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="row">
      <ProductEditCard />

      <div className="col-xl-9 col-lg-8">
        <div className="p-3 bg-light mb-3 rounded">
          <div className="row justify-content-end g-2">
            <div className="col-lg-2">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={handleUpdate}
              >
                Edit Product
              </button>
            </div>
            <div className="col-lg-2">
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/product/list")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Add Product Photo</h4>
          </div>
          <div className="card-body">
            <form
              className="dropzone"
              id="myAwesomeDropzone"
              data-plugin="dropzone"
              data-previews-container="#file-previews"
              data-upload-preview-template="#uploadPreviewTemplate"
            >
              <div className="fallback">
                <input name="file" type="file" multiple />
              </div>
              <div className="dz-message needsclick">
                <i className="bx bx-cloud-upload fs-48 text-primary"></i>
                <h3 className="mt-4">
                  Drop your images here, or{" "}
                  <span className="text-primary">click to browse</span>
                </h3>
                <span className="text-muted fs-13">
                  1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are
                  allowed
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Product Information</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="product-name" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="product-name"
                    className="form-control"
                    placeholder="Items Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="product-categories" className="form-label">
                    Product Categories
                  </label>
                  <select
                    className="form-control"
                    id="product-categories"
                    value={formData.selectedCategory}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        selectedCategory: e.target.value,
                      })
                    }
                  >
                    <option value="">Choose a category</option>
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>Loading categories...</option>
                    )}
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="mb-3">
                  <label htmlFor="product-brand" className="form-label">
                    Brand
                  </label>
                  <select
                    className="form-control"
                    id="product-brand"
                    value={formData.brand?.id || ""}
                    onChange={(e) => {
                      const selectedBrand = brands.find(
                        (brand) => brand.id === parseInt(e.target.value)
                      );
                      setFormData({ ...formData, brand: selectedBrand });
                    }}
                  >
                    <option value="">Choose a brand</option>
                    {brands.length > 0 ? (
                      brands.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                          {brand.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>Loading brands...</option>
                    )}
                  </select>
                </div>
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
                    onChange={(e) =>
                      setFormData({ ...formData, sku: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label htmlFor="is-active" className="form-label">
                    Is Active
                  </label>
                  <select
                    className="form-control"
                    id="is-active"
                    value={formData.isActive ? "true" : "false"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        isActive: e.target.value === "true",
                      })
                    }
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
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
                    className="form-control bg-light-subtle"
                    id="description"
                    rows="7"
                    placeholder="Enter the Item Details"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="slug" className="form-label">
                  Slug
                </label>
                <textarea
                  className="form-control bg-light-subtle"
                  id="slug"
                  rows="2"
                  placeholder="Short description about the product"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="product-price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="product-price"
                  className="form-control"
                  placeholder="Price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="tax" className="form-label">
                  Tax Rate
                </label>
                <input
                  type="number"
                  id="tax"
                  className="form-control"
                  placeholder="Tax Rate"
                  value={formData.taxRate}
                  onChange={(e) =>
                    setFormData({ ...formData, tax: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
