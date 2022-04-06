import React from 'react'

function WeatherDayCard({
    key,
    data
}) {
    return (
        <section >
            {Object.keys(data).length === 0
                ? (<h3>Loading...</h3>
                ) : (
                    <div className="card__content" key={key}>

                        <img className="card__dayIcon" src={`https://developer.accuweather.com/sites/default/files/${data.Day.Icon.toString().length === 2 ? data.Day.Icon : `0${data.Day.Icon}`}-s.png`} alt="weather-icon" />
                        <div className="card__date">
                            {new Date(data.Date).toDateString()}
                        </div>
                        <h4 className="card__header">
                            {data.Day.IconPhrase}
                        </h4>
                        <div className="card__max-min">
                            <div className="card__maxTemp"> {data.Temperature.Maximum.Value}&#176; - </div>
                            <div className="card__minTemp">&nbsp; {data.Temperature.Minimum.Value}&#176;  </div>
                            <div className="card__minTemp"> &nbsp; {data.Temperature.Minimum.Unit}</div>
                        </div>
                        {/* <h4 className="card__header">At Night {data.Night.IconPhrase}</h4> */}
                        {/* <img className="card__nightIcon" src={`https://developer.accuweather.com/sites/default/files/${data.Night.Icon.toString().length === 2 ? data.Night.Icon : `0${data.Night.Icon}`}-s.png`} alt="weather-icon" /> */}
                    </div >
                )}

        </section>
    )
}

export default WeatherDayCard