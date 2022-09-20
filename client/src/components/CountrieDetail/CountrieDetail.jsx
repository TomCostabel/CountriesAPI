import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountrieDetail } from "../../redux/actions";
import "../CountrieDetail/CountrieDetail.css";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBarClean.jsx";

export default function CountrieDetail() {
    const { id } = useParams();

    const detail = useSelector((state) => state.countrieDetail);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getCountrieDetail(id));
    }, [dispatch, id]);
    setTimeout(() => {
        setLoading(false);
    }, 1000);

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <NavBar />
            <Link to="/Home">
                <button className="button-back">BACK</button>
            </Link>
            <div className="container-card-detail">
                <div>
                    <h1 className="name-detail">{detail[0]?.name}</h1>
                    <img
                        className="imagen-detail"
                        src={detail[0]?.flag}
                        alt="llamado detalle im"
                    />
                    {/* <h4>{detail[0]?.id}</h4> */}
                    <h4 className="datos-pais">
                        Capital: {detail[0]?.capital}
                    </h4>
                    <h4 className="datos-pais">
                        Subregion: {detail[0]?.subregion}
                    </h4>
                    <h4 className="datos-pais">Area: {detail[0]?.area}</h4>
                    <h4 className="datos-pais">
                        Population: {detail[0]?.population}
                    </h4>
                </div>

                <div className="container-detail">
                    <section>
                        <h3>TOURIST ACTIVITIES:</h3>

                        {detail[0]?.Activities.length ? (
                            detail[0]?.Activities.map((e) => {
                                return (
                                    <div className="activities-container">
                                        <h4>{e.name}</h4>
                                        <p>Difficulty: {e.difficulty}</p>
                                        <p>Duration: {e.duration} horas</p>
                                        <p>Season: {e.season}</p>
                                    </div>
                                );
                            })
                        ) : (
                            <h3 className="activities-container">
                                There are no tourist activities in this country.
                            </h3>
                        )}
                    </section>
                </div>
                <Link to="/Home/CreateActivity">
                    <div className="button">
                        <h6 className="name-add-activity">ADD ACTIVITY</h6>
                    </div>
                </Link>
            </div>
        </>
    );
}
