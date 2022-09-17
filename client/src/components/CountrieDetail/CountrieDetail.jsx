import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountrieDetail } from "../../redux/actions";
import "../CountrieDetail/CountrieDetail.css";
import NavBar from "../NavBar/NavBar";

export default function CountrieDetail() {
    const { id } = useParams();

    const detail = useSelector((state) => state.countrieDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountrieDetail(id));
    }, [dispatch, id]);
    return (
        <>
            <NavBar />
            <div className="container-card-detail">
                {/* <div className="imagen-detail">
                    <img src={detail[0]?.flag} alt="llamado detalle im" />
                </div> */}
                <div className="container-detail">
                    <h4>{detail[0]?.name}</h4>
                    {/* <h4>{detail[0]?.id}</h4> */}
                    <h4>Capital: {detail[0]?.capital}</h4>
                    <h4>Subregion: {detail[0]?.subregion}</h4>
                    <h4>Area: {detail[0]?.area}</h4>
                    <h4>Population: {detail[0]?.population}</h4>

                    <section>
                        <h4>Actividades turisticas:</h4>
                        {/* <ul>
                            {detail[0]?.Activities?.map((el) => (
                                <li key={el.id}>{el.name}</li>
                            ))}
                        </ul> */}
                        {detail[0]?.Activities.map((e) => {
                            return (
                                <div>
                                    <h4>{e.name}</h4>
                                    <p>Dificultad: {e.difficulty}</p>
                                    <p>Duración: {e.duration} horas</p>
                                    <p>Temporada: {e.season}</p>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </div>
        </>
    );
}
