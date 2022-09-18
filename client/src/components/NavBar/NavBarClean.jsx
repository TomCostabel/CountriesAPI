import React from "react";
import "../NavBar/NavBar.css";
import Imagen from "../../Imagenes/icon.png";
import { Link } from "react-router-dom";

export default function NavBarClean() {
    return (
        <div className="navbar-container ">
            <Link to="/Home">
                <img className="logo-nav" src={Imagen} alt="Logo NavBar" />
            </Link>
        </div>
    );
}
