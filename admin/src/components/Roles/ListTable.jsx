import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../../constants";
import RoleItem from "./RoleItem";
import axios from "axios";
const ListTable = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(`${API_URL}/admin/users`);
        setRoles(response.data.roles);
      } catch (error) {
        setError("Failed to fetch roles:", error);
        setLoading(false);
      }
    };
    fetchRoles();
  });
  return (
    <table class="table align-middle mb-0 table-hover table-centered">
      <thead class="bg-light-subtle">
        <tr>
          <th>Role</th>

          <th>Email</th>
          <th>Password</th>

          <th>Tags</th>

          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan="5">Loading roles....</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan="5">{error}</td>
          </tr>
        ) : (
          roles.map((role) => <RoleItem key={role.id} role={role} />)
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
