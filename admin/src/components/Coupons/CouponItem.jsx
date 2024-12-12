import React from "react";
import Actions from "../Common/Actions";
const CouponItem = () => {
  return (
    <tr>
      <td>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="customCheck2" />
          <label class="form-check-label" for="customCheck2">
            &nbsp;
          </label>
        </div>
      </td>
      <td>
        <div class="d-flex align-items-center gap-2">
          <div class="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
            <img src="assets/images/product/p-1.png" alt="" class="avatar-md" />
          </div>
          <div>
            <a href="#!" class="text-dark fw-medium fs-15">
              Black T-shirt
            </a>
            <p class="text-muted mb-0 mt-1 fs-13">
              <span>Fashion</span>
            </p>
          </div>
        </div>
      </td>
      <td>$80.00</td>
      <td>$20.00</td>
      <td>FASHION123</td>
      <td>12 May 2023</td>
      <td>12 Jun 2023</td>
      <td>
        <span class="badge text-success bg-success-subtle fs-12">
          <i class="bx bx-check-double"></i>Active
        </span>
      </td>
      <td>
        <Actions />
      </td>
    </tr>
  );
};

export default CouponItem;
