import React, { useState, useEffect } from "react";
import Navigation from "../../components/Common/Navigation";
import ListTable from "../../components/Category/ListTable";
import axios from "axios";
import { API_URL } from "../../constants";

const CategoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // Initialize with 0
  const itemNo = 10; // Items per page

  useEffect(() => {
    const fetchCategoryCount = async () => {
      try {
        const response = await axios.get(`${API_URL}/category/list`);
        setTotalItems(response.data.totalItems); // Assuming backend returns { totalItems: number }
      } catch (error) {
        console.error("Error fetching category count:", error);
      }
    };

    fetchCategoryCount();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center gap-1">
              <h4 className="card-title flex-grow-1">All Categories List</h4>
              <a href="/category/add" className="btn btn-sm btn-primary">
                Add Category
              </a>
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle btn btn-sm btn-outline-light"
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
                <ListTable />
              </div>
            </div>
            <div className="card-footer border-top">
              <Navigation
                totalItems={totalItems}
                itemNo={itemNo}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
