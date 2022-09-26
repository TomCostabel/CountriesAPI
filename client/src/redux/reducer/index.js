import {
    GET_ALL_COUNTRIES,
    GET_ALL_COUNTRIE_ID,
    SET_SORT,
    FILTER_BY_CONTINENT,
    GET_TOURIST_ACTIVITIES,
    FILTER_BY_ACTIVITIES,
} from "../actions/index";

const initialState = {
    countries: [],
    countrieDetail: [],
    allCountries: [],
    allActivities: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload, //------> en el llamado allCountries tambien seteamos toda la info en continents para despues filtrarlos!
            };
        case GET_TOURIST_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,
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
        case FILTER_BY_ACTIVITIES:
            const allCountries2 = state.allCountries;

            const solo = allCountries2.filter((pais) => {
                return pais.Activities.length > 0;
            });

            let array = [];

            for (let i = 0; i < solo.length; i++) {
                for (let j = 0; j < solo[i].Activities.length; j++) {
                    if (solo[i].Activities[j].name === action.payload) {
                        array.push(solo[i]);
                    }
                }
            }

            const filtro = action.payload === "Todos" ? allCountries2 : array;

            return {
                ...state,
                countries: filtro,
            };

        default:
            return state;
    }
};
export default rootReducer;
