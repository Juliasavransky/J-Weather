import React from 'react'

function WeatherDayCard({
    key,
    icon,
    date,
    title,
    tempMax,
    tempMin,
    units,
    unitsType
}) {
    return (
        < >
            <div className="card__content" key={key}>

                <img className="card__dayIcon"
                    src={`https://developer.accuweather.com/sites/default/files/${icon.toString().length === 2
                        ? icon
                        : `0${icon}`}-s.png`} alt="weather-icon" />

                <div className="card__date">
                    {date}
                </div>

                <h4 className="card__header">
                    {title}
                </h4>

                <div className="card__max-min">
                    <div className="card__maxTemp"> {tempMax}</div>
                    <div>&#176; - </div>
                    <div className="card__minTemp">&nbsp; {tempMin}</div>
                    <div>&#176;  </div>
                    <div className="card__minTemp"> &nbsp; {units}</div>
                </div>
            </div >
        </ >
    )
}

export default WeatherDayCard