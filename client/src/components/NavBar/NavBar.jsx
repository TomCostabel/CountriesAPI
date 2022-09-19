import React from "react";
import "../NavBar/NavBar.css";
// import Imagen from "../../Imagenes/icon1.png";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div className="navbar-container ">
            {/* <img className="logo-nav" src={Imagen} alt="Logo NavBar" /> */}

            <Link to="/Home/CreateActivity">
                <button className="boton-createActividad">
                    Create Activity
                </button>
            </Link>
        </div>
    );
}
