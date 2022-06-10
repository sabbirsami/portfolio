import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import HeaderNav from "../HeaderNav";
import project1 from "../img/project1.jpg";

const SamiIndustry = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="container">
                <div className="py-5">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="py-3">
                                <img
                                    className="w-100 rounded-3"
                                    src={project1}
                                    alt=""
                                />
                            </div>
                            <div>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    React JS
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    React JS
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    Javascript
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    React Bootstrap
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    NodeJS
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    ExpressJS
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    Firebase
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    JWT
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    MongoDB
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    Heroku
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SamiIndustry;
