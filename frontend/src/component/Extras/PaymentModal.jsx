import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PaymentModal = ({ paymentStatus }) => {
  if (!paymentStatus) return null;

  const renderModalContent = () => {
    if (paymentStatus === "confirmed") {
      return (
        <>
          <div className="check-icon text-center">
            <img
              src="assets/images/party.png"
              alt="success"
              className="img-fluid"
            />
            <h4 className="fw-semibold mt-3">Thank You!</h4>
            <p className="mb-1">Your Transaction Was Successful</p>
            <p>
              <span className="text-dark fw-medium">Order Id</span>: #0758267/90
            </p>
            <div className="row justify-content-between">
              <div className="col-lg-4 col-6">
                <span className="fw-semibold text-muted fs-14">Date</span>
                <p className="text-dark fw-medium mt-1">23 April, 2024</p>
              </div>
              <div className="col-lg-4 col-6 text-end">
                <span className="fw-semibold text-muted fs-14">Time</span>
                <p className="text-dark fw-medium">11:28 AM</p>
              </div>
            </div>
            <div className="row justify-content-between mt-3 align-items-center">
              <div className="col-lg-6 col-6">
                <span className="fw-semibold text-muted fs-14">To</span>
                <p className="text-dark fw-medium mb-0 mt-1">Gaston Lapierre</p>
                <p className="mb-0">hello@dundermuffilin.com</p>
              </div>
              <div className="col-lg-4 col-6 text-end">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  alt="user"
                  className="avatar rounded-circle"
                />
              </div>
            </div>
            <div className="row justify-content-between mt-3 align-items-center">
              <div className="col-lg-6 col-6">
                <span className="fw-semibold text-muted fs-14">Amount</span>
                <h5 className="fw-medium mt-1">$737.00</h5>
              </div>
              <div className="col-lg-4 col-6 text-end">
                <span className="text-success fw-semibold">
                  Completed <FaCheckCircle className="align-middle" />
                </span>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="text-center">
          <h4 className="fw-semibold mt-3">Payment Failed</h4>
          <p>
            There was an issue processing your payment. Please try again later.
          </p>
        </div>
      );
    }
  };

  return (
    <div
      className="modal fade"
      id="checkoutModal"
      tabIndex="-1"
      aria-labelledby="checkoutModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="card border-0 mb-0">
              <div className="card-body">{renderModalContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
