import React from "react";

const Navigation = () => {
  return (
    <div class="card-footer border-top">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end mb-0">
          <li class="page-item">
            <a class="page-link" href="javascript:void(0);">
              Previous
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="javascript:void(0);">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:void(0);">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:void(0);">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:void(0);">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
