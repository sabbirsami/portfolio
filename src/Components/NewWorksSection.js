import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import project1 from "./img/homeProject1.jpg";
import project2 from "./img/homeProject2.jpg";
import project3 from "./img/homeProject3.jpg";
import project4 from "./img/homeProject4.jpg";

const NewWorksSection = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row pb-3">
                    <div className="col-lg-8 pt-3">
                        <div className="p-2 ">
                            <div className="">
                                <h1>
                                    <span className="display-8 hero-heading ">
                                        Projects
                                    </span>
                                </h1>
                                <p className="fs-5 text-muted">
                                    This page is set with "Filter in Grid"
                                    option, columns 3 desktop, columns 2 on
                                    mobile layout.
                                </p>
                            </div>
                            <p>
                                <Link to="/works" className="text-danger">
                                    Explore More Works
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 pt-3">
                        <div className="p-2 ">
                            <div className="">
                                <img className="w-100 " src={project1} alt="" />
                            </div>
                            {/* <p className="pt-2 m-1">
                                <Link
                                    to="/works/sami-industry"
                                    className="text-success p-0 nav-link"
                                >
                                    Details <TiArrowRight></TiArrowRight>
                                </Link>
                            </p> */}
                        </div>
                    </div>

                    <div className="col-lg-4 pt-3">
                        <div className="p-2 ">
                            <div className="">
                                <img className="w-100" src={project3} alt="" />
                            </div>
                            {/* <p className="pt-2 m-1">
                                <Link
                                    to="/works/teeth-health"
                                    className="text-success p-0 nav-link"
                                >
                                    Details <TiArrowRight></TiArrowRight>
                                </Link>
                            </p> */}
                        </div>
                    </div>
                    <div className="col-lg-4 pt-3 ">
                        <div className="p-2 ">
                            <div className="">
                                <img className="w-100" src={project4} alt="" />
                            </div>

                            {/* <p className="pt-2 m-1">
                                <Link
                                    to="/works/creative-agency"
                                    className="text-success p-0 nav-link"
                                >
                                    Details <TiArrowRight></TiArrowRight>
                                </Link>
                            </p> */}
                        </div>
                    </div>
                    <div className="col-lg-4 pt-3 ">
                        <div className="p-2 ">
                            <div className="">
                                <img className="w-100" src={project2} alt="" />
                            </div>
                            {/* <p className="pt-2 m-1">
                                <Link
                                    to="/works/farmi-organic"
                                    className="text-success p-0 nav-link"
                                >
                                    Details <TiArrowRight></TiArrowRight>
                                </Link>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewWorksSection;
