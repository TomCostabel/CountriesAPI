import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { getAllCountries, postActivity } from "../../redux/actions";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";

export default function CreateActivity() {
    const nombrePaises = useSelector((state) => state.countries);
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });

    //-------------------------------------HANDLE CHANGE-------------------------->

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        // setErrors(
        //     validate({
        //         ...input,
        //         [e.target.name]: e.target.value,
        //     })
        // );
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
            return alert(
                "Complete correctamente el formulario antes de enviarlo"
            );
        }
        dispatch(postActivity(input));
        alert("Actividad Creada Exitosamente");
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

                    <label>Difficulty</label>
                    <select name="difficulty" onChange={(e) => handleSelect(e)}>
                        <option>1 - 5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <label>Duration</label>
                    <select name="duration" onChange={(e) => handleSelect(e)}>
                        <option>1 - 5 hs</option>
                        <option value={1}>1 Hr</option>
                        <option value={2}>2 Hrs</option>
                        <option value={3}>3 Hrs</option>
                        <option value={4}>4 Hrs</option>
                        <option value={5}>5 Hrs</option>
                    </select>
                    <label>Season</label>
                    <select name="season" onChange={(e) => handleSelect(e)}>
                        <option>...</option>
                        <option value="winter">Winter</option>
                        <option value="summer">Summer</option>
                        <option value="spring">Spring</option>
                        <option value="autumn">Autumn</option>
                    </select>

                    <select
                        name="countries"
                        id="countries"
                        onChange={(e) => handleSelect(e)}
                    >
                        <option>Select Countrys...</option>
                        {nombrePaises?.map((e) => {
                            return <option value={e.name}>{e.name}</option>;
                        })}
                    </select>

                    <button className="button-form">Create activity</button>
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
