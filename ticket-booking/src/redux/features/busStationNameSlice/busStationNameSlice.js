import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	busStationName: [
		"Bagerhat",
		"Bakerganj",
		"Bandarban",
		"Barguna",
		"Barishal",
		"Bhola",
		"Bogura",
		"Brahmanbaria",
		"Chandpur",
		"Chapainawabganj",
		"Chattogram",
		"Chuadanga",
		"Comilla",
		"Cox's Bazar",
		"Dhaka",
		"Dinajpur",
		"Faridpur",
		"Feni",
		"Gaibandha",
		"Gazipur",
		"Gopalganj",
		"Jamalpur",
		"Jashore",
		"Jhenaidah",
		"Joypurhat",
		"Khagrachari",
		"Khulna",
		"Kishoreganj",
		"Kurigram",
		"Kushtia",
		"Lakshmipur",
		"Lalmonirhat",
		"Madaripur",
		"Magura",
		"Manikganj",
		"Munshiganj",
		"Mymensingh",
		"Naogaon",
		"Narail",
		"Narayanganj",
		"Natore",
		"Netrakona",
		"Nilphamari",
		"Noakhali",
		"Pabna",
		"Panchagarh",
		"Patuakhali",
		"Pirojpur",
		"Rajshahi",
		"Rangamati",
		"Rangpur",
		"Satkhira",
		"Sherpur",
		"Shariatpur",
		"Sirajganj",
		"Sylhet",
		"Tangail",
		"Thakurgaon",
	],
};
const busStationNameSlice = createSlice({
    name: "busStationNameSlice",
    initialState,
    reducers: {
        
    }
});




export default busStationNameSlice.reducer;