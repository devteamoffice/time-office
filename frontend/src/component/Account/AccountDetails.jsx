import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatar from "../../assets/images/avatar.jpg";
import { FaFileDownload } from "react-icons/fa";
import Address from "./Address";
import { API_URL } from "../../constants";
import YourOrders from "./YourOrders";

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

      <YourOrders />
    </div>
  );
};

export default AccountDetails;
