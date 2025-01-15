import React, { useState, useEffect } from "react";
import Navigation from "../../components/Common/Navigation";
import ListTable from "../../components/Category/ListTable";
import axios from "axios";
import { API_URL } from "../../constants";
import Export from "../../components/Common/Export";

const CategoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [categories, setCategories] = useState([]); // Store category data
  const itemNo = 10; // Items per page

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/category/list?page=${currentPage}&limit=${itemNo}`
        );
        setCategories(response.data.categories); // Assuming backend returns { categories: [] }
        setTotalItems(response.data.totalItems); // Assuming backend returns { totalItems: number }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [currentPage]); // Refetch data when page changes

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
              <Export tableData={categories} fileName="categories_list" />
            </div>
            <div>
              <div className="table-responsive">
                <ListTable categories={categories} />
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
