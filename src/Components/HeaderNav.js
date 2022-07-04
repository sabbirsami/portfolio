import React from "react";
import CustomLink from "./CustomLink";
import logo from "./img/logo.png";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { VscListSelection } from "react-icons/vsc";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderNav = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="white"
            className="py-3 border-bottom sticky-top"
        >
            <Container>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav "
                    className="mx-auto  d-lg-none d-block border-0 menu_button"
                >
                    <div className="d-flex justify-content-between">
                        <Link className="w-25 fw-semi-bold text-dark" to="/">
                            {/* <GoHome className="mb-1"></GoHome> */}
                            <img
                                className="w-100 me-auto text-start"
                                src={logo}
                                alt=""
                            />
                        </Link>
                        <VscListSelection className="menu_button" />
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            className="d-inline w-25 fw-semi-bold text-dark"
                            to="/"
                        >
                            {/* <GoHome className="mb-1"></GoHome> */}
                            <img
                                className="w-100 px-5 pt-2 mt-1"
                                src={logo}
                                alt=""
                            />
                        </Link>
                        <CustomLink to="/works">WORKS</CustomLink>
                        <CustomLink to="/contact">CONTACT</CustomLink>
                        <CustomLink to="/blogs">BLOGS</CustomLink>
                        <CustomLink to="/about">ABOUT</CustomLink>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            className="ps-2"
                            target="_blank"
                            href="https://github.com/sabbirsami"
                        >
                            <FaGithub></FaGithub>
                        </Nav.Link>
                        <Nav.Link
                            className="ps-2"
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
