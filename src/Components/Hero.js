import React from "react";
import { Link } from "react-router-dom";
import profile from "./IMG-2413.png";

const Hero = () => {
    return (
        <div>
            <div className="container">
                <div className="py-5 text-center">
                    <h1 className="">Sabbir Mohammad Sami</h1>
                    <h1>Junior Full Stack Web Developer</h1>
                    <Link to="/" className="fs-2 nav-link pt-0">
                        Download Resume
                    </Link>
                </div>
                <div className="row">
                    <div className="col-lg-3">
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
                                    <small>BIOGRAPHY</small>
                                </p>
                                <p className="p-0 m-0">
                                    Work for money and design for love!
                                </p>
                                <p>I'am Sami, an Web Developer</p>
                            </div>
                            <div className="py-lg-4 py-2">
                                <p className="pb-lg-4 text-muted">
                                    <small>BIOGRAPHY</small>
                                </p>
                                <p className="p-0 m-0">
                                    Work for money and design for love!
                                </p>
                                <p>I'am Sami, an Web Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mx-auto">
                        <div className="image-section">
                            <img className="w-100" src={profile} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
