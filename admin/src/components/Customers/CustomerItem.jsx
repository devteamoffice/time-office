import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Actions from "../Common/Actions";
import DeleteModal from "../Common/DeleteModal";
import { API_URL, SOCKET_URL } from "../../constants";

const CustomerItem = ({ user }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (selectedUser) {
      try {
        await axios.delete(`${API_URL}/user/${selectedUser.id}`);
        setSelectedUser(null);
      } catch (error) {
        setError("Failed to delete user");
        console.error("Error deleting user:", error);
      } finally {
        setModalVisible(false);
      }
    }
  };

  return (
    <>
      <DeleteModal
        onConfirm={handleDelete}
        isVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
        item={selectedUser}
        itemType="user"
      />
      <tr>
        <td>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`customCheck${user.id}`}
            />
            <label
              className="form-check-label"
              htmlFor={`customCheck${user.id}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td>
          <img
            src={user.avatar}
            className="avatar-sm rounded-circle me-2"
            alt="Avatar"
          />
        </td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
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
            viewUrl={`/customer/${user.id}`}
            editUrl={`/customer/${user.id}/edit`}
            deleteAction={() => {
              setSelectedUser(user);
              setModalVisible(true);
            }}
          />
        </td>
      </tr>
    </>
  );
};

CustomerItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    role: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default CustomerItem;
