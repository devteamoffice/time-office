import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, onPagination }) => {
  const handlePageClick = (event) => {
    onPagination(event.selected + 1); // Corrected: page is 0-indexed, so add 1
  };

  return (
    <div className="py-3 border-top">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages} // Uses totalPages prop
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
        breakClassName={"break-me"}
      />
    </div>
  );
};

export default Pagination;
