import React from "react";
import { Link } from "react-router-dom";
import "../Landing/Landing.css";

export default function Landing() {
    return (
        <div className="coco">
            <div className="text-landing">
                <h1>NEVER STOP EXPLORING</h1>
                <h1>EXPLORING THE </h1>
                <h1> WORLD </h1>
            </div>
            <Link to="/Home">
                <button className="boton-landing">HOME</button>
            </Link>
        </div>
    );
}
