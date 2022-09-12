import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountrieDetail } from "../../redux/actions";
import "../CountrieDetail/CountrieDetail.css";

export default function CountrieDetail() {
    const { id } = useParams();

    const detail = useSelector((state) => state.countrieDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountrieDetail(id));
    }, [dispatch, id]);
    return (
        <div className="container-card-detail">
            <div className="imagen-detail">
                <img src={detail[0]?.flag} alt="llamado detalle im" />
            </div>
            <div className="container-detail">
                <h4>{detail[0]?.name}</h4>
                <h4>{detail[0]?.id}</h4>
                <h4>{detail[0]?.capital}</h4>
                <h4>{detail[0]?.subregion}</h4>
                <h4>{detail[0]?.area}</h4>
                <h4>{detail[0]?.population}</h4>
            </div>
        </div>
    );
}
