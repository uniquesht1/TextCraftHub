import React from "react";

export default function Navbar(props) {
  const handleSearch = (e) => {
    // e.preventDefault();
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
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
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/uniquesht1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Me
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control mx-1"
                type="search"
                placeholder="Search for Surprise"
                aria-label="Search"
              />
              <button className="btn btn-outline-info " type="submit">
                Search
              </button>
              <div
                className={`form-check form-switch mx-3 my-2 text-${
                  props.mode === "light" ? "danger" : "white"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={props.toggleMode}
                  class="checkbox "
                  id="flexSwitchCheckDefault"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
