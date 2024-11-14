import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../containers/Account/actions";
import axios from "axios";
import { API_URL } from "../../constants";
import { useContext } from "react";
import { AuthContext } from "../../context/Socket/AuthContext";
const ProfileWrapper = ({ id }) => {
  // Use AuthContext for authentication
  const { isAuthenticated, user } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the user profile directly from the API only if authenticated
    const fetchUserProfile = async () => {
      if (isAuthenticated) {
        try {
          const response = await axios.get(`${API_URL}/user/me`, {
            headers: {
              Authorization: `Bearer ${user.token}`, // Adjust based on your token structure
            },
          });
          setUserProfile(response.data);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [id, isAuthenticated]);

  if (loading) {
    return <p>Loading...</p>; // Loading indicator while profile is fetched
  }

  if (!userProfile) {
    return <p>Error loading profile data.</p>; // Error handling if profile data is missing
  }
  return (
    <div class="row">
      <div class="col-xl-9 col-lg-8">
        <div class="card overflow-hidden">
          <div class="card-body">
            <div class="bg-primary profile-bg rounded-top position-relative mx-n3 mt-n3">
              <img
                src={userProfile.avatar || "assets/images/users/avatar-1.jpg"}
                alt=""
                class="avatar-xl border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
              />
            </div>
            <div class="mt-5 d-flex flex-wrap align-items-center justify-content-between">
              <div>
                <h4 class="mb-1">
                  {userProfile.name}{" "}
                  <i class="bx bxs-badge-check text-success align-middle"></i>
                </h4>
                <p class="mb-0">{userProfile.role || "Project Head Manager"}</p>
              </div>
              <div class="d-flex align-items-center gap-2 my-2 my-lg-0">
                <a href="#!" class="btn btn-info">
                  <i class="bx bx-message-dots"></i> Message
                </a>
                <a href="#!" class="btn btn-outline-primary">
                  <i class="bx bx-plus"></i> Follow
                </a>
                <div class="dropdown">
                  <a
                    href="#"
                    class="dropdown-toggle arrow-none card-drop"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <iconify-icon
                      icon="solar:menu-dots-bold"
                      class="fs-20 align-middle text-muted"
                    ></iconify-icon>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" class="dropdown-item">
                      Download
                    </a>

                    <a href="javascript:void(0);" class="dropdown-item">
                      Export
                    </a>

                    <a href="javascript:void(0);" class="dropdown-item">
                      Import
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 gy-2">
              <div class="col-lg-2 col-6">
                <div class="d-flex align-items-center gap-2 border-end">
                  <div class="">
                    <iconify-icon
                      icon="solar:clock-circle-bold-duotone"
                      class="fs-28 text-primary"
                    ></iconify-icon>
                  </div>
                  <div>
                    <h5 class="mb-1">{userProfile.experience || "3+ Years"}</h5>
                    <p class="mb-0">Experience</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-6">
                <div class="d-flex align-items-center gap-2 border-end">
                  <div class="">
                    <iconify-icon
                      icon="solar:cup-star-bold-duotone"
                      class="fs-28 text-primary"
                    ></iconify-icon>
                  </div>
                  <div>
                    <h5 class="mb-1">5 Certificate</h5>
                    <p class="mb-0">Achieved</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-6">
                <div class="d-flex align-items-center gap-2">
                  <div class="">
                    <iconify-icon
                      icon="solar:notebook-bold-duotone"
                      class="fs-28 text-primary"
                    ></iconify-icon>
                  </div>
                  <div>
                    <h5 class="mb-1">2 Internship</h5>
                    <p class="mb-0">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Personal Information</h4>
          </div>
          <div class="card-body">
            <div class="">
              <div class="d-flex align-items-center gap-2 mb-2">
                <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                  <iconify-icon
                    icon="solar:backpack-bold-duotone"
                    class="fs-20 text-secondary"
                  ></iconify-icon>
                </div>
                <p class="mb-0 fs-14">Project Head Manager</p>
              </div>
              <div class="d-flex align-items-center gap-2 mb-2">
                <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                  <iconify-icon
                    icon="solar:square-academic-cap-2-bold-duotone"
                    class="fs-20 text-secondary"
                  ></iconify-icon>
                </div>
                <p class="mb-0 fs-14">
                  Went to{" "}
                  <span class="text-dark fw-semibold">
                    Oxford International
                  </span>
                </p>
              </div>
              <div class="d-flex align-items-center gap-2 mb-2">
                <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                  <iconify-icon
                    icon="solar:map-point-bold-duotone"
                    class="fs-20 text-secondary"
                  ></iconify-icon>
                </div>
                <p class="mb-0 fs-14">
                  Lives in{" "}
                  <span class="text-dark fw-semibold">
                    Pittsburgh, PA 15212
                  </span>
                </p>
              </div>
              <div class="d-flex align-items-center gap-2 mb-2">
                <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                  <iconify-icon
                    icon="solar:users-group-rounded-bold-duotone"
                    class="fs-20 text-secondary"
                  ></iconify-icon>
                </div>
                <p class="mb-0 fs-14">
                  Followed by{" "}
                  <span class="text-dark fw-semibold">16.6k People</span>
                </p>
              </div>
              <div class="d-flex align-items-center gap-2 mb-2">
                <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                  <iconify-icon
                    icon="solar:letter-bold-duotone"
                    class="fs-20 text-secondary"
                  ></iconify-icon>
                </div>
                <p class="mb-0 fs-14">
                  Email{" "}
                  <a
                    href={`mailto:${userProfile.email}`}
                    class="text-primary fw-semibold"
                  >
                    {userProfile.email}
                  </a>
                </p>
              </div>
              <div class="d-flex align-items-center gap-2 mb-2">
                <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                  <iconify-icon
                    icon="solar:link-bold-duotone"
                    class="fs-20 text-secondary"
                  ></iconify-icon>
                </div>
                <p class="mb-0 fs-14">
                  Website{" "}
                  <a href="#!" class="text-primary fw-semibold">
                    www.larkon.co
                  </a>
                </p>
              </div>
              <div class="d-flex align-items-center gap-2 mb-2">
                <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                  <iconify-icon
                    icon="solar:global-bold-duotone"
                    class="fs-20 text-secondary"
                  ></iconify-icon>
                </div>
                <p class="mb-0 fs-14">
                  Language{" "}
                  <span class="text-dark fw-semibold">
                    English , Spanish , German
                  </span>
                </p>
              </div>

              <div class="d-flex align-items-center gap-2">
                <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                  <iconify-icon
                    icon="solar:check-circle-bold-duotone"
                    class="fs-20 text-secondary"
                  ></iconify-icon>
                </div>
                <p class="mb-0 fs-14">
                  Status{" "}
                  <span class="badge bg-success-subtle text-success ms-1">
                    Active
                  </span>
                </p>
              </div>
              <div class="mt-2">
                <a href="#!" class="text-primary">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWrapper;
