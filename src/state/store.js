// import { createStore, applyMiddleware } from "redux"; //old way
// // import { composeWithDevtools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from "./reducers/rootReducer";

// const store = createStore(
//     rootReducer,
//     // composeWithDevtools(applyMiddleware(thunk))
//     applyMiddleware(thunk)

// )

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import dailyFor5Reducer from './weather/dailyFor5Slice';

const store = configureStore({
    reducer: dailyFor5Reducer,
})
export default store;

