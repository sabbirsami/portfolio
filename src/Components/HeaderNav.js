import React from "react";
import CustomLink from "./CustomLink";
import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to="/features">Features</CustomLink>
                        <CustomLink to="/pricing">Pricing</CustomLink>
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
