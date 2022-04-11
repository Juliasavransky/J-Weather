import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherFor5 } from '../state/weather/dailyFor5Slice';
import { favoritesActions } from '../state/weather/favoritesSlice';
import axios from 'axios';


import DisplayDailyFor5 from './DisplayDailyFor5';
import BtnFavorites from './BtnFavorites';
import Search from './Search';
const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [fullData, setFullData] = useState([]);
    const [cityKey, setCityKey] = useState("");
    const dispatch = useDispatch();


    // console.log('lat', lat)
    // console.log('lon', lon)


    // const cityKey = "215854" //default Tel-Aviv



    useEffect(() => {
        const onGeoLocation = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    setLat(position.coords.latitude);
                    setLon(position.coords.longitude);

                });
            } else {
                alert("🙁🙁🙁Sorry!!! Your Browser Doesn't Support Geolocation🙁🙁🙁");
            }

            const request = await axios
                .get(`${BASE_URL}locations/v1/cities/geoposition/search?apikey=${API_KEY_WEATHER}&q=${lat}%2C${lon}`);
            setFullData(request.data);
            setCityKey(request.data.Key)
            // console.log("setFullData", request.data)
            // console.log("setCityKey", request.data.Key)

            return request;
        }
        onGeoLocation();
    }, [lat, lon]);



    useEffect(() => { //getting the data from the redux slice for weather 5 days 
        dispatch(fetchWeatherFor5(cityKey))
        dispatch(favoritesActions.getCityKey(cityKey))
        // dispatch(favoritesActions.getCityName(cityName))
        // dispatch(favoritesActions.getCountryName(countryName))
    }, [dispatch, cityKey]);

    return (
        < >
            <Search />
            <BtnFavorites />
            <DisplayDailyFor5 />
        </>
    )
}

export default Home;
