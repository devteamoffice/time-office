import React from "react";
import { ROLES } from "../../../constants";

const UserRole = ({ user }) => {
  return (
    <>
      {user.role === ROLES.Admin ? (
        <span className={`badge bg-primary text-white px-2 py-1 `}>Admin</span>
      ) : user.role === ROLES.Merchant ? (
        <span className={`badge bg-dark text-white px-2 py-1 `}>Merchant</span>
      ) : (
        <span className={`badge bg-success-subtle text-success px-2 py-1 `}>
          Active User
        </span>
      )}
    </>
  );
};

UserRole.defaultProps = {
  className: "",
};

export default UserRole;
