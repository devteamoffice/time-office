import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import DeleteModal from "./DeleteModal";
import Actions from "../Common/Actions";
import { SOCKET_URL } from "../../constants";
const CustomerItem = ({ user }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleDelete = async () => {
    if (selectedUser) {
      try {
        await axios.delete(`${API_URL}/user/${selectedUser.id}`);
        setSelectedUser((prev) =>
          prev.filter((user) => user.id !== selectedUser.id)
        );
      } catch (error) {
        setError("Failed to fetch users");
        console.error("Error deleting user:", error);
      } finally {
        setSelectedUser(null);
        setModalVisible(false);
      }
    }
  };

  return (
    <>
      <DeleteModal
        user={selectedUser}
        onConfirm={handleDelete}
        isVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
      />

      <tr>
        <td>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id={`customCheck2${user.id}`}
            />
            <label class="form-check-label" htmlFor={`customCheck${user.id}`}>
              &nbsp;
            </label>
          </div>
        </td>
        <td>
          <img
            src={user.avatar}
            class="avatar-sm rounded-circle me-2"
            alt="..."
          />{" "}
        </td>

        <td> {user.name} </td>
        <td> {user.username} </td>
        <td> {user.email}</td>
        <td> {user.phoneNo} </td>
        <td>{user.role}</td>

        <td>
          {user.createdAt
            ? new Date(user.createdAt).toLocaleDateString()
            : "N/A"}
        </td>
        <td>
          <Actions
            id={user.id}
            name={user.name}
            viewUrl={`${SOCKET_URL}/u/${user.id}`}
            editUrl={`/customer/${user.id}/edit`}
            deleteAction={() => {
              setSelectedUser(user); // Set the selected product for deletion
              setModalVisible(true); // Show the modal
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default CustomerItem;
