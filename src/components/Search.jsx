import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Styles/main.css';
import { useDispatch } from 'react-redux';
import { fetchWeatherFor5 } from '../state/weather/dailyFor5Slice'
const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Search = () => {
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [citySuggestion, setCitySuggestion] = useState([]);
    const [userTyping, setUserTyping] = useState('');

    const [cityKey, setCityKey] = useState("");
    const [cityName, setCityName] = useState('Tel-Aviv');
    const [countryName, setCountryName] = useState('Israel');




    useEffect(() => { //getting the list of the citySuggestion from api
        const fetchCityKey = async () => {
            setError(false);
            setIsLoading(true);
            try {
                const result = await axios.get(`${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY_WEATHER}&q=${userTyping}`);
                setCitySuggestion(result.data);
                console.log('setCitySuggestion', result.data);
                setIsLoading(false);
            }
            catch (error) {
                setError(true);
                setIsLoading(false);
            }
        }
        fetchCityKey()
    }, [userTyping]);




    const handelChange = (e) => { //getting the name from the search line
        setUserTyping(e.target.value)

    }
    const handleSubmit = (e) => { //cleaning the search line
        e.preventDefault();
    }

    const handelChangeItem = (item) => {
        setCityName(item.LocalizedName)
        setCountryName(item.Country.LocalizedName)
        setCityKey(item.Key)
        setUserTyping("")
        dispatch(fetchWeatherFor5(cityKey))
    }
    return (
        <>
            <h2>{cityName && cityName} {countryName && countryName}</h2>
            <form
                className="form"
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handelChange}
                    type="text"
                    id="input"
                    placeholder='Search for City'
                    className="form__input"
                    required
                    value={userTyping}
                    autoComplete="off"
                />
                <ul className="form__list">
                    {isLoading ? ""
                        : citySuggestion && citySuggestion.map(item => (
                            <li key={item.Key}
                                className="form__list--item"
                                onClick={() => handelChangeItem(item)}>
                                {item.LocalizedName} &#xa0;&#xa0;
                                {item.Country.LocalizedName}
                            </li>

                        ))}
                </ul>
            </form>
        </>
    )
}

export default Search

    // useEffect(() => { //getting the data from the api by the name of the crypto currency
    //     if (cityKey) {
    //         const fetchCurrentWeather = async () => {
    //             setError(false);
    //             setIsLoading(true);
    //             try {
    //                 const result = await axios.get(`${BASE_URL}currentconditions/v1/${cityKey}?apikey=${API_KEY_WEATHER}`);
    //                 setCurrentWeather(result.data);
    //                 console.log('setCurrentWeather', result.data);
    //                 setIsLoading(false);
    //             }
    //             catch (error) {
    //                 setError(true);
    //                 setIsLoading(false);
    //             }
    //         }
    //         fetchCurrentWeather()
    //     }
    // }, [cityKey]);

            //  {/* {currentWeather.map(item => (
            //         <div className="card__content" key={item.Key}>

            //             <img className="card__dayIcon"
            //                 src={`https://developer.accuweather.com/sites/default/files/${item.WeatherIcon.toString().length === 2
            //                     ? item.WeatherIcon
            //                     : `0${item.WeatherIcon}`}-s.png`} alt="weather-icon" />
            //             <div className="card__date">
            //                 {new Date(item.LocalObservationDateTime).toDateString()}
            //             </div>
            //             <h4 className="card__header">
            //                 {item.WeatherText}
            //             </h4>
            //             <div className="card__max-min">
            //                 <div className="card__maxTemp"> {item.Temperature.Metric.Value}&#176; </div>
            //                 <div className="card__minTemp"> &nbsp; {item.Temperature.Metric.Unit}</div>
            //             </div>
            //         </div >
            //     ))} */}