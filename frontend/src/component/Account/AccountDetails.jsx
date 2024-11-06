import React, { useState, useEffect } from "react";
import avatar from "../../assets/images/avatar.jpg";
import { FaFileDownload } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, updateProfile } from "../../containers/Account/actions";
import Address from "./Address";
const AccountDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [dispatch, id]);

  const handleProfileUpdate = (updatedProfileData) => {
    dispatch(updateProfile(updatedProfileData));
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading message or spinner
  }

  if (error) {
    console.log("Error fetching profile:", error); // Display an error message
  }

  return (
    <div className="col-lg-4">
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="bg-primary profile-bg rounded-top p-5 position-relative mx-n3 mt-n3">
            <img
              src={avatar}
              alt=""
              className="avatar-lg border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
            />
          </div>
          <div className="mt-4 pt-3">
            <h4 className="mb-1">
              {user.name}
              <i className="bx bxs-badge-check text-success align-middle"></i>
            </h4>
            <div className="mt-2">
              <a href="#!" className="link-primary fs-15">
                @{user.username}
              </a>
              <p className="fs-15 mb-1 mt-1">
                <span className="text-dark fw-semibold">Email : </span>{" "}
                {user.email}
              </p>
              <p className="fs-15 mb-0 mt-1">
                <span className="text-dark fw-semibold">Phone : </span>{" "}
                {user.phone}
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer border-top gap-1 hstack">
          <a href="#!" className="btn btn-primary w-100">
            Send Message
          </a>
          <a href="#!" className="btn btn-light w-100">
            Analytics
          </a>
          <a
            href="#!"
            className="btn btn-soft-dark d-inline-flex align-items-center justify-content-center rounded avatar-sm"
          >
            <i className="bx bx-edit-alt fs-18"></i>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          <div>
            <h4 className="card-title">Customer Details</h4>
          </div>
        </div>
        <div className="card-body py-2">
          <div className="table-responsive">
            <table className="table mb-0">
              <tbody>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Account ID :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">#AC-278699</td>
                </tr>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Invoice Email :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">
                    michaelaminer@dayrep.com
                  </td>
                </tr>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Delivery Address :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">
                    62, rue des Nations Unies 22000 SAINT-BRIEUC
                  </td>
                </tr>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Language :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">English</td>
                </tr>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Latest Invoice Id :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">#INV2540</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header border-bottom border-dashed">
          <div className="d-flex align-items-center gap-2">
            <div className="d-block">
              <h4 className="card-title mb-1">Latest Invoice</h4>
              <p className="mb-0 text-muted">
                Total 234 file, 2.5GB space used
              </p>
            </div>
            <div className="ms-auto">
              <a href="#!" className="btn btn-primary btn-sm">
                View All
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          {["#INV2540", "#INV0914", "#INV3801", "#INV4782"].map(
            (invoiceId, index) => (
              <div
                className="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle mt-2"
                key={index}
              >
                <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
                  <FaFileDownload />
                </div>
                <div className="d-block">
                  <a href="#!" className="text-dark fw-medium">
                    Invoice Id {invoiceId}
                  </a>
                  <p className="text-muted mb-0 fs-13">
                    {new Date().toLocaleDateString()}
                  </p>
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
                      <a href="javascript:void(0);" className="dropdown-item">
                        Download
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Share
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Address />
    </div>
  );
};

export default AccountDetails;
