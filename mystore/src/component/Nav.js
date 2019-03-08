import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/products" activeClassName="active" exact>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/products/new" activeClassName="active">
          New
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
