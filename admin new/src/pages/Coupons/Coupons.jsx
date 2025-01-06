import React from "react";
import Navigation from "../../components/Common/Navigation";
import Actions from "../../components/Common/Actions";
import CouponItem from "../../components/Coupons/CouponItem";
import Export from "../../components/Common/Export";
import CouponTemplate from "../../components/Coupons/CouponTemplate";

const Coupons = () => {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-12">
          <div className="card bg-light-subtle">
            <div className="card-header border-0">
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <form className="app-search d-none d-md-block me-auto">
                        <div className="position-relative">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Search Coupons and Code"
                            autoComplete="off"
                          />
                          <iconify-icon
                            icon="solar:magnifer-broken"
                            className="search-widget-icon"
                          ></iconify-icon>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-4">
                      <h5 className="text-dark fw-medium mb-0">
                        5,786 <span className="text-muted">Items</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="text-md-end mt-3 mt-md-0">
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-1"
                    >
                      <i className="bx bx-cog me-1"></i>More Setting
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-1"
                    >
                      <i className="bx bx-filter-alt me-1"></i> Filters
                    </button>
                    <button type="button" className="btn btn-success me-1">
                      <i className="bx bx-plus"></i> New Coupons
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CouponTemplate />

      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="d-flex card-header justify-content-between align-items-center">
              <div>
                <h4 className="card-title">All Coupons List</h4>
              </div>
              <Export />
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
                            id="selectAll"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="selectAll"
                          ></label>
                        </div>
                      </th>
                      <th>Code</th>
                      <th>Email</th>
                      <th>Max Redemptions</th>
                      <th>Status</th>
                      <th>Discount Type</th>
                      <th>Discount Value</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Applicable Products</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CouponItem />
                  </tbody>
                </table>
              </div>
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
