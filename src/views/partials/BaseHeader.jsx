import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../plugin/context";

function BaseHeader() {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          CODEMANT
        </Link>

        {/* Mobile Toggle Button */}
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

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left-side Nav Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/pages/contact-us/">
                <i className="fas fa-phone me-1"></i> Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/about-us/">
                <i className="fas fa-address-card me-1"></i> About Us
              </Link>
            </li>

            {/* Instructor Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-chalkboard-user me-1"></i> Instructor
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/instructor/dashboard/">
                    <i className="bi bi-grid-fill me-2"></i> Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instructor/courses/">
                    <i className="fas fa-book me-2"></i> My Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instructor/create-course/">
                    <i className="fas fa-plus me-2"></i> Create Course
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instructor/profile/">
                    <i className="fas fa-gear me-2"></i> Settings & Profile
                  </Link>
                </li>
              </ul>
            </li>

            {/* Student Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-graduation-cap me-1"></i> Student
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/student/dashboard/">
                    <i className="bi bi-grid-fill me-2"></i> Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/student/courses/">
                    <i className="fas fa-book-open me-2"></i> My Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/student/profile/">
                    <i className="fas fa-gear me-2"></i> Profile & Settings
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Bar */}
          <form
            className="d-flex align-items-center my-2 my-lg-0 mx-lg-3"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Courses"
              aria-label="Search Courses"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          {/* Auth + Cart Buttons */}
          <div className="d-flex flex-wrap mt-2 mt-lg-0 gap-2">
            <Link to="/login/" className="btn btn-primary">
              <i className="fas fa-sign-in-alt me-1"></i> Login
            </Link>
            <Link to="/register/" className="btn btn-outline-light">
              <i className="fas fa-user-plus me-1"></i> Register
            </Link>
            <Link className="btn btn-success" to="/cart/">
              <i className="fas fa-shopping-cart me-1"></i> Cart ({cartCount || 0})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BaseHeader;
