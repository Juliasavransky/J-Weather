import React from 'react';
import { useSelector } from 'react-redux';
import { getAllDailyFor5 } from '../state/weather/dailyFor5Slice';
import WeatherDayCard from './WeatherDayCard';

const DisplayDailyFor5 = () => {
    const dailyFor5 = useSelector(getAllDailyFor5);
    // console.log(dailyFor5);
    return (
        <>
            {Object.keys(dailyFor5).length === 0
                ? (<h1 className="card">Loading...</h1>
                )
                : (
                    <div className="card">
                        {dailyFor5.map((item, index) => (
                            <WeatherDayCard
                                key={index}
                                icon={item.Day.Icon}
                                date={new Date(item.Date).toDateString()}
                                title={item.Day.IconPhrase}
                                tempMax={item.Temperature.Maximum.Value}
                                tempMin={item.Temperature.Minimum.Value}
                                units={item.Temperature.Minimum.Unit}
                                unitsType={item.Temperature.Maximum.unitsType}
                            />
                        ))}
                    </div>
                )}

        </>
    );
}

export default DisplayDailyFor5




