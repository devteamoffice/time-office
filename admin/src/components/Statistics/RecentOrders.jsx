import React, { useState, useEffect } from "react";
import OrderItem from "../../components/Orders/OrderItem";
import axios from "axios";
import { API_URL } from "../../constants";
const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        const response = await axios.get(`${API_URL}/orders`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the Authorization header
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
          Authorization: `${token}`, // Add the token to the Authorization header
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
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h4 class="card-title">Recent Orders</h4>

              <a href="#!" class="btn btn-sm btn-soft-primary">
                <i class="bx bx-plus me-1"></i>Create Order
              </a>
            </div>
          </div>

          <div class="table-responsive table-centered">
            <table class="table mb-0">
              <thead class="bg-light bg-opacity-50">
                <tr>
                  <th class="ps-3">Order ID.</th>
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

          <div class="card-footer border-top">
            <div class="row g-3">
              <div class="col-sm">
                <div class="text-muted">
                  Showing
                  <span class="fw-semibold">5</span>
                  of
                  <span class="fw-semibold">90,521</span>
                  orders
                </div>
              </div>

              <div class="col-sm-auto">
                <ul class="pagination m-0">
                  <li class="page-item">
                    <a href="#" class="page-link">
                      <i class="bx bx-left-arrow-alt"></i>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a href="#" class="page-link">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      <i class="bx bx-right-arrow-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
