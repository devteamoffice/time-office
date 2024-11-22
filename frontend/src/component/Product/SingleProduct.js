import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/images/placeholder.png";
import { FaHeart } from "react-icons/fa";
import AddToCartButton from "../Cart/AddToCartButton";
const SingleProduct = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => {
        let imageUrl = "";
        try {
          const images = JSON.parse(product.images);
          imageUrl = Array.isArray(images) && images[0] ? images[0] : "";
        } catch (error) {
          console.error("Error parsing images JSON:", error);
        }
        return (
          <div key={product.id} className="col-md-6 col-xl-3">
            <div className="card">
              <Link
                to={`/product/${product.id}`}
                className="item-link d-flex flex-column h-100"
              >
                <div className="card-body bg-light-subtle rounded-bottom">
                  {imageUrl ? (
                    <img
                      className="img-fluid"
                      src={imageUrl}
                      alt={product.name}
                    />
                  ) : (
                    <img
                      className="img-fluid"
                      src={placeholder}
                      alt="Placeholder"
                    />
                  )}
                </div>
              </Link>
              <div className="card-body item-body bg-light-subtle rounded-bottom">
                <a className="text-dark fw-medium fs-16">{product.name}</a>
                <div className="my-1">
                  <div className="d-flex gap-2 align-items-center">
                    <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
                      <li>
                        <i className="bx bxs-star"></i>
                      </li>
                      <li>
                        <i className="bx bxs-star"></i>
                      </li>
                      <li>
                        <i className="bx bxs-star"></i>
                      </li>
                      <li>
                        <i className="bx bxs-star"></i>
                      </li>
                      <li>
                        <i className="bx bxs-star-half"></i>
                      </li>
                    </ul>
                    <p className="mb-0 fw-medium fs-15 text-dark">
                      4.5
                      <span className="text-muted fs-13">(55 Review)</span>
                    </p>
                  </div>
                </div>
                <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                  <span className="text-muted text-decoration-line-through">
                    Rs {product.discount}
                  </span>
                  Rs {product.price}{" "}
                  <small className="text-muted">(30% Off)</small>
                </h4>
                <div className="mt-3">
                  <AddToCartButton />
                </div>

                <span className="position-absolute top-0 end-0 p-3">
                  <button
                    type="button"
                    className="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"
                  >
                    <FaHeart style={{ fontSize: "48px", color: "red" }} />
                  </button>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
