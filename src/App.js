import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Contact from "./Components/Contact";
import HeaderNav from "./Components/HeaderNav";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import AllWork from "./Components/AllWork";
import SamiIndustry from "./Components/Projects/SamiIndustry";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/works" element={<AllWork></AllWork>}></Route>
                <Route
                    path="/works/sami-industry"
                    element={<SamiIndustry></SamiIndustry>}
                ></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </div>
    );
}

export default App;
