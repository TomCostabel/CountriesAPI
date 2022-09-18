import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { getAllCountries, postActivity } from "../../redux/actions";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBarClean.jsx";
import "../CreateActivity/CreateActivity.css";

export default function CreateActivity() {
    const nombrePaises = useSelector((state) => state.countries);
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });

    //-------------------------------------VALIDATE FUNCTION-------------------------->

    function validate(input) {
        let errors = {};

        if (/[^A-Za-z0-9 ]+/g.test(input.name))
            errors.name = "* Name cannot have special characters or accents.";

        // if (!input.duration) errors.duration = "Campo Necesario";

        // if (!input.season || input.season === "vacio")
        //     errors.season = "Campo Necesario";

        // if (!input.countries || input.countries.length === 0)
        //     errors.countries = "Campo Necesario";

        return errors;
    }

    //-------------------------------------HANDLE CHANGE-------------------------->

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }
    //-------------------------------------HANDLE SELECT-------------------------->

    const handleSelect = (e) => {
        setInput((estado) => {
            if (e.target.name === "countries") {
                return {
                    ...estado,
                    countries: [...estado.countries, e.target.value],
                };
            } else {
                return {
                    ...estado,
                    [e.target.name]: e.target.value,
                };
            }
        });
    };
    //-------------------------------------HANDLE SUBMIT-------------------------->

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        if (
            !input.name ||
            !input.difficulty ||
            !input.duration ||
            !input.season ||
            !input.countries
        ) {
            return alert("❌Please complete all fields. ");
        }
        dispatch(postActivity(input));
        alert("✔️Activity created successfully");
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [],
        });
        // navigate.push("/Home");
    }
    function handleDelete(e) {
        setInput({
            ...input,
            countries: input.countries.filter((con) => con !== e),
        });
    }
    //---------------------------------------USE EFFECT--------------------------->

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    //---------------------------------------RETURNS------------------------------>

    if (!nombrePaises.length) {
        return <Loading />;
    }
    return (
        <div>
            <NavBar />
            <br />
            <br />
            <div className="container-form">
                <form onSubmit={handleSubmit}>
                    <label>Activity Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Name..."
                    />
                    {errors.name && <p className="errores">{errors.name}</p>}
                    <label>Difficulty</label>
                    <select
                        className="content-select-difficulty"
                        name="difficulty"
                        onChange={(e) => handleSelect(e)}
                    >
                        <option></option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <label>Duration</label>

                    <select
                        className="content-select-duration"
                        name="duration"
                        onChange={(e) => handleSelect(e)}
                    >
                        <option></option>
                        <option value={1}>1 Hr</option>
                        <option value={2}>2 Hrs</option>
                        <option value={3}>3 Hrs</option>
                        <option value={4}>4 Hrs</option>
                        <option value={5}>5 Hrs</option>
                    </select>
                    <label>Season</label>
                    <select
                        className="content-select-season"
                        name="season"
                        onChange={(e) => handleSelect(e)}
                    >
                        <option></option>
                        <option value="winter">Winter</option>
                        <option value="summer">Summer</option>
                        <option value="spring">Spring</option>
                        <option value="autumn">Autumn</option>
                    </select>

                    <label>Countries</label>
                    <select
                        className="content-select"
                        name="countries"
                        id="countries"
                        onChange={(e) => handleSelect(e)}
                    >
                        <option></option>
                        {nombrePaises?.map((e) => {
                            return <option value={e.name}>{e.name}</option>;
                        })}
                    </select>
                    <button>CREATE ACTIVITY</button>
                </form>

                {input.countries.map((e) => (
                    <div>
                        <p> {e} </p>
                        <button onClick={() => handleDelete(e)}>X </button>
                    </div>
                ))}
            </div>
        </div>
    );
}