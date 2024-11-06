import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import DeleteModal from "./DeleteModal";
import Actions from "../Common/Actions";
const CustomerItem = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (selectedUser) {
      try {
        await axios.delete(`${API_URL}/users/${selectedUser}.id`);
        setSelectedUser((prev) =>
          prev.filter((user) => user.id !== selectedUser.id)
        );
      } catch (error) {
        console.error("Error deleting user:", error);
      } finally {
        setSelectedUser(null);
        setModalVisible(false);
      }
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/user`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setUsers(false);
      }
    };
  });

  if (loading) return <p>Loading users</p>;
  if (!Array.isArray(users) || users.length === 0)
    return <p>No users available.</p>;
  return (
    <>
      <DeleteModal
        user={selectedUser}
        onConfirm={handleDelete}
        isVisible={modalVisible}
      />
      {users.map((user) => (
        <tr key={user.id}>
          <td>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id={`customCheck2${user.id}`}
              />
              <label class="form-check-label" for="customCheck2">
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
          <td>{user.createdAt}</td>
          <td>
            <Actions />
          </td>
        </tr>
      ))}
    </>
  );
};

export default CustomerItem;
