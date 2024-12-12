import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../component/Common/Pagination";
import ProductFilter from "../../component/Product/ProductFilter";
import SingleProduct from "../../component/Product/SingleProduct";
import axios from "axios";
import { API_URL } from "../../constants"; // Ensure API_URL points to http://localhost:4000/api
import Navigation from "../../component/Extras/Pagination";
const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [data, setData] = useState([]); // All products
  const [filteredData, setFilteredData] = useState([]); // Filtered products
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState("");

  const itemsPerPage = 20; // Items per page

  // Get category slug from query parameters
  const getCategorySlugFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get("cate");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const slug = getCategorySlugFromQuery();
        setSelectedCategorySlug(slug);

        if (!slug && (!location.state || !location.state.searchResult)) {
          const response = await axios.get(`${API_URL}/product`);
          const products = response.data.products || [];
          setData(products);
          setFilteredData(products);
        } else if (location.state && location.state.searchResult) {
          setData(location.state.searchResult);
          setFilteredData(location.state.searchResult);
        } else if (slug) {
          const response = await axios.get(
            `${API_URL}/product/filter/${encodeURIComponent(slug)}`
          );
          const filteredProducts = response.data.products || [];
          setFilteredData(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [location.search]);

  const handleFill = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleFilter = async (slug) => {
    setSelectedCategorySlug(slug);
    if (slug) {
      try {
        const response = await axios.get(
          `${API_URL}/product/filter/${encodeURIComponent(slug)}`
        );
        const filteredProducts = response.data.products || [];
        setFilteredData(filteredProducts);
        setCurrentPage(1); // Reset to page 1
        navigate(`/store?cate=${slug}`);
      } catch (error) {
        console.error("Error filtering products:", error);
        setFilteredData([]);
      }
    } else {
      setFilteredData(data);
      navigate("/store");
    }
  };

  const totalItems = filteredData.length || 0;
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (page) => {
    console.log("Page Change to:", page); // Debugging
    setCurrentPage(page);
  };

  const displayedItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          {isFilterVisible && (
            <ProductFilter
              isFilterVisible={isFilterVisible}
              handleFilter={handleFilter}
            />
          )}
          <div className={isFilterVisible ? "col-lg-9" : "col-lg-12"}>
            <div className="card bg-light-subtle">
              <div className="card-header border-0">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item fw-medium">
                        <a href="javascript: void(0);" className="text-dark">
                          {selectedCategorySlug || "All Categories"}
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
                products={displayedItems} // Display paginated items
                currentPage={currentPage}
                itemNo={itemsPerPage}
              />
            </div>
            <Navigation
              totalItems={filteredData.length}
              itemNo={itemsPerPage}
              onPageChange={handlePageChange} // Pagination handler
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
