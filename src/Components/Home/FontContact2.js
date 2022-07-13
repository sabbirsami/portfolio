import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { Button, Form, Nav } from "react-bootstrap";

const FontContact2 = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "sabbir-mohammad-sami",
                "template_rgdvwbm",
                form.current,
                "qdhDVcg6u8gZ0Y4y5"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <div style={{ backgroundColor: "#242734" }}>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="divider mb-4"></div>
                        <h1 className="display-5 fw-semibold ">
                            Let's work together.
                        </h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="pt-lg-5 pb-4 mt-auto">
                            <h4>Get in touch with me</h4>
                            <p>
                                Let's talk & make something amazing together.{" "}
                                <br />
                                Start by saying hi!
                            </p>
                            <Nav>
                                <Nav.Link
                                    className="ps-0 text-white"
                                    disabled
                                    href="sabbirmohammadsami@gmail.com"
                                >
                                    <HiMailOpen></HiMailOpen>
                                </Nav.Link>
                                <Nav.Link
                                    className="ps-0 text-white"
                                    type="email"
                                    target="_blank"
                                    href="https://github.com/sabbirsami"
                                >
                                    <FaGithub></FaGithub>
                                </Nav.Link>
                                <Nav.Link
                                    className="ps-1 text-white"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/sabbir-mohammad-sami"
                                >
                                    <GrLinkedinOption></GrLinkedinOption>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div
                            className="pt-4 px-4 pb-5 rounded-top"
                            style={{ backgroundColor: "#323647" }}
                        >
                            <div className="pb-lg-5">
                                <Form ref={form} onSubmit={sendEmail}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Control
                                            name="email"
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
                                            name="company_name"
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
                                            name="message"
                                            as="textarea"
                                            rows={6}
                                            className="rounded-1 border-0 py-3"
                                            placeholder="Your message"
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="light"
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

export default FontContact2;
