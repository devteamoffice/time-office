import React, { useState } from "react";
import Actions from "../Common/Actions";
import DeleteModal from "../Common/DeleteModal";
import { API_URL } from "../../constants";
import axios from "axios";

const RoleItem = ({ role }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/admin/users/${role.user_id}`);
    } catch (error) {
      console.error("Error deleting role:", error);
    } finally {
      setModalVisible(false);
    }
  };

  return (
    <>
      <DeleteModal
        onConfirm={handleDelete}
        isVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
        item={role}
        itemType="role"
      />
      <tr>
        <td>{role.role_id}</td>
        <td>{role.username}</td>
        <td>
          <span className="badge bg-light-subtle text-muted border py-1 px-2">
            {role.role_name}
          </span>
        </td>
        <td>{role.isAdmin ? "Yes" : "No"}</td>
        <td>
          <Actions
            name={role.role_name}
            deleteAction={() => setModalVisible(true)}
          />
        </td>
      </tr>
    </>
  );
};

export default RoleItem;
