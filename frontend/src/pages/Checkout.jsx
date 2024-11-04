import React from "react";
import PersonalDetails from "../component/Order/PersonalDetails";
import ShippingDetails from "../component/Order/ShippingDetails";
import PaymentMethod from "../component/Order/PaymentMethod";
import HaveACode from "../component/Cart/HaveACode";

const Checkout = () => {
  return (
    <div class="page-content">
      <div class="container-xxl">
        <div class="row">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-body">
                <PersonalDetails />
                <div class="mt-3">
                  <ShippingDetails />
                </div>
                <div class="mt-5">
                  <PaymentMethod />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <HaveACode />

            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Order Summary</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <div class="d-flex align-items-center gap-3 mb-4">
                    <div class="rounded bg-light avatar d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/product/p-1.png"
                        alt=""
                        class="avatar"
                      />
                    </div>
                    <div>
                      <a href="#!" class="text-dark fw-medium fs-15">
                        Men Black Slim Fit T-shirt
                      </a>
                      <p class="text-muted mb-0 mt-1 fs-13">
                        <span>Size : </span>M
                      </p>
                    </div>
                    <div class="ms-auto text-end">
                      <p class="text-dark fw-medium mb-1">$83.00</p>
                      <p class="mb-0">Q. 01</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 mb-4">
                    <div class="rounded bg-light avatar d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/product/p-5.png"
                        alt=""
                        class="avatar"
                      />
                    </div>
                    <div>
                      <a href="#!" class="text-dark fw-medium fs-15">
                        Dark Green Cargo Pent
                      </a>
                      <p class="text-muted mb-0 mt-1 fs-13">
                        <span>Size : </span>M
                      </p>
                    </div>
                    <div class="ms-auto text-end">
                      <p class="text-dark fw-medium mb-1">$334.00</p>
                      <p class="mb-0">Q. 03</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 mb-4">
                    <div class="rounded bg-light avatar d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/product/p-8.png"
                        alt=""
                        class="avatar"
                      />
                    </div>
                    <div>
                      <a href="#!" class="text-dark fw-medium fs-15">
                        Men Dark Brown Wallet
                      </a>
                      <p class="text-muted mb-0 mt-1 fs-13">
                        <span>Size : </span>S
                      </p>
                    </div>
                    <div class="ms-auto text-end">
                      <p class="text-dark fw-medium mb-1">$137.00</p>
                      <p class="mb-0">Q. 01</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 mb-4">
                    <div class="rounded bg-light avatar d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/product/p-10.png"
                        alt=""
                        class="avatar"
                      />
                    </div>
                    <div>
                      <a href="#!" class="text-dark fw-medium fs-15">
                        Kid's Yellow T-shirt
                      </a>
                      <p class="text-muted mb-0 mt-1 fs-13">
                        <span>Size : </span>S
                      </p>
                    </div>
                    <div class="ms-auto text-end">
                      <p class="text-dark fw-medium mb-1">$223.00</p>
                      <p class="mb-0">Q. 02</p>
                    </div>
                  </div>
                  <table class="table mb-0">
                    <tbody>
                      <tr>
                        <td class="px-0">
                          <p class="d-flex mb-0 align-items-center gap-1">
                            <iconify-icon icon="solar:clipboard-text-broken"></iconify-icon>{" "}
                            Sub Total :{" "}
                          </p>
                        </td>
                        <td class="text-end text-dark fw-medium px-0">
                          $777.00
                        </td>
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
                        <td class="text-end text-dark fw-medium px-0">
                          -$60.00
                        </td>
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
                        <td class="text-end text-dark fw-medium px-0">
                          $00.00
                        </td>
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
                        <td class="text-end text-dark fw-medium px-0">
                          $20.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card-footer bg-light-subtle">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <p class="fw-medium text-dark mb-0">Total Amount</p>
                  </div>
                  <div>
                    <p class="fw-medium text-dark mb-0">$737.00</p>
                  </div>
                </div>
                <div
                  class="alert alert-warning alert-icon mt-3 mb-0"
                  role="alert"
                >
                  <div class="d-flex align-items-center">
                    <div class="avatar-sm rounded bg-warning d-flex justify-content-center align-items-center fs-22 me-2 flex-shrink-0">
                      <iconify-icon
                        icon="solar:kick-scooter-broken"
                        class="align-middle text-white"
                      ></iconify-icon>
                    </div>
                    <div class="flex-grow-1">
                      Estimated Delivery by 25 April, 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="main-btn my-4 text-end">
              <a href="order-cart.html" class="btn btn-danger">
                Back To Cart
              </a>
              <a
                href="/order/:id/payment=confirmation"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#checkoutModal"
              >
                Confirm Payment
              </a>
            </div>
            <div data-bs-theme="dark">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex gap-3">
                    <div class="rounded-3 bg-light flex-shrink-0 avatar d-flex align-items-center justify-content-center">
                      <iconify-icon
                        icon="solar:box-bold-duotone"
                        class="fs-36 text-warning"
                      ></iconify-icon>
                    </div>
                    <div>
                      <h5 class="text-white fw-medium mb-1">
                        Streaming box shipping information
                      </h5>
                      <p class="text-white-50 mb-0">
                        Below your selected items, enter your zip code to
                        calculate the shipping charge. We like to make shipping
                        simple and affordable!
                      </p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 mt-4">
                    <div class="rounded-3 bg-light flex-shrink-0 avatar d-flex align-items-center justify-content-center">
                      <iconify-icon
                        icon="solar:wallet-money-bold-duotone"
                        class="fs-36 text-success"
                      ></iconify-icon>
                    </div>
                    <div>
                      <h5 class="text-white fw-medium mb-1">
                        30 Day money back guarantee
                      </h5>
                      <p class="text-white-50 mb-0">
                        Money Return In 30 day In Your Bank Account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="checkoutModal"
          tabindex="-1"
          aria-labelledby="checkoutModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="card border-0 mb-0">
                  <div class="card-body">
                    <form class="">
                      <div class="row align-items-center">
                        <div class="col-lg-12">
                          <div class="check-icon text-center">
                            <img
                              src="assets/images/party.png"
                              alt=""
                              class="img-fluid"
                            />
                            <h4 class="fw-semibold mt-3">Thank You !</h4>
                            <p class="mb-1">Your Transaction Was Successful</p>
                            <p>
                              <span class="text-dark fw-medium">Order Id</span>{" "}
                              : #0758267/90
                            </p>
                          </div>
                          <hr />
                          <div class="row justify-content-between">
                            <div class="col-lg-4 col-6">
                              <span class="fw-semibold text-muted fs-14">
                                Date
                              </span>
                              <p class="text-dark fw-medium mt-1">
                                23 April, 2024
                              </p>
                            </div>
                            <div class="col-lg-4 col-6 text-end">
                              <span class="fw-semibold text-muted fs-14">
                                Time
                              </span>
                              <p class="text-dark fw-medium">11:28 AM</p>
                            </div>
                          </div>
                          <div class="row justify-content-between mt-3 align-items-center">
                            <div class="col-lg-6 col-6">
                              <span class="fw-semibold text-muted fs-14">
                                To
                              </span>
                              <p class="text-dark fw-medium mb-0 mt-1">
                                Gaston Lapierre
                              </p>
                              <p class="mb-0">hello@dundermuffilin.com</p>
                            </div>
                            <div class="col-lg-4 col-6 text-end">
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt=""
                                class="avatar rounded-circle"
                              />
                            </div>
                          </div>
                          <div class="row justify-content-between mt-3 align-items-center">
                            <div class="col-lg-6 col-6">
                              <span class="fw-semibold text-muted fs-14">
                                Amount
                              </span>
                              <h5 class="fw-medium mt-1">$737.00</h5>
                            </div>
                            <div class="col-lg-4 col-6 text-end">
                              <span class="text-success fw-semibold">
                                Completed{" "}
                                <i class="bx bx-check-circle align-middle"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div data-bs-theme="dark">
                    <div class="card-footer d-flex align-items-center border-0 bg-body gap-3 rounded">
                      <div class="rounded-3 avatar bg-light d-flex align-items-center justify-content-center">
                        <img
                          src="assets/images/card/mastercard.svg"
                          alt=""
                          class="avatar-sm"
                        />
                      </div>
                      <div class="d-block">
                        <p class="text-white fw-semibold mb-0">
                          Credit/Debit Card
                        </p>
                        <p class="mb-0 text-white-50">
                          <span>Master Card ending **** 7812</span>
                        </p>
                      </div>
                      <div class="ms-auto">
                        <a
                          href="#!"
                          class="text-primary fs-30"
                          data-bs-toggle="tooltip"
                          data-bs-title="Download Invoice"
                          data-bs-placement="bottom"
                        >
                          <iconify-icon
                            icon="solar:download-square-bold"
                            class="align-middle"
                          ></iconify-icon>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
