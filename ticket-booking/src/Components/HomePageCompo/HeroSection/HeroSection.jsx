/** @format */

import { BsFillCalendarCheckFill } from "react-icons/bs";

import runningBus from "../../../../public/running_bus.png";
import "./HeroSection.css";

import Container from "../../Container/Container";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
const HeroSection = () => {
	const [fromCity, setFromCity] = useState(null)
	const [toCity, setToCity] = useState(null)
	const [doj, setDoj] = useState(null)

	const { busStationName: stationsName=[] } = useSelector(
		state => state?.busStationNameSlice
	);

	
	return (
		<div className='cityBannar pt-2 md:pt-8 pb-20 md:pb-16 relative'>
			<Container>
				<div className='py-5 md:py-8 flex flex-col md:flex-row items-center justify-center gap-y-5 md:gap-y-0 text-center md:text-start'>
					<div className='w-full md:w-[50%] flex flex-col gap-5 md:gap-10 items-center md:items-start'>
						<h1 className='text-3xl md:text-5xl font-bold md:leading-[52px]'>
							Get Your Ticket Online, Easy and Safely
						</h1>

						<Button
							variant='contained'
							style={{ background: "#219051" }}
							className='py-1 md:py-2 px-4 md:px-6  text-white font-semibold'
						>
							GET TICKET NOW
						</Button>
					</div>

					{/* from  */}
					<div className='w-full md:w-[50%] flex flex-col items-center md:items-start gap-3 md:gap-10 '>
						<p className='text-xl md:text-3xl font-semibold text-center '>
							Choose Your Ticket
						</p>

						<div className='w-[100%] '>
							<div className='py-10 px-2 md:px-5 bg-white shadow-[0_0_5px_rgba(0,0,0,.3)] flex flex-col gap-5'>
								<div className='grid grid-cols-12 gap-5'>
									<div className='col-span-6 '>
										<div className='flex items-center gap-2 relative'>
											<div className='trangle-shape bg-[#0E9E4D] w-[15px] h-[15px] absolute left-1'></div>

											<select
												onChange={event =>
													setFromCity(
														event.target.value
													)
												}
												name=''
												id=''
												className='w-full border border-[#0E9E4D] outline-none px-4 py-2 rounded'
											>
												<option
													value=''
													hidden
												>
													Pickup Point
												</option>

												{stationsName?.map(
													(station, index) => {
														return (
															<option
																key={index}
																value={station}
															>
																{station}
															</option>
														);
													}
												)}
											</select>
										</div>
									</div>
									<div className='col-span-6 '>
										<div className='flex items-center gap-2 relative'>
											<div className='trangle-shape bg-[#0E9E4D] w-[15px] h-[15px] absolute left-1'></div>

											<select
												onChange={event =>
													setToCity(
														event.target.value
													)
												}
												name=''
												id=''
												className='w-full border border-[#0E9E4D] outline-none px-4 py-2 rounded'
											>
												<option
													value=''
													hidden
												>
													Dropping Point
												</option>
												{stationsName?.map(
													(station, index) => {
														return (
															<option
																key={index}
																value={station}
															>
																{station}
															</option>
														);
													}
												)}
											</select>
										</div>
									</div>
								</div>

								<div className='grid grid-cols-12'>
									<div className='col-span-12 '>
										<div className='flex items-center gap-2 relative '>
											<div className=' text-[#0E9E4D]  absolute left-1'>
												<BsFillCalendarCheckFill />
											</div>
											<input
												onChange={event =>
													setDoj(event.target.value)
												}
												type='date'
												name=''
												id='dateTime'
												className='w-full border border-[#0E9E4D] outline-none px-6 py-2 rounded'
											/>
										</div>
									</div>
								</div>

								<div className='flex items-center justify-center'>
									{fromCity && toCity && doj ? (
										<Link
											to={`/bus/search?fromCity=${fromCity}&toCity=${toCity}&doj=${doj}`}
										>
											<Button
												variant='contained'
												style={{
													background: "#219051",
												}}
												className='py-1 md:py-2 px-4 md:px-6  text-white font-semibold'
											>
												Find Ticket
											</Button>
										</Link>
									) : (
										<Button
											variant='contained'
											style={{
												background: "#219051",
											}}
											className='py-1 md:py-2 px-4 md:px-6  text-white font-semibold'
										>
											Find Ticket
										</Button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<div className='absolute  bottom-0 -left-[200px] running-car-div'>
				<img
					src={runningBus}
					width={200}
					height={200}
					alt='running bus image'
					className=''
				/>
			</div>
		</div>
	);
};

export default HeroSection;
