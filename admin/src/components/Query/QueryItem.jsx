import React, { useState } from "react";
import Actions from "../Common/Actions";
import axios from "axios";
import { API_URL, SOCKET_URL } from "../../constants";
import DeleteModal from "../Common/DeleteModal";

const QueryItem = ({ query }) => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (selectedQuery) {
      try {
        await axios.delete(`${API_URL}/contact/queries/${selectedQuery.id}`);
        setSelectedQuery(null); // Update the state to remove the deleted query
      } catch (error) {
        console.error("Error deleting query:", error);
      } finally {
        setSelectedQuery(null);
        setModalVisible(false);
      }
    }
  };

  const generateEmailLink = (email, message) => {
    return `mailto:${email}?subject=RE: ${message}`;
  };

  return (
    <>
      <DeleteModal
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)}
        isVisible={modalVisible}
        item={selectedQuery}
        itemType="query"
      />
      <tr key={query.id}>
        <td>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`check-${query.id}`}
            />
            <label className="form-check-label" htmlFor={`check-${query.id}`}>
              &nbsp;
            </label>
          </div>
        </td>
        <td>{query.name}</td>
        <td>{query.email || "-"}</td>
        <td>{query.message || "-"}</td>
        <td>
          {query.created ? new Date(query.created).toLocaleDateString() : "-"}
        </td>
        <td>
          <Actions
            id={query.id}
            name={query.name}
            // Embed the mailto link in the editUrl
            editUrl={generateEmailLink(query.email, query.message)} // Generate mailto link as the editUrl
            deleteAction={() => {
              setSelectedQuery(query);
              setModalVisible(true);
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default QueryItem;
