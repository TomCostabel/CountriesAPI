import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterByContinent,
    getAllCountries,
    sortBy,
} from "../../redux/actions/index.js";
import Card from "../Card/Card";
import "../Countries/Countries.css";
import NavBar from "../NavBar/NavBar.jsx";
import Pagination from "../Pagination/Pagination.jsx";

export default function Countries() {
    //-----------------------------MY STATES---------------------------------------------->

    const paises = useSelector((state) => state.countries);
    const losContinentes = useSelector((state) => state.allCountries);

    const [currentPage, setCurrentPage] = useState(0);
    const [datos, setDatos] = useState([]);
    const [paisesActuales, setPaisesActuales] = useState([]);
    //----------------------------------------

    const ITEMS_X_PAGE = currentPage === 0 ? 9 : 10;
    const dispatch = useDispatch();

    const continentes = function () {
        const arr = [];
        losContinentes.map((e) =>
            !arr.includes(e.continent) ? arr.push(e.continent) : null
        );
        return arr;
    };

    //-----------------------------USE EFFECTS------------------------------------------->
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    useEffect(() => {
        if (paises.length && !datos.length) setDatos(paises);
        // if (!datos.length) dispatch(getAllCountries());

        setPaisesActuales(
            datos.slice(
                currentPage * ITEMS_X_PAGE,
                currentPage * ITEMS_X_PAGE + ITEMS_X_PAGE
            )
        );
    }, [dispatch, currentPage, datos, paises]);

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

    const [buscador, setBuscador] = useState("");

    const handleChange = (e) => {
        setBuscador(e.target.value);

        setCurrentPage(0);
    };

    useEffect(() => {
        buscador.length === 0
            ? setDatos(paises)
            : setDatos(
                  paises.filter((el) => {
                      if (
                          el.name.toLowerCase().includes(buscador.toLowerCase())
                      )
                          return el;
                  })
              );
    }, [buscador, paises]);
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
            <input
                type="text"
                placeholder="BuscarPais..."
                value={buscador}
                onChange={(e) => handleChange(e)}
            />

            <div>
                Filtrado alfabetico
                <select
                    onClick={(e) => {
                        dispatch(sortBy(e.target.value));
                    }}
                    onChange={() => setCurrentPage(0)}
                >
                    <option>...</option>
                    <option value="DESC">A-Z</option>
                    <option value="ASC">Z-A</option>
                </select>
            </div>
            <div>
                Filtrado population
                <select
                    onClick={(e) => {
                        dispatch(sortBy(e.target.value));
                    }}
                    onChange={() => setCurrentPage(0)}
                >
                    <option>...</option>
                    <option value="POPULATION_DESC">Population desc</option>
                    <option value="POPULATION_ASC">Population asc</option>
                </select>
            </div>
            <div>
                Filtrado continent
                <select
                    onClick={(e) => {
                        dispatch(filterByContinent(e.target.value));
                    }}
                    onChange={() => setCurrentPage(0)}
                >
                    <option value="All">Order by continent</option>
                    {continentes()?.map((e) => (
                        <option value={e} key={e}>
                            {e}
                        </option>
                    ))}
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
