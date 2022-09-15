import {
    GET_ALL_COUNTRIES,
    GET_ALL_COUNTRIE_ID,
    SET_SORT,
    FILTER_BY_CONTINENT,
} from "../actions/index";

const initialState = {
    countries: [],
    countrieDetail: [],
    allCountries: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload, //------> en el llamado allCountries tambien seteamos toda la info en continents para despues filtrarlos!
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
                    : action.payload === "DESC"
                    ? state.countries.sort((a, b) =>
                          a.name.localeCompare(b.name)
                      )
                    : action.payload === "POPULATION_ASC"
                    ? state.countries.sort(
                          (a, b) => b.population - a.population
                      )
                    : state.countries.sort(
                          (a, b) => a.population - b.population
                      );
            return {
                ...state,
                countries: sortedCountries,
            };
        case FILTER_BY_CONTINENT:
            const allCount = state.allCountries;
            const continentFilter =
                action.payload === "All"
                    ? allCount
                    : allCount?.filter((e) => e.continent === action.payload);

            return {
                ...state,
                countries: continentFilter,
            };

        default:
            return state;
    }
};
export default rootReducer;
