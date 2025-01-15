import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";

const PersonalDetails = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Replace with your actual API URL and logic for fetching the user data
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      try {
        const response = await axios.get(`${API_URL}/user/me`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserDetails(response.data.user);
      } catch (error) {
        console.error("Failed to fetch user details", error);
      }
    };

    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="col-lg-3">
        <h4 className="card-title">Personal Details</h4>
      </div>
      <div className="col-lg-9">
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <span className="form-control">{userDetails.name}</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">UserName</label>
              <span className="form-control">{userDetails.username}</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <span className="form-control">{userDetails.email}</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <span className="form-control">{userDetails.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
