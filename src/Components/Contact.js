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
        <div style={{ height: "100vh", backgroundColor: "#F8F7F1" }}>
            <HeaderNav></HeaderNav>
            <div
                className="d-flex  align-items-center"
                style={{ height: "94vh", backgroundColor: "#F8F7F1" }}
            >
                <div className="container d-flex justify-content-center py-5">
                    <div className="row">
                        {/* d-flex flex-column */}
                        <div className="col-lg-7">
                            <h1>
                                Let's talk & make something amazing together.
                            </h1>
                            <div className="pt-lg-5 pb-4 mt-auto">
                                <h1>
                                    Start by{" "}
                                    <span className="text-danger text-decoration-underline">
                                        saying hi
                                    </span>
                                </h1>
                            </div>
                            <div className="">
                                <p className=" text-muted">
                                    <p>CONTACT</p>
                                </p>
                                <p className="p-0 m-0">
                                    <HiLocationMarker></HiLocationMarker> Dhaka,
                                    Bangladesh{" "}
                                    <span className="ps-lg-3">
                                        <AiFillPhone></AiFillPhone> +880 19 7070
                                        6676
                                    </span>
                                </p>
                                <p className="p-0 m-0">
                                    <IoMail></IoMail>{" "}
                                    sabbir.mohammad.sami@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="pb-4 px-3">
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
                                    </Button>{" "}
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
