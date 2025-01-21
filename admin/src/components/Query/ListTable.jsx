import React, { useEffect, useState } from "react";
import axios from "axios";
import QueryItem from "./QueryItem"; // Import QueryItem
import { API_URL } from "../../constants";

const ListTable = () => {
  const [queries, setQueries] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(`${API_URL}/contact/queries`);

        // Update to match the actual API response structure
        if (response.data && response.data.contacts) {
          setQueries(response.data.contacts);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (err) {
        console.error("Error fetching queries:", err);
        setError("Failed to fetch queries");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQueries();
  }, []);

  return (
    <table className="table align-middle mb-0 table-hover table-centered">
      <thead className="bg-light-subtle">
        <tr>
          <th style={{ width: "20px" }}>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="selectAllQueries"
              />
              <label
                className="form-check-label"
                htmlFor="selectAllQueries"
              ></label>
            </div>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Created At</th>
          <th>Last Updated</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan="7">Loading queries...</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan="7">{error}</td>
          </tr>
        ) : queries.length === 0 ? (
          <tr>
            <td colSpan="7">No queries found.</td>
          </tr>
        ) : (
          queries.map((query) => <QueryItem key={query.id} query={query} />)
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
