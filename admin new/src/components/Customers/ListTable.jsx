import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomerItem from "./CustomerItem";
import { fetchUsers } from "../../containers/Users/actions";

const ListTable = ({ currentPage, itemNo }) => {
  const dispatch = useDispatch();

  // Access users, loading, and error state from Redux
  const { users, isLoading, error } = useSelector((state) => state.users);

  // Fetch users on component mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Calculate paginated users
  const startIndex = (currentPage - 1) * itemNo;
  const paginatedUsers = users.slice(startIndex, startIndex + itemNo);

  return (
    <table className="table align-middle mb-0 table-hover table-centered">
      <thead className="bg-light-subtle">
        <tr>
          <th style={{ width: "20px" }}>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
              />
              <label
                className="form-check-label"
                htmlFor="customCheck1"
              ></label>
            </div>
          </th>
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
        {isLoading ? (
          <tr>
            <td colSpan="9">Loading users...</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan="9">{error}</td>
          </tr>
        ) : paginatedUsers.length > 0 ? (
          paginatedUsers.map((user) => (
            <CustomerItem key={user.id} user={user} />
          ))
        ) : (
          <tr>
            <td colSpan="9">No users found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
