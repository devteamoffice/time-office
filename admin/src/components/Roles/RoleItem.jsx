import React from "react";
import Actions from "../Common/Actions";
import { useState } from "react";
import { API_URL } from "../../constants";
import DeleteModal from "../Customers/DeleteModal";
import axios from "axios";
const RoleItem = ({ role }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (selectedRole) {
      try {
        await axios.delete(`${API_URL}/admin/users/${selectedRole.id}`);
        setSelectedRole((prev) =>
          prev.filter((role) => role.id !== selectedRole.id)
        );
      } catch (error) {
        console.log(error);
      } finally {
        setSelectedRole(null);
        setModalVisible(false);
      }
    }
  };
  return (
    <>
      <DeleteModal
        role={role}
        onConfirm={handleDelete}
        isVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
      />
      <tr>
        <td>{role.roleName}</td>
        <td>{role.email}</td>
        <td>{role.password}</td>

        <td>
          {" "}
          <span class="badge bg-light-subtle text-muted border py-1 px-2">
            {role.tag}
          </span>{" "}
        </td>

        <td>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              value={role.status}
              id="flexSwitchCheckChecked1"
              checked
            />
          </div>
        </td>
        <td>
          <Actions
            name={role.roleName}
            deleteAction={() => {
              setSelectedRole(role); // Set the selected product for deletion
              setModalVisible(true); // Show the modal
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default RoleItem;
