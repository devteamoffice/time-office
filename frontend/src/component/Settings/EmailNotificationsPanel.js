import React from "react";

const EmailNotificationPanel = () => {
  return (
    <div>
      <h4>Emails & Notifications</h4>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="emailNotifications"
        />
        <label className="form-check-label" htmlFor="emailNotifications">
          Enable Email Notifications
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="newsletterSubscription"
        />
        <label className="form-check-label" htmlFor="newsletterSubscription">
          Subscribe to Newsletter
        </label>
      </div>
    </div>
  );
};

export default EmailNotificationPanel;
