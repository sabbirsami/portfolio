import React from "react";
import react from "./icons/react.png";
import javaScript from "./icons/javascript.png";
import node from "./icons/nodejs.png";
import express from "./icons/express.png";
import bootstrap from "./icons/bootstrap.png";
import tailwind from "./icons/Tailwind_CSS_Logo.svg.png";
import mongodb from "./icons/mongodb.png";

const Skill = () => {
    return (
        <div style={{ backgroundColor: "#F8F7F1" }}>
            <div className="container py-5">
                {/* <h1>Skill</h1> */}
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row align-items-center">
                            <div
                                className="skill-img m-3"
                                style={{ width: "90px" }}
                            >
                                <img className="img-fluid" src={react} alt="" />
                            </div>
                            <div
                                className="skill-img m-3"
                                style={{ width: "90px" }}
                            >
                                <img
                                    className="img-fluid"
                                    src={express}
                                    alt=""
                                />
                            </div>
                            <div
                                className="skill-img m-3"
                                style={{ width: "90px" }}
                            >
                                <img
                                    className="img-fluid"
                                    src={mongodb}
                                    alt=""
                                />
                            </div>
                            <div
                                className="skill-img m-3"
                                style={{ width: "90px" }}
                            >
                                <img
                                    className="img-fluid"
                                    src={bootstrap}
                                    alt=""
                                />
                            </div>
                            <div className="row align-items-center">
                                <div
                                    className="skill-img m-3"
                                    style={{ width: "90px" }}
                                >
                                    <img
                                        className="img-fluid"
                                        src={node}
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="skill-img m-3"
                                    style={{ width: "90px" }}
                                >
                                    <img
                                        className="img-fluid"
                                        src={tailwind}
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="skill-img m-3"
                                    style={{ width: "90px" }}
                                >
                                    <img
                                        className="img-fluid"
                                        src={javaScript}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
