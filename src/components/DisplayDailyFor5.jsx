import React, { useEffect } from 'react'
import test from '../test.json'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash';
import GetDailyFor5 from '../actions/GetDailyFor5';

const DisplayDailyFor5 = () => {
    //state for 5 days api
    const dispatch = useDispatch()
    const dailyFor5 = useSelector(state => state.GetDailyFor5);

    // useEffect(() => {
    //     fetchData()
    // }, []);

    // const fetchData = (cityKey = '215854') => {
    //     dispatch(GetDailyFor5(cityKey))
    // }

    const showData = () => {
        if (!_.isEmpty(dailyFor5.data)) {
            console.log(dailyFor5.data)
            return dailyFor5.data.map((item, index) => {
                return <div className="card__content" key={index}>

                    <img className="card__dayIcon" src={`https://developer.accuweather.com/sites/default/files/${item.Day.Icon.toString().length === 2 ? item.Day.Icon : `0${item.Day.Icon}`}-s.png`} alt="weather-icon" />
                    <div className="card__date">
                        {new Date(item.Date).toDateString()}
                    </div>
                    <h4 className="card__header">
                        {item.Day.IconPhrase}
                    </h4>
                    <div className="card__max-min">
                        <div className="card__maxTemp"> {item.Temperature.Maximum.Value}&#176; - </div>
                        <div className="card__minTemp">&nbsp; {item.Temperature.Minimum.Value}&#176;  </div>
                        <div className="card__minTemp"> &nbsp; {item.Temperature.Minimum.Unit}</div>
                    </div>
                    {/* <h4 className="card__header">At Night {item.Night.IconPhrase}</h4> */}
                    {/* <img className="card__nightIcon" src={`https://developer.accuweather.com/sites/default/files/${item.Night.Icon.toString().length === 2 ? item.Night.Icon : `0${item.Night.Icon}`}-s.png`} alt="weather-icon" /> */}
                </div >

            })

        }

        if (dailyFor5.loading) {
            return <p>Loading...</p>
        }
        if (dailyFor5.errorMsg !== "") {
            <p>{dailyFor5.errorMsg}</p>
        }
        return <p>unable to get the data =~~</p>
    }
    return (
        <div className="card">
            {/* {showData()} */}
        </div>
    )
}

export default DisplayDailyFor5