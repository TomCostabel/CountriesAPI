import React from "react";
import { Link } from "react-router-dom";
import "../Card/Card.css";

export default function Card(props) {
    return (
        <div className="container-card">
            <Link to={`/Home/CountrieDetail/${props.id}`}>
                <img className="imagen" src={props.image} alt="Flag Countrie" />
            </Link>
            <h3>{props.name}</h3>
            <h5>Continent: {props.continent}</h5>
        </div>
    );
}
