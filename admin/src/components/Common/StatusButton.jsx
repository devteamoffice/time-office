import React, { useState, useEffect } from "react";

const StatusButton = (status) => {
  const [badgeClass, setBadgeClass] = useState("");
  const [badgeText, setBadgeText] = useState("");

  useEffect(() => {
    switch (status) {
      case "Draft":
        setBadgeClass("border border-secondary text-secondary");
        setBadgeText("Draft");
        break;
      case "Packaging":
        setBadgeClass("border border-warning text-warning");
        setBadgeText("Packaging");
        break;
      case "Completed":
        setBadgeClass("border border-success text-success");
        setBadgeText("Completed");
        break;
      case "Canceled":
        setBadgeClass("border border-danger text-danger");
        setBadgeText("Canceled");
        break;
      case "Unpaid":
        setBadgeClass("bg-light text-dark");
        setBadgeText("Unpaid");
        break;
      case "Paid":
        setBadgeClass("bg-success text-light");
        setBadgeText("Paid");
        break;
      case "Refund":
        setBadgeClass("bg-light text-dark");
        setBadgeText("Refund");
        break;
      default:
        setBadgeClass("");
        setBadgeText("");
    }
  }, [status]);
  return (
    <span className={`badge ${badgeClass} px-2 py-1 fs-13`}>{badgeText}</span>
  );
};

export default StatusButton;
