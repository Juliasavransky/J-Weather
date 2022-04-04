import React, { useState, useEffect } from 'react'
import test2 from '../test2.json';
import axios from 'axios';
import '../Styles/main.css';
const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Search = () => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [citySuggestion, setCitySuggestion] = useState([]);
    const [userTyping, setUserTyping] = useState('');

    const [cityKey, setCityKey] = useState("");
    const [cityName, setCityName] = useState('');

    // const [currentWeather, setCurrentWeather] = useState([]);


    useEffect(() => { //getting the data from the city key from the api
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


    const handelChange = (e) => { //getting the name from the search line
        setUserTyping(e.target.value)
        console.log(userTyping)

    }
    const handleSubmit = (e) => { //cleaning the search line
        e.preventDefault();

    }
    const handelChangeItem = (item) => {
        setCityName(item.LocalizedName)
        setCityKey(item.Key)
        setUserTyping("")
        console.log(item)
    }
    return (
        <>
            <h2>{cityName && cityName}</h2>
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
            <div className="card">
                {/* {currentWeather.map(item => (
                    <div className="card__content" key={item.Key}>

                        <img className="card__dayIcon"
                            src={`https://developer.accuweather.com/sites/default/files/${item.WeatherIcon.toString().length === 2
                                ? item.WeatherIcon
                                : `0${item.WeatherIcon}`}-s.png`} alt="weather-icon" />
                        <div className="card__date">
                            {new Date(item.LocalObservationDateTime).toDateString()}
                        </div>
                        <h4 className="card__header">
                            {item.WeatherText}
                        </h4>
                        <div className="card__max-min">
                            <div className="card__maxTemp"> {item.Temperature.Metric.Value}&#176; </div>
                            <div className="card__minTemp"> &nbsp; {item.Temperature.Metric.Unit}</div>
                        </div>
                    </div >
                ))} */}
            </div>
        </>
    )
}

export default Search

