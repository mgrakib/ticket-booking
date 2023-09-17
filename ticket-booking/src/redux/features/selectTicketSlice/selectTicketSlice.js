/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	busNumber: "",
	selectTickets: [],
};

const selectTicketSlice = createSlice({
	name: "selectTicket",
	initialState,
	reducers: {
		toggleSeatSelect: (state, { payload }) => {
			const alreadySelect = state.selectTickets.includes(payload);
			if (!alreadySelect) {
				if (state.selectTickets.length < 4) {
					state.selectTickets.push(payload);
				}
			} else {
				state.selectTickets.splice(state.selectTickets.indexOf(payload),1)
			}
		},
		toggleBusNumber: (state, { payload }) => {
			state.busNumber !== payload
				? (state.busNumber = payload)
				: (state.busNumber = "");
			state.selectTickets=[]
		},
	},
});

export const { toggleSeatSelect, toggleBusNumber } = selectTicketSlice.actions;
export default selectTicketSlice.reducer;
