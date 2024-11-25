import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../../component/Common/Pagination";
import ProductFilter from "../../component/Product/ProductFilter";
import SingleProduct from "../../component/Product/SingleProduct";
import axios from "axios";
import { API_URL } from "../../constants";

const Product = () => {
  const location = useLocation();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [data, setData] = useState([]); // Holds all products data
  const [filteredData, setFilteredData] = useState([]); // Holds filtered products data
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const itemsPerPage = 20;

  // Fetch products on page load or when search results are passed
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Check if search results are available from the location state
        if (location.state && location.state.searchResult) {
          setData(location.state.searchResult); // Set the search results as data
          setFilteredData(location.state.searchResult); // Set the filtered data
        } else {
          // If no search results, fetch all products
          const response = await axios.get(`${API_URL}/product`);
          const products = response.data.products || [];
          setData(products);
          setFilteredData(products); // Show all products initially
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [location.state]); // Re-run if the search state changes

  // Toggle filter visibility
  const handleFill = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Filter products based on category
  const handleFilter = async (category) => {
    setSelectedCategory(category);
    if (category) {
      try {
        const response = await axios.get(
          `${API_URL}/product/filter/${category}`
        );
        const filteredProducts = response.data.products || [];
        setFilteredData(filteredProducts);
        setCurrentPage(1); // Reset to page 1 when applying filter
      } catch (error) {
        console.error("Error filtering products:", error);
        setFilteredData([]); // Show empty list if filter fails
      }
    } else {
      setFilteredData(data); // Show all products if no category is selected
    }
  };

  // Handle pagination changes
  const totalItems = filteredData.length || 0;
  const pageCount = Math.ceil(totalItems / itemsPerPage); // Calculate page count
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Slice the products for current page
  const displayedItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="page-content">
      {/* Start Container Fluid */}
      <div className="container-xxl">
        <div className="row">
          {isFilterVisible && <ProductFilter onFilter={handleFill} />}

          <div className={isFilterVisible ? "col-lg-9" : "col-lg-12"}>
            <div className="card bg-light-subtle">
              <div className="card-header border-0">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item fw-medium">
                        <a href="javascript: void(0);" className="text-dark">
                          {selectedCategory || "All Categories"}
                        </a>
                      </li>
                      <li className="breadcrumb-item active">Store</li>
                    </ol>
                    <p className="mb-0 text-muted">
                      Showing all{" "}
                      <span className="text-dark fw-semibold">
                        {totalItems}
                      </span>{" "}
                      items results
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-md-end mt-3 mt-md-0">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-1"
                        onClick={handleFill}
                      >
                        <i className="bx bx-filter-alt me-1"></i> Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <SingleProduct
                products={displayedItems} // Pass the sliced products to SingleProduct
                currentPage={currentPage}
                itemNo={itemsPerPage}
              />
            </div>
            {/* Pagination Component */}
            <Pagination
              pageCount={pageCount} // Pass page count
              currentPage={currentPage} // Pass current page
              onPageChange={handlePageChange} // Handle page change
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
