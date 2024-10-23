import React, { useState, useEffect } from "react";
import "../../assets/Product Page/css/vendor.min.css";
import "../../assets/Product Page/css/icons.min.css";
import "../../assets/Product Page/css/app.min.css";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../containers/Product/actions"; // Import the action

const SingleProductDetails = ({ id }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product); // Assuming product is stored in the state
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id))
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || "Failed to fetch product.");
          setLoading(false);
        });
      console.log(fetchProduct(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {/* START Wrapper */}
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              {/* Crossfade */}
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img
                      src="https://shorturl.at/zXYcP"
                      alt=""
                      class="img-fluid bg-light rounded"
                    />
                  </div>
                </div>
                <div class="carousel-indicators m-0 mt-2 d-lg-flex d-none position-static h-100">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="0"
                    aria-current="true"
                    aria-label="Slide 1"
                    class="w-auto h-auto rounded bg-light active"
                  >
                    <img
                      src="https://shorturl.at/zXYcP"
                      class="d-block avatar-xl"
                      alt="swiper-indicator-img"
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    class="w-auto h-auto rounded bg-light"
                  >
                    <img
                      src="https://shorturl.at/RLxTc"
                      class="d-block avatar-xl"
                      alt="swiper-indicator-img"
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    class="w-auto h-auto rounded bg-light"
                  >
                    <img
                      src="https://shorturl.at/kOdsN"
                      class="d-block avatar-xl"
                      alt="swiper-indicator-img"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class="card-footer border-top">
              <div class="row g-2">
                <div class="col-lg-5">
                  <a
                    href="/cart"
                    class="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100"
                  >
                    <i class="bx bx-cart fs-18"></i> Add To Cart
                  </a>
                </div>
                <div class="col-lg-5">
                  <a
                    href="/order/:id/checkout"
                    class="btn btn-light d-flex align-items-center justify-content-center gap-2 w-100"
                  >
                    <i class="bx bx-shopping-bag fs-18"></i> Buy Now
                  </a>
                </div>
                <div class="col-lg-2">
                  <button
                    type="button"
                    class="btn btn-soft-danger d-inline-flex align-items-center justify-content-center fs-20 rounded w-100"
                  >
                    <iconify-icon icon="solar:heart-broken"></iconify-icon>
                    {/* <FaRegHeart /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h4 class="badge bg-success text-light fs-14 py-1 px-2">
                New Arrival
              </h4>
              <p class="mb-1">
                <a href="#!" class="fs-24 text-dark fw-medium">
                  {product?.name || "Product Name"}
                </a>
              </p>
              <div class="d-flex gap-2 align-items-center">
                <ul class="d-flex text-warning m-0 fs-20  list-unstyled">
                  <li>
                    <i class="bx bxs-star"></i>
                  </li>
                  <li>
                    <i class="bx bxs-star"></i>
                  </li>
                  <li>
                    <i class="bx bxs-star"></i>
                  </li>
                  <li>
                    <i class="bx bxs-star"></i>
                  </li>
                  <li>
                    <i class="bx bxs-star-half"></i>
                  </li>
                </ul>
                <p class="mb-0 fw-medium fs-18 text-dark">
                  4.5 <span class="text-muted fs-13">(55 Review)</span>
                </p>
              </div>
              <h2 class="fw-medium my-3">
                $80.00{" "}
                <span class="fs-16 text-decoration-line-through">$100.00</span>
                <small class="text-danger ms-2">(30%Off)</small>
              </h2>

              {/* quantity */}
              <div class="quantity mt-4">
                <h4 class="text-dark fw-medium mt-3">Quantity :</h4>
                <div class="input-step border bg-body-secondary p-1 mt-1 rounded d-inline-flex overflow-visible">
                  <button
                    onClick={() => count > 1 && setCount(count - 1)}
                    type="button"
                    class="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                  >
                    -
                  </button>
                  <div className="mx-2"> {count}</div>
                  <button
                    onClick={() => setCount(count + 1)}
                    type="button"
                    class="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <ul class="d-flex flex-column gap-2 list-unstyled fs-15 my-3">
                <li>
                  <i class="bx bx-check text-success"></i> In Stock
                </li>
                <li>
                  <i class="bx bx-check text-success"></i> Free delivery
                  available
                </li>
                <li>
                  <i class="bx bx-check text-success"></i> Sales 10% Off Use
                  Code: <span class="text-dark fw-medium">CODE123</span>
                </li>
              </ul>
              <h4 class="text-dark fw-medium">Description :</h4>
              <p class="text-muted">
                Top in sweatshirt fabric made from a cotton blend with a soft
                brushed inside. Relaxed fit with dropped shoulders, long sleeves
                and ribbing around the neckline, cuffs and hem. Small metal text
                applique.{" "}
                <a href="#!" class="link-primary">
                  Read more
                </a>
              </p>
              <h4 class="text-dark fw-medium mt-3">Available offers :</h4>
              <div class="d-flex align-items-center mt-2">
                <i class="bx bxs-bookmarks text-success me-3 fs-20 mt-1"></i>
                <p class="mb-0">
                  <span class="fw-medium text-dark">Bank Offer</span> 10%
                  instant discount on Bank Debit Cards, up to $30 on orders of
                  $50 and above
                </p>
              </div>
              <div class="d-flex align-items-center mt-2">
                <i class="bx bxs-bookmarks text-success me-3 fs-20 mt-1"></i>
                <p class="mb-0">
                  <span class="fw-medium text-dark">Bank Offer</span> Grab our
                  exclusive offer now and save 20% on your next purchase! Don't
                  miss out, shop today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
