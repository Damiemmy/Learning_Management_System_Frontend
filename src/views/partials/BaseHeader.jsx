import React from "react";
import { Link } from "react-router-dom";

function BaseHeader() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary navbar-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
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
                <i className="fas fa-phone"></i> Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/about-us/">
                <i className="fas fa-address-card"></i> About Us
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
                <i className="fas fa-chalkboard-user"></i> Instructor
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/instructor/dashboard/">
                    <i className="bi bi-grid-fill"></i> Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instructor/courses/">
                    <i className="fas fa-shopping-cart"></i> My Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instructor/create-course/">
                    <i className="fas fa-plus"></i> Create Course
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instructor/reviews/">
                    <i className="fas fa-star"></i> Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/instructor/question-answer/"
                  >
                    <i className="fas fa-envelope"></i> Q/A
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instructor/students/">
                    <i className="fas fa-users"></i> Students
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instructor/earning/">
                    <i className="fas fa-dollar-sign"></i> Earning
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instructor/profile/">
                    <i className="fas fa-gear"></i> Settings & Profile
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
                <i className="fas fa-graduation-cap"></i> Student
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/student/dashboard/">
                    <i className="bi bi-grid-fill"></i> Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/student/courses/">
                    <i className="fas fa-shopping-cart"></i> My Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/student/wishlist/">
                    <i className="fas fa-heart"></i> Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/student/question-answer/"
                  >
                    <i className="fas fa-envelope"></i> Q/A
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/student/profile/">
                    <i className="fas fa-gear"></i> Profile & Settings
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Bar + Buttons */}
          <form className="d-flex flex-wrap my-2 my-lg-0" role="search">
            <input
              className="form-control"
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
              Login <i className="fas fa-sign-in-alt"></i>
            </Link>
            <Link to="/register/" className="btn btn-primary">
              Register <i className="fas fa-user-plus"></i>
            </Link>
            <Link className="btn btn-success" to="/cart/">
              Cart (3) <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BaseHeader;
