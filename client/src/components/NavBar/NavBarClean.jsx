import React from "react";
import "../NavBar/NavBar.css";
import Imagen from "../../Imagenes/icon1.png";

export default function NavBarClean() {
    return (
        <div className="navbar-container ">
            <img className="logo-nav2" src={Imagen} alt="Logo NavBar" />
        </div>
    );
}
