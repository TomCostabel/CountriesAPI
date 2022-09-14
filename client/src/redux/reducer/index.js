import {
    GET_ALL_COUNTRIES,
    GET_ALL_COUNTRIE_ID,
    SET_SORT,
} from "../actions/index";

const initialState = {
    countries: [],
    countrieDetail: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        case GET_ALL_COUNTRIE_ID:
            return {
                ...state,
                countrieDetail: action.payload,
            };
        case SET_SORT:
            const sortedCountries =
                action.payload === "ASC"
                    ? state.countries.sort((a, b) =>
                          b.name.localeCompare(a.name)
                      )
                    : state.countries.sort((a, b) =>
                          a.name.localeCompare(b.name)
                      );
            return {
                ...state,
                countries: sortedCountries,
            };

        default:
            return state;
    }
};
export default rootReducer;
