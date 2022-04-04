import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GetWeatherByKey from '../actions/GetWeatherByKey';
import _ from 'lodash';


const CurrentCity = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    const cityByKeyReducer = useSelector(state => state.GetWeatherByKey)

    // useEffect(() => {
    //     fetchData()
    // }, []);

    // const fetchData = (cityKey = '215854') => {
    //     dispatch(GetWeatherByKey(cityKey))
    // }

    const showData = () => {
        if (!_.isEmpty(cityByKeyReducer.data)) {
            console.log(cityByKeyReducer.data)
            return cityByKeyReducer.data.map(item => {
                return <div className="card__content" key={item.Key}>

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
            })

        }

        if (cityByKeyReducer.loading) {
            return <p>Loading...</p>
        }
        if (cityByKeyReducer.errorMsg !== "") {
            <p>{cityByKeyReducer.errorMsg}</p>
        }
        return <p>unable to get the data city BY KEY</p>
    }

    return (
        <div className="card">
            {/* {showData()} */}
        </div>
    )
}

export default CurrentCity