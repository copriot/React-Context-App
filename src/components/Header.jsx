import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShopify } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-succes bg-success fixed-top navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-3 " to="/">
          <FaShopify />
          Context Store
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sepet">
                Basket
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
