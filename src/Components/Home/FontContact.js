import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form } from "react-bootstrap";

const FontContact = () => {
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
            <div className="container py-5">
                <div className="row">
                    {/* d-flex flex-column */}
                    <div className="col-lg-7">
                        <h1>Let's talk & make something amazing together.</h1>
                        <div className="pt-lg-5 pb-4 mt-auto">
                            <h1>
                                Start by{" "}
                                <span className="text-danger text-decoration-underline">
                                    saying hi
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="pb-4 px-3">
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
    );
};

export default FontContact;
