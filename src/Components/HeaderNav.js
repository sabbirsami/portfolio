import React from "react";
import CustomLink from "./CustomLink";
import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav "
                    className="ms-auto d-lg-none d-block border-0"
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to="/features">WORK</CustomLink>
                        <CustomLink to="/pricing">CONTACT</CustomLink>
                    </Nav>
                    <Nav>
                        <CustomLink to="/deets">More deets</CustomLink>
                        <CustomLink eventKey={2} to="/memes">
                            Dank memes
                        </CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;
