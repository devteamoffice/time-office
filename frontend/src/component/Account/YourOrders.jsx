import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { FaFileDownload } from "react-icons/fa";
import { AuthContext } from "../../context/Socket/AuthContext";
const YourOrders = () => {
  const { user } = useContext(AuthContext); // Get user from context
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!user?.id) return; // Ensure user is available before fetching orders
        const response = await axios.get(`${API_URL}/order/`, {
          headers: { Authorization: `${token}` },
        });
        setOrders(response.data.orders || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchOrders();
    }
  }, [token, user]);

  return (
    <div className="card">
      <div className="card-header border-bottom border-dashed">
        <div className="d-flex align-items-center gap-2">
          <div className="d-block">
            <h4 className="card-title mb-1">Your Orders</h4>
            <p className="mb-0 text-muted">
              Recent invoices from your purchases
            </p>
          </div>
          <div className="ms-auto">
            {user && (
              <a
                href={`/u/${user.id}/orders`}
                className="btn btn-primary btn-sm"
              >
                View All
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="card-body">
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div
              className="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle mt-2"
              key={order.id}
            >
              <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
                <FaFileDownload />
              </div>
              <div className="d-block">
                <a href="#" className="text-dark fw-medium">
                  order ID {order.orderId || order.id}
                </a>
                <p className="text-muted mb-0 fs-13">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="ms-auto text-end">
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop p-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#" className="dropdown-item">
                      Download
                    </a>
                    <a href="#" className="dropdown-item">
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default YourOrders;
