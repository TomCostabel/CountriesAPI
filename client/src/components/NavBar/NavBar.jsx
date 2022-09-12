import React from "react";
import "../NavBar/NavBar.css";
export default function NavBar() {
    return (
        <div className="navbar-container ">
            {/* <img src="" alt="Logo NavBar" /> */}
            <input type="text" placeholder="BuscarPais..." />
            <button>CREAR ACTIVIDAD</button>
        </div>
    );
}
