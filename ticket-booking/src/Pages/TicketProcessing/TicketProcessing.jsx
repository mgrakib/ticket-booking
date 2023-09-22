/** @format */

import { Button, Checkbox, FormControlLabel, Radio } from "@mui/material";
import Container from "../../Components/Container/Container";


import { useGetSelectBusToProcessTicketQuery, usePostOrderPaymentMutation } from "../../redux/features/api/baseAPI";
import { useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { useState } from "react";
import PoligonalShape from "../../Components/PoligonalShape/PoligonalShape";
import JourneyDetails from "../../Components/JourneyDetails/JourneyDetails";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { FaCircleInfo } from "react-icons/fa6";



import bkash from "../../../public/bkash.png";
import nogod from "../../../public/nogod.svg";
import rocket from "../../../public/rocket.svg";
import other from "../../../public/other.svg";
import FareDetails from "../../Components/FareDetails/FareDetails";

import './TicketProcessing.css'
import moment from "moment";
import Processing from "../../Components/Processing/Processing";
const TicketProcessing = () => {
	// state for tab and Insure
	const [isSecure, setIsSecure] = useState(true);
	const [activeTab, setActiveTab] = useState("mobile");
	const [isPolicyAccept, setIsPolicyAccept] = useState(false)


	// get all select seats 
	const { busNumber, selectedSeats = [] } = useSelector(
		state => state.selectTicketSlice
	);

	const { data: targetBus = {} } =
		useGetSelectBusToProcessTicketQuery(busNumber);
	const [postPaymentInfo, { data: paymentRespons, isLoading:isPaymentLoading }] =
		usePostOrderPaymentMutation();

	const [ticketDetails, setTicketDetails] = useState(
		selectedSeats.map(seat => ({
			seat,
			gender: "male",
			passengerName: "",
		}))
	);

	

	const handelGenderChange = (gender, seat) => {
		setTicketDetails(prevDetails =>
			prevDetails.map(ticket =>
				ticket.seat === seat
					? {
							...ticket,
							gender,
					  }
					: ticket
			)
		);
	};
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		const newArray = ticketDetails.map(ticket => {
			const passengerName = data[ticket.seat];
			return {
				...ticket,
				passengerName,
			};
		});

		const allInfo = {
			passengerInfo: [...newArray],
			email: data.email,
			mobileNum: data.mobileNum,
			isSecure,
			totalAmount,
			journeyDate: targetBus?.journeyDate,
			busOperatorName: targetBus?.busOperatorName,
			busNumber: targetBus?.busNumber,
			paymentDate: moment(new Date()).format("YYYY-MM-DD")
		};

		if (!isPolicyAccept) {
			alert('please accept our plicy')
			
		} else {
			postPaymentInfo(allInfo)
				.then(res => window.location.replace(res.data.url))
				.catch(err => console.log(err));
		}
			
	};

	console.log(isPaymentLoading, ' payment');
	
	const ticketPrice = targetBus?.rent * selectedSeats.length;
	const processingFee = 30 * selectedSeats.length;
	const discount = 0;
	const insuranceAmount = isSecure ? 10 * selectedSeats.length : 0;
	const totalAmount = ticketPrice + processingFee + discount + insuranceAmount;

		const handelIsSecure = vlaue => {
			setIsSecure(vlaue);
		};
		
		

		const mobileBanking = (
			<>
				<div className='mt-5'>
					<p className='text-center text-gray-400'>
						Please Select a Payment Method -
					</p>
					<div className='mt-2'>
						<div className='flex items-center justify-between'>
							{/* bkash  */}
							<div className='py-5 px-5 bg-white w-[25%] flex items-center justify-center gap-1 shadow border  hover:border-[#E3106E] group cursor-pointer h-[65px]'>
								<img
									src={bkash}
									alt=''
								/>
								<p className='group-hover:text-[#E3106E]'>
									bKash
								</p>
							</div>
							{/* nogod  */}
							<div className='py-5 px-5 bg-white w-[25%] flex items-center justify-center shadow  relative overflow-hidden h-[65px] border hover:border-[#FF6700] cursor-pointer'>
								<img
									src={nogod}
									alt=''
									className='w-[50%] object-fill'
								/>
							</div>

							{/* rocket  */}
							<div className='py-5 px-5 bg-white w-[25%] flex items-center justify-center shadow border hover:border-[#8C3494] cursor-pointer group h-[65px]'>
								<img
									src={rocket}
									alt=''
								/>
								<p className='group-hover:text-[#8C3494]'>
									rocket
								</p>
							</div>
							<div className='py-5 px-5 bg-white w-[25%] flex items-center justify-center shadow h-[65px] border hover:border-[#D0BB86] cursor-pointer group'>
								<img
									src={other}
									alt=''
									className='h-[50%]'
								/>
								<p className='group-hover:text-[#D0BB86]'>
									Other MFS
								</p>
							</div>
						</div>
					</div>

					<div className='mt-5 flex items-center gap-3  justify-center'>
						<div>
							<FaCircleInfo className='text-3xl text-[#219051]' />
						</div>
						<p>
							Processing fee will be added with ticket fare during
							payment, that will vary depending on MFS
						</p>
					</div>
					<div className='mt-10 flex items-center justify-center'>
						<Button
							disabled={!isPolicyAccept}
							type='submit'
							className={`text-white bg-[#219051] px-10  ${
								!isPolicyAccept && "cursor-not-allowed"
							}`}
						>
							Confirm Reservation
						</Button>
					</div>
				</div>
			</>
		);

		const cashOnDelivary = (
			<>
				<div className='flex items-center gap-8 justify-center px-10'>
					<div>
						<TbInfoTriangleFilled className='text-3xl text-[#219051]' />
					</div>

					<div>
						<p className='text-gray-500'>
							Cash on Delivery is not available at this moment.
							Try paying through bKash, Credit / Debit Cards or
							Internet banking.
						</p>
					</div>
				</div>
			</>
		);

		const cardOrBanking = (
			<>
				<div className='mt-5 flex items-center gap-8  justify-center px-10'>
					<div>
						<FaCircleInfo className='text-3xl text-[#219051]' />
					</div>
					<p className='text-gray-500 text-[14px]'>
						You would be redirected to a third party payment gateway
						where you can pay with your credit or debit cards. Your
						payment transactions are 100% secure. On successful
						payment, you would get a confirmed ticket.
					</p>
				</div>

				<div className='py-1 px-3 bg-gray-200 text-center mt-5 text-gray-500 font-bold text-[14px]'>
					<p>
						Processing fee will be added with ticket fare during
						payment, that will vary depending on the card
					</p>
				</div>

				<div className='flex items-center justify-center'>
					<Button
						type='submit'
						className='text-white bg-[#219051] px-10 mt-8'
					>
						Proceed to Pay
					</Button>
				</div>
			</>
		);
	
	const label = { inputProps: { "aria-label": "Checkbox demo" } };
	return (
		<div className=' bg-[#ECECEC] py-5'>
			<Container>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className=' flex flex-col gap-14'>
						{/* personal info  */}
						<div className='flex items-start gap-10'>
							<div className='w-[70%]'>
								<div>
									{/* passenger details */}
									<div>
										<PoligonalShape
											title={"Passenger Info"}
										/>

										{ticketDetails?.map((ticket, i) => (
											<div
												key={i}
												className='mt-5 flex flex-col gap-3'
											>
												{/* full name  */}
												<div>
													<div>
														Seat No
														<small className='ml-2 text-[#219051] font-bold'>
															#{ticket.seat}
														</small>
													</div>
													<label
														htmlFor={`fullName_${ticket.seat}`}
														className='cusTomeRequired font-semibold'
													>
														Name
													</label>

													<div className='w-[250px] border border-gray-400 bg-gray-100 rounded mt-1'>
														<input
															type='text'
															{...register(
																`${ticket.seat}`
															)}
															id={`fullName_${ticket.seat}`}
															className='py-1 px-2 outline-none w-full bg-transparent focus:shadow-[0_0_5px_#219051] duration-200'
															placeholder={`Enter Full`}
														/>
													</div>
												</div>

												{/* gender  */}
												<div>
													<label
														htmlFor={`gender_${ticket.seat}`}
														className='cusTomeRequired font-semibold'
													>
														Gender
													</label>

													<div className='flex items-center gap-5'>
														{/* male */}
														<span className='flex gap-1'>
															<FormControlLabel
																checked={
																	ticket.gender ===
																	"male"
																}
																onChange={() =>
																	handelGenderChange(
																		"male",
																		ticket.seat
																	)
																}
																value='male'
																control={
																	<Radio className='text-[#219051] text-[14px]' />
																}
																label='M'
															/>
														</span>

														{/* female */}
														<span className='flex gap-1'>
															<FormControlLabel
																checked={
																	ticket.gender ===
																	"female"
																}
																onChange={() =>
																	handelGenderChange(
																		"female",
																		ticket.seat
																	)
																}
																value='female'
																control={
																	<Radio className='text-[#219051] text-[14px]' />
																}
																label='F'
															/>
														</span>
													</div>
												</div>
											</div>
										))}
									</div>
									{/* Contact Information */}

									<div className='mt-5'>
										<p className='text-xl font-bold pb-2 border-b border-black'>
											Contact Information
										</p>

										<div className='mt-5 flex flex-col gap-6'>
											{/* mobile  */}
											<div>
												<label
													htmlFor='mobile'
													className='cusTomeRequired font-semibold'
												>
													Mobile
												</label>

												<div className='w-[250px] border border-gray-400 bg-gray-100 rounded mt-1'>
													<input
														type='text'
														{...register(
															`mobileNum`
														)}
														id='mobile'
														className='py-1 px-2 outline-none w-full bg-transparent focus:shadow-[0_0_5px_#219051] duration-200'
														placeholder='Enter Mobile'
													/>
												</div>
											</div>

											{/* mobile  */}
											<div>
												<label
													htmlFor='email'
													className=' font-semibold'
												>
													Email
												</label>

												<div className='w-[250px] border border-gray-400 bg-gray-100 rounded mt-1'>
													<input
														type='text'
														{...register(`email`)}
														id='email'
														className='py-1 px-2 outline-none w-full bg-transparent focus:shadow-[0_0_5px_#219051] duration-200'
														placeholder='Enter Email'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='w-[30%] '>
								<JourneyDetails
									targetBus={targetBus}
									selectedSeats={selectedSeats}
								/>
							</div>
						</div>

						{/* payment info  */}
						<div className='flex items-start gap-10'>
							<div className='w-[70%]'>
								<div>
									<div>
										<PoligonalShape
											title={"Payment Details"}
										/>
										{/* Insure */}
										<div className='mt-5 border border-gray-400 p-4'>
											<div className='bg-red-50 text-red-400 font-bold px-2 py-3 rounded'>
												Insure your travel by adding ৳
												10 per passenger
											</div>

											<div className='mt-2'>
												{/* secure yes  */}
												<div>
													<Radio
														id='secureYes'
														size='small'
														className='cursor-pointer text-[#219051] p-0'
														checked={
															isSecure && true
														}
														onChange={() =>
															handelIsSecure(true)
														}
													/>
													<label
														htmlFor='secureYes'
														className='cursor-pointer ml-3'
													>
														Yes, secure my trip with
														insurance. I agree to
														the Terms and Conditions
													</label>
												</div>

												{/* secure no  */}
												<div>
													<Radio
														id='secureNo'
														size='small'
														className='cursor-pointer text-[#219051] p-0'
														checked={
															!isSecure && true
														}
														onChange={() =>
															handelIsSecure(
																false
															)
														}
													/>
													<label
														htmlFor='secureNo'
														className='cursor-pointer ml-3'
													>
														No, I don't want
														insurance
													</label>
												</div>
											</div>
										</div>

										<div className='mt-5'>
											<div className='p-5 border border-gray-400'>
												<p className='text-3xl text-center'>
													Total Amount Payable:{" "}
													<span className='text-[#219051] font-semibold'>
														৳. {totalAmount}
													</span>
												</p>
											</div>
										</div>
										<div className='mt-5'>
											<div className='p-5 border border-gray-400'>
												<p className=' text-center text-[14px]'>
													By clicking on the, "Confirm
													Reservation / Proceed to
													Pay" box below, I have read,
													acknowledged and agreed to
													the Terms of Use, Privacy
													Policy and Cancellation
													Policy of Shohoz.com
												</p>
											</div>
										</div>
										<div className='mt-5'>
											<div className='p-5 border bg-[#E9F6F1] border-gray-400 flex items-start gap-1'>
												<Checkbox
													onChange={() =>
														setIsPolicyAccept(
															pre => !pre
														)
													}
													checked={isPolicyAccept}
													id='acceptPolicy'
													{...label}
													className='text-[#219051]'
												/>
												<label
													htmlFor='acceptPolicy'
													className='cursor-pointer'
												>
													I am confirming that I have
													read, acknowledged and agree
													to the Terms of Use, Privacy
													Policy and Cancellation
													Policy of e-Ticket
												</label>
											</div>
										</div>
									</div>

									<div className='mt-5'>
										<div className='flex items-center relative'>
											<div
												onClick={() =>
													setActiveTab("mobile")
												}
												className={`border border-[#219051] border-b-0 px-4 py-2 cursor-pointer  duration-300 ${
													activeTab === "mobile"
														? "active-tab bg-[#ECECEC]"
														: "bg-white"
												} relative `}
											>
												<p className={` w-full h-full`}>
													Mobile Banking
												</p>
											</div>
											<div
												onClick={() =>
													setActiveTab("card")
												}
												className={`border border-[#219051] border-b-0 px-4 py-2 cursor-pointer duration-300  ${
													activeTab === "card"
														? "active-tab bg-[#ECECEC]"
														: "bg-white"
												} relative`}
											>
												<p>Card or Internet Banking</p>
											</div>
											<div
												onClick={() =>
													setActiveTab("cash")
												}
												className={`border border-[#219051] border-b-0 px-4 py-2 cursor-pointer duration-300  ${
													activeTab === "cash"
														? "active-tab bg-[#ECECEC]"
														: "bg-white"
												} relative`}
											>
												<p>Cash on Delivery</p>
											</div>
										</div>
										<div className='p-5 border border-[#219051]'>
											{activeTab === "mobile"
												? mobileBanking
												: activeTab === "cash"
												? cashOnDelivary
												: cardOrBanking}
										</div>
									</div>
								</div>
							</div>

							<div className='w-[30%] '>
								<FareDetails
									ticketPrice={ticketPrice}
									processingFee={processingFee}
									discount={discount}
									insuranceAmount={insuranceAmount}
									totalAmount={totalAmount}
								/>
							</div>
						</div>
					</div>
				</form>

				{isPaymentLoading && <Processing />}
			</Container>
		</div>
	);
};

export default TicketProcessing;
