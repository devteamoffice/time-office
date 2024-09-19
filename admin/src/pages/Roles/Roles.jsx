import React from "react";
import Navigation from "../../components/Common/Navigation";
import Actions from "../../components/Common/Actions";

const Roles = () => {
  return (
    <div class="container-xxl">
      <div class="card overflow-hiddenCoupons">
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table align-middle mb-0 table-hover table-centered">
              <thead class="bg-light-subtle">
                <tr>
                  <th>Role</th>
                  <th>Workspace</th>
                  <th>Tags</th>
                  <th>Users</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Workspace Manager</td>
                  <td>
                    <img
                      src="assets/images/app-calendar/facebook.png"
                      class="avatar-xs rounded-circle me-1"
                      alt="..."
                    />{" "}
                    Facebook
                  </td>
                  <td>
                    {" "}
                    <span class="badge bg-light-subtle text-muted border py-1 px-2">
                      Manager
                    </span>{" "}
                    <span class="badge bg-light-subtle text-muted border py-1 px-2">
                      Product
                    </span>
                  </td>
                  <td>
                    <div class="avatar-group">
                      <div class="avatar">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          alt=""
                          class="rounded-circle avatar-sm"
                        />
                      </div>
                      <div class="avatar">
                        <span class=" avatar-sm d-flex align-items-center justify-content-center bg-danger-subtle text-danger rounded-circle fw-bold shadow">
                          P
                        </span>
                      </div>
                      <div class="avatar">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt=""
                          class="rounded-circle avatar-sm"
                        />
                      </div>
                      <div class="avatar">
                        <img
                          src="assets/images/users/avatar-6.jpg"
                          alt=""
                          class="rounded-circle avatar-sm"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked1"
                        checked
                      />
                    </div>
                  </td>
                  <td>
                    <Actions />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Roles;
