import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProduct, updateProduct } from "../../containers/Product/actions";
import { fetchCategories } from "../../containers/Category/actions";
const ProductEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form fields
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [tagNumber, setTagNumber] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Access product and categories from Redux store
  const product = useSelector((state) => state.product.product);
  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    // Fetch product details and categories on mount
    dispatch(fetchProduct(id));
    dispatch(fetchCategories());
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      // Populate form fields with fetched product data
      setProductName(product.name || "");
      setBrand(product.brand || "");
      setWeight(product.weight || "");
      setDescription(product.description || "");
      setTagNumber(product.tagNumber || "");
      setStock(product.stock || 0);
      setPrice(product.price || 0);
      setSelectedCategory(product.category || "");
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
    };

    dispatch(updateProduct(updatedProduct, id, navigate));
  };
  return (
    <div class="row">
      <div class="col-xl-3 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img
              src="assets/images/product/p-1.png"
              alt=""
              class="img-fluid rounded bg-light"
            />
            <div class="mt-3">
              <h4>
                Men Black Slim Fit T-shirt{" "}
                <span class="fs-14 text-muted ms-1">(Fashion)</span>
              </h4>
              <h5 class="text-dark fw-medium mt-3">Price :</h5>
              <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                <span class="text-muted text-decoration-line-through">
                  $100
                </span>{" "}
                $80 <small class="text-muted"> (30% Off)</small>
              </h4>
              <div class="mt-3">
                <h5 class="text-dark fw-medium">Size :</h5>
                <div
                  class="d-flex flex-wrap gap-2"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <input type="checkbox" class="btn-check" id="size-s" />
                  <label
                    class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                    for="size-s"
                  >
                    S
                  </label>

                  <input
                    type="checkbox"
                    class="btn-check"
                    id="size-m"
                    checked
                  />
                  <label
                    class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                    for="size-m"
                  >
                    M
                  </label>

                  <input type="checkbox" class="btn-check" id="size-xl" />
                  <label
                    class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                    for="size-xl"
                  >
                    Xl
                  </label>

                  <input type="checkbox" class="btn-check" id="size-xxl" />
                  <label
                    class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                    for="size-xxl"
                  >
                    XXL
                  </label>
                </div>
              </div>
              <div class="mt-3">
                <h5 class="text-dark fw-medium">Colors :</h5>
                <div
                  class="d-flex flex-wrap gap-2"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <input type="checkbox" class="btn-check" id="color-dark" />
                  <label
                    class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                    for="color-dark"
                  >
                    {" "}
                    <i class="bx bxs-circle fs-18 text-dark"></i>
                  </label>

                  <input type="checkbox" class="btn-check" id="color-yellow" />
                  <label
                    class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                    for="color-yellow"
                  >
                    {" "}
                    <i class="bx bxs-circle fs-18 text-warning"></i>
                  </label>

                  <input type="checkbox" class="btn-check" id="color-white" />
                  <label
                    class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                    for="color-white"
                  >
                    {" "}
                    <i class="bx bxs-circle fs-18 text-white"></i>
                  </label>

                  <input type="checkbox" class="btn-check" id="color-red" />
                  <label
                    class="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                    for="color-red"
                  >
                    {" "}
                    <i class="bx bxs-circle fs-18 text-danger"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              action="https://techzaa.getappui.com/"
              method="post"
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
                    <label for="product-name" class="form-label">
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
                <label for="product-categories" class="form-label">
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
                    <label for="product-brand" class="form-label">
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
                    <label for="product-brand" class="form-label">
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
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control bg-light-subtle"
                    id="description"
                    rows="7"
                    placeholder="Short description about the product"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <form>
                  <div class="mb-3">
                    <label for="product-id" class="form-label">
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
                    <label for="product-stock" class="form-label">
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
                  <label for="product-price" class="form-label">
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
                    />
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <form>
                  <label for="product-discount" class="form-label">
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
                  <label for="product-tex" class="form-label">
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
