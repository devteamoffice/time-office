import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
const RolesAdd = () => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    role_name: "",
    workspace: "",
    tags: [],
    username: "",
    isActive: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch roles from API
    const fetchRoles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/roles/add`);
        setRoles(response.data);
      } catch (err) {
        setError("Failed to fetch roles");
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagsChange = (e) => {
    const selectedTags = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, tags: selectedTags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/roles`, formData);
      alert("Role created successfully!");
      setFormData({
        role_name: "",
        workspace: "",
        tags: [],
        username: "",
        isActive: true,
      });
    } catch (err) {
      setError("Failed to create role");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Roles Information</h4>
            </div>
            <div className="card-body">
              {loading && <p>Loading...</p>}
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="role_name" className="form-label">
                        Role Name
                      </label>
                      <select
                        className="form-control"
                        id="role_name"
                        name="role_name"
                        value={formData.role_name}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                          <option key={role.role_id} value={role.role_name}>
                            {role.role_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="workspace" className="form-label">
                        Workspace
                      </label>
                      <select
                        className="form-control"
                        id="workspace"
                        name="workspace"
                        value={formData.workspace}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Workspace</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Slack">Slack</option>
                        <option value="Zoom">Zoom</option>
                        <option value="Analytics">Analytics</option>
                        <option value="Meet">Meet</option>
                        <option value="Mail">Mail</option>
                        <option value="Stripe">Stripe</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="tags" className="form-label">
                        Tags
                      </label>
                      <select
                        className="form-control"
                        id="tags"
                        name="tags"
                        multiple
                        value={formData.tags}
                        onChange={handleTagsChange}
                      >
                        <option value="Manager">Manager</option>
                        <option value="Product">Product</option>
                        <option value="Data">Data</option>
                        <option value="Designer">Designer</option>
                        <option value="Supporter">Supporter</option>
                        <option value="System Design">System Design</option>
                        <option value="QA">QA</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        User Name
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p>User Status</p>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="isActive"
                          id="active"
                          value={true}
                          checked={formData.isActive === true}
                          onChange={() =>
                            setFormData({ ...formData, isActive: true })
                          }
                        />
                        <label className="form-check-label" htmlFor="active">
                          Active
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="isActive"
                          id="inactive"
                          value={false}
                          checked={formData.isActive === false}
                          onChange={() =>
                            setFormData({ ...formData, isActive: false })
                          }
                        />
                        <label className="form-check-label" htmlFor="inactive">
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-top">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Role"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesAdd;
