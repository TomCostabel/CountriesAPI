import { GET_ALL_COUNTRIES, GET_ALL_COUNTRIE_ID } from "../actions/index";

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

        default:
            return state;
    }
};
export default rootReducer;
