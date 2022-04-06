import { configureStore } from '@reduxjs/toolkit';
import dailyFor5Reducer from './weather/dailyFor5Slice';

const store = configureStore({
    reducer: {
        dailyFor5: dailyFor5Reducer
    },
})
export default store;

