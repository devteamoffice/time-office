import React from "react";

const OrderSummary = () => {
  return (
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Order Summary</h4>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table mb-0">
            <tbody>
              <tr>
                <td class="px-0">
                  <p class="d-flex mb-0 align-items-center gap-1">
                    <iconify-icon icon="solar:clipboard-text-broken"></iconify-icon>{" "}
                    Sub Total :{" "}
                  </p>
                </td>
                <td class="text-end text-dark fw-medium px-0">$777.00</td>
              </tr>
              <tr>
                <td class="px-0">
                  <p class="d-flex mb-0 align-items-center gap-1">
                    <iconify-icon
                      icon="solar:ticket-broken"
                      class="align-middle"
                    ></iconify-icon>{" "}
                    Discount :{" "}
                  </p>
                </td>
                <td class="text-end text-dark fw-medium px-0">-$60.00</td>
              </tr>
              <tr>
                <td class="px-0">
                  <p class="d-flex mb-0 align-items-center gap-1">
                    <iconify-icon
                      icon="solar:kick-scooter-broken"
                      class="align-middle"
                    ></iconify-icon>{" "}
                    Delivery Charge :{" "}
                  </p>
                </td>
                <td class="text-end text-dark fw-medium px-0">$00.00</td>
              </tr>
              <tr>
                <td class="px-0">
                  <p class="d-flex mb-0 align-items-center gap-1">
                    <iconify-icon
                      icon="solar:calculator-minimalistic-broken"
                      class="align-middle"
                    ></iconify-icon>{" "}
                    Estimated Tax (15.5%) :{" "}
                  </p>
                </td>
                <td class="text-end text-dark fw-medium px-0">$20.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-footer bg-light-subtle border-top">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <p class="fw-medium text-dark mb-0">Total Amount</p>
          </div>
          <div>
            <p class="fw-medium text-dark mb-0">$737.00</p>
          </div>
        </div>
        <div class="alert alert-warning alert-icon mt-3 mb-0" role="alert">
          <div class="d-flex align-items-center">
            <div class="avatar-sm rounded bg-warning d-flex justify-content-center align-items-center fs-22 me-2 flex-shrink-0">
              <iconify-icon
                icon="solar:kick-scooter-broken"
                class="align-middle text-white"
              ></iconify-icon>
            </div>
            <div class="flex-grow-1">Estimated Delivery by 25 April, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
