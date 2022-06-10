import React from "react";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import Hero from "./Hero";
import Works from "./Works";

const Home = () => {
    return (
        <div>
            <HeaderNav />
            <Hero />
            <Works />
            <Footer></Footer>
        </div>
    );
};

export default Home;
