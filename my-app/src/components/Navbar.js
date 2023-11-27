import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Textutils
          </a>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control mx-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info " type="submit">
                Search
              </button>
              <div
                className={`form-check form-switch mx-3 my-2 text-${props.mode === "light" ? "danger" : "white"}`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={props.toggleMode}
                  class="checkbox "
                  id="flexSwitchCheckDefault"
                />
                {/* <label
                  className="form-check-label "
                  htmlFor="flexSwitchCheckDefault"
                >
                  DarkMode
                </label> */}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
