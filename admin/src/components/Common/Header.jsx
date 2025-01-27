import React, { useContext, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdDarkMode,
  MdCircleNotifications,
  MdSettings,
  MdSearch,
  MdDoubleArrow,
} from "react-icons/md";
import avatar from "../../assets/images/users/avatar-1.jpg";
import { AuthContext } from "../../context/Socket/AuthContext";
import useDarkMode from "../../utils/useDarkMode";
const Header = ({ pageName, toggleDarkMode, isDarkMode }) => {
  const { isAuthenticated, login, logout, user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSidebarToggle = () => {
    const htmlElement = document.documentElement;
    const currentMenuSize = htmlElement.getAttribute("data-menu-size");

    if (currentMenuSize === "hidden") {
      htmlElement.setAttribute("data-menu-size", "default");
      setIsMenuOpen(true);
    } else {
      htmlElement.setAttribute("data-menu-size", "hidden");
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="topbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="d-flex align-items-center">
            <div className="topbar-item">
              <button
                type="button"
                className="button-toggle-menu me-2"
                onClick={handleSidebarToggle}
              >
                <MdDoubleArrow
                  className={`button-sm-hover-icon ${
                    isMenuOpen ? "rotate-open" : "rotate-close"
                  }`}
                  style={{ fontSize: "32px" }}
                />
              </button>
            </div>
            {isAuthenticated && (
              <div className="topbar-item">
                <h4 className="fw-bold topbar-button pe-none text-uppercase mb-0">
                  {pageName}
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
                onClick={toggleDarkMode}
              >
                <MdDarkMode
                  className={`fs-24 align-middle ${
                    isDarkMode ? "text-warning" : "text-muted"
                  }`}
                />
              </button>
            </div>

            {isAuthenticated ? (
              <>
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
                      Welcome {user.username || "Guest"}!
                    </h6>

                    <a className="dropdown-item" href={`/u/${user.id}`}>
                      <i className="bx bx-user-circle text-muted fs-18 align-middle me-1"></i>
                      <span className="align-middle">Profile</span>
                    </a>
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
