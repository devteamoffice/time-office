import React from "react";
import CustomerItem from "./CustomerItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
const ListTable = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await axios.get(`${API_URL}/user`);
        setusers(response.data.users);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setIsLoading(false);
      }
    };

    fetchusers();
  }, []);
  return (
    <table class="table align-middle mb-0 table-hover table-centered">
      <thead class="bg-light-subtle">
        <tr>
          <th style={{ width: "20px" }}>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="customCheck1"
              />
              <label class="form-check-label" for="customCheck1"></label>
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
      </thead>{" "}
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan="5">Loading users...</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan="5">{error}</td>
          </tr>
        ) : (
          users.map((user) => <CustomerItem key={user.id} user={user} />)
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
