import React from "react";
import CustomerItem from "./CustomerItem";

const ListTable = ({ users, loading, error }) => {
  return (
    <table className="table align-middle mb-0 table-hover table-centered">
      <thead className="bg-light-subtle">
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone No.</th>
          <th>Role</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan="8">Loading users...</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan="8">{error}</td>
          </tr>
        ) : users.length > 0 ? (
          users.map((user) => <CustomerItem key={user.id} user={user} />)
        ) : (
          <tr>
            <td colSpan="8">No users found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
