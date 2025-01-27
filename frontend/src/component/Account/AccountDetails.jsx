import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatar from "../../assets/images/avatar.jpg";
import { FaFileDownload } from "react-icons/fa";
import Address from "./Address";
import { API_URL } from "../../constants";

const AccountDetails = () => {
  const [userData, setUserData] = useState(null); // State to hold user data
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token"); // Replace with your token storage method
      if (!token) {
        toast.warn("Token is missing. Please log in.");
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/user/me`, {
          headers: {
            Authorization: `${token}`, // Add 'Bearer' prefix if required by the backend
          },
        });

        setUserData(response.data.user);
        setIsAuthenticated(true);
        toast.success("User details fetched successfully!");
      } catch (error) {
        console.error("Failed to fetch user details:", error);
        toast.error("Failed to fetch user details. Please try again.");
      }
    };

    fetchUserDetails();
  }, []);

  if (!isAuthenticated) {
    return <div>You need to log in to view this page.</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-lg-4">
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="bg-primary profile-bg rounded-top p-5 position-relative mx-n3 mt-n3">
            <img
              src={avatar}
              alt="Avatar"
              className="avatar-lg border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
            />
          </div>
          <div className="mt-4 pt-3">
            <h4 className="mb-1">
              {userData.name}
              <i className="bx bxs-badge-check text-success align-middle"></i>{" "}
              <a
                href={`/account_setup?${userData.id}`}
                className="btn btn-soft-dark d-inline-flex align-items-center justify-content-center rounded avatar-sm"
              >
                <i className="bx bx-edit-alt fs-18"></i>
              </a>
            </h4>
            <div className="mt-2">
              <a href="#!" className="link-primary fs-15">
                @{userData.username}
              </a>
              <p className="fs-15 mb-1 mt-1">
                <span className="text-dark fw-semibold">Email : </span>{" "}
                {userData.email}
              </p>
              <p className="fs-15 mb-0 mt-1">
                <span className="text-dark fw-semibold">Phone : </span>{" "}
                {userData.phoneNumber || "N/A"}
              </p>
            </div>
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
    </div>
  );
};

export default AccountDetails;
