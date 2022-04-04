import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dailyFor5: {},
}

const dailyFor5Slice = createSlice({
    name: "dailyFor5",
    initialState,
    reducers: {
        addDailyFor5: (state, { payload }) => {
            state.dailyFor5 = payload;
        },
    },
});

export const { addDailyFor5 } = dailyFor5Slice.actions;
export const getAllDailyFor5 = (state) => state.dailyFor5.dailyFor5 //state.name.initialState
export default dailyFor5Slice.reducer;