import React from "react";
import profile from "./IMG-2413.png";
// import "./Hero.css";

const Hero = () => {
    return (
        <div>
            <div
                className="bg-image"
                // style={{
                //     backgroundImage: `url("https://via.placeholder.com/500")`,
                //     height: "100vh",
                // }}
            ></div>
            <div className="container bg-text">
                <div className="pt-3 pt-lg-5 pb-4 text-center hero-heading">
                    <h1 className="">Sabbir Mohammad Sami</h1>
                    <h1>Junior Full Stack Web Developer</h1>
                    <a
                        rel="noreferrer"
                        href="https://drive.google.com/file/d/1au2UuM0kgZb5py4HmvhYI673dy0i7siQ/view?usp=sharing"
                        target="_blank"
                        // download
                        className="fs-2 nav-link pt-0"
                    >
                        Download Resume
                    </a>
                </div>
                <div className="row">
                    <div className="col-lg-3 order-lg-1 order-3">
                        <div className="py-lg-5">
                            <div className="py-lg-4 py-2">
                                <p className="pb-lg-4 text-muted">
                                    <small>BIOGRAPHY</small>
                                </p>
                                <p className="p-0 m-0">
                                    Work for money and design for love!
                                </p>
                                <p>I'am Sami, an Web Developer</p>
                            </div>
                            <div className="py-lg-4">
                                <p className="pb-lg-4 text-muted">
                                    <small>CONTACT</small>
                                </p>
                                <p className="p-0 m-0">Dhaka, Bangladesh</p>
                                <p className="p-0 m-0">
                                    sabbir.mohammad.sami@gmail.com
                                </p>
                                <p>+880 19 7070 6676</p>
                            </div>
                            <div className="py-lg-4 py-2">
                                <p className="pb-lg-4 text-muted">
                                    <small>SERVICES</small>
                                </p>
                                <p className="p-0 m-0">
                                    Web Development, UI/UX
                                </p>
                                <p>Web Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mx-auto order-lg-2 order-1">
                        <div className="image-section">
                            <img className="w-100" src={profile} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 order-lg-3 order-2">
                        <div className="text-lg-end text-start">
                            <div className="py-lg-5">
                                <div className="py-lg-4 py-2">
                                    <p className="pb-lg-4 text-muted">
                                        <small>Expertise</small>
                                    </p>
                                    <p className="p-0 m-0">
                                        HTML, CSS, ReactJS, JavaScript - ES6,
                                    </p>
                                    <p>
                                        Bootstrap 5, Tailwind CSS, Swiper JS,
                                        Daisy UI.
                                    </p>
                                </div>
                                <div className="py-lg-4">
                                    <p className="pb-lg-4 text-muted">
                                        <small>Comfortable</small>
                                    </p>
                                    <p className="p-0 m-0">
                                        React hooq form, React Toastify,
                                    </p>
                                    <p className="p-0 m-0">
                                        React Router, Firebase Authentication,
                                        React Firebase Hooks,
                                    </p>
                                </div>
                                <div className="py-lg-4 py-2 ">
                                    <p className="pb-lg-4 text-muted">
                                        <small>Familiar</small>
                                    </p>
                                    <p className="p-0 m-0">
                                        NodeJS, ExpressJS, MongoDB, CRUD
                                        Operation, React Hook Form, JWT,
                                    </p>
                                    <p>
                                        Stripe, Axios, React Query, Rechart,
                                        etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
