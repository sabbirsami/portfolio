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
                                <span class="badge  me-2 mt-2 text-dark ">
                                    Technologies Used:
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
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    Stripe
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    React Query
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    React Hot Tost
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    React Hook Form
                                </span>
                                <span class="badge border border-1 me-2 mt-2 text-dark ">
                                    ImgBB
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="py-3 px-2">
                                <h5 className="fw-bold">Sami Industry</h5>
                                <p>
                                    This is tools manufacturer website. Where
                                    user can order tools. In this website users
                                    also able to pay for their ordered tools
                                    using Credit/Divide card
                                </p>
                                <p>
                                    <h6>Overview:</h6>
                                    <ul>
                                        <li className="pb-2">
                                            Implemented Email and Google login
                                            system via Google Firebase.
                                        </li>
                                        <li className="pb-2">
                                            On this website users can order
                                            products and pay for this product
                                            Users can also be able to give
                                            review.
                                        </li>
                                        <li className="pb-2">
                                            Different dashboards for users and
                                            admin. Admin can make other admin or
                                            add and remove product and reviews
                                        </li>
                                        <li className="pb-2">
                                            Implemented JWT token for security
                                            purpose.
                                        </li>
                                        <li className="pb-2">
                                            Admin can upload tools image
                                            directly from their local file and
                                            it will automatically upload to
                                            ibb.co website and set this link in
                                            the database.
                                        </li>
                                    </ul>
                                </p>
                                <button className="btn btn-white ">
                                    <a
                                        className="text-success text-decoration-none"
                                        href="https://sami-industry.web.app/"
                                        target="_blank"
                                        rel=""
                                    >
                                        Live Site
                                    </a>
                                </button>
                                |
                                <button className="btn btn-white text-success">
                                    <a
                                        className="text-success text-decoration-none"
                                        href="https://github.com/sabbirsami/sami-industry"
                                        target="_blank"
                                        rel=""
                                    >
                                        Client Site
                                    </a>
                                </button>
                                |
                                <button className="btn btn-white text-success">
                                    <a
                                        className="text-success text-decoration-none"
                                        href="https://github.com/sabbirsami/sami-industry-server"
                                        target="_blank"
                                        rel=""
                                    >
                                        Server Site
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SamiIndustry;
