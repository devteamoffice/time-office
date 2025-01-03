import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // to access the params in the URL
import { API_URL } from "../../constants";
import avatar from "../../assets/images/users/avatar-2.jpg";

const Customerprofile = () => {
  const { id } = useParams(); // Extract the user ID from the URL params
  const [user, setUser] = useState(null); // To store the user data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state
  const [address, setAddress] = useState(null); // To store the address data
  const [invoices, setInvoices] = useState([]); // To store invoices data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch user data from the API
        const userResponse = await axios.get(`${API_URL}/user/${id}`, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        });
        setUser(userResponse.data.user);

        // Fetch all addresses and filter by userId
        const addressResponse = await axios.get(`${API_URL}/address`, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        });

        // Filter the addresses to match the userId
        const userAddresses = addressResponse.data.addresses.filter(
          (address) => address.userId === userResponse.data.user.id
        );

        // Assuming user has only one address and we take the first one
        if (userAddresses.length > 0) {
          setAddress(userAddresses[0]);
        }

        // Fetch user invoices
        // const invoiceResponse = await axios.get(`${API_URL}/invoice/${id}`, {
        //   headers: {
        //     Authorization: `${token}`,
        //     "Content-Type": "application/json",
        //   },
        // });
        // setInvoices(invoiceResponse.data.invoices);
      } catch (err) {
        setError("Error fetching user data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div className="col-lg-4">
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="bg-primary profile-bg rounded-top p-5 position-relative mx-n3 mt-n3">
            <img
              src={user?.avatar || avatar} // Assuming user has avatar property
              alt="User Avatar"
              className="avatar-lg border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
            />
          </div>
          <div className="mt-4 pt-3">
            <h4 className="mb-1">
              {user?.name || "Michael A. Miner"}{" "}
              <i className="bx bxs-badge-check text-success align-middle"></i>
            </h4>
            <div className="mt-2">
              <a href="#!" className="link-primary fs-15">
                @{user?.username || "michael_cus_2024"}{" "}
              </a>
              <p className="fs-15 mb-1 mt-1">
                <span className="text-dark fw-semibold">Email : </span>{" "}
                {user?.email || "michaelaminer@dayrep.com"}
              </p>
              <p className="fs-15 mb-0 mt-1">
                <span className="text-dark fw-semibold">Phone : </span>{" "}
                {user?.phoneNumber || "NOT FOUND!"}
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer border-top gap-1 hstack">
          <a href="#!" className="btn btn-primary w-100">
            Send Message
          </a>
          <a href="#!" className="btn btn-light w-100">
            Analytics
          </a>
          <a
            href="#!"
            className="btn btn-soft-dark d-inline-flex align-items-center justify-content-center rounded avatar-sm"
          >
            <i className="bx bx-edit-alt fs-18"></i>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          <div>
            <h4 className="card-title">Customer Details</h4>
          </div>
          <div>
            <span className="badge bg-success-subtle text-success px-2 py-1">
              Active User
            </span>
          </div>
        </div>
        <div className="card-body py-2">
          <div className="table-responsive">
            <table className="table mb-0">
              <tbody>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Account ID :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">{user.id}</td>
                </tr>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Invoice Email :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">
                    {user?.email || "michaelaminer@dayrep.com"}
                  </td>
                </tr>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Delivery Address :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">
                    {`${address?.address}, ${address?.city}, ${address?.state}, ${address?.country}, ${address?.zipCode}` ||
                      "Address not found"}
                  </td>
                </tr>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Language :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">English</td>
                </tr>
                <tr>
                  <td className="px-0">
                    <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                      Latest Invoice Id :{" "}
                    </p>
                  </td>
                  <td className="text-dark fw-medium px-0">#INV2540</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header border-bottom border-dashed">
          <div className="d-flex align-items-center gap-2">
            <div className="d-block">
              <h4 className="card-title mb-1">Latest Invoice</h4>
              <p className="mb-0 text-muted">Total {invoices.length} files</p>
            </div>
            <div className="ms-auto">
              <a href="#!" className="btn btn-primary btn-sm">
                View All
              </a>
            </div>
          </div>
        </div>
        {/* <div className="card-body">
          {invoices.map((invoice) => (
            <div
              className="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle"
              key={invoice.id}
            >
              <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
                <i className="text-primary fs-3">📄</i>
              </div>
              <div className="d-block">
                <a href="#!" className="text-dark fw-medium">
                  Invoice Id #{invoice.id}
                </a>
                <p className="text-muted mb-0 fs-13">{invoice.date}</p>
              </div>

              <div className="ms-auto text-end">
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop p-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" className="dropdown-item">
                      Download
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Customerprofile;
