/** @format */

import blank_char from "../../assets/blank_chair.png";
import booked_chair from "../../assets/booked_chair.png";
import select_chair from "../../assets/select_chair.png";
import wheel from "../../assets/wheel.png";
import { Button, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import "./SeatsInfo.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBusNumber, toggleSeatSelect } from "../../redux/features/selectTicketSlice/selectTicketSlice";

import warning from "../../assets/warning.png";
import { Link, useNavigate } from "react-router-dom";

const SeatsInfo = ({
	busNumber,
	rent,
	totalSits,
	bookedSitsNumber,
	isFullMessageShow,
	setIsFullMessageShow,
	handelViewSeat,
	_id,
}) => {
	const seatsRow = [...Array(parseInt(totalSits / 4)).keys()];
	const navigate = useNavigate();

	const [seatNumber, setSeatNumber] = useState(null);
	const handleMouseEnter = num => {
		setSeatNumber(num);
	};

	const handleMouseLeave = () => {
		setSeatNumber(null);
	};

	const { busNumber: selectBusNumber, selectedSeats } = useSelector(
		state => state.selectTicketSlice
	);

	const dispatch = useDispatch();

	const isSeatSelected = seatName => {
		return selectedSeats.some(ticket => ticket === seatName);
	};
	const isBookedSeat = seatName => {
		const result = bookedSitsNumber.some(ticket => ticket === seatName);

		return result;
	};


	const [isSeatBlank, setIsSeatBlank] = useState(false)
	const handelNavigate = () => {
		if (!selectedSeats.length) {
			setIsSeatBlank(true);
		} else {
			navigate("/booking-bus-trip-info");
		}
		
	}

	
	return (
		<div className=''>
			<p className='text-base font-bold text-[#1E9D49]'>
				Choose your seat(s)
			</p>

			<div className='mt-2 pt-2 border-t border-gray-400'>
				<div className='flex flex-col md:flex-row gap-5 md:gap-10'>
					<div className='w-full md:w-[50%]'>
						<p className='text-[13px]'>
							Hold the cursor on seats for seat numbers, click to
							select or deselect.
						</p>

						<div className='w-[70%] md:w-[50%]  p-7 mx-auto mt-4 border border-gray-400 rounded'>
							{/* driver  */}
							<div className=''>
								<div
									style={{
										background: `url(${wheel})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
									}}
									className='w-[22px] h-[22px] bg-no-repeat bg-cover ml-auto'
								></div>

								<div className='mt-5 '>
									{seatsRow.map((row, index) => (
										<div
											key={row}
											className='flex justify-between  w-full'
										>
											<div className='flex gap-2'>
												{/* 1 */}
												<Tooltip
													followCursor
													TransitionComponent={Zoom}
													title={`[${String.fromCharCode(
														65 + index
													)}1]`}
												>
													<div
														onClick={() => {
															isBookedSeat(
																`${String.fromCharCode(
																	65 + index
																)}1`
															) ||
																dispatch(
																	toggleSeatSelect(
																		`${String.fromCharCode(
																			65 +
																				index
																		)}1`
																	)
																);

															selectedSeats.length ===
																4 &&
																setIsFullMessageShow(
																	true
																);
														}}
														onMouseEnter={() =>
															handleMouseEnter(
																`[${String.fromCharCode(
																	65 + index
																)}1]`
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
														className={`w-[22px] h-[22px]  mb-2 cursor-pointer ${
															selectBusNumber ===
																busNumber &&
															isBookedSeat(
																`${String.fromCharCode(
																	65 + index
																)}1`
															)
																? "bookedSeat"
																: isSeatSelected(
																		`${String.fromCharCode(
																			65 +
																				index
																		)}1`
																  )
																? "selectSeat"
																: seatNumber ===
																  `[${String.fromCharCode(
																		65 +
																			index
																  )}1]`
																? "selectSeat"
																: "seat"
														} `}
													></div>
												</Tooltip>

												{/* 2 */}
												<Tooltip
													followCursor
													TransitionComponent={Zoom}
													title={`[${String.fromCharCode(
														65 + index
													)}2]`}
												>
													<div
														onClick={() => {
															isBookedSeat(
																`${String.fromCharCode(
																	65 + index
																)}2`
															) ||
																dispatch(
																	toggleSeatSelect(
																		`${String.fromCharCode(
																			65 +
																				index
																		)}2`
																	)
																);

															selectedSeats.length ===
																4 &&
																setIsFullMessageShow(
																	true
																);
														}}
														onMouseEnter={() =>
															handleMouseEnter(
																`[${String.fromCharCode(
																	65 + index
																)}2]`
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
														className={`w-[22px] h-[22px]  mb-2 cursor-pointer ${
															selectBusNumber ===
																busNumber &&
															isBookedSeat(
																`${String.fromCharCode(
																	65 + index
																)}2`
															)
																? "bookedSeat"
																: isSeatSelected(
																		`${String.fromCharCode(
																			65 +
																				index
																		)}2`
																  )
																? "selectSeat"
																: seatNumber ===
																  `[${String.fromCharCode(
																		65 +
																			index
																  )}2]`
																? "selectSeat"
																: "seat"
														} `}
													></div>
												</Tooltip>
											</div>
											<div className='flex gap-2'>
												{/* 3 */}
												<Tooltip
													followCursor
													TransitionComponent={Zoom}
													title={`[${String.fromCharCode(
														65 + index
													)}3]`}
												>
													<div
														onClick={() => {
															isBookedSeat(
																`${String.fromCharCode(
																	65 + index
																)}3`
															) ||
																dispatch(
																	toggleSeatSelect(
																		`${String.fromCharCode(
																			65 +
																				index
																		)}3`
																	)
																);

															selectedSeats.length ===
																4 &&
																setIsFullMessageShow(
																	true
																);
														}}
														onMouseEnter={() =>
															handleMouseEnter(
																`[${String.fromCharCode(
																	65 + index
																)}3]`
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
														className={`w-[22px] h-[22px]  mb-2 cursor-pointer ${
															selectBusNumber ===
																busNumber &&
															isBookedSeat(
																`${String.fromCharCode(
																	65 + index
																)}3`
															)
																? "bookedSeat"
																: isSeatSelected(
																		`${String.fromCharCode(
																			65 +
																				index
																		)}3`
																  )
																? "selectSeat"
																: seatNumber ===
																  `[${String.fromCharCode(
																		65 +
																			index
																  )}3]`
																? "selectSeat"
																: "seat"
														} `}
													></div>
												</Tooltip>

												{/* 4 */}
												<Tooltip
													followCursor
													TransitionComponent={Zoom}
													title={`[${String.fromCharCode(
														65 + index
													)}4]`}
												>
													<div
														onClick={() => {
															isBookedSeat(
																`${String.fromCharCode(
																	65 + index
																)}4`
															) ||
																dispatch(
																	toggleSeatSelect(
																		`${String.fromCharCode(
																			65 +
																				index
																		)}4`
																	)
																);
															selectedSeats.length ===
																4 &&
																setIsFullMessageShow(
																	true
																);
														}}
														onMouseEnter={() =>
															handleMouseEnter(
																`[${String.fromCharCode(
																	65 + index
																)}4]`
															)
														}
														onMouseLeave={
															handleMouseLeave
														}
														className={`w-[22px] h-[22px]  mb-2 cursor-pointer ${
															selectBusNumber ===
																busNumber &&
															isBookedSeat(
																`${String.fromCharCode(
																	65 + index
																)}4`
															)
																? "bookedSeat"
																: isSeatSelected(
																		`${String.fromCharCode(
																			65 +
																				index
																		)}4`
																  )
																? "selectSeat"
																: seatNumber ===
																  `[${String.fromCharCode(
																		65 +
																			index
																  )}4]`
																? "selectSeat"
																: "seat"
														} `}
													></div>
												</Tooltip>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{isFullMessageShow && (
							<div className='border border-[#D10808] rounded-md py-2 px-3 mt-4 text-[#D10808] flex items-center gap-2'>
								<div className='w-[30px] h-[30px]'>
									<img
										src={warning}
										alt=''
									/>
								</div>
								<p className='text-[14px]'>
									Maximum of 4 seat(s) can be booked
									at-a-time.
								</p>
							</div>
						)}
					</div>

					{/* selects seats  */}
					<div className='w-full md:w-[50%]'>
						{/* select sets title  */}
						<div className='flex justify-between items-center'>
							<div className='flex items-center gap-3'>
								<img
									src={blank_char}
									alt=''
								/>

								<p className='text-[13px]'>Available Seats</p>
							</div>
							<div className='flex items-center gap-3'>
								<img
									src={booked_chair}
									alt=''
								/>

								<p className='text-[13px]'>Booked Seats</p>
							</div>
							<div className='flex items-center gap-3'>
								<img
									src={select_chair}
									alt=''
								/>

								<p className='text-[13px]'>Selected Seats</p>
							</div>
						</div>

						<div className='mt-5'>
							<div className='bg-[#F7F7F7] px-2 py-[10px] grid grid-cols-3 text-[14px] border-b border-gray-400'>
								<div className='col-span-1 font-bold'>
									Seats
								</div>
								<div className='col-span-1 font-bold'>Fare</div>
								<div className='col-span-1 font-bold'>
									Class
								</div>
							</div>

							<div className='mt-3 text-[13px]  md:min-h-[180px] '>
								{selectBusNumber === busNumber &&
									selectedSeats?.map(ticket => (
										<div
											key={ticket}
											className='px-2 py-[10px] grid grid-cols-3 '
										>
											<div className='col-span-1 '>
												{ticket}
											</div>
											<div className='col-span-1 '>
												{parseFloat(rent).toFixed(2)}
											</div>
											<div className='col-span-1 '>
												Economy
											</div>
										</div>
									))}
							</div>

							<div className='mt-5'>
								<div className='p-1 border border-gray-200 bg-[#F7F7F7]'>
									<p className='font-bold text-[18px] text-[#219051]'>
										Total:{" "}
										{selectedSeats.length === 0
											? 0
											: selectedSeats.length * rent}
									</p>
								</div>

								{isSeatBlank && (
									<div>
										<p className='text-[12px] py-1 px-2 bg-red-100 mt-1'>
											Please choose your seat before you
											continue.
										</p>
									</div>
								)}
							</div>
						</div>

						<div className='mt-5 flex items-center justify-between'>
							<Button
								onClick={handelNavigate}
								className='bg-[#219051] text-white'
							>
								Continue
							</Button>

							<div>
								<p
									onClick={() => {
										setIsFullMessageShow(false);
										handelViewSeat(_id);
										dispatch(toggleBusNumber(busNumber));
									}}
									className='text-xl font-semibold text-[#219051] border-b-2 border-[#219051] cursor-pointer hover:border-transparent hover:text-[#92e8b7]'
								>
									Close
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeatsInfo;
