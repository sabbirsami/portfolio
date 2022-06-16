import React from "react";

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="pb-lg-5 pb-3 pt-lg-3 p-0">
                    {/* <h1 className="text-center">About Me</h1> */}
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="py-lg-5 p-lg-0 p-2">
                                <div className="mb-3">
                                    <h5 className="fw-light text-muted">
                                        <span className="highlight-green">
                                            ABOUT ME
                                        </span>
                                    </h5>
                                </div>
                                <p>
                                    Hi! My name is Sabbir Mohammad Sami, I'm a
                                    Junior web developer.{" "}
                                </p>
                                <p>
                                    I am a hardworking, confident, enthusiastic
                                    learner and I am always looking for
                                    opportunities to learn new technologies. I
                                    want to utilize my knowledge and personal
                                    skills in Web Development. I love to use my
                                    creativity and make something new. That's
                                    why I love to work with React.js. I am also
                                    down-to-earth honest, confident, fun-loving,
                                    and caring as well.
                                </p>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 my-auto">
                            <h5 className="fw-bold text-center rotate">
                                - About & Education -
                            </h5>
                        </div> */}
                        <div className="col-lg-4 text-lg-end">
                            <div className="py-lg-5 p-lg-0 p-2">
                                <div className="mb-3">
                                    <h5 className="fw-light text-muted">
                                        <span className="highlight-yellow">
                                            EDUCATION
                                        </span>
                                    </h5>
                                </div>
                                <h5 className="fw-bold">
                                    Kabi Nazrul Govt. College
                                </h5>
                                <p>Sep 2020 - Aug 2022</p>
                            </div>
                            <div className="py-lg-4 px-lg-0 p-2">
                                <h5 className="fw-bold">
                                    Bangladesh National Cadet Corps
                                </h5>
                                <p>Sep 2020 - Aug 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
