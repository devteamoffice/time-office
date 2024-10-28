import React, { useContext, useState, useEffect } from "react";
import "./headerN.css";
import logo from "../../assets/images/Logo.png";
import { AuthContext } from "../../context/Socket/AuthContext";
import avatar from "../../assets/images/avatar.jpg";
import CartIcon from "../Common/CartIcon";
import { Link } from "react-router-dom";
const NavbarN = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search input visibility
  };

  const handleClick = () => {
    // alert("Click Working");
    window.scrollTo(0, 0);
  };

  // Hide search bar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsSearchVisible(false); // Always hide the search bar on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);
  return (
    <>
      <div
        className="container-fluid"
        style={{ maxWidth: "100%", padding: "0", backgroundColor: "white" }}
      >
        {/* // Header top */}
        <nav className="navbar navbar-expand-lg d-flex d-none d-lg-block ">
          <div className="container pe-0">
            <div class="col-md-3 header-top-left d-none d-lg-block">
              <div class="header-top-social">
                {/* <span class="social-text text-upper">Follow us on:</span> */}
                <ul class="mb-0 ps-0">
                  <li class="list-inline-item">
                    <a class="hdr-facebook" href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="hdr-twitter" href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="hdr-instagram" href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="hdr-linkedin" href="#">
                      <i class="fa-brands fa-linkedin-in"></i>
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
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
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
                    LANGUAGE
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className="handle_hr" />

        <div className="bottomNav ">
          {/* Center Header */}
          <div className="container d-none d-lg-block py-lg-3">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-3">
                <Link to="/">
                  <img src={logo} alt="Brand logo" className="brand-logo" />
                </Link>
              </div>
              <div className="col-md-6 text-center">
                <div class="search">
                  <span
                    class="fa fa-search"
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
                    <li class="list-inline-item me-4">
                      <a class="hdr-heart" href="#">
                        <i
                          class="fa-solid fa-heart"
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                    </li>

                    <li class="list-inline-item">
                      <a class="hdr-shopping" href="#">
                        <i
                          class="fa-solid fa-cart-shopping"
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
          {/* Bottom  Navbar */}
          <nav class="navbar navbar-expand-lg navbar-light py-1">
            <div class="container-fluid">
              {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse   "
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100 ">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
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
                          Attendance and Access Control Systems
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Door Locks and Controllers
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Barcode Scanners
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Switches for Access Control
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Readers
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          AMC
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Elevator Control System
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Our Store
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contact us
                    </a>
                  </li>
                </ul>

                <form class="d-flex d-lg-none">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className=" navbar-brand cart_icon d-lg-none">
                <ul>
                  <li className="list-inline-item">
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
                          style={{ fontSize: "30px" }}
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
                              <a className="dropdown-item" href="/u/:id/orders">
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

                  <li class="list-inline-item">
                    <a class="hdr-heart" href="#">
                      <i
                        class="fa-solid fa-heart"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a class="hdr-shopping" href="#">
                      <i
                        class="fa-solid fa-cart-shopping"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </a>
                  </li>
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
