import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import project1 from "./img/project1.jpg";
import project2 from "./img/project2.jpg";
import project7 from "../img/project7.jpg";

const Works = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-7">
                        <h1>
                            <span className="highlight-green">
                                My Latest Works
                            </span>
                        </h1>
                        <p>
                            To see project details click on the details button
                        </p>
                    </div>
                    <div className="col-lg-5 text-lg-end me-auto">
                        <p>
                            <Link to="/works" className="text-danger nav-link">
                                Explore More Works
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-lg-4">
                        <div className="py-3">
                            <img
                                className="w-100 rounded-3"
                                src={project1}
                                alt=""
                            />
                        </div>
                        <p>
                            <Link
                                to="/works/sami-industry"
                                className="text-success p-0 nav-link"
                            >
                                Details <CgArrowLongRight></CgArrowLongRight>
                            </Link>
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <div className="py-3">
                            <img
                                className="w-100 rounded-3"
                                src={project7}
                                alt=""
                            />
                        </div>
                        <p>
                            <Link
                                to="/works/teeth-health"
                                className="text-success p-0 nav-link"
                            >
                                Details <CgArrowLongRight></CgArrowLongRight>
                            </Link>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <div className="py-3">
                            <img
                                className="w-100 rounded-3"
                                src={project2}
                                alt=""
                            />
                        </div>
                        <p>
                            <Link
                                to="/works/farmi-organic"
                                className="text-success p-0 nav-link"
                            >
                                Details <CgArrowLongRight></CgArrowLongRight>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
