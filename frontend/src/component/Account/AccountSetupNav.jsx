import React from "react";
import { RiProfileFill } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
const AccountSetupNav = () => {
  return (
    <ul
      class="nav nav-pills nav-justified icon-wizard form-wizard-header bg-light p-1"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <a
          href="#basictab1"
          data-bs-toggle="tab"
          data-toggle="tab"
          class="nav-link rounded-0 py-2 active"
          aria-selected="true"
          role="tab"
        >
          <RiAccountCircleFill class="fs-26" />
          Account
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a
          href="#basictab2"
          data-bs-toggle="tab"
          data-toggle="tab"
          class="nav-link rounded-0 py-2"
          aria-selected="false"
          role="tab"
          tabindex="-1"
        >
          <RiProfileFill />
          Profile
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a
          href="#basictab3"
          data-bs-toggle="tab"
          data-toggle="tab"
          class="nav-link rounded-0 py-2"
          aria-selected="false"
          tabindex="-1"
          role="tab"
        >
          <RiSecurePaymentLine />
          Payment Methods
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a
          href="#basictab4"
          data-bs-toggle="tab"
          data-toggle="tab"
          class="nav-link rounded-0 py-2"
          aria-selected="false"
          tabindex="-1"
          role="tab"
        >
          <FaCheck class="fs-26" />
          Finish
        </a>
      </li>
    </ul>
  );
};

export default AccountSetupNav;
