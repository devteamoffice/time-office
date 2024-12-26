import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // to access the params in the URL
import { API_URL } from "../../constants";
import avatar from "../../assets/images/users/avatar-2.jpg";
const Customerprofile = () => {
  const { id } = useParams(); // Extract the user ID from the URL params
  const [user, setUser] = useState(null); // To store the user data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/user/${id}`, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json", // Explicitly set content type
          },
        }); // Replace API_URL with your API endpoint
        setUser(response.data.user);
      } catch (err) {
        setError("Error fetching user data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message
  return (
    <div class="col-lg-4">
      <div class="card overflow-hidden">
        <div class="card-body">
          <div className="bg-primary profile-bg rounded-top p-5 position-relative mx-n3 mt-n3">
            <img
              src={user?.avatar || avatar} // Assuming user has avatar property
              alt="User Avatar"
              className="avatar-lg border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
            />
          </div>
          <div className="mt-4 pt-3">
            <h4 className="mb-1">
              {user?.name || "Michael A. Miner"}{" "}
              {/* Dynamically rendering the user's name */}
              <i className="bx bxs-badge-check text-success align-middle"></i>
            </h4>
            <div className="mt-2">
              <a href="#!" className="link-primary fs-15">
                @{user?.username || "michael_cus_2024"}{" "}
                {/* Dynamically rendering username */}
              </a>
              <p className="fs-15 mb-1 mt-1">
                <span className="text-dark fw-semibold">Email : </span>{" "}
                {user?.email || "michaelaminer@dayrep.com"}
              </p>
              <p className="fs-15 mb-0 mt-1">
                <span className="text-dark fw-semibold">Phone : </span>{" "}
                {user?.phone || "NOT FOUND!"}
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer border-top gap-1 hstack">
          <a href="#!" class="btn btn-primary w-100">
            Send Message
          </a>
          <a href="#!" class="btn btn-light w-100">
            Analytics
          </a>
          <a
            href="#!"
            class="btn btn-soft-dark d-inline-flex align-items-center justify-content-center rounded avatar-sm"
          >
            <i class="bx bx-edit-alt fs-18"></i>
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
          <div>
            <h4 class="card-title">Customer Details</h4>
          </div>
          <div>
            <span class="badge bg-success-subtle text-success px-2 py-1">
              Active User
            </span>
          </div>
        </div>
        <div class="card-body py-2">
          <div class="table-responsive">
            <table class="table mb-0">
              <tbody>
                <tr>
                  <td class="px-0">
                    <p class="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Account ID :{" "}
                    </p>
                  </td>
                  <td class="text-dark fw-medium px-0">{user.id}</td>
                </tr>
                <tr>
                  <td class="px-0">
                    <p class="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      {" "}
                      Invoice Email :{" "}
                    </p>
                  </td>
                  <td class="text-dark fw-medium px-0">
                    michaelaminer@dayrep.com
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <p class="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      {" "}
                      Delivery Address :{" "}
                    </p>
                  </td>
                  <td class="text-dark fw-medium px-0">
                    62, rue des Nations Unies 22000 SAINT-BRIEUC
                  </td>
                </tr>
                <tr>
                  <td class="px-0">
                    <p class="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      {" "}
                      Language :{" "}
                    </p>
                  </td>
                  <td class="text-dark fw-medium px-0">English</td>
                </tr>
                <tr>
                  <td class="px-0">
                    <p class="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      {" "}
                      Latest Invoice Id :{" "}
                    </p>
                  </td>
                  <td class="text-dark fw-medium px-0">#INV2540</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header border-bottom border-dashed">
          <div class="d-flex align-items-center gap-2">
            <div class="d-block">
              <h4 class="card-title mb-1">Latest Invoice</h4>
              <p class="mb-0 text-muted">Total 234 file, 2.5GB space used</p>
            </div>
            <div class="ms-auto">
              <a href="#!" class="btn btn-primary btn-sm">
                View All
              </a>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle">
            <div class="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
              <iconify-icon
                icon="solar:file-download-bold"
                class="text-primary fs-3"
              ></iconify-icon>
            </div>
            <div class="d-block">
              <a href="#!" class="text-dark fw-medium">
                Invoice Id #INV2540
              </a>
              <p class="text-muted mb-0 fs-13">16 May 2024</p>
            </div>
            <div class="ms-auto text-end">
              <div class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle arrow-none card-drop p-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="javascript:void(0);" class="dropdown-item">
                    Download
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item">
                    Share
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle mt-2">
            <div class="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
              <iconify-icon
                icon="solar:file-download-bold"
                class="text-primary fs-3"
              ></iconify-icon>
            </div>
            <div class="d-block">
              <a href="#!" class="text-dark fw-medium">
                Invoice Id #INV0914
              </a>
              <p class="text-muted mb-0 fs-13">17 Jan 2024</p>
            </div>
            <div class="ms-auto text-end">
              <div class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle arrow-none card-drop p-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="javascript:void(0);" class="dropdown-item">
                    Download
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item">
                    Share
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle mt-2">
            <div class="avatar bg-primary-subtle  d-flex align-items-center justify-content-center rounded-circle">
              <iconify-icon
                icon="solar:file-download-bold"
                class="text-primary fs-3"
              ></iconify-icon>
            </div>
            <div class="d-block">
              <a href="#!" class="text-dark fw-medium">
                Invoice Id #INV3801
              </a>
              <p class="text-muted mb-0 fs-13">09 Nov 2023</p>
            </div>
            <div class="ms-auto text-end">
              <div class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle arrow-none card-drop p-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="javascript:void(0);" class="dropdown-item">
                    Download
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item">
                    Share
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle mt-2 mb-1">
            <div class="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
              <iconify-icon
                icon="solar:file-download-bold"
                class="text-primary fs-3"
              ></iconify-icon>
            </div>
            <div class="d-block">
              <a href="#!" class="text-dark fw-medium">
                Invoice Id #INV4782
              </a>
              <p class="text-muted mb-0 fs-13">21 Aug 2023</p>
            </div>
            <div class="ms-auto text-end">
              <div class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle arrow-none card-drop p-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="javascript:void(0);" class="dropdown-item">
                    Download
                  </a>
                  <a href="javascript:void(0);" class="dropdown-item">
                    Share
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customerprofile;
