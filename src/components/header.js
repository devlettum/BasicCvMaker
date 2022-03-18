import React, {Component} from 'react';
import {
    Collapse,
    Nav, Navbar, NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar
                    color="dark"
                    container
                    dark
                    expand
                    fixed="top"

                    light
                >
                    <NavbarBrand>
                        Basic CV Maker
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck(){}} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="/components/">
                                    Batuhan ARIK
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
