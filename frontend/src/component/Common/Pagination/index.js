import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const { totalPages, onPagination } = props;

  const handlePageClick = (event) => {
    onPagination("pagination", event.selected + 1);
  };

  return (
    <div className="py-3 border-top">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages} // The total number of pages.
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
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
