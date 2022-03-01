import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const Layout = ({ children }) => {
    const nav = () => (
        <Navbar bg="success" expand="lg">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div className="nav-link">

                            <Link
                                className="nav-link"

                                to="/admin-profile"
                            >
                                Academy
                            </Link>
                        </div>
                        <div className="nav-link">

                            <Link
                                className="nav-link"

                                to="/course"
                            >
                                Course
                            </Link>
                        </div>
                        <div className="nav-link">

                            <Link
                                className="nav-link"

                                to="/student"
                            >
                               Student
                            </Link>
                        </div>
                        <div className="nav-link">

                            <Link
                                className="nav-link"

                                to="/"
                            >
                                Logout
                            </Link>
                        </div>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    return (
        <Fragment>
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    );
};

export default Layout;
