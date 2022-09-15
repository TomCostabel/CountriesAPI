import React from "react";
import "../NavBar/NavBar.css";
import Imagen from "../../Imagenes/mundo.png";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div className="navbar-container ">
            <Link to="/Home">
                <img className="logo-nav" src={Imagen} alt="Logo NavBar" />
            </Link>

            <button className="boton-createActividad">CREAR ACTIVIDAD</button>
        </div>
    );
}
