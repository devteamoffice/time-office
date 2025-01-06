import React, { useState, useEffect } from "react";
import Navigation from "../../components/Common/Navigation";
import { BsBoxSeamFill } from "react-icons/bs";
import { TbReorder } from "react-icons/tb";
import { BsFillBagXFill } from "react-icons/bs";
import WarehouseItem from "../../components/Products/WarehouseItem";
import axios from "axios";
import { API_URL } from "../../constants";

const Warehouse = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemNo = 10; // Items per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/product`);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Calculate totals
  const totalProducts = products.length;
  const activeProducts = products.filter((product) => product.isActive).length;
  const inactiveProducts = totalProducts - activeProducts;

  // Paginate products
  const startIndex = (currentPage - 1) * itemNo;
  const paginatedProducts = products.slice(startIndex, startIndex + itemNo);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="card-title mb-2">Total Product Items</h4>
                  <p className="text-muted fw-medium fs-22 mb-0">
                    {totalProducts} <span className="fs-12">(Items)</span>
                  </p>
                </div>
                <div>
                  <div className="avatar-md bg-primary bg-opacity-10 rounded">
                    <BsBoxSeamFill className="fs-32 text-primary avatar-title" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="card-title mb-2">In Store</h4>
                  <p className="text-muted fw-medium fs-22 mb-0">
                    {activeProducts} <span className="fs-12">(Items)</span>
                  </p>
                </div>
                <div>
                  <div className="avatar-md bg-primary bg-opacity-10 rounded">
                    <TbReorder className="fs-32 text-primary avatar-title" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="card-title mb-2">Inactive Products</h4>
                  <p className="text-muted fw-medium fs-22 mb-0">
                    {inactiveProducts} <span className="fs-12">(Items)</span>
                  </p>
                </div>
                <div>
                  <div className="avatar-md bg-primary bg-opacity-10 rounded">
                    <BsFillBagXFill className="fs-32 text-primary avatar-title" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="d-flex card-header justify-content-between align-items-center">
              <h4 className="card-title">All Warehouse List</h4>
            </div>
            <div>
              <div className="table-responsive">
                <table className="table align-middle mb-0 table-hover table-centered">
                  <thead className="bg-light-subtle">
                    <tr>
                      <th style={{ width: "20px" }}>
                        <div className="form-check">
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
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <WarehouseItem
                      products={paginatedProducts}
                      currentPage={currentPage}
                      itemNo={itemNo}
                    />
                  </tbody>
                </table>
              </div>
            </div>
            <Navigation
              totalItems={totalProducts}
              itemNo={itemNo}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
