import React, { useContext } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import navRoutes from "../../assets/data/navRoutes";
import logo from "../../assets/images/logo/multi_color.png";
import { AuthContext } from "../../context/Socket/AuthContext";
import { publicRoutes } from "../../router/Routes";
import { getLink, isRouteValid, isSubmenuActive } from "../../utils/navUtils";

const MainNav = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  return (
    <div className="main-nav sidebar-open">
      <div className="logo-box">
        <Link to="/" className="logo-dark">
          <img src={logo} className="logo-sm" alt="Small Logo" />
          <img src={logo} className="logo-lg" alt="Large Logo" />
        </Link>
        <Link to="/" className="logo-light">
          <img src={logo} className="logo-sm" alt="Small Logo" />
          <img src={logo} className="logo-lg" alt="Large Logo" />
        </Link>
      </div>
      <div className="scrollbar" data-simplebar>
        <ul className="navbar-nav" id="navbar-nav">
          {navRoutes.map((section, index) => (
            <React.Fragment key={index}>
              {section.title && <li className="menu-title">{section.title}</li>}
              {section.submenu ? (
                <li
                  className={`nav-item ${
                    isSubmenuActive(section.submenu, location, user)
                      ? "active"
                      : ""
                  }`}
                >
                  <a
                    className="nav-link menu-arrow"
                    href={`#sidebar${section.title}`}
                    data-bs-toggle="collapse"
                    aria-expanded={isSubmenuActive(
                      section.submenu,
                      location,
                      user
                    )}
                  >
                    <span className="nav-icon">{section.icon}</span>
                    <span className="nav-text">{section.title}</span>
                  </a>
                  <div
                    className={`collapse ${
                      isSubmenuActive(section.submenu, location, user)
                        ? "show"
                        : ""
                    }`}
                    id={`sidebar${section.title}`}
                  >
                    <ul className="nav sub-navbar-nav">
                      {section.submenu.map((subitem, idx) => (
                        <li className="sub-nav-item" key={idx}>
                          {isRouteValid(
                            getLink(subitem, user),
                            navRoutes,
                            publicRoutes,
                            user
                          ) ? (
                            <NavLink
                              className="sub-nav-link"
                              to={getLink(subitem, user)}
                            >
                              {subitem.text}
                            </NavLink>
                          ) : (
                            <span className="sub-nav-link disabled">
                              {subitem.text}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                section.items?.map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    {isRouteValid(item.link, navRoutes, publicRoutes, user) ? (
                      <NavLink className="nav-link" to={item.link}>
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-text">{item.text}</span>
                      </NavLink>
                    ) : (
                      <span className="nav-link disabled">
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-text">{item.text}</span>
                      </span>
                    )}
                  </li>
                ))
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
