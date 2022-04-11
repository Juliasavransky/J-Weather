import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: [],
        isFavorite: false,
        cityKey: "",
        countryName: "",
        cityName: "",
    },
    reducers: {
        toggleItemToFavorites(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    cityName: newItem.cityName,
                    countryName: newItem.countryName,
                    icon: newItem.icon,
                    title: newItem.title,
                    temperature: newItem.temperature,
                    isFavorite: true,
                    unitsType: newItem.units,
                });

            } else {
                const newItem = action.payload;
                state.items = state.items.filter((item) => item.id !== newItem.id);
                state.isFavorite = false;
            }
        },
        // toggleIcon(state, action) {
        //     const newItem = action.payload;
        //     console.log(action.payload)
        //     const existingItem = state.items.find((item) => item.id === newItem.id);
        //     if (!existingItem) {
        //         state.isFavorite = true;
        //     } else {
        //         state.isFavorite = false;
        //     }

        // },
        getCityKey(state, action) {
            state.cityKey = action.payload
        },
        getCityName(state, action) {
            state.cityName = action.payload
        },
        getCountryName(state, action) {
            state.countryName = action.payload
        },
        removeFRomFavorites(state, action) {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
        unitsToggle(state, action) {
            const units = action.payload;

            if (units === 18) {
                let celsius = Math.round((state.items.temperature - 32) * (5 / 9))
                return celsius;
            } else {
                let fahrenheit = Math.round(((state.items.temperature * 9) / 5) + 32)
                return fahrenheit;
            }
        }
    }

}
)

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice.reducer;