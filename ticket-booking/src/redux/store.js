/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "./features/api/baseAPI";
import selectTicketSlice from "./features/selectTicketSlice/selectTicketSlice";
import userSlice from "./features/userSlice/userSlice";

const store = configureStore({
	reducer: {
		selectTicketSlice,
		userSlice,
		[baseAPI.reducerPath]: baseAPI.reducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseAPI.middleware),
});


export default store;