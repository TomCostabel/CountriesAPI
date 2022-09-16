import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";

export default function CreateActivity() {
    const nombrePaises = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    if (!nombrePaises.length) {
        return <Loading />;
    }
    return (
        <div>
            <NavBar />
            <br />
            <br />
            <div className="container-form">
                <form>
                    <label>Name: </label>
                    <input type="text" name="name" placeholder="Name..." />

                    <label>Difficulty</label>
                    <select>
                        <option>...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Duration</label>
                    <select>
                        <option>...</option>
                        <option value="30 min">30 min</option>
                        <option value="1 Hr">1 Hr</option>
                        <option value="2 Hrs">2 Hrs</option>
                        <option value="3 Hrs">3 Hrs</option>
                        <option value="4 Hrs">4 Hrs</option>
                    </select>
                    <label>Season</label>
                    <select>
                        <option>...</option>
                        <option value="1">Winter</option>
                        <option value="2">Summer</option>
                        <option value="3">Spring</option>
                        <option value="3">Autumn</option>
                    </select>

                    <select>
                        {nombrePaises?.map((e) => {
                            return <option>{e.name}</option>;
                        })}
                    </select>

                    <button className="button-form">Create activity</button>
                </form>
            </div>
        </div>
    );
}
