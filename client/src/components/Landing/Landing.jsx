import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Landing/Landing.css";
import imagen from "../../Imagenes/22.jpg";
import flecha from "../../Imagenes/flecha.png";
import Loading from "../Loading/Loading.jsx";

export default function Landing() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    if (loading) return <Loading />;
    return (
        <div className="coco">
            <img className="img-1" src={imagen} alt="ss" />
            <div className="text-landing">
                <h5>EXPLORING</h5>
                <h1> THE WORLD</h1>
                {/* <h1> WORLD </h1> */}
            </div>
            <h6 className="description">
                The world is a big place, conformed by countries with such
                incredible cultures and full of activities that make them unique
                in every way. Let's get together and see what it's got to show
                us.
            </h6>
            <img className="flecha" src={flecha} alt="aaas" />
            <Link to="/Home">
                <button className="boton-landing"> EXPLORE DESTINATION</button>
            </Link>
        </div>
    );
}
