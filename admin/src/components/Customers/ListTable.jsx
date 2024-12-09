import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomerItem from "./CustomerItem";
import { fetchUsers } from "../../containers/Users/actions";

const ListTable = () => {
  const dispatch = useDispatch();

  // Assuming users are stored in state.users
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); // Fetch users when the component mounts
  }, [dispatch]);

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
        ) : (
          users &&
          users.map((user) => <CustomerItem key={user.id} user={user} />)
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
