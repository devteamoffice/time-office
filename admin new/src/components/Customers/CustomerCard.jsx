import React from "react";

const CustomerCard = () => {
  return (
    <div class="row">
      <div class="col-md-6 col-xl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="avatar-md bg-primary bg-opacity-10 rounded">
                <iconify-icon
                  icon="solar:users-group-two-rounded-bold-duotone"
                  class="fs-32 text-primary avatar-title"
                ></iconify-icon>
              </div>
              <div>
                <h4 class="mb-0">All Customers</h4>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <p class="text-muted fw-medium fs-22 mb-0">+22.63k</p>
              <div>
                <span class="badge text-success bg-success-subtle fs-12">
                  <i class="bx bx-up-arrow-alt"></i>34.4%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="avatar-md bg-primary bg-opacity-10 rounded">
                <iconify-icon
                  icon="solar:box-bold-duotone"
                  class="fs-32 text-primary avatar-title"
                ></iconify-icon>
              </div>
              <div>
                <h4 class="mb-0">Orders</h4>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <p class="text-muted fw-medium fs-22 mb-0">+4.5k</p>
              <div>
                <span class="badge text-danger bg-danger-subtle fs-12">
                  <i class="bx bx-down-arrow-alt"></i>8.1%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="avatar-md bg-primary bg-opacity-10 rounded">
                <iconify-icon
                  icon="solar:headphones-round-sound-bold-duotone"
                  class="fs-32 text-primary avatar-title"
                ></iconify-icon>
              </div>
              <div>
                <h4 class="mb-0">Services Request</h4>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <p class="text-muted fw-medium fs-22 mb-0">+1.03k</p>
              <div>
                <span class="badge text-success bg-success-subtle fs-12">
                  <i class="bx bx-up-arrow-alt"></i>12.6%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xl-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="avatar-md bg-primary bg-opacity-10 rounded">
                <iconify-icon
                  icon="solar:bill-list-bold-duotone"
                  class="fs-32 text-primary avatar-title"
                ></iconify-icon>
              </div>
              <div>
                <h4 class="mb-0">Invoice & Payment</h4>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <p class="text-muted fw-medium fs-22 mb-0">$38,908.00</p>
              <div>
                <span class="badge text-success bg-success-subtle fs-12">
                  <i class="bx bx-up-arrow-alt"></i>45.9%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
