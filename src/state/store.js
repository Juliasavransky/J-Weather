import { configureStore } from '@reduxjs/toolkit';
import dailyFor5Reducer from './weather/dailyFor5Slice';
import favoritesSliceReducer from './weather/favoritesSlice';

const store = configureStore({
    reducer: {
        dailyFor5: dailyFor5Reducer,
        favorites: favoritesSliceReducer,
    },
})
export default store;

