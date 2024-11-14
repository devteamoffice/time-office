import React, { useState } from "react";
import Navigation from "../../components/Common/Navigation";
import Actions from "../../components/Common/Actions";
import ListTable from "../../components/Category/ListTable";

const CategoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 50; // Example total items
  const itemNo = 10; // Items per page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div class="container-xxl">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center gap-1">
              <h4 class="card-title flex-grow-1">All Categories List</h4>

              <a href="product-add.html" class="btn btn-sm btn-primary">
                Add Product
              </a>

              <div class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle btn btn-sm btn-outline-light"
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
                <ListTable />
              </div>
            </div>
            <div class="card-footer border-top">
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
