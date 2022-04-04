const defaultState = {
    loading: false,
    data: [],
    errorMsg: ""
}

const dailyFor5Reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "DAILY_FOR_5_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "DAILY_FOR_5_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "unable to ge the weather"
            }
        case "DAILY_FOR_5_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload.DailyForecasts,
                errorMsg: ""
            }
        default:
            return state
    }
}

export default dailyFor5Reducer

