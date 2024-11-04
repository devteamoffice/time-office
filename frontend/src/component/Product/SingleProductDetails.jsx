import React, { useEffect, useState } from "react";
import "../../assets/Product Page/css/vendor.min.css";
import "../../assets/Product Page/css/icons.min.css";
import "../../assets/Product Page/css/app.min.css";
import { FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../containers/Product/actions";
import AddToCartButton from "../Cart/AddToCartButton";
const SingleProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const [count, setCount] = useState(1);

  // Dispatch fetchProduct action
  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [id, dispatch]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;

  const images = product?.images
    ? JSON.parse(product.images).filter((img) => !img.includes("Thumbs.db"))
    : [];

  return (
    <div className="row">
      {/* Product Images */}
      {product && (
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  {images.map((img, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <img
                        src={img}
                        alt={`Product image ${index + 1}`}
                        className="img-fluid bg-light rounded"
                      />
                    </div>
                  ))}
                </div>
                <div className="carousel-indicators m-0 mt-2 d-lg-flex d-none position-static h-100">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to={index}
                      aria-current={index === 0 ? "true" : "false"}
                      className={`w-auto h-auto rounded bg-light ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      <img
                        src={img}
                        className="d-block avatar-xl"
                        alt={`Indicator image ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-footer border-top">
              <div className="row g-2">
                <div className="col-lg-5">
                  <AddToCartButton />
                </div>
                <div className="col-lg-5">
                  <a
                    href={`/order/${id}/checkout`}
                    className="btn btn-light d-flex align-items-center justify-content-center gap-2 w-100"
                  >
                    <i className="bx bx-shopping-bag fs-18"></i> Buy Now
                  </a>
                </div>
                <div className="col-lg-2">
                  <button
                    type="button"
                    className="btn btn-soft-danger d-inline-flex align-items-center justify-content-center fs-20 rounded w-100"
                  >
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Details */}
      {product && (
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h4 className="badge bg-success text-light fs-14 py-1 px-2">
                New Arrival
              </h4>
              <p className="mb-1">
                <a href="#!" className="fs-24 text-dark fw-medium">
                  {product.name || "Product Name"}
                </a>
              </p>
              <h2 className="fw-medium my-3">
                ₹{product.price}{" "}
                <span className="fs-16 text-decoration-line-through">
                  ₹{Math.round(product.price * 1.3)}
                </span>
                <small className="text-danger ms-2">(30% Off)</small>
              </h2>

              <div className="quantity mt-4">
                <h4 className="text-dark fw-medium mt-3">Quantity :</h4>
                <div className="input-step border bg-body-secondary p-1 mt-1 rounded d-inline-flex overflow-visible">
                  <button
                    onClick={() => count > 1 && setCount(count - 1)}
                    type="button"
                    className="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                  >
                    -
                  </button>
                  <div className="mx-2">{count}</div>
                  <button
                    onClick={() => setCount(count + 1)}
                    type="button"
                    className="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <ul className="d-flex flex-column gap-2 list-unstyled fs-15 my-3">
                <li>
                  <i className="bx bx-check text-success"></i> In Stock
                </li>
                <li>
                  <i className="bx bx-check text-success"></i> Free delivery
                  available
                </li>
                <li>
                  <i className="bx bx-check text-success"></i> 10% Off Use Code:{" "}
                  <span className="text-dark fw-medium">CODE123</span>
                </li>
              </ul>

              <h4 className="text-dark fw-medium">Description :</h4>
              <p className="text-muted">
                {product?.description ||
                  "Default product description goes here."}{" "}
                <a href="#!" className="link-primary">
                  Read more
                </a>
              </p>

              <h4 className="text-dark fw-medium mt-3">Available Offers :</h4>
              <div className="d-flex align-items-center mt-2">
                <i className="bx bxs-bookmarks text-success me-3 fs-20 mt-1"></i>
                <p className="mb-0">
                  <span className="fw-medium text-dark">Bank Offer</span> 10%
                  instant discount on Bank Debit Cards, up to ₹30 on orders of
                  ₹50 and above
                </p>
              </div>
              <div className="d-flex align-items-center mt-2">
                <i className="bx bxs-bookmarks text-success me-3 fs-20 mt-1"></i>
                <p className="mb-0">
                  <span className="fw-medium text-dark">Bank Offer</span> Save
                  20% on your next purchase!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductDetails;
