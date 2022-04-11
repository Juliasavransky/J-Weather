import React from 'react';
import heart1 from '../img/SVG/heart.svg';
import heart2 from '../img/SVG/heart1.svg';
import celsius from '../img/SVG/degree-celsius.svg';
import fahrenheit from '../img/SVG/degree-fahrenheit.svg';


import { useSelector, useDispatch } from 'react-redux';
import { getFirstDay } from '../state/weather/dailyFor5Slice'
import { favoritesActions } from '../state/weather/favoritesSlice';


function BtnFavorites() {
    const dispatch = useDispatch();
    const firstDay = useSelector(getFirstDay);
    const isFavorite = useSelector(state => state.favorites.isFavorite)
    const cityId = useSelector(state => state.favorites.cityKey)
    const cityName = useSelector(state => state.favorites.cityName)
    const countryName = useSelector(state => state.favorites.countryName)

    const isCelsius = useSelector(state => state.favorites.unitsType)

    // console.log(firstDay);
    let icon = firstDay && firstDay.Day.Icon;
    let temperature = firstDay && firstDay.Temperature.Maximum.Value;
    let title = firstDay && firstDay.Day.IconPhrase
    let unitsType = firstDay && firstDay.Temperature.Maximum.UnitType;

    const favoritesToggle = () => {
        // dispatch(favoritesActions.toggleIcon({ id: cityId, }))

        dispatch(favoritesActions.toggleItemToFavorites({
            id: cityId,
            cityName,
            countryName,
            icon,
            title,
            temperature,
            unitsType,
        }))
    }
    const unitToggle = () => {
        dispatch(favoritesActions.unitsToggle(unitsType, temperature))
    }
    return (
        <>
            <div onClick={favoritesToggle}>
                {isFavorite && <img src={heart2} alt="remove"></img>}
                {!isFavorite && <img src={heart1} alt="add item"></img>}

            </div>
            <div onClick={unitToggle}>
                {!isCelsius && <img src={celsius} alt='celsius' />}
                {isCelsius && <img src={fahrenheit} alt='fahrenheit' />}
            </div>
        </>

    )
}

export default BtnFavorites;