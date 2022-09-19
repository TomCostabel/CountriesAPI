import React from "react";
import { Link } from "react-router-dom";
import "../Landing/Landing.css";
import imagen from "../../Imagenes/22.jpg";

export default function Landing() {
    return (
        <div className="coco">
            <img className="img-1" src={imagen} alt="ss" />
            <div className="text-landing">
                <h3>MEMORIES</h3>
                <h1> OF THE WORLD</h1>
                {/* <h1> WORLD </h1> */}
            </div>
            <Link to="/Home">
                <button className="boton-landing"> EXPLORE DESTINATION</button>
            </Link>
        </div>
    );
}
