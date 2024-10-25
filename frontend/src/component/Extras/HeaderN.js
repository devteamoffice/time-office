import React, { useContext, useState } from "react";
import "./headerN.css";
import logo from "../../assets/images/Logo.png";
import { AuthContext } from "../../context/Socket/AuthContext";
import avatar from "../../assets/images/avatar.jpg";

const NavbarN = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext); // Destructure authentication states and functions

  return (
    <>
      <div
        className="container-fluid"
        style={{ maxWidth: "100%", padding: "0", backgroundColor: "white" }}
      >
        {/* // Header top */}
        <nav className="navbar navbar-expand-lg d-flex d-none d-lg-block ">
          <div className="container pe-0">
            <div className="col-md-3 header-top-left d-none d-lg-block">
              <div className="header-top-social">
                <ul className="mb-0 ps-0">
                  <li className="list-inline-item">
                    <a className="hdr-facebook" href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="hdr-twitter" href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="hdr-instagram" href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="hdr-linkedin" href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-md-6 collapse navbar-collapse d-flex justify-content-center"
              id="navbarSupportedContent"
            >
              <p className="mb-0">FREE SHIPPING THIS WEEK ORDER OVER - $75</p>
            </div>

            <div className="col-md-3 d-flex justify-content-end">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CURRENCY
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        USD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        EUR
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        INR
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownLanguage"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    LANGUAGE
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownLanguage"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Spanish
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        French
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className="handle_hr" />

        <div className="bottomNav">
          {/* Center Header */}
          <div className="container d-none d-lg-block py-lg-3">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-3">
                <img src={logo} alt="Brand logo" className="brand-logo" />
              </div>
              <div className="col-md-6 text-center">
                <div className="search">
                  <span
                    className="fa fa-search"
                    style={{ lineHeight: "25px" }}
                  ></span>
                  <input placeholder="Search products..." />
                </div>
              </div>
              <div className="col-md-3 text-end">
                <div className="cart_icon">
                  <ul>
                    <li className="list-inline-item me-4">
                      <div className="dropdown">
                        <a
                          className="hdr-user dropdown-toggle"
                          href="#"
                          role="button"
                          id="userDropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            className="rounded-circle"
                            width="32"
                            src={avatar}
                            alt="User Avatar"
                          />
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="userDropdown"
                        >
                          {isAuthenticated ? (
                            <>
                              <h6 className="dropdown-header">Welcome User!</h6>
                              <li>
                                <a className="dropdown-item" href="/u/:id">
                                  <i className="bx bx-user-circle text-muted fs-18 align-middle me-1"></i>
                                  Profile
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="/u/:id/orders"
                                >
                                  <i className="bx bx-message-dots text-muted fs-18 align-middle me-1"></i>
                                  Your Orders
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/pricing">
                                  <i className="bx bx-wallet text-muted fs-18 align-middle me-1"></i>
                                  Pricing
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/faqs">
                                  <i className="bx bx-help-circle text-muted fs-18 align-middle me-1"></i>
                                  Help
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/settings">
                                  <i className="bx bx-lock text-muted fs-18 align-middle me-1"></i>
                                  Settings
                                </a>
                              </li>
                              <div className="dropdown-divider my-1"></div>
                              <li>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#"
                                  onClick={logout} // Logout user
                                >
                                  <i className="bx bx-log-out fs-18 align-middle me-1"></i>
                                  Logout
                                </a>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <a className="dropdown-item" href="/signin">
                                  Sign In
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/signup">
                                  Sign Up
                                </a>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </li>

                    <li className="list-inline-item me-4">
                      <a className="hdr-heart" href="/u/:id/wishlist">
                        <i
                          className="fa-solid fa-heart"
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a className="hdr-shopping" href="/cart">
                        <i
                          className="fa-solid fa-cart-shopping"
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="handle_hr" />

          {/* Bottom Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light py-1">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Service
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Service 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Service 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                  {/* Other navbar links can go here */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarN;
