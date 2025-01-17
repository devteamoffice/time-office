import React, { useEffect, useState } from "react";
import SingleProductDetails from "../component/Product/SingleProductDetails";
import ProductReviews from "../component/Reviews/ProductReviews";
import { FaShippingFast } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdDiscount } from "react-icons/md";
import { API_URL } from "../constants";
import { FaGift } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${API_URL}/product/${id}`);
        setProduct(response.data.product);
        console.log(response.data.product);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="page-content">
          <div className="container-xxl">
            <SingleProductDetails product={product} />
            <div class="row">
              <div class="col-lg-12">
                <div class="card bg-light-subtle">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="d-flex align-items-center gap-3">
                          <div class="avatar bg-light d-flex align-items-center justify-content-center rounded">
                            <FaShippingFast />
                          </div>

                          <div>
                            <p class="text-dark fw-medium fs-16 mb-1">
                              Free shipping for all orders over $200
                            </p>
                            <p class="mb-0">Only in this week</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-center gap-3">
                          <div class="avatar bg-light d-flex align-items-center justify-content-center rounded">
                            <MdDiscount />
                          </div>

                          <div>
                            <p class="text-dark fw-medium fs-16 mb-1">
                              Special discounts for customers
                            </p>
                            <p class="mb-0">Coupons up to $ 100</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-center gap-3">
                          <div class="avatar bg-light d-flex align-items-center justify-content-center rounded">
                            <FaGift />
                          </div>

                          <div>
                            <p class="text-dark fw-medium fs-16 mb-1">
                              Free gift wrapping
                            </p>
                            <p class="mb-0">With 100 letters custom note</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="d-flex align-items-center gap-3">
                          <div class="avatar bg-light d-flex align-items-center justify-content-center rounded">
                            <RiCustomerService2Line />
                          </div>

                          <div>
                            <p class="text-dark fw-medium fs-16 mb-1">
                              Expert Customer Service
                            </p>
                            <p class="mb-0">8:00 - 20:00, 7 days/wee</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Product Description</h4>
                  </div>
                  <div className="card-body">
                    <ul className="d-flex flex-column gap-2 list-unstyled fs-14 text-muted mb-0">
                      <li>
                        <span
                          className="fw-medium text-dark"
                          dangerouslySetInnerHTML={{
                            __html:
                              product?.description ||
                              "No description available.",
                          }}
                        ></span>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <a
                        href="#!"
                        className="link-primary text-decoration-underline link-offset-2"
                      >
                        View More Details{" "}
                        <i className="bx bx-arrow-to-right align-middle fs-16"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ProductReviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
