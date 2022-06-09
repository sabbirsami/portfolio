import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
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
                        <p>To see project details click on the image</p>
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
                    </div>
                    <div className="col-lg-4">
                        <div className="py-3">
                            <img
                                className="w-100 rounded-3"
                                src={project2}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="py-3">
                            <img
                                className="w-100 rounded-3"
                                src={project3}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllWork;
