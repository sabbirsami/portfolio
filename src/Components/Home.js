import React from "react";
import About from "./About";
import FontContact from "./FontContact";
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
            <About />
            <FontContact></FontContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
