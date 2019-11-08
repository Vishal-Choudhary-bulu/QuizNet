import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink
              to="/"
              exact
              className="react-link"
              activeStyle={{
                color: "rgb(0, 122, 170)",
                border: "none"
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink
              to="/create"
              className="react-link"
              activeStyle={{
                color: "rgb(0, 122, 170)",
                border: "none"
              }}
            >
              Create
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink
              to="/profile"
              className="react-link"
              activeStyle={{
                color: "rgb(0, 122, 170)",
                border: "none"
              }}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
