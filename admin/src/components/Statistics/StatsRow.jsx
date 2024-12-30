import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";

const StatsRow = () => {
  const [stats, setStats] = useState({
    orders: 0,
    products: 0,
    returns: 0,
    cancellations: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const productResponse = await axios.get(`${API_URL}/product/count`);
        const orderResponse = await axios.get(`${API_URL}/orders`);
        const returnResponse = await axios.get(`${API_URL}/orders`, {
          params: { status: "return" },
        });
        const cancellationResponse = await axios.get(`${API_URL}/orders`, {
          params: { status: "cancel" },
        });

        // Update stats with the correct response structure
        setStats({
          products: productResponse.data.count || 0, // Use the count directly
          orders: orderResponse.data.totalOrders || 0,
          returns: returnResponse.data.totalReturns || 0,
          cancellations: cancellationResponse.data.totalCancellations || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);
  console.log(stats.products);
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
                <h3 className="text-dark mt-1 mb-0">{stats.orders}</h3>
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
                <h3 className="text-dark mt-1 mb-0">{stats.products}</h3>
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
                <h3 className="text-dark mt-1 mb-0">{stats.returns}</h3>
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
                <h3 className="text-dark mt-1 mb-0">{stats.cancellations}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
