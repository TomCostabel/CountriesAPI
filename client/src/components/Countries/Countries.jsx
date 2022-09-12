import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions/index.js";
import Card from "../Card/Card";
import "../Countries/Countries.css";
import NavBar from "../NavBar/NavBar.jsx";

export default function Countries() {
    const paises = useSelector((state) => state.countries);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    const allTheCountries = paises.map((e) => {
        return (
            <Card
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.flag}
                continent={e.continent}
            />
        );
    });
    console.log("esto es allCountries...", allTheCountries);
    return (
        <div>
            <NavBar />
            <div className="container-cards">{allTheCountries}</div>
        </div>
    );
}
