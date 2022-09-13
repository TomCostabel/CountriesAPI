import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div>
            <Link to="/Home">
                <h1>HOME</h1>
            </Link>
        </div>
    );
}
