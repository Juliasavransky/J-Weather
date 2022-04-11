import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Styles/main.css';
import map from '../img/SVG/map.svg';
import search2 from '../img/SVG/search1.svg';


import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherFor5 } from '../state/weather/dailyFor5Slice'
import { favoritesActions } from '../state/weather/favoritesSlice';
const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;


const Search = () => {
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [citySuggestion, setCitySuggestion] = useState([]);
    const [userTyping, setUserTyping] = useState('');

    const [cityKey, setCityKey] = useState("215854");
    const [cityName, setCityName] = useState('Tel-Aviv');
    const [countryName, setCountryName] = useState('Israel');

    dispatch(favoritesActions.getCityKey(cityKey))
    dispatch(favoritesActions.getCityName(cityName))
    dispatch(favoritesActions.getCountryName(countryName))

    const newCityName = useSelector(state => state.favorites.items.cityName)
    const newCountryName = useSelector(state => state.favorites.items.countryName)


    useEffect(() => { //getting the list of the citySuggestion from api
        const fetchCityKey = async () => {
            setError(false);
            setIsLoading(true);
            try {
                const result = await axios.get(`${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY_WEATHER}&q=${userTyping}`);
                setCitySuggestion(result.data);
                // console.log('setCitySuggestion', result.data);
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
        dispatch(favoritesActions.getCityKey(cityKey))
        dispatch(favoritesActions.getCityName(cityName))
        dispatch(favoritesActions.getCountryName(countryName))

    }
    return (
        <>
            <h2>
                <img src={map} alt="map icon" />
                {newCityName ? newCityName : cityName}
                {newCountryName ? newCountryName : countryName}
            </h2>
            <form
                className="form"
                onSubmit={handleSubmit}
            >
                <div>
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
                    <img src={search2} alt="search icon" />
                </div>

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
