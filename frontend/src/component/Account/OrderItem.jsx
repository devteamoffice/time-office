import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/orders"; // Replace with your actual API endpoint

const OrderItem = ({ order }) => {
  return (
    <div className="col-xl-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
            <div>
              <Link to={`/order/${order.id}`}>
                <h4 className="fw-medium text-dark d-flex align-items-center gap-2">
                  {order.orderNumber}
                  <span className="badge bg-success-subtle text-success px-2 py-1 fs-13">
                    Paid
                  </span>
                  <span className="border border-warning text-warning fs-13 px-2 py-1 rounded">
                    In Progress
                  </span>
                </h4>
              </Link>

              <p className="mb-0">
                Order / Order Details / {order.orderNumber} -{" "}
                {new Date(order.created).toLocaleString()}
              </p>
            </div>
            <div>
              <a href="#" className="btn btn-outline-secondary me-2">
                Refund
              </a>
              <a href="#" className="btn btn-outline-secondary me-2">
                Return
              </a>
              <a href="#" className="btn btn-primary">
                Edit Order
              </a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <h5 className="card-title">Customer Details</h5>
              <div className="d-flex align-items-center gap-2">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  alt="Avatar"
                  className="avatar rounded-3 border border-light border-3"
                />
                <div>
                  <p className="mb-1">Customer Name</p>
                  <a href="#" className="link-primary fw-medium">
                    customer@example.com
                  </a>
                </div>
              </div>
              <p className="mt-3 mb-1">
                <strong>Contact Number:</strong> (123) 456-7890
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="card-title">Shipping Address</h5>
              <p className="mb-1">123 Main Street</p>
              <p className="mb-1">City, State, ZIP</p>
              <p className="mb-1">Country</p>
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="card-title">Billing Address</h5>
              <p className="mb-1">Same as shipping address</p>
              <div className="mt-3">
                <p>
                  <strong>Estimated Shipping Date:</strong> Apr 25, 2024
                </p>
                <a href="#" className="btn btn-primary mt-2">
                  Make As Ready To Ship
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
