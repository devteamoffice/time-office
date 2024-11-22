import React from "react";

const AccountPaginate = () => {
  return (
    <div class="d-flex flex-wrap align-items-center wizard justify-content-between gap-3 mt-3">
      <div class="first">
        <a href="javascript:void(0);" class="btn btn-soft-primary">
          First
        </a>
      </div>
      <div class="d-flex gap-2">
        <div class="previous">
          <a href="javascript:void(0);" class="btn btn-primary disabled">
            <i class="bx bx-left-arrow-alt me-2"></i>Back To Previous
          </a>
        </div>
        <div class="next">
          <a href="javascript:void(0);" class="btn btn-primary">
            Next Step
            <i class="bx bx-right-arrow-alt ms-2"></i>
          </a>
        </div>
      </div>
      <div class="last">
        <a href="javascript:void(0);" class="btn btn-soft-primary">
          Finish
        </a>
      </div>
    </div>
  );
};

export default AccountPaginate;
