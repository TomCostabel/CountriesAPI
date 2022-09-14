import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, sortBy } from "../../redux/actions/index.js";
import Card from "../Card/Card";
import "../Countries/Countries.css";
import NavBar from "../NavBar/NavBar.jsx";
import Pagination from "../Pagination/Pagination.jsx";

export default function Countries() {
    //-----------------------------MY STATES---------------------------------------------->

    const paises = useSelector((state) => state.countries);

    const [currentPage, setCurrentPage] = useState(0);
    const [datos, setDatos] = useState([]);
    const [paisesActuales, setPaisesActuales] = useState([]);
    //----------------------------------------

    const ITEMS_X_PAGE = currentPage === 0 ? 9 : 10;
    const dispatch = useDispatch();
    //-----------------------------USE EFFECTS------------------------------------------->

    useEffect(() => {
        if (paises.length && !datos.length) setDatos(paises);
        if (!datos.length) dispatch(getAllCountries());

        setPaisesActuales(
            datos.slice(
                currentPage * ITEMS_X_PAGE,
                currentPage * ITEMS_X_PAGE + ITEMS_X_PAGE
            )
        );
    }, [dispatch, currentPage, datos, paises]);

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    //-----------------------------PREV AND NEXT HANDLER--------------------------------->

    const nextHandler = () => {
        const nextPage = currentPage + 1;

        const firstIndex = nextPage * ITEMS_X_PAGE;

        if (paisesActuales.length < 10 && currentPage !== 0) return;
        setPaisesActuales(
            [...datos].slice(firstIndex, firstIndex + ITEMS_X_PAGE)
        );
        setCurrentPage(nextPage);
    };
    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * ITEMS_X_PAGE;

        setPaisesActuales(
            [...datos].slice(firstIndex, firstIndex + ITEMS_X_PAGE)
        );
        setCurrentPage(prevPage);
    };

    //------------------------------MAPEO PARA MOSTRAR LAS CARDS---------------------------------------------------->

    const allTheCountries = paisesActuales.map((e) => {
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
    // console.log("esto es allCountries...", allTheCountries);
    return (
        <div>
            <NavBar />

            <div>
                Filtrado alfabetico
                <select
                    onClick={(e) => {
                        dispatch(sortBy(e.target.value));
                    }}
                    onChange={() => setCurrentPage(0)}
                >
                    <option value="">...</option>
                    <option value="DESC">A-Z</option>
                    <option value="ASC">Z-A</option>
                </select>
            </div>

            <div className="container-cards">
                {
                    <Pagination
                        items={allTheCountries}
                        currentPage={currentPage}
                        nextHandler={nextHandler}
                        prevHandler={prevHandler}
                    />
                }
            </div>
        </div>
    );
}
