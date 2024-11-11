import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./tostify.css";

const Toastify = () => {
  //track the status of button
  const [status, setStatus] = useState("");

  // Get the current value of the button and update our stats
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);

  //Now we can handle our case with the uses of switch case
    switch (newStatus) {
      case "Success":
        toast.success(" Success Notification!");
        break;
      case "Error":
          toast.error("Error Notification");
          break;
      case "Info":
        toast.info("Info Notification");
        break;
      case "Warning":
        toast.warning("Warning Notification!");
        break;
      default:
        toast("Default Notification")
    }
  };




  return (
    <div className="tostify-container">
      <button onClick={()=> handleStatusChange("Success")} className="notify-button">
        Success
      </button>
      <button onClick={()=> handleStatusChange("Error")} className="notify-button">
        Error
      </button>
      <button onClick={()=> handleStatusChange("Info")} className="notify-button">
        Info
      </button>
      <button onClick={()=> handleStatusChange("Warning")} className="notify-button">
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
