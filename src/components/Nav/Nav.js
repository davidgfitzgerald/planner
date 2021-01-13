import React, {Component} from 'react';
import './Nav.scss'
import NavItem from "./NavItem";

class Nav extends Component {
  render() {
    return (
      <nav className="nav-container">
        <NavItem name="Home"/>
        <NavItem name="Dates"/>
        <NavItem name="About"/>
      </nav>
    );
  }
}

export default Nav;