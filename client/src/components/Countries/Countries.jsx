import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterByContinent,
    getAllCountries,
    sortBy,
} from "../../redux/actions/index.js";
import Card from "../Card/Card";
import "../Countries/Countries.css";
import Loading from "../Loading/Loading.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import Imagen from "../../Imagenes/icon.png";

export default function Countries() {
    //--------------------------------------MY STATES & CONSTANTS----------------------------------------------->

    const paises = useSelector((state) => state.countries);
    const losContinentes = useSelector((state) => state.allCountries);

    const [currentPage, setCurrentPage] = useState(0);
    const [datos, setDatos] = useState([]);
    const [paisesActuales, setPaisesActuales] = useState([]);
    const dispatch = useDispatch();

    const ITEMS_X_PAGE = currentPage === 0 ? 9 : 10;
    //------------------------------------------FILTER X CONTINENTS------------------------------------------------------->

    const continentes = function () {
        const arr = [];
        losContinentes.map((e) =>
            !arr.includes(e.continent) ? arr.push(e.continent) : null
        );
        return arr;
    };

    //--------------------------------------------USE EFFECTS--------------------------------------------------->
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    useEffect(() => {
        if (paises.length && !datos.length) setDatos(paises);

        setPaisesActuales(
            datos.slice(
                currentPage * ITEMS_X_PAGE,
                currentPage * ITEMS_X_PAGE + ITEMS_X_PAGE
            )
        );
    }, [dispatch, currentPage, datos, paises]);

    //-------------------------------------------NEXT HANDLER---------------------------------------------------->

    const nextHandler = () => {
        const nextPage = currentPage + 1;

        const firstIndex = nextPage * ITEMS_X_PAGE;

        if (paisesActuales.length < 10 && currentPage !== 0) return;

        setPaisesActuales(
            [...datos].slice(firstIndex, firstIndex + ITEMS_X_PAGE)
        );
        setCurrentPage(nextPage);
    };
    //-----------------------------------------PREV HANDLER---------------------------------------------------->

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * ITEMS_X_PAGE;

        setPaisesActuales(
            [...datos].slice(firstIndex, firstIndex + ITEMS_X_PAGE)
        );
        setCurrentPage(prevPage);
    };
    //---------------------------------BUSCADOR AL INSTANTE-------------------------------------------------------->

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
    //------------------------------------MAP TO COUNTRYS---------------------------------------------------------->

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

    //--------------------------------------RETURN----------------------------------------------------------------->

    if (!paises.length) {
        return <Loading />;
    }
    return (
        <div>
            <NavBar />
            <div className="container_filtros">
                <div className="buscador_and_image">
                    <img className="img_buscador" src={Imagen} alt="fotito" />
                    <input
                        className="input"
                        type="text"
                        placeholder="Search country..."
                        value={buscador}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="filter_alpgh">
                    Alphabetical filtering
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
                <div className="filter_pop">
                    Population Filtering
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
                <div className="filter_continents">
                    Filtered continents
                    <select
                        onClick={(e) => {
                            dispatch(filterByContinent(e.target.value));
                        }}
                        onChange={() => setCurrentPage(0)}
                    >
                        <option value="All">...</option>
                        {continentes()?.map((e) => (
                            <option value={e} key={e}>
                                {e}
                            </option>
                        ))}
                    </select>
                </div>
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
