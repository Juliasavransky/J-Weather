import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import CurrentCity from './CurrentCity';
import DisplayDailyFor5 from './DisplayDailyFor5';
import { addDailyFor5 } from '../state/weather/dailyFor5Slice';

const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;


const Home = () => {
    const dispatch = useDispatch();
    const cityKey = "215854" //default Tel-Aviv

    useEffect(() => { //getting the data from the api by the city key 
        const fetchCurrentWeather = async () => {
            const result = await axios
                .get(`${BASE_URL}currentconditions/v1/${cityKey}?apikey=${API_KEY_WEATHER}`)
                .catch((error) => {
                    console.log('Error:', error);
                })
            dispatch(addDailyFor5(result.data));
            console.log('fetchCurrentWeather', result.data)
        }
        fetchCurrentWeather();

    }, []);

    // useEffect(() => { //getting the data from the api by the city key for 5 days
    //     if (cityKey) {
    //         const fetchDailyFor5 = async () => {
    //             setError(false);
    //             setIsLoading(true);
    //             try {
    //                 const result = await axios.get(`${BASE_URL}forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY_WEATHER}&metric=true`);
    //                 setDailyFor5(result.data);
    //                 console.log('setDailyFor5', result.data);
    //                 setIsLoading(false);
    //             }
    //             catch (error) {
    //                 setError(true);
    //                 setIsLoading(false);
    //             }
    //         }
    //         fetchDailyFor5()
    //     }
    // }, [cityKey]);
    return (
        < >
            <CurrentCity />
            <DisplayDailyFor5 />
        </>
    )
}

export default Home


  // const timeStamp = "2022-03-30T07:00:00+03:00";
  // let date = new Date(timeStamp).getUTCDay();
  // console.log(date)
  // const dayOfTheWeek = {
  //   0: "Sunday",
  //   1: "Monday",
  //   2: "Tuesday",
  //   3: "Wednesday",
  //   4: "Thursday",
  //   5: "Friday",
  //   6: "Saturday"
  // }

  // const dayWeatherHeader = test.item.Day.IconPhrase;
  // const nightWeatherHeader = test.item.Night.IconPhrase;

  // const dayIcons = test.item.Day.Icon;
  // const nightIcons = test.item.Night.Icon;
  // const TemperatureMax = test.item.Temperature.Maximum.Value;
  // const TemperatureUnit = test.item.Temperature.Maximum.Unit;
  // const TemperatureMin = test.item.Temperature.Minimum.Value;
  // const TemperatureUnit = test.item.Temperature.Minimum.Unit;





