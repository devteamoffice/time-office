import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants"; // Ensure API_URL is defined correctly

const AccountStep1 = () => {
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("authToken");

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/user/me`, {
          headers: {
            Authorization: `${token}`, // Ensure "Bearer" prefix is added
          },
        });

        const userData = response.data;
        if (userData) {
          setUser({
            username: userData.username || "",
            name: userData.name || "",
            email: userData.email || "",
            password: "******", // Placeholder for password
          });
        } else {
          setError("User data is invalid.");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="tab-pane active show" id="basictab1" role="tabpanel">
      <h4 className="fs-16 fw-semibold mb-1">Account Information</h4>
      <p className="text-muted">Setup your account information</p>

      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="basicUser" className="form-label">
              User Name
            </label>
            <input
              id="basicUser"
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter User Name"
              value={user.username}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="basicName" className="form-label">
              Name
            </label>
            <input
              id="basicName"
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Your Name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="basicEmail" className="form-label">
              Email
            </label>
            <input
              id="basicEmail"
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="basicPassword" className="form-label">
              Password
            </label>
            <input
              id="basicPassword"
              type="text"
              className="form-control"
              placeholder="Enter Password"
              value={user.password}
              disabled // Prevent user from editing the hashed password
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStep1;
