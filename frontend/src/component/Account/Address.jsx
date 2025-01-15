import React, { useState, useEffect } from "react";
import AddAddress from "../Manager/AddAddress";
import axios from "axios";
import { API_URL } from "../../constants";

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/address`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setAddresses(response.data.addresses);
      setError(null);
    } catch (err) {
      setError("Failed to fetch addresses.");
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = (address = null) => {
    setEditMode(!!address); // Determine if it's edit mode
    setSelectedAddress(address);
    setIsModalOpen(!isModalOpen);
  };

  const addressFormData = selectedAddress || {
    address: "",
    zipCode: "",
    city: "",
    state: "",
    country: "",
    isDefault: false,
  };

  const addAddress = async (data) => {
    const token = localStorage.getItem("token");
    try {
      const url = editMode
        ? `${API_URL}/address/${selectedAddress.id}`
        : `${API_URL}/address`;
      const method = editMode ? "put" : "post";

      const response = await axios({
        method,
        url,
        headers: {
          Authorization: `${token}`,
        },
        data,
      });

      if (response.status === 200 || response.status === 201) {
        fetchAddresses(); // Refresh the address list
        toggleModal(); // Close the modal
      } else {
        throw new Error("Failed to save address");
      }
    } catch (err) {
      setError("Failed to save address.");
    }
  };

  return (
    <div className="card">
      <div className="card-header border-bottom border-dashed">
        <div className="d-flex align-items-center gap-2">
          <div className="d-block">
            <h4 className="card-title mb-1">Your Address</h4>
            <p className="mb-0 text-muted">Manage your saved addresses.</p>
          </div>
          <div className="ms-auto">
            <button
              onClick={() => toggleModal()}
              className="btn btn-primary btn-sm"
            >
              Add New Address
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : addresses.length > 0 ? (
          addresses.map((address) => (
            <div
              key={address.id || address.created}
              className={`d-flex p-2 rounded align-items-center gap-2 ${
                address.isDefault ? "bg-success-subtle" : "bg-light-subtle"
              }`}
            >
              <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
                <i className="ti ti-map-pin"></i>
              </div>
              <div className="d-block">
                <h5 className="text-dark fw-medium">
                  {address.address}, {address.city}, {address.state}
                </h5>
                <p className="text-muted mb-0 fs-13">
                  {address.zipCode}, {address.country}
                </p>
                {address.isDefault && (
                  <span className="badge bg-success">Default</span>
                )}
              </div>
              <div className="ms-auto text-end">
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop p-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => toggleModal(address)}
                    >
                      Edit
                    </a>
                    <a href="#" className="dropdown-item">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No addresses found.</p>
        )}

        {isModalOpen && (
          <>
            <div className="modal-backdrop fade show"></div>
            <div
              className="modal fade show d-block"
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      {editMode ? "Edit Address" : "Add New Address"}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={toggleModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <AddAddress
                      addressFormData={addressFormData}
                      formErrors={{}}
                      addressChange={() => {}}
                      addAddress={(data) => addAddress(data)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Address;
