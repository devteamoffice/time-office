import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
const AccountPanel = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    name: "",
  });

  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_URL}/user/me`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserData({
          username: response.data.username,
          email: response.data.email,
          phone: response.data.phone,
          name: response.data.name,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${API_URL}/user/me`,
        {
          name: userData.name,
          phone: userData.phone,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      alert("Account details updated successfully");
    } catch (error) {
      console.error("Error updating account details:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h4>Account Information</h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                id="username"
                type="text"
                className="form-control"
                value={userData.username}
                disabled
                placeholder="User Name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={userData.email}
                disabled
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                className="form-control"
                value={userData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="Enter Name"
              />
            </div>
          </div>
        </div>

        <div className="text-end mb-3">
          <a
            href={`/reset-password?user=${userData.username}`}
            className="text-primary"
          >
            Reset Password
          </a>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountPanel;
