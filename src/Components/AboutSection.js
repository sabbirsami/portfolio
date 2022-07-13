import React from "react";

import myImage from "./File_0002.jpeg";
import HeaderNav from "./Shared/HeaderNav";

const AboutSection = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="container">
                <div className="px-lg-0 px-2">
                    <div className="row">
                        <div className="col-lg-6 mx-auto ">
                            <div className="ps-lg-5 mx-auto ">
                                <div className="ps-lg-5">
                                    <div className="p-lg-5">
                                        <img
                                            className="w-100"
                                            src={myImage}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-end hero-heading pb-5 px-lg-5">
                                <h1>hello, I'm</h1>
                                <h1 className="display-5">
                                    Sabbir Mohammad Sami
                                </h1>
                            </div>
                            <div className="about-me">
                                <p>
                                    Hi, my name is Sami! I'm a Junior Full Stack
                                    Web developer who's really into unique
                                    designs, CSS, animations, user experience,
                                    and writing clean code.
                                </p>
                                <p>
                                    I grew up in Dhaka, studied arts &
                                    humanities at Kabi Nazrul Government
                                    College, and besides my studies, I joined a
                                    web development course named{" "}
                                    <span className="">
                                        'Complete Web Development Course With
                                        Jhankar Mahbub'
                                    </span>
                                    . where my main growth started as a
                                    full-stack web developer. Surprise!
                                </p>
                                <p>
                                    I like to work heard and want to utilize my
                                    knowledge and personal skills in Web
                                    Development. I am also down-to-earth honest,
                                    confident, fun-loving, and caring as well.
                                </p>
                                <p>
                                    <span className="text-danger">
                                        My first website, tourism, was built
                                        when
                                    </span>{" "}
                                    I was reading in class 10 and it was all
                                    about my favorite place where I want go. Now
                                    My ultimate goal is to become an awesome
                                    full-stack web developer who can make
                                    beautiful UIs and also can handle the
                                    back-end smoothly.
                                </p>
                                <p>
                                    I'm currently looking for full-time
                                    opportunities, my inbox is always open.
                                    Whether for a potential project or just to
                                    say hi, I'll try my best to answer your
                                    email!
                                </p>
                                <p className="pb-5 text-muted display-5 stock fw-bold">
                                    Happy coding!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
