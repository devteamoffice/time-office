import React from "react";
import Navigation from "../../components/Common/Navigation";
import Actions from "../../components/Common/Actions";
import ListTable from "../../components/Roles/ListTable";

const Roles = () => {
  return (
    <div class="container-xxl">
      <div class="card overflow-hiddenCoupons">
        <div class="card-body p-0">
          <div class="table-responsive">
            <ListTable />
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Roles;
