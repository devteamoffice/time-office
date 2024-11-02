import React, { useState } from "react";
import AccountNav from "./AccountNav";
import { FaFileDownload } from "react-icons/fa";
import AddAddress from "../Manager/AddAddress";

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addressFormData = {
    address: "",
    zipCode: "",
    city: "",
    state: "",
    country: "",
    isDefault: false,
  };

  const formErrors = {}; // Define your form errors here

  const addressChange = () => {
    // Logic for handling address form change
  };

  const addAddress = () => {
    // Logic for adding address
    toggleModal(); // Close modal on submit
  };

  return (
    <div className="card">
      <div className="card-header border-bottom border-dashed">
        <div className="d-flex align-items-center gap-2">
          <div className="d-block">
            <h4 className="card-title mb-1">Your Address</h4>
            <p className="mb-0 text-muted">Total 234 files, 2.5GB space used</p>
          </div>
          <div className="ms-auto">
            <button onClick={toggleModal} className="btn btn-primary btn-sm">
              Add New Address
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        {/* List of Addresses */}
        <div className="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle">
          <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
            <FaFileDownload />
          </div>
          <div className="d-block">
            <a href="#!" className="text-dark fw-medium">
              Invoice Id #INV2540
            </a>
            <p className="text-muted mb-0 fs-13">16 May 2024</p>
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
                <a href="#" className="dropdown-item">
                  Download
                </a>
                <a href="#" className="dropdown-item">
                  Share
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat similar blocks for other addresses */}

        {/* AddAddress Modal */}
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
                    <h5 className="modal-title">Add New Address</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={toggleModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <AddAddress
                      addressFormData={addressFormData}
                      formErrors={formErrors}
                      addressChange={addressChange}
                      addAddress={addAddress}
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
