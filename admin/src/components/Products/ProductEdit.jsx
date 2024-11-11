import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProduct, updateProduct } from "../../containers/Product/actions";
import { fetchCategories } from "../../containers/Category/actions";
import ProductEditCard from "./ProductEditCard";
const ProductEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [tagNumber, setTagNumber] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sku, setSKU] = useState("");

  const product = useSelector((state) => state.product.product);
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProduct(id));
        await dispatch(fetchCategories());
      } catch (error) {
        console.error("Failed to fetch product or categories:", error);
        toast.error("An error occurred while loading data");
      }
    };

    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setProductName(product.name || "");
      setBrand(product.brand || "");
      setWeight(product.weight || "");
      setDescription(product.description || "");
      setTagNumber(product.tagNumber || "");
      setStock(product.stock || 0);
      setPrice(product.price || 0);
      setSelectedCategory(product.category || "");
      setSKU(product.sku || "");
      setSlug(product.slug || "");
    }
  }, [product]);

  const handleUpdate = () => {
    const updatedProduct = {
      name: productName,
      brand,
      weight,
      description,
      tagNumber,
      stock,
      price,
      category: selectedCategory,
      sku,
      slug,
    };

    dispatch(updateProduct(updatedProduct, id, navigate));
  };

  return (
    <div class="row">
      <ProductEditCard />

      <div class="col-xl-9 col-lg-8 ">
        <div class="p-3 bg-light mb-3 rounded">
          <div class="row justify-content-end g-2">
            <div class="col-lg-2">
              <a
                href="#!"
                class="btn btn-outline-secondary w-100"
                onClick={handleUpdate}
              >
                Edit Product
              </a>
            </div>
            <div class="col-lg-2">
              <a href="#!" class="btn btn-primary w-100">
                Cancel
              </a>
            </div>
          </div>
        </div>
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
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Product Information</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <form>
                  <div class="mb-3">
                    <label htmlFor="product-name" class="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="product-name"
                      class="form-control"
                      placeholder="Items Name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div class="col-lg-6">
                <label htmlFor="product-categories" class="form-label">
                  Product Categories
                </label>
                <select
                  class="form-control"
                  id="product-categories"
                  data-choices
                  data-choices-groups
                  data-placeholder="Select Categories"
                  name="choices-single-groups"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Choose a categories</option>
                  {categories && categories.length > 0 ? (
                    categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading categories...</option>
                  )}
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <form>
                  <div class="mb-3">
                    <label htmlFor="product-brand" class="form-label">
                      Brand
                    </label>
                    <input
                      type="text"
                      id="product-brand"
                      class="form-control"
                      placeholder="Brand Name"
                    />
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <form>
                  <div class="mb-3">
                    <label htmlFor="product-brand" class="form-label">
                      SKU
                    </label>
                    <input
                      type="text"
                      id="product-brand"
                      class="form-control"
                      placeholder="SKU"
                      value={sku}
                      onChange={(e) => setSKU(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label htmlFor="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control bg-light-subtle"
                    id="description"
                    rows="7"
                    placeholder="Enter the Item Details"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label htmlFor="slug" class="form-label">
                    Slug
                  </label>
                  <textarea
                    class="form-control bg-light-subtle"
                    id="slug"
                    rows="7"
                    placeholder="Short description about the product"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <form>
                  <div class="mb-3">
                    <label htmlFor="product-id" class="form-label">
                      Tag Number
                    </label>
                    <input
                      type="number"
                      id="product-id"
                      class="form-control"
                      placeholder="#******"
                    />
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <form>
                  <div class="mb-3">
                    <label htmlFor="product-stock" class="form-label">
                      Stock
                    </label>
                    <input
                      type="number"
                      id="product-stock"
                      class="form-control"
                      placeholder="Quantity"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Pricing Details</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <form>
                  <label htmlFor="product-price" class="form-label">
                    Price
                  </label>
                  <div class="input-group mb-3">
                    <span class="input-group-text fs-20">
                      <i class="bx bx-dollar"></i>
                    </span>
                    <input
                      type="number"
                      id="product-price"
                      class="form-control"
                      placeholder="000"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <form>
                  <label htmlFor="product-discount" class="form-label">
                    Discount
                  </label>
                  <div class="input-group mb-3">
                    <span class="input-group-text fs-20">
                      <i class="bx bxs-discount"></i>
                    </span>
                    <input
                      type="number"
                      id="product-discount"
                      class="form-control"
                      placeholder="000"
                    />
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <form>
                  <label htmlFor="product-tex" class="form-label">
                    Tex
                  </label>
                  <div class="input-group mb-3">
                    <span class="input-group-text fs-20">
                      <i class="bx bxs-file-txt"></i>
                    </span>
                    <input
                      type="number"
                      id="product-tex"
                      class="form-control"
                      placeholder="000"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
