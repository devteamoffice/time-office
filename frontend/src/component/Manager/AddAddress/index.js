import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city"; // Import the package
import Button from "../../Common/Button"; // Assuming Button is a custom component
import Input from "../../Common/Input"; // Assuming Input is a custom component
import { API_URL } from "../../../constants";
import axios from "axios";
const AddAddress = (props) => {
  const { addressFormData, formErrors, addressChange, editMode, onSave } =
    props;
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const countryList = Country.getAllCountries(); // Get all countries
    setCountries(countryList); // Set the countries state
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    addressChange("country", country);
    const stateList = State.getStatesOfCountry(country); // Get states based on selected country
    setStates(stateList);
    setCities([]); // Clear cities when country changes
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    addressChange("state", state);
    const cityList = City.getCitiesOfState(addressFormData.country, state); // Get cities based on selected state
    setCities(cityList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = editMode
        ? `${API_URL}/address/${addressFormData.id}`
        : `${API_URL}/address`;
      const method = editMode ? "put" : "post";

      const response = await axios({
        method,
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: addressFormData,
      });

      if (response.status === 200 || response.status === 201) {
        onSave(); // Trigger callback to refresh address list
      } else {
        throw new Error("Failed to save the address.");
      }
    } catch (err) {
      console.error("Error saving address:", err.message);
    }
  };

  return (
    <div className="card border-0 mb-0">
      <div className="card-body">
        <form onSubmit={handleSubmit} noValidate>
          <div className="row mt-4">
            <div className="col-lg-12">
              <h5 className="mb-4">Shipping Address:</h5>
              <div className="mb-3">
                <label htmlFor="your-address" className="form-label">
                  Full Address
                </label>
                <textarea
                  className="form-control"
                  id="your-address"
                  rows="3"
                  placeholder="Enter address"
                  value={addressFormData.address}
                  onChange={(e) => addressChange("address", e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="your-zipcode" className="form-label">
                  Zip-Code
                </label>
                <input
                  type="number"
                  value={addressFormData.zipCode}
                  id="your-zipcode"
                  className="form-control"
                  placeholder="Zip-code"
                  onChange={(e) => addressChange("zipCode", e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <label htmlFor="choices-city" className="form-label">
                City
              </label>
              <select
                className="form-control"
                value={addressFormData.city}
                id="choices-city"
                onChange={handleStateChange}
              >
                <option value="">Choose a city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-4">
              <label htmlFor="choices-state" className="form-label">
                State
              </label>
              <select
                className="form-control"
                value={addressFormData.state}
                id="choices-state"
                onChange={handleStateChange}
              >
                <option value="">Choose a State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-4">
              <label htmlFor="choices-country" className="form-label">
                Country
              </label>
              <select
                className="form-control"
                id="choices-country"
                value={addressFormData.country}
                onChange={handleCountryChange}
              >
                <option value="">Choose a country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-4">
              <label htmlFor="choices-default" className="form-label">
                Set as Default?
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="choices-default"
                checked={addressFormData.isDefault}
                onChange={(e) => addressChange("isDefault", e.target.checked)}
              />
            </div>
          </div>

          <div className="add-address-actions mt-4">
            <Button
              type="submit"
              text={editMode ? "Update Address" : "Add Address"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
