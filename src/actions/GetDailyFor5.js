import axios from "axios";
const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const GetDailyFor5 = (cityKey) => async dispatch => {
    try {
        dispatch({
            type: "DAILY_FOR_5_LOADING"
        });

        const res = await axios.get(`${BASE_URL}forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY_WEATHER}&metric=true`)

        dispatch({
            type: "DAILY_FOR_5_SUCCESS",
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: "DAILY_FOR_5_FAIL",
        })

    }
}

export default GetDailyFor5;

