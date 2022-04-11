import React from 'react'
import trash from '../img/SVG/trash-2.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { favoritesActions } from '../state/weather/favoritesSlice';
import { fetchWeatherFor5 } from '../state/weather/dailyFor5Slice';
import Home from './Home';




const FavoritesCard = ({
    icon,
    temperature,
    title,
    countryName,
    cityName,
    id
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const openWeatherById = () => {
        dispatch(fetchWeatherFor5(id));
        navigate("/");
    }

    return (
        <div>
            <div
                onClick={openWeatherById}
                className="card__content" key={id}>

                <img
                    onClick={() => dispatch(favoritesActions.removeFRomFavorites(id))}
                    src={trash}
                    alt="trash-can" />
                <h4 className="card__header">{cityName} </h4>
                <h4 className="card__header">{countryName} </h4>

                <img

                    className="card__dayIcon"
                    src={`https://developer.accuweather.com/sites/default/files/${icon.toString().length === 2
                        ? icon
                        : `0${icon}`}-s.png`} alt="weather-icon" />
                <h4 className="card__header">{title} </h4>
                <div className="card__maxTemp"> {temperature}</div>

                <Routes>
                    <Route path={id} element={<Home />} />
                </Routes>

            </div >
        </div>
    )
}

export default FavoritesCard;