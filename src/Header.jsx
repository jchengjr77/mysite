import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="header-cont">
        <Navbar color="faded" light>
            <NavbarToggler onClick={this.toggleNavbar} />
            <div>
                <h1 className="display-4">Jonathan Cheng</h1>
            </div>
            <Collapse isOpen={!this.state.collapsed} navbar className="main-nav">
                <Nav navbar>
                <NavItem>
                    <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contact">Contact</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
