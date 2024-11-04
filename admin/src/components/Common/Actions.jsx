import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { ImBin } from "react-icons/im";

const Actions = ({ id, name, viewUrl, editUrl, deleteAction }) => {
  return (
    <div className="d-flex gap-2">
      <a
        href={`${viewUrl}`}
        className="btn btn-light btn-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoEyeOutline className="align-middle fs-18" />
      </a>
      <a className="btn btn-soft-primary btn-sm" href={`${editUrl}`}>
        <FaPen className="align-middle fs-18" />
      </a>
      <button
        className="btn btn-soft-danger btn-sm"
        type="button"
        onClick={() => deleteAction({ id, name })} // Pass both id and name to the delete action
      >
        <ImBin className="align-middle fs-18" />
      </button>
    </div>
  );
};

export default Actions;
