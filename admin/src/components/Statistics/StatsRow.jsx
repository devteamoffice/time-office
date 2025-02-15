import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";

const StatsRow = () => {
  const [products, setProducts] = useState(0);
  const [orders, setOrders] = useState(0);
  const [returns, setReturns] = useState(0);
  const [cancellations, setCancellations] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const productResponse = await axios.get(`${API_URL}/product/count`);
        const orderResponse = await axios.get(`${API_URL}/order/count`);
        const returnResponse = await axios.get(
          `${API_URL}/order/status/return`
        );
        const cancellationResponse = await axios.get(
          `${API_URL}/order/status/cancel`
        );

        console.log("Product Count API Response:", productResponse.data.count);
        console.log("Order Count API Response:", orderResponse.data);
        console.log("Return Status API Response:", returnResponse.data);
        console.log(
          "Cancellation Status API Response:",
          cancellationResponse.data
        );

        setProducts(productResponse.data.count || 0);
        setOrders(orderResponse.data.totalOrders || 0);
        setReturns(returnResponse.data.totalReturns || 0);
        setCancellations(cancellationResponse.data.totalCancellations || 0);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="row">
      {/* Orders */}
      <div className="col-md-3">
        <div className="card overflow-hidden">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="avatar-md bg-soft-primary rounded">
                  <i className="bx bx-cart avatar-title fs-24 text-primary"></i>
                </div>
              </div>
              <div className="col-6 text-end">
                <p className="text-muted mb-0 text-truncate">Orders</p>
                <h3 className="text-dark mt-1 mb-0">{orders}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="col-md-3">
        <div className="card overflow-hidden">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="avatar-md bg-soft-primary rounded">
                  <i className="bx bx-package avatar-title fs-24 text-primary"></i>
                </div>
              </div>
              <div className="col-6 text-end">
                <p className="text-muted mb-0 text-truncate">Products</p>
                <h3 className="text-dark mt-1 mb-0">{products}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Returns */}
      <div className="col-md-3">
        <div className="card overflow-hidden">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="avatar-md bg-soft-primary rounded">
                  <i className="bx bx-refresh avatar-title fs-24 text-primary"></i>
                </div>
              </div>
              <div className="col-6 text-end">
                <p className="text-muted mb-0 text-truncate">Returns</p>
                <h3 className="text-dark mt-1 mb-0">{returns}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancellations */}
      <div className="col-md-3">
        <div className="card overflow-hidden">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="avatar-md bg-soft-primary rounded">
                  <i className="bx bx-x-circle avatar-title fs-24 text-primary"></i>
                </div>
              </div>
              <div className="col-6 text-end">
                <p className="text-muted mb-0 text-truncate">Cancellations</p>
                <h3 className="text-dark mt-1 mb-0">{cancellations}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
