import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    busStationName : []
}
const busStationNameSlice = createSlice({
    name: "busStationNameSlice",
    initialState,
    reducers: {
        setBusStationName: (state, { payload }) => {
            state.busStationName = payload
        }
    }
});



export const { setBusStationName } = busStationNameSlice.actions;

export default busStationNameSlice.reducer;