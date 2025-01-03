import React, { useState, useEffect } from "react";
import Navigation from "../../components/Common/Navigation";
import Actions from "../../components/Common/Actions";
import CustomerCard from "../../components/Customers/CustomerCard";
import CustomerItem from "../../components/Customers/CustomerItem";
import ListTable from "../../components/Customers/ListTable";
import { API_URL } from "../../constants";
const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCustomers, setTotalCustomers] = useState(0); // Dynamic total customers
  const itemNo = 10; // Items per page

  // Fetch customers data
  const fetchCustomers = async (page) => {
    try {
      const response = await fetch(
        `${API_URL}/user?page=${page}&limit=${itemNo}`
      );
      const data = await response.json();
      setTotalCustomers(data.count); // Using 'count' from API response
    } catch (error) {
      console.error("Failed to fetch customers:", error);
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
              <div>
                <h4 className="card-title">All Customers List</h4>
              </div>
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle btn btn-sm btn-outline-light rounded"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  This Month
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="#!" className="dropdown-item">
                    Download
                  </a>
                  <a href="#!" className="dropdown-item">
                    Export
                  </a>
                  <a href="#!" className="dropdown-item">
                    Import
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="table-responsive">
                <ListTable currentPage={currentPage} itemNo={itemNo} />
              </div>
            </div>
            <Navigation
              totalItems={totalCustomers} // Use API's 'count'
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
