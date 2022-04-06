import React from 'react';
import { useSelector } from 'react-redux';
import { getAllDailyFor5 } from '../state/weather/dailyFor5Slice';
import WeatherDayCard from './WeatherDayCard';
import _ from 'lodash';

const DisplayDailyFor5 = () => {
    const dailyFor5 = useSelector(getAllDailyFor5);


    const showData = () => {

        if (!_.isEmpty(dailyFor5)) {
            return dailyFor5.map((item, index) => {
                return <WeatherDayCard key={index} data={item} />
            })

        } else {
            return <p>unable to get the data =$</p>
        }
    }

    return (
        <>
            {Object.keys(dailyFor5).length === 0
                ? (<h1 className="card">Loading...</h1>
                ) : (
                    <div className="card">
                        {/* <div>{renderDailyFor5}</div> */}
                        {showData()}
                    </div>
                )}

        </>
    );
}





export default DisplayDailyFor5


  // let renderDailyFor5 = "";


    // renderDailyFor5 =
    //     dailyFor5 && dailyFor5 ? (
    //         dailyFor5.map((item, index) => {
    //             <WeatherDayCard key={index} data={item} />
    //         })
    //     ) : (
    //         <div className="card-error" >
    //             <h3>{dailyFor5.error}</h3>
    //         </div >
    //     );

// const showData = () => {
    //     if (!_.isEmpty(dailyFor5.data)) {
    //         console.log(dailyFor5.data)
    //         return dailyFor5.data.map((item, index) => {
    //             return <div className="card__content" key={index}>

    //                 <img className="card__dayIcon" src={`https://developer.accuweather.com/sites/default/files/${item.Day.Icon.toString().length === 2 ? item.Day.Icon : `0${item.Day.Icon}`}-s.png`} alt="weather-icon" />
    //                 <div className="card__date">
    //                     {new Date(item.Date).toDateString()}
    //                 </div>
    //                 <h4 className="card__header">
    //                     {item.Day.IconPhrase}
    //                 </h4>
    //                 <div className="card__max-min">
    //                     <div className="card__maxTemp"> {item.Temperature.Maximum.Value}&#176; - </div>
    //                     <div className="card__minTemp">&nbsp; {item.Temperature.Minimum.Value}&#176;  </div>
    //                     <div className="card__minTemp"> &nbsp; {item.Temperature.Minimum.Unit}</div>
    //                 </div>
    //                 {/* <h4 className="card__header">At Night {item.Night.IconPhrase}</h4> */}
    //                 {/* <img className="card__nightIcon" src={`https://developer.accuweather.com/sites/default/files/${item.Night.Icon.toString().length === 2 ? item.Night.Icon : `0${item.Night.Icon}`}-s.png`} alt="weather-icon" /> */}
    //             </div >

    //         })

    //     }

    //     if (dailyFor5.loading) {
    //         return <p>Loading...</p>
    //     }
    //     if (dailyFor5.errorMsg !== "") {
    //         <p>{dailyFor5.errorMsg}</p>
    //     }
    //     return <p>unable to get the data =~~</p>
    // }