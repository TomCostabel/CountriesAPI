import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import Countries from "./components/Countries/Countries.jsx";
import CountrieDetail from "./components/CountrieDetail/CountrieDetail";
import CreateActivity from "./components/CreateActivity/CreateActivity.jsx";
import axios from "axios";
axios.defaults.baseURL = "https://countriesapi-production-9e3d.up.railway.app/";
// axios.defaults.baseURL = "https://localhost:3001/";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/Home" element={<Countries />} />
            <Route
                path="/Home/CountrieDetail/:id"
                element={<CountrieDetail />}
            />
            <Route path="Home/CreateActivity" element={<CreateActivity />} />
        </Routes>
    );
}

export default App;
