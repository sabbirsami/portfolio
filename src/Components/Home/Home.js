import React from "react";
import About from "./About";
import FontContact from "./FontContact";
import FontContact2 from "./FontContact2";
import Footer from "../Shared/Footer";
import HeaderNav from "../Shared/HeaderNav";
import Hero from "./Hero";
import NewWorksSection from "./NewWorksSection";
import Skill from "../Skill";
import WorkPage2 from "./WorkPage2";
import Works from "./Works";

const Home = () => {
    return (
        <div>
            <HeaderNav />
            <Hero />
            {/* <Works /> */}
            <WorkPage2 />
            {/* <NewWorksSection /> */}
            {/* <Skill /> */}
            <About />
            {/* <FontContact /> */}
            <FontContact2 />
            <Footer />
        </div>
    );
};

export default Home;
