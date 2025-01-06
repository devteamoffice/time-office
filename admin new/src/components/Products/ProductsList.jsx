import React, { useState, useEffect } from "react";
import Navigation from "../Common/Navigation";
import ProductItem from "./ProductItem";
import Export from "../Common/Export";
import { API_URL } from "../../constants";
import axios from "axios";

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemNo = 10; // Items per page

  // Fetch all products
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/product`);
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <p>Loading products...</p>;
  if (!Array.isArray(products) || products.length === 0)
    return <p>No products available.</p>;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center gap-1">
              <h4 className="card-title flex-grow-1">All Product List</h4>
              <a href="/product/add" className="btn btn-sm btn-primary">
                Add Product
              </a>
              <Export tableData={products} fileName="products_list" />
            </div>
            <div className="table-responsive">
              <table className="table align-middle mb-0 table-hover table-centered">
                <thead className="bg-light-subtle">
                  <tr>
                    <th style={{ width: "20px" }}>
                      <div className="form-check ms-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheck1"
                        ></label>
                      </div>
                    </th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>SKU</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <ProductItem
                    products={products}
                    currentPage={currentPage}
                    itemNo={itemNo}
                  />
                </tbody>
              </table>
            </div>
            <Navigation
              totalItems={products.length}
              itemNo={itemNo}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
