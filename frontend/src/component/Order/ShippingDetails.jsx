import React, { useState, useEffect, useContext } from "react";
import { Country, State, City } from "country-state-city";
import axios from "axios";
import { AuthContext } from "../../context/Socket/AuthContext";
import { API_URL } from "../../constants";

const ShippingDetails = () => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [zipCode, setZipCode] = useState(""); // State to hold the zip code
  const [address, setAddress] = useState(""); // State to hold the full address
  const token = localStorage.getItem("token"); // Retrieve token from localStorage

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

  // Fetch address from API
  const fetchAddress = async () => {
    try {
      const response = await axios.get(`${API_URL}/address`, {
        headers: { Authorization: `${token}` }, // Pass token in headers
      });

      console.log("API response:", response.data); // Debug log the response

      const addresses = response.data?.addresses || [];
      // Find the default address (or the first one if no default is set)
      const defaultAddress =
        addresses.find((addr) => addr.isDefault) || addresses[0] || {};

      const { country, state, city, address, zipCode } = defaultAddress;

      // Set address details
      setSelectedCountry(country || "");
      setSelectedState(state || "");
      setSelectedCity(city || "");
      setAddress(address || "");
      setZipCode(zipCode || "");
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  // Fetch the address on component mount
  useEffect(() => {
    if (user?.id) fetchAddress();
  }, [user]);

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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} // Update address on change
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
                  setSelectedState("");
                  setSelectedCity("");
                  setZipCode("");
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
                  setSelectedCity("");
                  setZipCode("");
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
          <div className="col-lg-4">
            <form>
              <label htmlFor="zip-code" className="form-label">
                Zip Code
              </label>
              <input
                type="text"
                className="form-control"
                id="zip-code"
                placeholder="Enter zip code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="mt-2">
          <a href="#!" className="link-primary fw-medium">
            + Add New Billing Address
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
