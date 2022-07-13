import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import project1 from "../img/projectDesign1.jpg";
import project2 from "../img/projectDesign2.jpg";
import project3 from "../img/projectDesign3.jpg";
import project8 from "../img/projectDesign1.jpg";

const WorkPage2 = () => {
    return (
        <div className="pt-lg-4">
            <div className="container py-5">
                <div className="row align-self-start">
                    <div className="col-lg-6 d-inline">
                        <div className="">
                            <div>
                                <p>Projects</p>
                                <h1 className="">
                                    <span>
                                        All Creative Works, <br />
                                        Selected projects.
                                    </span>
                                </h1>
                                <p className=" col-lg-8 pt-4">
                                    To see project details click on the project
                                    images that project you want to see details.
                                </p>
                            </div>
                            <div className="col-lg-5 text-lg-start ps-0 me-auto">
                                <p className="py-lg-5">
                                    <Link
                                        to="/works"
                                        className="text-danger ps-0 nav-link"
                                    >
                                        Explore More Works
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="py-lg-4">
                            <Link
                                to="/works/sami-industry"
                                className="text-decoration-none position-relative"
                            >
                                <div className="col-lg-12 me-auto">
                                    <div className="p-2 shadow-sm border border-1 rounded-3">
                                        <div className="">
                                            <img
                                                className="w-100 rounded-3"
                                                src={project1}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="position-absolute top-0 end-0 p-5">
                                        <h1 className="display-1 stock fw-bold ">
                                            <span className=""> 01</span>
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-3">
                        <div className=" mb-3">
                            <Link
                                to="/works/teeth-health"
                                className="text-decoration-none position-relative"
                            >
                                <div className="col-lg-10 ms-auto">
                                    <div className="p-2 shadow-sm border border-1 rounded-3">
                                        <div className="">
                                            <img
                                                className="w-100 rounded-3"
                                                src={project2}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute top-0 end-0 p-5">
                                    <h1 className="display-1 stock fw-bold ">
                                        <span className=""> 02</span>
                                    </h1>
                                </div>
                            </Link>
                        </div>
                        <div className="py-lg-5">
                            <div className="mt-lg-5">
                                <Link
                                    to="/works/creative-agency"
                                    className="text-decoration-none position-relative"
                                >
                                    <div className="col-lg-10 ms-auto">
                                        <div className="p-2 shadow-sm border border-1 rounded-3">
                                            <div className="">
                                                <img
                                                    className="w-100 rounded-3"
                                                    src={project3}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="position-absolute top-0 end-0 p-5">
                                        <h1 className="display-1 stock fw-bold ">
                                            <span className=""> 03</span>
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkPage2;
