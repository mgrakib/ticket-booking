/** @format */

import { Button } from "@mui/material";
import "./ShowAllTickets.css";
import moment from "moment";
import { useEffect, useState } from "react";
import SeatsInfo from "./SeatsInfo";
import { useDispatch, useSelector } from "react-redux";
import { toggleBusNumber } from "../../redux/features/selectTicketSlice/selectTicketSlice";
import Lottie from "lottie-react";
import NotFound from '../../../public/notFound.json'

const ShowAllTickets = ({ targetedTickets }) => {
	const [rowId, setRowId] = useState(null);
	const handelViewSeat = _id => {
		if (rowId && rowId === _id) {
			setRowId(null);
		} else {
			setRowId(_id);
		}
	};

	const dispatch = useDispatch();
	const { busNumber: selectBusNumber, selectTickets } = useSelector(
		state => state.selectTicketSlice
	);

	console.log(targetedTickets, ' array');

	

	const [isFullMessageShow, setIsFullMessageShow] = useState(false);
	useEffect(() => {
		selectTickets.length === 3 && setIsFullMessageShow(false)
	}, [selectTickets]);

	return (
		<div className=''>
			<div>
				<div>
					<div className='flex '>
						<div className='w-[40%]'>Operator (Bus Type)</div>
						<div className='w-[15%]'>Dep. Time</div>
						<div className='w-[15%]'>Arr. Time</div>
						<div className='w-[15%]'>Seats Available</div>
						<div className='w-[15%]'>Fare</div>
					</div>

					<div>
						{targetedTickets?.length > 0 ? (
							targetedTickets?.map(ticket => {
								console.log(ticket);
								const {
									busOperatorName,
									araiveTime,
									bookedSits,
									endingPoint,
									isAC,
									rent,
									route,
									startingPoint,
									startingTime,
									totalSits,
									_id,
									busNumber,
									bookedSitsNumber,
								} = ticket;

								return (
									<div
										key={ticket._id}
										className='bg-white rounded mt-4 p-3'
									>
										<div className=' flex'>
											{/* bus name  */}
											<div className=' pr-10 w-[40%]'>
												<div className='flex flex-col gap-2'>
													<h2 className='text-lg font-bold text-[#219051]'>
														{busOperatorName}
													</h2>

													<div className='mt-2 text-[14px] text-gray-500'>
														<p>
															BusNumber:{" "}
															{busNumber}
														</p>
														<p>
															{isAC
																? "AC"
																: "Non AC"}
														</p>
														<p>
															<span className='text-gray-800'>
																Route:{" "}
															</span>
															{route}
														</p>
													</div>

													<div className='text-gray-800 font-semibold text-[14px]'>
														<p>
															Starting Point:{" "}
															<span className='text-gray-500'>
																{startingPoint}
															</span>
														</p>
														<p>
															Starting Point:{" "}
															<span className='text-gray-500'>
																{endingPoint}
															</span>
														</p>
													</div>
												</div>
											</div>
											<div className='p-3 w-[15%]'>
												<p>
													{moment(
														startingTime,
														"HH:mm"
													).format("h:mm a")}
												</p>
											</div>
											<div className='p-3 w-[15%]'>
												<p>
													{moment(
														araiveTime,
														"HH:mm"
													).format("h:mm a")}
												</p>
											</div>
											<div className='p-3 w-[15%]'>
												<p className='text-[#219051]'>
													{totalSits - bookedSits}
												</p>
											</div>
											<div className='p-3 w-[15%] '>
												<div className='flex h-full flex-col justify-between'>
													<p className='text-2xl font-semibold text-[#219051]'>
														৳ <span>{rent}</span>
													</p>

													<Button
														onClick={() => {
															setIsFullMessageShow(
																false
															);
															handelViewSeat(_id);
															dispatch(
																toggleBusNumber(
																	busNumber
																)
															);
														}}
														variant='contained'
														className='py-[6px] px-1 bg-[#219051] rounded text-white'
													>
														View Seats
													</Button>
												</div>
											</div>
										</div>

										<div className='py-2'>
											<div
												className={` overflow-hidden ${
													rowId === _id
														? "max-h-[650px]"
														: "max-h-[0px] "
												}`}
											>
												<SeatsInfo
													busNumber={busNumber}
													rent={rent}
													totalSits={totalSits}
													bookedSitsNumber={
														bookedSitsNumber
													}
													isFullMessageShow={
														isFullMessageShow
													}
													setIsFullMessageShow={
														setIsFullMessageShow
													}
													handelViewSeat={
														handelViewSeat
													}
													_id={_id}
												/>
											</div>
										</div>
									</div>
								);
							})
						) : (
								<div className=" text-center">
									<p className="mt-10 text-gray-500">No Ticket(s) Available </p>
								<Lottie animationData={NotFound} className="w-[50%] mx-auto"/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowAllTickets;
