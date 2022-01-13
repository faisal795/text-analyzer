import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const navStyle = {
  padding: "0 .7rem",
  cursor: "pointer",
  borderRadius: ".4rem",
};

function Navbar(props) {
//   console.log(props.mode);
//   const [Bgcolor, setBgcolor] = useState(null);
// console.log(Bgcolor);
// const BgChange = () => {
//   if (props.mode === 'dark') {
//     setBgcolor("#31ddffaf");
//   }
    
//   };
//   const Bg2Change = () => {
//     setBgcolor("#36bd7eb2") 
//   };


//   document.body.style.background = Bgcolor;

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/text-analyzer">
            {props.title}
          </NavLink>
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
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item px-5">
                <span className="nav-link active" aria-current="page">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkbox"
                      onClick={() => {props.fun('#431818')}}
                    />
                    <label htmlFor="form-check-input"></label>
                    <label className="form-check-lable" htmlFor="checkbox">
                      {props.textMode}
                    </label>
                  </div>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <span
                    className="mx-2 bg-info"
                    onClick={() => {props.fun('#31ddffaf')}}
                    style={navStyle}
                  ></span>
                  <span
                    className="mx-2 bg-success"
                    onClick={() => {props.fun('#36bd7eb2')}}
                    style={navStyle}
                  ></span>
                </span>
              </li>
            </ul>
            <form className="d-flex">
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
    </>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "LOGO HERE",
};
export default Navbar;
