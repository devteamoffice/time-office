import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";
import avatar from "../../assets/images/users/avatar-1.jpg";

// Import icons from react-icons
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import { BsFillCalendarCheckFill, BsFillPersonFill } from "react-icons/bs";

const ProfileWrapper = () => {
  const { id } = useParams(); // Get the 'id' from the URL parameters
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState(null); // Assuming you fetch address too

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage
      if (token) {
        try {
          const response = await axios.get(`${API_URL}/user/me`, {
            headers: {
              Authorization: `${token}`, // Use the token
            },
          });
          setUserProfile(response.data.user);
          setAddress(response.data.user.address); // Assuming address is part of the user profile response
        } catch (error) {
          console.error("Error fetching user profile:", error.message);
        } finally {
          setLoading(false);
        }
      } else {
        console.warn("Token is missing in localStorage.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userProfile) {
    return <p>Error loading profile data.</p>;
  }

  return (
    <div className="row">
      <div className="col-xl-9 col-lg-8">
        <div className="card overflow-hidden">
          <div className="card-body">
            <div className="bg-primary profile-bg rounded-top position-relative mx-n3 mt-n3">
              <img
                src={userProfile.avatar || avatar}
                alt="Avatar"
                className="avatar-xl border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
              />
            </div>
            <div className="mt-5 d-flex flex-wrap align-items-center justify-content-between">
              <div>
                <h4 className="mb-1">
                  {userProfile.name}{" "}
                  <i className="bx bxs-badge-check text-success align-middle"></i>
                </h4>
                <p className="mb-0">
                  {userProfile.role || "Project Head Manager"}
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 my-2 my-lg-0">
                <a href="#!" className="btn btn-info">
                  <i className="bx bx-message-dots"></i> Message
                </a>
                <a href="#!" className="btn btn-outline-primary">
                  <i className="bx bx-plus"></i> Follow
                </a>
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fs-20 align-middle text-muted">...</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#!" className="dropdown-item">
                      Download
                    </a>
                    <a href="#!" className="dropdown-item">
                      Export
                    </a>
                    <a href="#!" className="dropdown-item">
                      Import
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 gy-2">
              <div className="col-lg-2 col-6">
                <div className="d-flex align-items-center gap-2 border-end">
                  <BsFillCalendarCheckFill className="fs-28 text-primary" />
                  <div>
                    <h5 className="mb-1">
                      {userProfile.experience || "3+ Years"}
                    </h5>
                    <p className="mb-0">Experience</p>
                  </div>
                </div>
              </div>
              {/* Add other sections as needed */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Personal Information</h4>
          </div>
          <div className="card-body">
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <FaPhoneAlt className="fs-20 text-secondary" />
                <p className="mb-0 fs-14">
                  Phone No.{" "}
                  <span className="text-dark fw-semibold">
                    {userProfile.phoneNumber}
                  </span>
                </p>
              </div>

              <div className="d-flex align-items-center gap-2 mb-2">
                <FaEnvelope className="fs-20 text-secondary" />
                <p className="mb-0 fs-14">
                  Email{" "}
                  <a
                    href={`mailto:${userProfile.email}`}
                    className="text-primary fw-semibold"
                  >
                    {userProfile.email}
                  </a>
                </p>
              </div>

              <div className="d-flex align-items-center gap-2 mb-2">
                <FaUsers className="fs-20 text-secondary" />
                <p className="mb-0 fs-14">
                  Role{" "}
                  <span className="text-dark fw-semibold">
                    {userProfile.role}
                  </span>
                </p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <i className="fs-20 text-secondary">✓</i>
                <p className="mb-0 fs-14">
                  Status{" "}
                  <span className="badge bg-success-subtle text-success ms-1">
                    Active
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWrapper;
