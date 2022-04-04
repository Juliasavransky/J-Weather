import { combineReducers } from 'redux';
import dailyFor5Reducer from './dailyFor5Reducer'
import cityByKeyReducer from './cityByKeyReducer'

const rootReducer = combineReducers({
    GetDailyFor5: dailyFor5Reducer,
    GetWeatherByKey: cityByKeyReducer,
})

export default rootReducer;