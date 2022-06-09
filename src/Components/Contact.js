import React from "react";
import HeaderNav from "./HeaderNav";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { Button, Form, Nav } from "react-bootstrap";

const Contact = () => {
    return (
        <div className="bg-yellow" style={{ height: "100vh" }}>
            <HeaderNav></HeaderNav>
            <div className="container">
                <div className="py-5">
                    <div className="pb-5">
                        <h1 className="text-center fw-bold">Get in touch!</h1>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 pt-5">
                            <div className=" mb-2">
                                <div className=" d-flex pe-3 text-center">
                                    <p className="pe-3">
                                        <HiLocationMarker className="fs-3"></HiLocationMarker>
                                    </p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div className=" mb-2">
                                <div className=" d-flex pe-3 text-center">
                                    <p className="pe-3">
                                        <IoMail className="fs-3"></IoMail>
                                    </p>
                                    <p>sabbir.mohammad.sami@gmail.com</p>
                                </div>
                            </div>
                            <div className=" mb-2">
                                <div className=" d-flex pe-3 text-center">
                                    <p className="pe-3">
                                        <AiFillPhone className="fs-3"></AiFillPhone>
                                    </p>
                                    <p>+880 19 7070 6676 </p>
                                </div>
                            </div>
                            <a
                                target="_blank"
                                className="text-dark fs-2 me-3"
                                href="https://github.com/sabbirsami"
                            >
                                <FaGithub></FaGithub>
                            </a>
                            <a
                                className="text-dark fs-2 me-3"
                                target="_blank"
                                href="https://www.linkedin.com/in/sabbir-mohammad-sami"
                            >
                                <GrLinkedinOption></GrLinkedinOption>
                            </a>
                        </div>
                        <div className="col-lg-8">
                            <div className="pt-5 pb-4 px-3">
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Control
                                            type="email"
                                            className="rounded-1 border-0 py-3"
                                            placeholder="Your email address"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Control
                                            type="text"
                                            className="rounded-1 border-0 py-3"
                                            placeholder="Your name / company’s name"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Control
                                            as="textarea"
                                            rows={6}
                                            className="rounded-1 border-0 py-3"
                                            placeholder="Your message"
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="dark"
                                        className="rounded-1 border-0 px-5"
                                        type="submit"
                                    >
                                        Sent
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
