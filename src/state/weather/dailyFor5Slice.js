import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const fetchWeatherFor5 = createAsyncThunk("dailyFor5/fetchWeatherFor5", async (cityKey) => {

    const result = await axios
        .get(`${BASE_URL}forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY_WEATHER}`)

    return result.data.DailyForecasts;
})

const initialState = {
    dailyFor5: [],
}

const dailyFor5Slice = createSlice({
    name: "dailyFor5",
    initialState,
    reducers: {
        addDailyFor5: (state, { payload }) => {
            state.dailyFor5 = payload;
        },
    },
    extraReducers: {
        [fetchWeatherFor5.pending]: () => {
            console.log("pending")
        },
        [fetchWeatherFor5.fulfilled]: (state, { payload }) => {
            console.log("fulfilled")
            return { ...state, dailyFor5: payload }
        },
        [fetchWeatherFor5.rejected]: () => {
            console.log("rejected")

        }
    }
});

export const { addDailyFor5 } = dailyFor5Slice.actions;
export const getAllDailyFor5 = (state) => state.dailyFor5.dailyFor5 //state.name.initialState
export default dailyFor5Slice.reducer;