import React, { useContext, useState, useEffect } from "react";
import "./headerN.css";
import logo from "../../assets/images/Logo.png";
import { AuthContext } from "../../context/Socket/AuthContext";
import avatar from "../../assets/images/avatar.jpg";
import CartIcon from "../Common/CartIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderTop from "../HomePage/HeaderTop";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchStoreCategories,
} from "../../containers/Category/actions";
import axios from "axios"; // For API calls
import { API_URL } from "../../constants";
const NavbarN = () => {
  const { isAuthenticated, login, logout, user } = useContext(AuthContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState(0); // Local state for cart items count
  const [wishlistItems, setWishlistItems] = useState(0); // Local state for wishlist items count
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const handleSearch = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search input visibility
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const loadCategories = async () => {
      const categories = await dispatch(fetchCategories());
      setCategories(categories); // Set the categories directly
    };

    loadCategories();
  }, [dispatch]);

  // Fetch cart and wishlist items count from APIs
  useEffect(() => {
    const fetchCartItemsCount = async () => {
      try {
        const response = await axios.get(`${API_URL}/cart`, {
          headers: { Authorization: `${token}` },
        }); // Replace with your API URL
        setCartItems(response.data.cartItemsCount); // Adjust according to API response
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    const fetchWishlistItemsCount = async () => {
      try {
        const response = await axios.get(`${API_URL}/wishlist`, {
          headers: { Authorization: `${token}` },
        }); // Replace with your API URL
        setWishlistItems(response.data.wishlistItemsCount); // Adjust according to API response
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    fetchCartItemsCount();
    fetchWishlistItemsCount();
  }, []);

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
        <HeaderTop />
        <hr className="handle_hr" />
        <div className="bottomNav">
          <div className="container d-none d-lg-block py-lg-3">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-3">
                <Link to="/">
                  <img src={logo} alt="Brand logo" className="brand-logo" />
                </Link>
              </div>
              <div className="col-md-6 text-center">
                <SearchBar />
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
                                <a
                                  className="dropdown-item"
                                  href={`/u/${user?.id}`}
                                >
                                  <i className="bx bx-user-circle text-muted fs-18 align-middle me-1"></i>
                                  Profile
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/u/${user?.id}/orders`}
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
                                  onClick={logout}
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
                      <a className="hdr-heart" href={`/u/${user?.id}/wishlist`}>
                        <i
                          className="fa-solid fa-heart"
                          style={{ fontSize: "30px" }}
                        >
                          {wishlistItems > 0 && (
                            <span className="wishlist-count">
                              {wishlistItems}
                            </span>
                          )}
                        </i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="hdr-shopping" href="/cart">
                        <CartIcon cartItems={cartItems} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="handle_hr" />
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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100 ">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
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
                      {categories.map((category) => (
                        <li key={category.id}>
                          <a
                            className="dropdown-item"
                            href={`/store?cat=${category.slug}`}
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/store">
                      Our Store
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/aboutus">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact us
                    </a>
                  </li>
                </ul>
                <form className="d-flex d-lg-none">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarN;
