/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "./features/api/baseAPI";
import selectTicketSlice from "./features/selectTicketSlice/selectTicketSlice";

const store = configureStore({
	reducer: {
		selectTicketSlice,
		[baseAPI.reducerPath]: baseAPI.reducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseAPI.middleware),
});


export default store;