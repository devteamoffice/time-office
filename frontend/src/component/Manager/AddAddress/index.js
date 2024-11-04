import React from "react";
import { Row, Col } from "reactstrap";
import Checkbox from "../../Common/Checkbox";
import Input from "../../Common/Input";
import Button from "../../Common/Button";

const AddAddress = (props) => {
  const { addressFormData, formErrors, addressChange, addAddress } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    addAddress();
  };

  return (
    <div className="card border-0 mb-0">
      <div className="card-body">
        <div className="check-icon text-center">
          <img src="assets/images/party.png" alt="" className="img-fluid" />
          <p className="mb-1">Add New Address</p>
        </div>
        <hr />
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
                onChange={(e) => addressChange("city", e.target.value)}
              >
                <option value="">Choose a city</option>
                <optgroup label="UK">
                  <option value="London">London</option>
                  <option value="Manchester">Manchester</option>
                  <option value="Liverpool">Liverpool</option>
                </optgroup>
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
                onChange={(e) => addressChange("state", e.target.value)}
              >
                <option value="">Choose a State</option>
                <optgroup label="UK">
                  <option value="London">London</option>
                  <option value="Manchester">Manchester</option>
                  <option value="Liverpool">Liverpool</option>
                </optgroup>
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
                onChange={(e) => addressChange("country", e.target.value)}
              >
                <option value="">Choose a country</option>
                <optgroup label="">
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="France">France</option>
                </optgroup>
              </select>
            </div>
            <div className="col-lg-4">
              <label htmlFor="choices-default" className="form-label">
                As Default?
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
            <Button type="submit" text="Add Address" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
