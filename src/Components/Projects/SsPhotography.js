import React from "react";
import HeaderNav from "../Shared/HeaderNav";
import project6 from "../img/project6.jpg";

const SsPhotography = () => {
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
                                    src={project6}
                                    alt=""
                                />
                            </div>
                            <div>
                                <span class="badge  me-2 mt-2">
                                    Technologies Used:
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    React JS
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    Javascript
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    React Bootstrap
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    Firebase
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    React hook form
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    ImgBB
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="py-3 px-2">
                                <h5 className="fw-bold">SS Photography</h5>
                                <p>This is photography website.</p>
                                <p>
                                    <h6>Overview:</h6>
                                    <ul>
                                        <li className="pb-2">
                                            Implemented Email and Google login
                                            system via Google Firebase.
                                        </li>
                                        <li className="pb-2">
                                            On this website users can add
                                            product in add product route.
                                        </li>
                                        <li className="pb-2">
                                            Users can also delete product.
                                        </li>
                                        <li className="pb-2">
                                            User can update stock
                                        </li>
                                        <li className="pb-2">
                                            Users can upload inventory image
                                            directly from their local file and
                                            it will automatically upload to
                                            ibb.co website and set this link in
                                            the database.
                                        </li>
                                    </ul>
                                </p>
                                <button className="btn btn-white ">
                                    <a
                                        rel="noreferrer"
                                        className="text-success text-decoration-none"
                                        href="https://ss-photography-2022.web.app/"
                                        target="_blank"
                                    >
                                        Live Site
                                    </a>
                                </button>
                                |
                                <button className="btn btn-white text-success">
                                    <a
                                        className="text-success text-decoration-none"
                                        href="https://github.com/sabbirsami/ss-photography"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Client Site
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

export default SsPhotography;
