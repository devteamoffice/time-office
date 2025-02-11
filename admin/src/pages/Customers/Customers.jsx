import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../../components/Common/Navigation";
import CustomerCard from "../../components/Customers/CustomerCard";
import ListTable from "../../components/Customers/ListTable";
import { API_URL } from "../../constants";

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const itemNo = 10;

  // Replace with actual authentication token
  const token = localStorage.getItem("token");

  // Fetch customers data
  const fetchCustomers = async (page) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/user`, {
        params: { page, limit: itemNo },
        headers: {
          Authorization: `${token}`, // Attach token here
        },
      });

      if (!Array.isArray(response.data.users)) {
        throw new Error("Invalid data format");
      }

      setUsers(response.data.users);
      setTotalCustomers(response.data.count);
    } catch (error) {
      setError("Failed to fetch customers");
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-xxl">
      <CustomerCard />

      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="d-flex card-header justify-content-between align-items-center">
              <h4 className="card-title">All Customers List</h4>
            </div>
            <div className="table-responsive">
              <ListTable users={users} loading={loading} error={error} />
            </div>
            <Navigation
              totalItems={totalCustomers}
              itemNo={itemNo}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
