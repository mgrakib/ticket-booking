/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "./features/api/baseAPI";
import selectTicketSlice from "./features/selectTicketSlice/selectTicketSlice";
import userSlice from "./features/userSlice/userSlice";
import busStationNameSlice from './features/busStationNameSlice/busStationNameSlice'
const store = configureStore({
	reducer: {
		selectTicketSlice,
		userSlice,
		busStationNameSlice,
		[baseAPI.reducerPath]: baseAPI.reducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseAPI.middleware),
});


export default store;