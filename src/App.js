import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Contact from "./Components/Contact";
import HeaderNav from "./Components/HeaderNav";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/work" element={<Home></Home>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </div>
    );
}

export default App;
