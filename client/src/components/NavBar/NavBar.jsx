import React from "react";
import "../NavBar/NavBar.css";
import Imagen from "../../Imagenes/icon.png";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div className="navbar-container ">
            <Link to="/Home">
                <img className="logo-nav" src={Imagen} alt="Logo NavBar" />
            </Link>
            <Link to="/Home/CreateActivity">
                <button className="boton-createActividad">
                    Create Activity
                </button>
            </Link>
        </div>
    );
}
