import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navbar.css"
const Layout = ({ children }) => {
    const nav = () => (
        <Navbar bg="success" expand="lg" variant="dark" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/viewacademy">Academy</Nav.Link>
                        <Nav.Link href="/course">Course</Nav.Link>
                        <Nav.Link href="/student">Student</Nav.Link>
                        <Nav.Link href="/">Logout</Nav.Link>
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
