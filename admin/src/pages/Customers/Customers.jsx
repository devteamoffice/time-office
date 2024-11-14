import React, { useState } from "react";
import Navigation from "../../components/Common/Navigation";
import Actions from "../../components/Common/Actions";
import CustomerCard from "../../components/Customers/CustomerCard";
import CustomerItem from "../../components/Customers/CustomerItem";
import ListTable from "../../components/Customers/ListTable";

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 50; // Example total items
  const itemNo = 10; // Items per page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div class="container-xxl">
      <CustomerCard />

      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="d-flex card-header justify-content-between align-items-center">
              <div>
                <h4 class="card-title">All Customers List</h4>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle btn btn-sm btn-outline-light rounded"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  This Month
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="#!" class="dropdown-item">
                    Download
                  </a>

                  <a href="#!" class="dropdown-item">
                    Export
                  </a>

                  <a href="#!" class="dropdown-item">
                    Import
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="table-responsive">
                <ListTable currentPage={currentPage} itemNo={itemNo} />
              </div>
            </div>
            <Navigation
              totalItems={totalItems}
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
