import React from "react";
import EmailNotificationPanel from "../../component/Settings/EmailNotificationsPanel";
import AboutPanel from "../../component/Settings/AboutPanel";
import AccountPanel from "../../component/Settings/AccountPanel";
import PrivacyPanel from "../../component/Settings/PrivacyPanel";
const SettingsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Settings</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3">
                  <ul
                    className="nav nav-pills nav-justified flex-column icon-wizard form-wizard-header bg-light p-1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        href="#accountTab"
                        data-bs-toggle="tab"
                        className="nav-link rounded-0 py-2 active"
                        role="tab"
                      >
                        Account
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#privacyTab"
                        data-bs-toggle="tab"
                        className="nav-link rounded-0 py-2"
                        role="tab"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#emailNotificationTab"
                        data-bs-toggle="tab"
                        className="nav-link rounded-0 py-2"
                        role="tab"
                      >
                        Emails & Notifications
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#aboutTab"
                        data-bs-toggle="tab"
                        className="nav-link rounded-0 py-2"
                        role="tab"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-9">
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="accountTab"
                      role="tabpanel"
                    >
                      <AccountPanel />
                    </div>
                    <div className="tab-pane" id="privacyTab" role="tabpanel">
                      <PrivacyPanel />
                    </div>
                    <div
                      className="tab-pane"
                      id="emailNotificationTab"
                      role="tabpanel"
                    >
                      <EmailNotificationPanel />
                    </div>
                    <div className="tab-pane" id="aboutTab" role="tabpanel">
                      <AboutPanel />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
