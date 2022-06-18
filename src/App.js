import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import AllWork from "./Components/AllWork";
import SamiIndustry from "./Components/Projects/SamiIndustry";
import FarmiOrganic from "./Components/Projects/FarmiOrganic";
import ToDoNotes from "./Components/Projects/ToDoNotes";
import GoldenConventionCenter from "./Components/Projects/GoldenConventionCenter";
import TripoGame from "./Components/Projects/TripoGame";
import SsPhotography from "./Components/Projects/SsPhotography";
import AboutSection from "./Components/AboutSection";
import Blogs from "./Components/Blogs";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/works" element={<AllWork></AllWork>}></Route>
                <Route
                    path="/about"
                    element={<AboutSection></AboutSection>}
                ></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route
                    path="/works/sami-industry"
                    element={<SamiIndustry></SamiIndustry>}
                ></Route>
                <Route
                    path="/works/farmi-organic"
                    element={<FarmiOrganic></FarmiOrganic>}
                ></Route>
                <Route
                    path="/works/to-do-notes"
                    element={<ToDoNotes></ToDoNotes>}
                ></Route>
                <Route
                    path="/works/golden-convention-center"
                    element={<GoldenConventionCenter></GoldenConventionCenter>}
                ></Route>
                <Route
                    path="/works/influencer-products"
                    element={<TripoGame></TripoGame>}
                ></Route>
                <Route
                    path="/works/ss-photography"
                    element={<SsPhotography></SsPhotography>}
                ></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </div>
    );
}

export default App;
