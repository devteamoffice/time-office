import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import RoleItem from "./RoleItem";
import axios from "axios";

const ListTable = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/roles/`, {
          headers: {
            Authorization: `${token}`,
          },
        });

        setRoles(response.data); // Update based on API response structure
      } catch (error) {
        setError("Failed to fetch roles. Please try again.");
        console.error("Error fetching roles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  return (
    <table className="table align-middle mb-0 table-hover table-centered">
      <thead className="bg-light-subtle">
        <tr>
          <th>Role Id</th>
          <th>Username</th>
          <th>Role Name</th>
          <th>Is Admin</th>
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
          Array.isArray(roles) &&
          roles.map((role) => <RoleItem key={role.role_id} role={role} />)
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
