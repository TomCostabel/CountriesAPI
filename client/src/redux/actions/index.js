import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ALL_COUNTRIE_ID = "GET_ALL_COUNTRIE_ID";
export const SET_SORT = "SET_SORT";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const GET_TOURIST_ACTIVITIES = "GET_TOURIST_ACTIVITIES";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";

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

export function sortBy(payload) {
    return {
        type: SET_SORT,
        payload,
    };
}

export function filterByContinent(payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload,
    };
}

export function postActivity(payload) {
    return async function () {
        const response = await axios.post(
            "http://localhost:3001/activities",
            payload
        );

        return response;
    };
}

export function getActivities() {
    return (dispatch) => {
        axios
            .get(`http://localhost:3001/activities`)
            .then((res) => {
                return dispatch({
                    type: GET_TOURIST_ACTIVITIES,
                    payload: res.data,
                });
            })
            .catch((err) => console.log(err));
    };
}

export function filterByAct(activity) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload: activity,
    };
}
