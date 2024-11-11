import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./tostify.css";

const Toastify = () => {
  const [status, setStatus] = useState(""); // Track status

  // Handle button click to set the status and trigger the appropriate toast
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);

    switch (newStatus) {
      case "Success":
        toast.success("Success Notification!");
        break;
      case "Error":
        toast.error("Error Notification!");
        break;
      case "Info":
        toast.info("Info Notification!");
        break;
      case "Warning":
        toast.warn("Warning Notification!");
        break;
      default:
        toast("Default Notification");
    }
  };

  return (
    <div className="tostify-container">
      <button
        onClick={() => handleStatusChange("Success")}
        className="notify-button"
      >
        Success
      </button>
      <button
        onClick={() => handleStatusChange("Error")}
        className="notify-button"
      >
        Error
      </button>
      <button
        onClick={() => handleStatusChange("Info")}
        className="notify-button"
      >
        Info
      </button>
      <button
        onClick={() => handleStatusChange("Warning")}
        className="notify-button"
      >
        Warning
      </button>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="colored"
      />
    </div>
  );
};

export default Toastify;
