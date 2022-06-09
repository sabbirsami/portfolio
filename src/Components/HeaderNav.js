import React from "react";
import CustomLink from "./CustomLink";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="none">
            <Container>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav "
                    className="ms-auto d-lg-none d-block border-0"
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink to="/">
                            <GoHome className="mb-1"></GoHome>
                        </CustomLink>
                        <CustomLink to="/work">WORK</CustomLink>
                        <CustomLink to="/contact">CONTACT</CustomLink>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            target="_blank"
                            href="https://github.com/sabbirsami"
                        >
                            <FaGithub></FaGithub>
                        </Nav.Link>
                        <Nav.Link
                            target="_blank"
                            href="https://www.linkedin.com/in/sabbir-mohammad-sami"
                        >
                            <GrLinkedinOption></GrLinkedinOption>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;
