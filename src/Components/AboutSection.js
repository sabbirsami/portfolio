import React from "react";
import HeaderNav from "./HeaderNav";

const AboutSection = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="container">
                <div className="py-lg-5 p-0">
                    {/* <h1 className="text-center">About Me</h1> */}
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="py-lg-5 p-lg-0 p-2">
                                <div className="mb-3">
                                    <h5 className="fw-light text-muted">
                                        ABOUT ME
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
                        <div className="col-lg-4">
                            <div className="py-lg-5 px-lg-4 p-lg-0 p-2">
                                <div className="mb-3">
                                    <h5 className="fw-light text-muted">
                                        SKILLS
                                    </h5>
                                </div>
                                <p>
                                    <b>Expertise:</b> HTML, CSS, ReactJS,
                                    JavaScript - ES6, Bootstrap 5, Tailwind CSS,
                                    Swiper JS, Daisy UI
                                </p>
                                <p>
                                    <b>Comfortable:</b> React hooq form, React
                                    Toastify, React Router, Firebase
                                    Authentication, React Firebase Hooks.
                                </p>
                                <p>
                                    <b>Familiar:</b> NodeJS, ExpressJS, MongoDB,
                                    CRUD Operation, React Hook Form, JWT,
                                    Stripe, Axios, React Query, Rechart, etc.
                                </p>
                                <p>
                                    <b>Tools:</b> VS Code, Github Chrome Dev
                                    Tool, Figma, Photoshop CC, Firebase, Heroku,
                                    Netlify, ImgBB, etc.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pt-lg-5 p-lg-0 p-2">
                                <div className="mb-3">
                                    <h5 className="fw-light text-muted">
                                        EDUCATION
                                    </h5>
                                </div>
                                <h5 className="fw-bold">
                                    Kabi Nazrul Govt. College
                                </h5>
                                <p>Sep 2020 - Aug 2022</p>
                            </div>
                            <div className="px-lg-0 p-2">
                                <h5 className="fw-bold">
                                    Bangladesh National Cadet Corps
                                </h5>
                                <p>Sep 2020 - Aug 2022</p>
                            </div>
                            <div className="py-lg-4 px-lg-0 p-2">
                                <div className="mb-3">
                                    <h5 className="fw-light text-muted">
                                        LANGUAGES
                                    </h5>
                                </div>
                                <div>
                                    <p className="mb-0">Bangla - (Native),</p>
                                    <p className="mb-0">
                                        English - (Comfortable),
                                    </p>
                                    <p className="mb-0">Hindi - (Fluent)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
