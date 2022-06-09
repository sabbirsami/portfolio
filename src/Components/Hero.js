import React from "react";
import { Link } from "react-router-dom";

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
            </div>
        </div>
    );
};

export default Hero;
