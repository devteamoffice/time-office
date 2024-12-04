import React, { useState } from "react";
import { Country, State, City } from "country-state-city";

const ShippingDetails = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch the list of countries
  const countryList = Country.getAllCountries();

  // Fetch the list of states for the selected country
  const stateList = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];

  // Fetch the list of cities for the selected state
  const cityList = selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState)
    : [];

  return (
    <div className="row">
      <div className="col-lg-3">
        <h4 className="card-title">Shipping Details</h4>
      </div>
      <div className="col-lg-9">
        <div className="row">
          <div className="col-lg-12">
            <h5 className="mb-4">Shipping Address :</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="your-address" className="form-label">
                  Full Address
                </label>
                <textarea
                  className="form-control"
                  id="your-address"
                  rows="3"
                  placeholder="Enter address"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <form>
              <label htmlFor="choices-country" className="form-label">
                Country
              </label>
              <select
                className="form-control"
                id="choices-country"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedState(""); // Reset state and city on country change
                  setSelectedCity("");
                }}
              >
                <option value="">Choose a country</option>
                {countryList.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="col-lg-4">
            <form>
              <label htmlFor="choices-state" className="form-label">
                State
              </label>
              <select
                className="form-control"
                id="choices-state"
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity(""); // Reset city on state change
                }}
                disabled={!selectedCountry}
              >
                <option value="">Choose a state</option>
                {stateList.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="col-lg-4">
            <form>
              <label htmlFor="choices-city" className="form-label">
                City
              </label>
              <select
                className="form-control"
                id="choices-city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState}
              >
                <option value="">Choose a city</option>
                {cityList.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        <div className="mt-2">
          <a href="#!" className="link-primary fw-medium">
            + Add New Billing Address
          </a>
        </div>
        <h5 className="my-4">Shipping Method :</h5>
        <div className="row gy-2">
          {/* Shipping options */}
          {/* Replace hardcoded values with your dynamic data if needed */}
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
