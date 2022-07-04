import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import project1 from "./img/project1.jpg";
import project2 from "./img/project2.jpg";
import project7 from "./img/project7.jpg";
import project8 from "./img/project8.jpg";

const Works = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-7">
                        <h1>
                            <span>My Latest Works</span>
                        </h1>
                        <span className="highlight-green"></span>
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
                    <div className="col-lg-3 pt-3">
                        <div className="p-2 shadow-sm border border-1 rounded-3">
                            <div className="">
                                <img
                                    className="w-100 rounded-3"
                                    src={project1}
                                    alt=""
                                />
                            </div>
                            <p className="pt-2 m-1">
                                <Link
                                    to="/works/sami-industry"
                                    className="text-success p-0 nav-link"
                                >
                                    Details <TiArrowRight></TiArrowRight>
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 pt-3">
                        <div className="p-2 shadow-sm border border-1 rounded-3">
                            <div className="">
                                <img
                                    className="w-100 rounded-3"
                                    src={project7}
                                    alt=""
                                />
                            </div>
                            <p className="pt-2 m-1">
                                <Link
                                    to="/works/teeth-health"
                                    className="text-success p-0 nav-link"
                                >
                                    Details <TiArrowRight></TiArrowRight>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 pt-3 ">
                        <div className="p-2 border border-1 shadow-sm rounded-3">
                            <div className="">
                                <img
                                    className="w-100 rounded-3"
                                    src={project8}
                                    alt=""
                                />
                            </div>

                            <p className="pt-2 m-1">
                                <Link
                                    to="/works/creative-agency"
                                    className="text-success p-0 nav-link"
                                >
                                    Details <TiArrowRight></TiArrowRight>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 pt-3 ">
                        <div className="p-2 shadow-sm border border-1 rounded-3">
                            <div className="">
                                <img
                                    className="w-100 rounded-3"
                                    src={project2}
                                    alt=""
                                />
                            </div>
                            <p className="pt-2 m-1">
                                <Link
                                    to="/works/farmi-organic"
                                    className="text-success p-0 nav-link"
                                >
                                    Details <TiArrowRight></TiArrowRight>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
