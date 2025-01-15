import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Socket/AuthContext";
import PersonalDetails from "../component/Order/PersonalDetails";
import ShippingDetails from "../component/Order/ShippingDetails";
import PaymentMethod from "../component/Order/PaymentMethod";
import HaveACode from "../component/Cart/HaveACode";
import OrderCartItems from "../component/Order/OrderCartItems";
import BillingPayment from "../component/Order/BillingPayment";
import {
  FaBox,
  FaMoneyBillWave,
  FaCreditCard,
  FaDownload,
} from "react-icons/fa";
import PaymentModal from "../component/Extras/PaymentModal";
import { API_URL } from "../constants";
const Checkout = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const [paymentStatus, setPaymentStatus] = useState(null); // Keep track of payment status

  const handleConfirmPayment = async () => {
    try {
      // Call the ADDORDER API when confirming payment
      const response = await fetch(`${API_URL}/cart/addorder`, {
        method: "POST",
        body: JSON.stringify({
          userId: user?.id,
          cartItems: [], // Add cart items here
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.paymentStatus === "confirmed") {
        setPaymentStatus("confirmed");
      } else {
        setPaymentStatus("failed");
      }
    } catch (error) {
      console.error("Error during payment confirmation:", error);
      setPaymentStatus("failed");
    }
  };

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <PersonalDetails />
                <div className="mt-3">
                  <ShippingDetails />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <HaveACode />

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Order Summary</h4>
              </div>
              <OrderCartItems userId={user?.id} />
              <BillingPayment />
            </div>

            <div className="main-btn my-4 text-end">
              <button
                onClick={handleConfirmPayment}
                className="btn btn-success"
              >
                Confirm Payment
              </button>
            </div>
            <div data-bs-theme="dark">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex gap-3">
                    <div className="rounded-3 bg-light flex-shrink-0 avatar d-flex align-items-center justify-content-center fs-22 me-2">
                      <FaBox className="text-warning" />
                    </div>
                    <div>
                      <h5 className="text-white fw-medium mb-1">
                        Streaming box shipping information
                      </h5>
                      <p className="text-white-50 mb-0">
                        Below your selected items, enter your zip code to
                        calculate the shipping charge. We like to make shipping
                        simple and affordable!
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <div className="rounded-3 bg-light flex-shrink-0 avatar d-flex align-items-center justify-content-center fs-22 me-2">
                      <FaMoneyBillWave className="text-success" />
                    </div>
                    <div>
                      <h5 className="text-white fw-medium mb-1">
                        30 Day money back guarantee
                      </h5>
                      <p className="text-white-50 mb-0">
                        Money Return In 30 day In Your Bank Account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Render Payment Modal based on paymentStatus */}
        <PaymentModal paymentStatus={paymentStatus} />
      </div>
    </div>
  );
};

export default Checkout;
