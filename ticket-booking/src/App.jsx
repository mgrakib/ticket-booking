/** @format */

import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Shared/NavBar/NavBar";
import TopNavBar from "./Components/Shared/NavBar/TopNavBar";
import ContactUs from "./Components/HomePageCompo/ContactUs/ContactUs";
import Footer from "./Components/Shared/Footer/Footer";


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const { pathname } = useLocation();
	const routeName = pathname.split("/").slice(1, -1).join("/");

	return (
		<div className='overflow-x-hidden'>
			{routeName !== "signup" && routeName !== "singin" && (
				<div className=' '>
					<div className='hidden md:block border-b border-gray-200'>
						<TopNavBar />
					</div>

					<NavBar />
				</div>
			)}
			<div>
				<Outlet />
			</div>

			{routeName !== "signup" && routeName !== "singin" && (
				<div>
					<ContactUs />
					<Footer />
				</div>
			)}
		</div>
	);
}

export default App;
