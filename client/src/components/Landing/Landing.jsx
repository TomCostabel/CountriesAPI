import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div>
            <h1>SOY EL HOME</h1>
            <Link to="/Home">
                <h1>HOME</h1>
            </Link>
        </div>
    );
}
