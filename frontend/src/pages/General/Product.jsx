import React, { useState, useEffect } from "react";
import Pagination from "../../component/Common/Pagination";
import ProductFilter from "../../component/Product/ProductFilter";
import SingleProduct from "../../component/Product/SingleProduct";
import axios from "axios";
import { API_URL } from "../../constants";

const Product = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  // Fetching product data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/product`);
        setData(response.data.products);
        setFilteredData(response.data.products); // Initially set filtered data to all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = (filteredItems) => {
    setFilteredData(filteredItems); // Set filtered data based on selected filters
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Calculate total pages and displayed items for pagination
  const totalItems = filteredData.length;
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const displayedItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <ProductFilter onFilter={handleFilter} />
          <div className="col-lg-9">
            <div className="card bg-light-subtle">
              <div className="card-header border-0">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item fw-medium">
                        <a href="javascript: void(0);" className="text-dark">
                          Categories
                        </a>
                      </li>
                      <li className="breadcrumb-item active">All Products</li>
                    </ol>
                    <p className="mb-0 text-muted">
                      Showing all{" "}
                      <span className="text-dark fw-semibold">
                        {totalItems}
                      </span>{" "}
                      items
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-md-end mt-3 mt-md-0">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-1"
                      >
                        <i className="bx bx-filter-alt me-1"></i> Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <SingleProduct products={displayedItems} />
            </div>
            <Pagination
              totalItems={totalItems}
              itemNo={itemsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
