import React, { useState, useEffect } from "react";
import axios from "axios"; // Importing axios to fetch the data
import { FaFileInvoice } from "react-icons/fa6";
import { RiOrderPlayFill } from "react-icons/ri";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { API_URL } from "../../constants"; // Assuming the API_URL is stored in a constants file

const AccountStats = () => {
  const [stats, setStats] = useState({
    totalInvoice: 0,
    totalOrder: 0,
    totalExpense: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the stats data from the API
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${API_URL}/orders`);
        setStats(response.data); // Set the state with the data from the API
      } catch (err) {
        setError("Failed to fetch stats.");
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchStats(); // Call the fetch function on component mount
  }, []); // Empty dependency array to call once on mount

  if (loading) {
    return <p>Loading stats...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                  Total Invoice
                </h4>
                <p className="text-muted fw-medium fs-22 mb-0">
                  {stats.totalInvoice}
                </p>
              </div>
              <div>
                <div className="avatar-md bg-primary bg-opacity-10 rounded">
                  <FaFileInvoice />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                  Total Order
                </h4>
                <p className="text-muted fw-medium fs-22 mb-0">
                  {stats.totalOrder}
                </p>
              </div>
              <div>
                <div className="avatar-md bg-primary bg-opacity-10 rounded">
                  <RiOrderPlayFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                  Total Expense
                </h4>
                <p className="text-muted fw-medium fs-22 mb-0">
                  ${stats.totalExpense}
                </p>
              </div>
              <div>
                <div className="avatar-md bg-primary bg-opacity-10 rounded">
                  <FaMoneyBill1Wave />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStats;
