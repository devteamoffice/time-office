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

  const fetchStats = async () => {
    try {
      // Fetching data from different endpoints
      const productsResponse = await axios.get(`${API_URL}/product`);
      const ordersResponse = await axios.get(`${API_URL}/orders`);
      const returnsResponse = await axios.get(`${API_URL}/orders`, {
        params: { status: "return" },
      });
      const cancellationsResponse = await axios.get(`${API_URL}/orders`, {
        params: { status: "cancel" },
      });

      // Extract product count from the response
      const totalProducts = productsResponse.data.products?.length || 0;
      console.log(totalProducts);
      // Updating stats state
      setStats({
        products: totalProducts,
        orders: ordersResponse.data.totalOrders || 0,
        returns: returnsResponse.data.totalReturns || 0,
        cancellations: cancellationsResponse.data.totalCancellations || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };
  console.log(stats.products);
  useEffect(() => {
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
