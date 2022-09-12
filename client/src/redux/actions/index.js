import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";

export const allCountries = async (dispatch) => {
    let res = await axios.get("http://localhost:3001/countries");
    dispatch({
        type: GET_ALL_COUNTRIES,
        payload: res.data,
    });
};
