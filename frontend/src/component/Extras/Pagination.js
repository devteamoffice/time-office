import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css"; // Optional CSS for styling

const Pagination = ({ pageCount, onPageChange }) => {
  const handlePageClick = (data) => {
    let selectedPage = data.selected;
    onPageChange(selectedPage + 1); // Assuming your pages start from 1
  };

  return (
    <div className="py-3 border-top">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount} // Total number of pages
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-end mb-0"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        disabledClassName={"disabled"}
      />
    </div>
  );
};

export default Pagination;
