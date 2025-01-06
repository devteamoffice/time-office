import React from "react";

const Conversions = () => {
  return (
    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Conversions</h5>
            <div id="conversions" class="apex-charts mb-2 mt-n2"></div>
            <div class="row text-center">
              <div class="col-6">
                <p class="text-muted mb-2">This Week</p>
                <h3 class="text-dark mb-3">23.5k</h3>
              </div>
              <div class="col-6">
                <p class="text-muted mb-2">Last Week</p>
                <h3 class="text-dark mb-3">41.05k</h3>
              </div>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-light shadow-none w-100">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Sessions by Country</h5>
            <div id="world-map-markers" style={{ height: "316px" }}></div>
            <div class="row text-center">
              <div class="col-6">
                <p class="text-muted mb-2">This Week</p>
                <h3 class="text-dark mb-3">23.5k</h3>
              </div>
              <div class="col-6">
                <p class="text-muted mb-2">Last Week</p>
                <h3 class="text-dark mb-3">41.05k</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card card-height-100">
          <div class="card-header d-flex align-items-center justify-content-between gap-2">
            <h4 class="card-title flex-grow-1">Top Pages</h4>

            <a href="#" class="btn btn-sm btn-soft-primary">
              View All
            </a>
          </div>
          <div class="table-responsive">
            <table class="table table-hover table-nowrap table-centered m-0">
              <thead class="bg-light bg-opacity-50">
                <tr>
                  <th class="text-muted ps-3">Page Path</th>
                  <th class="text-muted">Page Views</th>
                  <th class="text-muted">Exit Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="ps-3">
                    <a href="#" class="text-muted">
                      larkon/ecommerce.html
                    </a>
                  </td>
                  <td>465 </td>
                  <td>
                    <span class="badge badge-soft-success">4.4%</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-3">
                    <a href="#" class="text-muted">
                      larkon/dashboard.html
                    </a>
                  </td>
                  <td> 426</td>
                  <td>
                    <span class="badge badge-soft-danger">20.4%</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-3">
                    <a href="#" class="text-muted">
                      larkon/chat.html
                    </a>
                  </td>
                  <td>254 </td>
                  <td>
                    <span class="badge badge-soft-warning">12.25%</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-3">
                    <a href="#" class="text-muted">
                      larkon/auth-login.html
                    </a>
                  </td>
                  <td> 3369</td>
                  <td>
                    <span class="badge badge-soft-success">5.2%</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-3">
                    <a href="#" class="text-muted">
                      larkon/email.html
                    </a>
                  </td>
                  <td>985 </td>
                  <td>
                    <span class="badge badge-soft-danger">64.2%</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-3">
                    <a href="#" class="text-muted">
                      larkon/social.html
                    </a>
                  </td>
                  <td>653 </td>
                  <td>
                    <span class="badge badge-soft-success">2.4%</span>
                  </td>
                </tr>
                <tr>
                  <td class="ps-3">
                    <a href="#" class="text-muted">
                      larkon/blog.html
                    </a>
                  </td>
                  <td>478 </td>
                  <td>
                    <span class="badge badge-soft-danger">1.4%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-xl-4 d-none">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title">Recent Transactions</h4>
            <div>
              <a href="#!" class="btn btn-sm btn-primary">
                <i class="bx bx-plus me-1"></i>Add
              </a>
            </div>
          </div>
          <div class="card-body p-0">
            <div class="px-3" data-simplebar style={{ maxHeight: "398px" }}>
              <table class="table table-hover mb-0 table-centered">
                <tbody>
                  <tr>
                    <td>24 April, 2024</td>
                    <td>$120.55</td>
                    <td>
                      <span class="badge bg-success">Cr</span>
                    </td>
                    <td>Commisions </td>
                  </tr>
                  <tr>
                    <td>24 April, 2024</td>
                    <td>$9.68</td>
                    <td>
                      <span class="badge bg-success">Cr</span>
                    </td>
                    <td>Affiliates </td>
                  </tr>
                  <tr>
                    <td>20 April, 2024</td>
                    <td>$105.22</td>
                    <td>
                      <span class="badge bg-danger">Dr</span>
                    </td>
                    <td>Grocery </td>
                  </tr>
                  <tr>
                    <td>18 April, 2024</td>
                    <td>$80.59</td>
                    <td>
                      <span class="badge bg-success">Cr</span>
                    </td>
                    <td>Refunds </td>
                  </tr>
                  <tr>
                    <td>18 April, 2024</td>
                    <td>$750.95</td>
                    <td>
                      <span class="badge bg-danger">Dr</span>
                    </td>
                    <td>Bill Payments </td>
                  </tr>
                  <tr>
                    <td>17 April, 2024</td>
                    <td>$455.62</td>
                    <td>
                      <span class="badge bg-danger">Dr</span>
                    </td>
                    <td>Electricity </td>
                  </tr>
                  <tr>
                    <td>17 April, 2024</td>
                    <td>$102.77</td>
                    <td>
                      <span class="badge bg-success">Cr</span>
                    </td>
                    <td>Interest </td>
                  </tr>
                  <tr>
                    <td>16 April, 2024</td>
                    <td>$79.49</td>
                    <td>
                      <span class="badge bg-success">Cr</span>
                    </td>
                    <td>Refunds </td>
                  </tr>
                  <tr>
                    <td>05 April, 2024</td>
                    <td>$980.00</td>
                    <td>
                      <span class="badge bg-danger">Dr</span>
                    </td>
                    <td>Shopping</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversions;
