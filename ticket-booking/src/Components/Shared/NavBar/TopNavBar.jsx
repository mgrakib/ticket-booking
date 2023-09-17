/** @format */
"use client";

import { BsTelephone } from "react-icons/bs";
import { LuMailOpen } from "react-icons/lu";
import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import Container from "../../Container/Container";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			onClick={() => {
				setIsOpen(false);
			}}
			className=' text-[13px] py-2'
		>
			<Container>
				<div className='flex justify-between items-center'>
					{/* contact  */}
					<div className='flex items-center gap-5 text-gray-500'>
						<div className='flex items-center gap-2 '>
							{" "}
							<BsTelephone className='text-[#0E9E4D] ' /> +44
							45678908
						</div>
						<div className='flex items-center gap-2 '>
							<LuMailOpen className='text-[#0E9E4D] ' />{" "}
							example@gmail.com
						</div>
					</div>

					{/* sing up  */}
					<div className='flex items-center gap-5'>
						<div className='flex items-center gap-5 border border-gray-200 px-2 py-1 relative'>
							<div className='flex items-center gap-1 '>
								<IoLogIn className='text-[#0E9E4D] text-xl ' />{" "}
								Sing In
							</div>

							<div
								onClick={event => {
									event.stopPropagation();
									setIsOpen(!isOpen);
								}}
								className='flex items-center gap-1 cursor-pointer'
							>
								<FaUserPlus className='text-[#0E9E4D] text-xl ' />{" "}
								<p>Sing Up</p>
								<div
									className={`absolute bg-white shadow-[0px_1px_5px_rgba(0,0,0,.5)] top-[110%] -right-1 z-50 rounded-md duration-300 ${
										isOpen
											? "max-h-[120px] duration-300"
											: "max-h-0"
									} overflow-hidden`}
								>
									<Link to={"/signup/user"}>
										<div className=' px-4 py-2 cursor-pointer'>
											User Sing Up
										</div>
									</Link>

									<Link to={"/signup/busOperator"}>
										<div className=' px-4 py-2 cursor-pointer'>
											Bus Oparator Sing Up
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default TopNavBar;
