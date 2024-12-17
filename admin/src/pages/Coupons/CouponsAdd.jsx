import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { toast } from "react-toastify";
const CouponsAdd = () => {
  const [products, setProducts] = useState([]);
  const [couponData, setCouponData] = useState({
    code: "",
    email: null,
    duration: "once",
    duration_in_months: null,
    redeem_by: "",
    max_redemptions: null,
    times_redeemed: 0,
    percent_off: null,
    amount_off: null,
    currency: "",
    metadata: "",
    status: "active", // default status
    discount_type: "percentage", // default type
    discount_value: "",
    applicable_products: [], // Array for selected product IDs
  });

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/product`);
        setProducts(response.data.products || []); // Assuming the API returns a list of products
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products!");
      }
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCouponData({
      ...couponData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setCouponData({
      ...couponData,
      status: e.target.value,
    });
  };

  const handleDiscountTypeChange = (e) => {
    setCouponData({
      ...couponData,
      discount_type: e.target.value,
    });
  };

  const handleProductChange = (e) => {
    const selectedProducts = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCouponData({
      ...couponData,
      applicable_products: selectedProducts,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Authentication token is missing!");
        return;
      }
      const response = await axios.post(`${API_URL}/coupons/add`, couponData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json", // Explicitly set content type
        },
      });
      console.log("Coupon added successfully:", response.data);
      toast.success("Coupon added successfully!");
    } catch (error) {
      console.error("Error adding coupon:", error.response || error.message);
      toast.error(
        error.response?.data?.message ||
          "An error occurred while adding the coupon."
      );
    }
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-5">
          {/* Coupon Status */}
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Coupon Status</h4>
            </div>
            <div className="card-body">
              {/* Status Radio Buttons */}
              {/* Existing status fields here */}
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="activeStatus"
                        value="active"
                        checked={couponData.status === "active"}
                        onChange={handleRadioChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="activeStatus"
                      >
                        Active
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="inactiveStatus"
                      value="inactive"
                      checked={couponData.status === "inactive"}
                      onChange={handleRadioChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inactiveStatus"
                    >
                      Inactive
                    </label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="futurePlanStatus"
                      value="future_plan"
                      checked={couponData.status === "future_plan"}
                      onChange={handleRadioChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="futurePlanStatus"
                    >
                      Future Plan
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Date Schedule */}
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Date Schedule</h4>
            </div>
            <div className="card-body">
              {/* Existing date fields here */}

              <form>
                <div className="mb-3">
                  <label htmlFor="start-date" className="form-label text-dark">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    className="form-control"
                    name="start_date"
                    value={couponData.start_date || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="end-date" className="form-label text-dark">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    className="form-control"
                    name="end_date"
                    value={couponData.end_date || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Coupon Information</h4>
            </div>
            <div className="card-body">
              {/* Coupon Information Fields */}
              {/* Existing input fields like code, email, limits */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="coupons-code" className="form-label">
                      Coupons Code
                    </label>
                    <input
                      type="text"
                      id="coupons-code"
                      name="code"
                      className="form-control"
                      placeholder="Code enter"
                      value={couponData.code}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="coupons-email" className="form-label">
                      Coupon Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="coupons-email"
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      value={couponData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="coupons-limits" className="form-label">
                      Coupons Limits
                    </label>
                    <input
                      type="number"
                      id="coupons-limits"
                      name="max_redemptions"
                      className="form-control"
                      placeholder="Limits number"
                      value={couponData.max_redemptions || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <h4 className="card-title mb-3 mt-2">Coupons Types</h4>
              <div className="row mb-3">
                <div className="col-lg-4">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="discount_type"
                        id="freeShipping"
                        value="free_shipping"
                        checked={couponData.discount_type === "free_shipping"}
                        onChange={handleDiscountTypeChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="freeShipping"
                      >
                        Free Shipping
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="discount_type"
                      id="percentageDiscount"
                      value="percentage"
                      checked={couponData.discount_type === "percentage"}
                      onChange={handleDiscountTypeChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="percentageDiscount"
                    >
                      Percentage
                    </label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="discount_type"
                      id="fixedAmount"
                      value="fixed_amount"
                      checked={couponData.discount_type === "fixed_amount"}
                      onChange={handleDiscountTypeChange}
                    />
                    <label className="form-check-label" htmlFor="fixedAmount">
                      Fixed Amount
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label htmlFor="discount-value" className="form-label">
                      Discount Value
                    </label>
                    <input
                      type="text"
                      id="discount-value"
                      name="discount_value"
                      className="form-control"
                      placeholder="Value enter"
                      value={couponData.discount_value}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label htmlFor="product-categories" className="form-label">
                      Discount Products
                    </label>
                    <select
                      id="product-categories"
                      className="form-select"
                      multiple
                      onChange={handleProductChange}
                    >
                      {products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="btn btn-primary mt-3"
                type="submit"
                onClick={handleSubmit}
              >
                Add Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponsAdd;
