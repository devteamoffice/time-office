import React, { useState, useEffect } from "react";
import avatar from "../../assets/images/avatar.jpg";
import { FaFileDownload } from "react-icons/fa";
import { EMAIL_PROVIDER } from "../../constants";
import UserRole from "../Manager/UserRole";
import { API_URL } from "../../constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
  return (
    <div class="col-lg-4">
      <div class="card overflow-hidden">
        <div class="card-body">
          <div class="bg-primary profile-bg rounded-top p-5 position-relative mx-n3 mt-n3">
            <img
              src={avatar}
              alt=""
              class="avatar-lg border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
            />
          </div>
          <div class="mt-4 pt-3">
            <h4 class="mb-1">
              {" "}
              {user.name}
              <i class="bx bxs-badge-check text-success align-middle"></i>
            </h4>
            <div class="mt-2">
              <a href="#!" class="link-primary fs-15">
                @{user.username}
              </a>
              <p class="fs-15 mb-1 mt-1">
                <span class="text-dark fw-semibold">Email : </span> {user.email}
              </p>
              <p class="fs-15 mb-0 mt-1">
                <span class="text-dark fw-semibold">Phone : </span> {user.phone}
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
          {/* <UserRole /> */}
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
                  <td class="text-dark fw-medium px-0">#AC-278699</td>
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
              <FaFileDownload />
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
              <FaFileDownload />
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
              <FaFileDownload />
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
              <FaFileDownload />
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
      <Address />
    </div>
  );
};

export default AccountDetails;
