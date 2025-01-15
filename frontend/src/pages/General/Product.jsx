import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../component/Common/Pagination";
import ProductFilter from "../../component/Product/ProductFilter";
import SingleProduct from "../../component/Product/SingleProduct";
import axios from "axios";
import { API_URL } from "../../constants";

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // States
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categorySlug, setCategorySlug] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const itemsPerPage = 20;

  // Helper: Fetch products from the API
  const fetchProducts = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      console.log("Fetched products:", response.data);
      const activeProducts = response.data.products.filter((p) => p.isActive);
      return activeProducts;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  // Load products based on query or search
  useEffect(() => {
    const loadProducts = async () => {
      const params = new URLSearchParams(location.search);
      const slug = params.get("cate"); // Category filter
      const searchQuery = params.get("name"); // Search query

      let endpoint = `${API_URL}/product`;

      // If category filter is present, apply category filter
      if (slug) {
        endpoint = `${API_URL}/product/filter/${encodeURIComponent(slug)}`;
        setCategorySlug(slug);
        setIsFiltered(true);
      } else {
        setCategorySlug(""); // Clear category if not filtering by category
        setIsFiltered(false);
      }

      // If search query is present, apply search filter
      if (searchQuery) {
        const searchResults = location.state?.searchResult || [];
        const filteredSearchResults = searchResults.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filteredSearchResults);
        setFilteredProducts(filteredSearchResults);
        return;
      }

      // Fetch products if no specific category or search filter
      const fetchedProducts = await fetchProducts(endpoint);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };

    loadProducts();
  }, [location.search, location.state]);

  // Toggle filter visibility or clear filters
  const handleFilterToggle = () => {
    if (isFiltered) {
      setFilteredProducts(products);
      setCategorySlug("");
      setIsFiltered(false);
      navigate("/store");
    } else {
      setIsFilterVisible((prev) => !prev);
    }
  };

  // Handle filtering by category
  const handleFilter = async (slug) => {
    setCategorySlug(slug);
    const filteredProducts = await fetchProducts(
      `${API_URL}/product/filter/${encodeURIComponent(slug)}`
    );
    setFilteredProducts(filteredProducts);
    setIsFiltered(true);
    setCurrentPage(1);
    navigate(`/store?cate=${slug}`);
  };

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handle pagination
  const displayedItems = filteredProducts.slice(
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
                        <a href="javascript:void(0);" className="text-dark">
                          {categorySlug || "All Categories"}
                        </a>
                      </li>
                      <li className="breadcrumb-item active">Store</li>
                    </ol>
                    <p className="mb-0 text-muted">
                      Showing{" "}
                      <span className="text-dark fw-semibold">
                        {filteredProducts.length}
                      </span>{" "}
                      items
                    </p>
                  </div>
                  <div className="col-lg-6 text-md-end mt-3 mt-md-0">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleFilterToggle}
                    >
                      <i
                        className={`bx ${
                          isFiltered ? "bx-refresh" : "bx-filter-alt"
                        } me-1`}
                      ></i>{" "}
                      {isFiltered ? "Clear Filters" : "Filters"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <SingleProduct products={displayedItems} />
            </div>
            <Pagination
              totalPages={totalPages} // Pass the calculated totalPages
              onPagination={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
