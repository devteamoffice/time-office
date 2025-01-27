import React, { useContext } from "react";
import { useSelector } from "react-redux";

import AccountDetails from "../component/Account/AccountDetails";
import { AuthContext } from "../context/Socket/AuthContext";
import Address from "../component/Account/Address";
import AccountStats from "../component/Account/AccountStats";
const Account = () => {
  const { isAuthenticated, login, logout, user } = useContext(AuthContext);

  return (
    <div class="container-xxl">
      <div class="row">
        {user ? <AccountDetails user={user} /> : <p>Loading...</p>}

        <div class="col-lg-8">
          <AccountStats />

          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Transaction History</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table align-middle mb-0 table-hover table-centered">
                  <thead class="bg-light-subtle">
                    <tr>
                      <th>Invoice ID</th>
                      <th>Status</th>
                      <th>Total Amount</th>
                      <th>Due Date</th>
                      <th>Payment Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="javascript: void(0);" class="text-body">
                          #INV2540
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <span class="badge bg-success-subtle text-success py-1 px-2">
                          Completed
                        </span>{" "}
                      </td>
                      <td> $421.00 </td>
                      <td> 07 Jan, 2023</td>
                      <td> Mastercard </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="javascript: void(0);" class="text-body">
                          #INV3924
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <span class="badge bg-danger-subtle text-danger px-2 py-1">
                          Cancel
                        </span>{" "}
                      </td>
                      <td> $736.00 </td>
                      <td> 03 Dec, 2023</td>
                      <td> Visa </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="javascript: void(0);" class="text-body">
                          #INV5032
                        </a>{" "}
                      </td>
                      <td>
                        <span class="badge bg-success-subtle text-success py-1 px-2">
                          Completed
                        </span>
                      </td>
                      <td> $347.00</td>
                      <td> 28 Sep, 2023 </td>
                      <td> Paypal </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript: void(0);" class="text-body">
                          #INV1695
                        </a>{" "}
                      </td>
                      <td>
                        <span class="badge bg-primary-subtle text-primary py-1 px-2">
                          Pending
                        </span>
                      </td>
                      <td> $457.00 </td>
                      <td>10 Aug, 2023</td>
                      <td> Mastercard</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="javascript: void(0);" class="text-body">
                          #INV8473
                        </a>{" "}
                      </td>
                      <td>
                        {" "}
                        <span class="badge bg-success-subtle text-success px-2 py-1 ">
                          Completed
                        </span>
                      </td>
                      <td> $414.00</td>
                      <td> 22 May, 2023 </td>
                      <td> Visa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer border-top">
              <ul class="pagination pagination-rounded m-0 justify-content-end">
                <li class="page-item">
                  <a href="#" class="page-link">
                    <i class="bx bx-left-arrow-alt"></i>
                  </a>
                </li>
                <li class="page-item active">
                  <a href="#" class="page-link">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    <i class="bx bx-right-arrow-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <Address />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
