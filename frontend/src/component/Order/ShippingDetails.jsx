import React from "react";

const ShippingDetails = () => {
  return (
    <div class="row">
      <div class="col-lg-3">
        <h4 class="card-title">Shipping Details</h4>
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div class="col-lg-12">
            <h5 class="mb-4">Shipping Address :</h5>
            <form>
              <div class="mb-3">
                <label for="your-address" class="form-label">
                  Full Address
                </label>
                <textarea
                  class="form-control"
                  id="your-address"
                  rows="3"
                  placeholder="Enter address"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="col-lg-4">
            <form>
              <div class="mb-3">
                <label for="your-zipcode" class="form-label">
                  Zip-Code
                </label>
                <input
                  type="number"
                  id="your-zipcode"
                  class="form-control"
                  placeholder="zip-code"
                />
              </div>
            </form>
          </div>

          <div class="col-lg-4">
            <form>
              <label for="choices-city" class="form-label">
                City
              </label>
              <select
                class="form-control"
                id="choices-city"
                data-choices
                data-choices-groups
                data-placeholder="Select City"
                name="choices-city"
              >
                <option value="">Choose a city</option>
                <optgroup label="UK">
                  <option value="London">London</option>
                  <option value="Manchester">Manchester</option>
                  <option value="Liverpool">Liverpool</option>
                </optgroup>
                <optgroup label="FR">
                  <option value="Paris">Paris</option>
                  <option value="Lyon">Lyon</option>
                  <option value="Marseille">Marseille</option>
                </optgroup>
                <optgroup label="DE" disabled>
                  <option value="Hamburg">Hamburg</option>
                  <option value="Munich">Munich</option>
                  <option value="Berlin">Berlin</option>
                </optgroup>
                <optgroup label="US">
                  <option value="New York">New York</option>
                  <option value="Washington" disabled>
                    Washington
                  </option>
                  <option value="Michigan">Michigan</option>
                </optgroup>
                <optgroup label="SP">
                  <option value="Madrid">Madrid</option>
                  <option value="Barcelona">Barcelona</option>
                  <option value="Malaga">Malaga</option>
                </optgroup>
                <optgroup label="CA">
                  <option value="Montreal">Montreal</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Vancouver">Vancouver</option>
                </optgroup>
              </select>
            </form>
          </div>
          <div class="col-lg-4">
            <form>
              <label for="choices-country" class="form-label">
                Country
              </label>
              <select
                class="form-control"
                id="choices-country"
                data-choices
                data-choices-groups
                data-placeholder="Select Country"
                name="choices-country"
              >
                <option value="">Choose a country</option>
                <optgroup label="">
                  <option value="">United Kingdom</option>
                  <option value="Fran">France</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="U.S.A">U.S.A</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="Spain">Spain</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                </optgroup>
              </select>
            </form>
          </div>
        </div>
        <div class="mt-2">
          <a href="#!" class="link-primary fw-medium">
            + Add New Billing Address
          </a>
        </div>

        <h5 class="my-4">Shipping Method :</h5>
        <div class="row gy-2">
          <div class="col-lg-6">
            <div class="form-check form-checkbox-primary ps-0">
              <label for="shipping-1" class="w-100 mb-2">
                <div class="d-flex align-items-center p-2 rounded gap-2 border">
                  <div class="d-flex align-items-center gap-2">
                    <div class="rounded-3 bg-light avatar-md d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/brands/dhl.png"
                        alt=""
                        class="avatar rounded"
                      />
                    </div>
                    <div>
                      <h5 class="text-dark fw-medium">DHL Fast Services</h5>
                      <p class="mb-0 text-dark">
                        Delivery -
                        <span class="text-muted fw-normal">Today</span>
                      </p>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <p class="mb-2">$10.00</p>
                    <input
                      class="form-check-input float-end"
                      type="radio"
                      name="shipping"
                      id="shipping-1"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-check form-checkbox-primary ps-0">
              <label for="shipping-2" class="w-100">
                <div class="d-flex align-items-center p-2 rounded gap-2 border">
                  <div class="d-flex align-items-center gap-2">
                    <div class="rounded-3 bg-light avatar-md d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/brands/fedex.png"
                        alt=""
                        class="avatar rounded"
                      />
                    </div>
                    <div>
                      <h5 class="text-dark fw-medium">FedEx Services</h5>
                      <p class="mb-0 text-dark">
                        Delivery -
                        <span class="text-muted fw-normal">Today</span>
                      </p>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <p class="mb-2">$10.00</p>
                    <input
                      class="form-check-input float-end"
                      type="radio"
                      name="shipping"
                      id="shipping-2"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-check form-checkbox-primary ps-0">
              <label for="shipping-3" class="w-100">
                <div class="d-flex align-items-center p-2 rounded gap-2 border">
                  <div class="d-flex align-items-center gap-2">
                    <div class="rounded-3 bg-light avatar-md d-flex align-items-center justify-content-center">
                      <img
                        src="assets/images/brands/ups.png"
                        alt=""
                        class="avatar rounded"
                      />
                    </div>
                    <div>
                      <h5 class="text-dark fw-medium">UPS Services</h5>
                      <p class="mb-0 text-dark">
                        Delivery -
                        <span class="text-muted fw-normal">Tomorrow</span>
                      </p>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <p class="mb-2">$8.00</p>
                    <input
                      class="form-check-input float-end"
                      type="radio"
                      name="shipping"
                      id="shipping-3"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-check form-checkbox-primary ps-0">
              <label for="shipping-4" class="w-100">
                <div class="d-flex align-items-center p-2 rounded gap-2 border">
                  <div class="d-flex align-items-center gap-2">
                    <div class="rounded-3 bg-light avatar-md d-flex align-items-center justify-content-center">
                      <iconify-icon
                        icon="solar:box-bold-duotone"
                        class="fs-36 text-warning"
                      ></iconify-icon>
                    </div>
                    <div>
                      <h5 class="text-dark fw-medium">Our Courier Services</h5>
                      <p class="mb-0 text-dark">
                        Delivery -
                        <span class="text-muted fw-normal">25 Apr 2024</span>
                      </p>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <p class="mb-2">$0.00</p>
                    <input
                      class="form-check-input float-end"
                      type="radio"
                      name="shipping"
                      id="shipping-4"
                      checked
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;