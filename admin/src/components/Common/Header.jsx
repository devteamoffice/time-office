import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdDarkMode,
  MdCircleNotifications,
  MdSettings,
  MdSearch,
} from "react-icons/md";
import avatar from "../../assets/images/users/avatar-1.jpg";
import { AuthContext } from "../../context/Socket/AuthContext";

const Header = () => {
  const { isAuthenticated, login, logout, user } = useContext(AuthContext);

  return (
    <header className="topbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="d-flex align-items-center">
            <div className="topbar-item">
              <button type="button" className="button-toggle-menu me-2">
                <GiHamburgerMenu className="fs-24 align-middle" />
              </button>
            </div>
            {isAuthenticated && (
              <div className="topbar-item">
                <h4 className="fw-bold topbar-button pe-none text-uppercase mb-0">
                  Welcome!
                </h4>
              </div>
            )}
          </div>

          <div className="d-flex align-items-center gap-1">
            <div className="topbar-item">
              <button
                type="button"
                className="topbar-button"
                id="light-dark-mode"
              >
                <MdDarkMode className="fs-24 align-middle" />
              </button>
            </div>

            {isAuthenticated ? (
              <>
                <div className="dropdown topbar-item">
                  <button
                    type="button"
                    className="topbar-button position-relative"
                    id="page-header-notifications-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <MdCircleNotifications className="fs-24 align-middle" />
                    <span className="position-absolute topbar-badge fs-10 translate-middle badge bg-danger rounded-pill">
                      3<span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                  {/* Notifications Dropdown */}
                </div>

                <div className="topbar-item d-none d-md-flex">
                  <button
                    type="button"
                    className="topbar-button"
                    id="theme-settings-btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#theme-settings-offcanvas"
                    aria-controls="theme-settings-offcanvas"
                  >
                    <MdSettings className="fs-24 align-middle" />
                  </button>
                </div>

                <div className="dropdown topbar-item">
                  <a
                    type="button"
                    className="topbar-button"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        width="32"
                        src={avatar}
                        alt="User avatar"
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <h6 className="dropdown-header">
                      Welcome {user?.username || "Guest"}!
                    </h6>

                    <a className="dropdown-item" href={`/u/${user.id}`}>
                      <i className="bx bx-user-circle text-muted fs-18 align-middle me-1"></i>
                      <span className="align-middle">Profile</span>
                    </a>
                    {/* <a className="dropdown-item" href="apps-chat.html">
                      <i className="bx bx-message-dots text-muted fs-18 align-middle me-1"></i>
                      <span className="align-middle">Messages</span>
                    </a>

                    <a className="dropdown-item" href="pages-pricing.html">
                      <i className="bx bx-wallet text-muted fs-18 align-middle me-1"></i>
                      <span className="align-middle">Pricing</span>
                    </a>
                    <a className="dropdown-item" href="pages-faqs.html">
                      <i className="bx bx-help-circle text-muted fs-18 align-middle me-1"></i>
                      <span className="align-middle">Help</span>
                    </a>
                    <a className="dropdown-item" href="auth-lock-screen.html">
                      <i className="bx bx-lock text-muted fs-18 align-middle me-1"></i>
                      <span className="align-middle">Lock screen</span>
                    </a> */}

                    <div className="dropdown-divider my-1"></div>

                    <a
                      className="dropdown-item text-danger"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        logout();
                      }}
                    >
                      <i className="bx bx-log-out fs-18 align-middle me-1"></i>
                      <span className="align-middle">Logout</span>
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className="topbar-item d-flex gap-2">
                <a href="/login" className="btn btn-primary btn-sm">
                  Login
                </a>
              </div>
            )}

            <form className="app-search d-none d-md-block ms-2">
              <div className="position-relative">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  autoComplete="off"
                />
                <MdSearch className="search-widget-icon" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
