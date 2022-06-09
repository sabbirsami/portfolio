import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
}

export default App;
