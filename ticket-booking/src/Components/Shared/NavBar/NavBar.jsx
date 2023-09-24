/** @format */

import {  useEffect, useState } from "react";
import Container from "../../Container/Container";
import { Link } from "react-router-dom";
import logo from '../../../../public/logo.png'
import "./NavBar.css";
import { Button } from "@mui/material";
import TopNavBar from "./TopNavBar";

const NavBar = ({ navDrowerIsOpen, setNavDrowerIsOpen }) => {
	const [activeTav, setActive] = useState('Home')
	const navItems = [
		{
			path: "/",
			title: "Home",
		},
		{
			path: "/about",
			title: "About",
		},
		{
			path: "/faqs",
			title: "FAQs",
		},
		{
			path: "/blogs",
			title: "Blog",
		},
		{
			path: "/contact",
			title: "Contact",
		},
		{
			path: "/invoice-page",
			title: "Invoice Download",
		},
	];

	useEffect(() => {
		const handleScroll = () => {
			const header = document.getElementById("header");
			header.classList.toggle("stickyNavbar", window.scrollY > 120);
		};

		// Attach the event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		// TODO: Make nav link for mobile
		<div
			id='header'
			className=' w-full z-50 bg-white  border-b border-gray-200 py-2  duration-700 relative'
		>
			<Container>
				<div className='flex items-center justify-between'>
					<div className='w-[120px]'>
						<img
							src={logo}
							alt=''
							className='w-[120px]'
						/>
					</div>

					<div className='hidden md:flex items-center text-gray-500'>
						{navItems.map(item => (
							<Link
								key={item?.path}
								to={item?.path}
							>
								<li
									onClick={() => setActive(item?.title)}
									className={`${
										activeTav === item.title &&
										"text-[#219051] active-navbar"
									} list-none py-1 px-4 hover:text-[#219051] font-semibold hover:active-navbar cursor-pointer relative duration-1000`}
								>
									{item.title}
								</li>
							</Link>
						))}
					</div>

					<div className='hidden md:block'>
						{/* <button className='py-1 px-3 md:py-2 md:px-4 bg-[#0E9E4D]  text-white rounded'></button> */}
						<Button
							variant='contained'
							style={{ background: "#219051" }}
						>
							BUY TICKETS
						</Button>
					</div>

					<div
						onClick={e => {
							e.stopPropagation();
							setNavDrowerIsOpen(!navDrowerIsOpen);
						}}
						className='z-[9999]  flex flex-col gap-[2px] relative md:hidden'
					>
						<div
							className={`w-[15px] h-[2px] ${
								navDrowerIsOpen && "rotate-45 "
							} bg-black origin-center duration-300`}
						></div>
						<div
							className={` w-[15px] h-[2px] ${
								navDrowerIsOpen && "opacity-0"
							} duration-400 bg-black`}
						></div>
						<div
							className={`w-[15px] h-[2px] ${
								navDrowerIsOpen && "-rotate-45 absolute"
							} bg-black origin-center duration-300`}
						></div>
					</div>
				</div>
			</Container>

			<div
				className={`absolute bg-white py-3 px-3 min-w-[60%] h-screen right-0 duration-300 ${
					navDrowerIsOpen ? "translate-x-0" : "translate-x-[100%]"
				} top-0 z-30`}
			>
				<div className='mt-[60px]'>
					<div className=' items-center text-gray-500'>
						{navItems.map(item => (
							<Link
								key={item?.path}
								to={item?.path}
							>
								<li
									onClick={() => setActive(item?.title)}
									className={`${
										activeTav === item.title &&
										"text-[#219051] active-navbar"
									} list-none py-1 px-4 hover:text-[#219051] font-semibold hover:active-navbar cursor-pointer relative duration-1000`}
								>
									{item.title}
								</li>
							</Link>
						))}
					</div>

					<div className="mt-5">
						<TopNavBar />
					</div>
				</div>
			</div>

			<div
				className={`bg-[#00000086] w-screen h-screen absolute duration-500 top-0 left-0 z-20 ${
					navDrowerIsOpen ? "translate-x-0 " : "translate-x-[100%]"
				}`}
			></div>
		</div>
	);
};

export default NavBar;
