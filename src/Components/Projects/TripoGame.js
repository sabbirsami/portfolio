import React from "react";
import HeaderNav from "../Shared/HeaderNav";
import project5 from "../img/project5.jpg";

const TripoGame = () => {
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
                                    src={project5}
                                    alt=""
                                />
                            </div>
                            <div>
                                <span class="badge  me-2 mt-2">
                                    Technologies Used:
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    HTML5
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    CSS3
                                </span>
                                <span class="badge border border-1 me-2 mt-2">
                                    Bootstrap
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="py-3 px-2">
                                <h5 className="fw-bold">Tripo Game Website</h5>
                                <p>This is Gamming website.</p>
                                {/* <h6>Overview:</h6>
                                <p>
                                    <ul>
                                        <li className="pb-2">
                                            Implemented Email and Google login
                                            system via Google Firebase.
                                        </li>
                                        <li className="pb-2">
                                            On this website, if users wanted to
                                            save their notes they can easily log
                                            in using email or google. If any
                                            user note login notes will save
                                            temporary
                                        </li>
                                        <li className="pb-2">
                                            Users can also delete their note if
                                            user want.
                                        </li>
                                    </ul>
                                </p> */}
                                <button className="btn btn-white ">
                                    <a
                                        className="text-success text-decoration-none"
                                        href="https://tripo-game.web.app/"
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
                                        href="https://github.com/sabbirsami/tripo-game-site"
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

export default TripoGame;
