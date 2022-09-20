import React from "react";
import { Link } from "react-router-dom";
import "../Landing/Landing.css";
import imagen from "../../Imagenes/22.jpg";
import flecha from "../../Imagenes/flecha.png";

export default function Landing() {
    return (
        <div className="coco">
            <img className="img-1" src={imagen} alt="ss" />
            <div className="text-landing">
                <h3>MEMORIES</h3>
                <h1> OF THE WORLD</h1>
                {/* <h1> WORLD </h1> */}
            </div>
            <h6 className="description">
                The world is a big place, full of flags accompanied by
                incredible cultures and activities that differentiate them from
                each other. Without much more to say, let's go together to meet
                him.
                {/* El mundo es un lugar grande, lleno de banderas acompanadas de
                increibles culturas y actividades que las diferencian entre si.
                Sin mucho mas que decir, vayamos juntos a conocerlo. */}
            </h6>
            <img className="flecha" src={flecha} alt="aaas" />
            <Link to="/Home">
                <button className="boton-landing"> EXPLORE DESTINATION</button>
            </Link>
        </div>
    );
}
