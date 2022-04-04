const defaultState = {
    loading: false,
    data: [],
    errorMsg: ""
};

const cityByKeyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CITY_WEATHER_SEARCH_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }

        case "CITY_WEATHER_SEARCH_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "unable to find this city"
            }
        case "CITY_WEATHER_SEARCH_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: ""
            }


        default:
            return state
    }

}

export default cityByKeyReducer