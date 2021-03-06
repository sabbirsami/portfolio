import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLine } from "react-icons/ai";
import { CgArrowLongRight } from "react-icons/cg";
import project1 from "./img/project1.jpg";
import project2 from "./img/project2.jpg";
import project3 from "./img/project3.jpg";
import project4 from "./img/project4.jpg";
import project5 from "./img/project5.jpg";
import project6 from "./img/project6.jpg";
import project7 from "./img/project7.jpg";
import project8 from "./img/project8.jpg";
import coming from "./img/coming.jpg";
import HeaderNav from "./Shared/HeaderNav";
const AllWork = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="container py-5">
                {/* <div className="row justify-content-between align-items-center">
                    <div className="col-lg-7 pb-4">
                        <h1>All Project</h1>
                        <p className="pb-4 pt-1">
                            To see project details click on the{" "}
                            <span className="text-warning">Details</span> button
                        </p>
                        <div className="divider mb-4"></div>
                    </div>
                </div> */}
                <div className="row">
                    <h3 className="pb-2">
                        JavaScript <AiOutlineLine />{" "}
                        <span className="fw-light">full stack</span>
                    </h3>
                    <div className="col-lg-3 col-sm-6">
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
                                className="text-warning p-0 nav-link"
                            >
                                Details <CgArrowLongRight></CgArrowLongRight>
                            </Link>
                        </p>
                    </div>
                    <div className="col-lg-3 col-sm-6">
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
                                className="text-warning p-0 nav-link"
                            >
                                Details <CgArrowLongRight></CgArrowLongRight>
                            </Link>
                        </p>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="py-3">
                            <img
                                className="w-100 rounded-3"
                                src={project8}
                                alt=""
                            />
                        </div>
                        <p>
                            <Link
                                to="/works/creative-agency"
                                className="text-warning p-0 nav-link"
                            >
                                Details <CgArrowLongRight></CgArrowLongRight>
                            </Link>
                        </p>
                    </div>
                    <div className="col-lg-3 col-sm-6">
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
                                className="text-warning p-0 nav-link"
                            >
                                Details <CgArrowLongRight></CgArrowLongRight>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <h3 className="py-2">
                        TypeScript <AiOutlineLine />{" "}
                        <span className="fw-light">full stack</span>
                    </h3>
                    <div className="col-lg-3 col-sm-6">
                        <div className="py-3">
                            <img
                                className="w-100 rounded-3"
                                src={coming}
                                alt=""
                            />
                        </div>
                        <p>
                            <Link
                                to="/works/"
                                className="text-warning p-0 nav-link"
                            >
                                Details <CgArrowLongRight></CgArrowLongRight>
                            </Link>
                        </p>
                    </div>

                    <div className="row">
                        <h3 className="py-2">
                            React Bootstrap <AiOutlineLine />{" "}
                            <span className="fw-light">Frontend</span>
                        </h3>
                        <div className="col-lg-3 col-sm-6">
                            <div className="py-3">
                                <img
                                    className="w-100 rounded-3"
                                    src={project6}
                                    alt=""
                                />
                            </div>
                            <p>
                                <Link
                                    to="/works/ss-photography"
                                    className="text-warning p-0 nav-link"
                                >
                                    Details{" "}
                                    <CgArrowLongRight></CgArrowLongRight>
                                </Link>
                            </p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="py-3">
                                <img
                                    className="w-100 rounded-3"
                                    src={project3}
                                    alt=""
                                />
                            </div>
                            <p>
                                <Link
                                    to="/works/to-do-notes"
                                    className="text-warning p-0 nav-link"
                                >
                                    Details{" "}
                                    <CgArrowLongRight></CgArrowLongRight>
                                </Link>
                            </p>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="py-3">
                                <img
                                    className="w-100 rounded-3"
                                    src={project5}
                                    alt=""
                                />
                            </div>
                            <p>
                                <Link
                                    to="/works/influencer-products"
                                    className="text-warning p-0 nav-link"
                                >
                                    Details{" "}
                                    <CgArrowLongRight></CgArrowLongRight>
                                </Link>
                            </p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="py-3">
                                <img
                                    className="w-100 rounded-3"
                                    src={project4}
                                    alt=""
                                />
                            </div>
                            <p>
                                <Link
                                    to="/works/golden-convention-center
                                "
                                    className="text-warning p-0 nav-link"
                                >
                                    Details{" "}
                                    <CgArrowLongRight></CgArrowLongRight>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllWork;
