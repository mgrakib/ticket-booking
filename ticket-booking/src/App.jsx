/** @format */

import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Shared/NavBar/NavBar";
import TopNavBar from "./Components/Shared/NavBar/TopNavBar";
import ContactUs from "./Components/HomePageCompo/ContactUs/ContactUs";
import Footer from "./Components/Shared/Footer/Footer";


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
	 const [navDrowerIsOpen, setNavDrowerIsOpen] = useState(false);
	const { pathname } = useLocation();

	const routeName = pathname.split("/").slice(1, -1).join("/");

	return (
		<div onClick={() => setNavDrowerIsOpen(false)} className={`overflow-x-hidden relative ${navDrowerIsOpen && 'overflow-y-hidden h-screen'}`}>
			{routeName !== "signup" && routeName !== "singin" && (
				// dextop
				<div className=' relative z-40'>
					<div className='hidden md:block border-b border-gray-200'>
						<TopNavBar />
					</div>

					<div className='relative '>
						<NavBar
							navDrowerIsOpen={navDrowerIsOpen}
							setNavDrowerIsOpen={setNavDrowerIsOpen}
						/>
					</div>
				</div>

				// mobile
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
