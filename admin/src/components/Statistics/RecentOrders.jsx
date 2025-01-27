import React, { useState, useEffect } from "react";
import OrderItem from "../../components/Orders/OrderItem";
import axios from "axios";
import { API_URL } from "../../constants";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalOrders, setTotalOrders] = useState(0); // Added state for total orders

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        const response = await axios.get(`${API_URL}/order`, {
          headers: {
            Authorization: `${token}`, // Add the token to the Authorization header
          },
        });
        setOrders(response.data.orders); // Adjust based on your API response structure
        setTotalOrders(
          response.data.totalOrders || response.data.orders.length
        ); // Set total orders (based on API structure)
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
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      await axios.delete(`${API_URL}/order/${orderId}`, {
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
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="card-title">Recent Orders</h4>
              <a href="#!" className="btn btn-sm btn-soft-primary">
                <i className="bx bx-plus me-1"></i>Create Order
              </a>
            </div>
          </div>

          <div className="table-responsive table-centered">
            <table className="table mb-0">
              <thead className="bg-light bg-opacity-50">
                <tr>
                  <th className="ps-3">Order ID</th>
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

          <div className="card-footer border-top">
            <div className="row g-3">
              <div className="col-sm">
                <div className="text-muted">
                  Showing
                  <span className="fw-semibold"> {orders.length} </span>
                  of
                  <span className="fw-semibold"> {totalOrders} </span>
                  orders
                </div>
              </div>

              <div className="col-sm-auto">
                <ul className="pagination m-0">
                  <li className="page-item">
                    <a href="#" className="page-link">
                      <i className="bx bx-left-arrow-alt"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      <i className="bx bx-right-arrow-alt"></i>
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
