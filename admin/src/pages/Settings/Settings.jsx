import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../constants";
import LoadingIndicator from "../../components/Common/LoadingIndicator.";
const AccountSettings = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/user/me`, {
          headers: {
            Authorization: `${token}`, // Use the token
          },
        });
        setUserData(response.data.user);
      } catch (err) {
        setError(err.message);
        toast.error("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/user/`, userData, {
        headers: {
          Authorization: `${token}`, // Use the token
        },
      });
      toast.success("Account information updated successfully!");
    } catch (err) {
      toast.error("Failed to update user data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingIndicator backdrop />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title d-flex align-items-center gap-1">
                <iconify-icon
                  icon="solar:settings-bold-duotone"
                  className="text-primary fs-20"
                ></iconify-icon>
                Account Settings
              </h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={userData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={userData.email}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={userData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-end mt-3">
        <a href="/reset-password" className="btn btn-link">
          Reset Password
        </a>
        <button onClick={handleSaveChanges} className="btn btn-success">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
