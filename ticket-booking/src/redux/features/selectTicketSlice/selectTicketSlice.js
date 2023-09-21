/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	busNumber: "",
	selectedSeats: [],
};

const selectTicketSlice = createSlice({
	name: "selectTicket",
	initialState,
	reducers: {
		toggleSeatSelect: (state, { payload }) => {
			const alreadySelect = state.selectedSeats.includes(payload);
			if (!alreadySelect) {
				// check one user select max 4 
				if (state.selectedSeats.length < 4) {
					state.selectedSeats.push(payload);
				}
			} else {
				state.selectedSeats.splice(state.selectedSeats.indexOf(payload),1)
			}
		},
		toggleBusNumber: (state, { payload }) => {
			state.busNumber !== payload
				? (state.busNumber = payload)
				: (state.busNumber = "");
			state.selectedSeats=[]
		},
	},
});

export const { toggleSeatSelect, toggleBusNumber } = selectTicketSlice.actions;
export default selectTicketSlice.reducer;
