import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ALL_COUNTRIE_ID = "GET_ALL_COUNTRIE_ID";

export function getAllCountries() {
    return async function (dispatch) {
        try {
            let res = await axios.get("http://localhost:3001/countries");
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export function getCountrieDetail(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(
                "http://localhost:3001/countries/" + id
            );
            dispatch({
                type: GET_ALL_COUNTRIE_ID,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}
