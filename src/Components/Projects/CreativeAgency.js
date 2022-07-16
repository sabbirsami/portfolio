import React from "react";
import project8 from "../img/project8.jpg";
import HeaderNav from "../Shared/HeaderNav";

const CreativeAgency = () => {
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
                                    src={project8}
                                    alt=""
                                />
                            </div>
                            <div>
                                <span class="badge me-2 mt-2 ">
                                    Technologies Used:
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    React JS
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    Javascript
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    React Bootstrap
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    NodeJS
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    ExpressJS
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    Firebase
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    JWT
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    MongoDB
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    Heroku
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    Stripe
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    React Query
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    React Hot Tost
                                </span>
                                <span class="badge border border-1 me-2 mt-2 ">
                                    React Hook Form
                                </span>
                                {/* <span class="badge border border-1 me-2 mt-2 ">
                                    ImgBB
                                </span> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="py-3 px-2">
                                <h5 className="fw-bold">Creative Agency</h5>
                                {/* <p>
                                    <i>
                                        <small className="text-danger">
                                            * Still working on this project
                                        </small>
                                    </i>
                                </p> */}
                                <p>
                                    This website is all about service provider.
                                    Where we have 3 type of service and user can
                                    order service. In this website users also
                                    able to pay for their ordered service using
                                    Credit/Divide card.
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
                                            service and pay for this service
                                            Users can also be able to give
                                            review.
                                        </li>
                                        <li className="pb-2">
                                            Different dashboards for users and
                                            admin. Admin can make other admin or
                                            add and remove product and reviews
                                        </li>
                                        <li className="pb-2">
                                            Admin can manage all order also
                                            manage user and so many.
                                        </li>
                                        {/* <li className="pb-2">
                                            Implemented JWT token for security
                                            purpose.
                                        </li> */}
                                        {/* <li className="pb-2">
                                            Admin can upload tools image
                                            directly from their local file and
                                            it will automatically upload to
                                            ibb.co website and set this link in
                                            the database.
                                        </li> */}
                                    </ul>
                                </p>
                                <button className="btn btn-white ">
                                    <a
                                        className="text-success text-decoration-none"
                                        href="https://creative-agency-2022.web.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Site
                                    </a>
                                </button>
                                |
                                <button className="btn btn-white text-success">
                                    <a
                                        className="text-success text-decoration-none"
                                        href="https://github.com/sabbirsami/creative-agency"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Client Site
                                    </a>
                                </button>
                                |
                                <button className="btn btn-white text-success">
                                    <a
                                        className="text-success text-decoration-none"
                                        href="https://github.com/sabbirsami/creative-agency-server"
                                        target="_blank"
                                        rel="noreferrer"
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

export default CreativeAgency;
