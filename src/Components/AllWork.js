import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import { CgArrowLongRight } from "react-icons/cg";
import project1 from "./img/project1.jpg";
import project2 from "./img/project2.jpg";
import project3 from "./img/project3.jpg";
const AllWork = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="container py-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-7 pb-4">
                        <h1>My Latest Works</h1>
                        <p>
                            To see project details click on the{" "}
                            <span className="text-success">Details</span> button
                        </p>
                    </div>
                </div>
                <div className="row">
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
                    <div className="col-lg-4">
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

export default AllWork;
