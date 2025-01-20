import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OrderItem from "./OrderItem";
import { API_URL } from "../../constants";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API_URL}/order/me`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const data = response.data.order;
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container-xxl">
      <div className="row">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
