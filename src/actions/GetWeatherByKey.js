import axios from "axios";
const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const GetWeatherByKey = (cityKey) => async dispatch => {
    try {
        dispatch({
            type: "CITY_WEATHER_SEARCH_LOADING"
        });

        const res = await axios.get(`${BASE_URL}currentconditions/v1/${cityKey}?apikey=${API_KEY_WEATHER}`);

        dispatch({
            type: "CITY_WEATHER_SEARCH_SUCCESS",
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: "CITY_WEATHER_SEARCH_FAIL"
        })

    }

}
export default GetWeatherByKey;