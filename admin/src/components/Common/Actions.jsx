import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { ImBin } from "react-icons/im";
const Actions = () => {
  return (
    <div class="d-flex gap-2">
      <a href="#!" class="btn btn-light btn-sm">
        <IoEyeOutline class="align-middle fs-18" />
      </a>
      <a
        href="#!"
        class="btn btn-soft-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <FaPen class="align-middle fs-18" />
      </a>
      <a href="#!" class="btn btn-soft-danger btn-sm">
        <ImBin class="align-middle fs-18" />
      </a>
    </div>
  );
};

export default Actions;
