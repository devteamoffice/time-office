import React, { useState, useEffect } from "react";
import Navigation from "../../components/Common/Navigation";
import OrderItem from "../../components/Orders/OrderItem";
import axios from "axios";
import { API_URL } from "../../constants";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        const response = await axios.get(`${API_URL}/orders`, {
          headers: {
            Authorization: `${token}`, // Add the token to the Authorization header
          },
        });
        setOrders(response.data.orders); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      const token = localStorage.getItem("TOKEN"); // Retrieve token from localStorage
      await axios.delete(`${API_URL}/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      });
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div class="container-xxl">
      <div class="row">
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2">Payment Refund</h4>
                  <p class="text-muted fw-medium fs-22 mb-0">490</p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:chat-round-money-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2">Order Cancel</h4>
                  <p class="text-muted fw-medium fs-22 mb-0">241</p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:cart-cross-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2">Order Shipped</h4>
                  <p class="text-muted fw-medium fs-22 mb-0">630</p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:box-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2">Order Delivering</h4>
                  <p class="text-muted fw-medium fs-22 mb-0">170</p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:tram-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2">Pending Review</h4>
                  <p class="text-muted fw-medium fs-22 mb-0">210</p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:clipboard-remove-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2">Pending Payment</h4>
                  <p class="text-muted fw-medium fs-22 mb-0">608</p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:clock-circle-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2">Delivered</h4>
                  <p class="text-muted fw-medium fs-22 mb-0">200</p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:clipboard-check-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h4 class="card-title mb-2">In Progress</h4>
                  <p class="text-muted fw-medium fs-22 mb-0">656</p>
                </div>
                <div>
                  <div class="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:inbox-line-broken"
                      class="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="d-flex card-header justify-content-between align-items-center">
              <div>
                <h4 class="card-title">All Order List</h4>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle btn btn-sm btn-outline-light rounded"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  This Month
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="#!" class="dropdown-item">
                    Download
                  </a>

                  <a href="#!" class="dropdown-item">
                    Export
                  </a>

                  <a href="#!" class="dropdown-item">
                    Import
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table align-middle mb-0 table-hover table-centered">
                  <thead class="bg-light-subtle">
                    <tr>
                      <th>Order ID</th>
                      <th>Created at</th>
                      <th>Customer</th>
                      <th>Priority</th>
                      <th>Total</th>
                      <th>Payment Status</th>
                      <th>Items</th>
                      <th>Delivery Number</th>
                      <th>Order Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <OrderItem
                        key={order.id}
                        order={order}
                        onDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
