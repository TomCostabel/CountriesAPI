import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterByAct,
    filterByContinent,
    getActivities,
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
    const activities = useSelector((state) => state.allActivities);

    const [currentPage, setCurrentPage] = useState(0);
    const [datos, setDatos] = useState([]);
    const [paisesActuales, setPaisesActuales] = useState([]);
    const dispatch = useDispatch();

    const itemXPage = currentPage === 0 ? 9 : 10;
    //------------------------------------------FILTER X CONTINENTS------------------------------------------------------->

    const continentes = function () {
        const arr = [];
        losContinentes.map((e) =>
            !arr.includes(e.continent) ? arr.push(e.continent) : null
        );
        return arr;
    };
    //------------------------------------------FILTER X ACTIVITIE------------------------------------------------------->

    function handleFilterByAct(e) {
        e.target.value === "none"
            ? dispatch(getAllCountries())
            : dispatch(filterByAct(e.target.value));
        setCurrentPage(0);
    }
    //--------------------------------------------USE EFFECTS--------------------------------------------------->
    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(getActivities());
    }, [dispatch]);

    useEffect(() => {
        if (paises.length && !datos.length) setDatos(paises);

        setPaisesActuales(
            datos.slice(
                currentPage * itemXPage,
                currentPage * itemXPage + itemXPage
            )
        );
    }, [dispatch, currentPage, datos, paises, itemXPage]);

    //-------------------------------------------NEXT HANDLER---------------------------------------------------->

    const nextHandler = () => {
        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemXPage;

        if (paisesActuales.length < 10 && currentPage !== 0) return;

        setPaisesActuales([...datos].slice(firstIndex, firstIndex + itemXPage));
        setCurrentPage(nextPage);
    };

    //-----------------------------------------PREV HANDLER---------------------------------------------------->

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * itemXPage;

        setPaisesActuales([...datos].slice(firstIndex, firstIndex + itemXPage));
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
                  paises?.filter((el) => {
                      return el.name
                          .toLowerCase()
                          .includes(buscador.toLowerCase())
                          ? el
                          : null;
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
                {/* //--------------------------------- INPUT BUSQUEDA--------------------------> */}
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
                {/* //----------------------------- ALPHABETICAL FILTERING ---------------------> */}

                <div className="filter_alpgh">
                    Alphabetical filtering
                    <select
                        onClick={(e) => {
                            dispatch(sortBy(e.target.value));
                        }}
                        onChange={() => setCurrentPage(0)}
                    >
                        <option></option>
                        <option value="DESC">A-Z</option>
                        <option value="ASC">Z-A</option>
                    </select>
                </div>
                {/* //----------------------------- POPULATION FILTERING ----------------------> */}

                <div className="filter_pop">
                    Population Filtering
                    <select
                        onClick={(e) => {
                            dispatch(sortBy(e.target.value));
                        }}
                        onChange={() => setCurrentPage(0)}
                    >
                        <option></option>
                        <option value="POPULATION_ASC">Population ↥</option>
                        <option value="POPULATION_DESC">Population ↧</option>
                    </select>
                </div>
                {/* //----------------------------- FILTERED CONTINENTS ----------------------> */}

                <div className="filter_continents">
                    Filtered continents
                    <select
                        onClick={(e) => {
                            dispatch(filterByContinent(e.target.value));
                        }}
                        onChange={() => setCurrentPage(0)}
                    >
                        <option value="All"></option>
                        {continentes()?.map((e) => (
                            <option value={e} key={e}>
                                {e}
                            </option>
                        ))}
                    </select>
                </div>
                {/* //----------------------------- FILTER BY ACTIVITY ---------------------> */}

                <div className="filter_continents">
                    Filter by activity
                    <select onChange={(e) => handleFilterByAct(e)}>
                        <option value="none"></option>
                        {activities.length === 0 ? (
                            <option value="none">No activity</option>
                        ) : (
                            activities?.map((e) => (
                                <option value={e.name} key={e.id}>
                                    {e.name}
                                </option>
                            ))
                        )}
                    </select>
                </div>
            </div>

            <div className="container-cards">
                <Pagination
                    items={allTheCountries}
                    currentPage={currentPage}
                    nextHandler={nextHandler}
                    prevHandler={prevHandler}
                />
            </div>
        </div>
    );
}
