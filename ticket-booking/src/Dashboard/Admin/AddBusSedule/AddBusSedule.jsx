/** @format */

import moment from "moment/moment";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
	useGetBusNumbersQuery,
	useGetBusOperatorsQuery,
	useUpdateBusOnSeduleMutation,
} from "../../../redux/features/api/baseAPI";

const AddBusSedule = () => {
	// const [nowTime, setNowTime] = useState(new Date())
	// setInterval(() => {
	//     setNowTime(new Date())
	// }, 1000);

	const [busOperatorState, setBUsOperatorState] = useState("1");
	const { data: busOperator } = useGetBusOperatorsQuery();
	const { data: busNumbersArray } = useGetBusNumbersQuery(busOperatorState);
	const [setUpdateBus, {data:returnData}] = useUpdateBusOnSeduleMutation();

	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		console.log(data)
		setUpdateBus(data);
	};

	console.log(returnData)

	return (
		<div className=''>
			<div className='text-2xl'>
				{/* {moment(nowTime).format("YYYY-MM-DD h:mm:ss a")} */}
			</div>

			<div className='mt-5'>
				<p className='text-xl text-[#B8ACA4] font-bold'>Bus Sedule</p>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex flex-col gap-3'>
						{/* bus operator name and bus number */}
						<div className='mt-2 text-[14px] grid grid-cols-3 gap-10 '>
							{/* bus operator  */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px] cusTomeRequired'
								>
									Bus Operator Name
								</label>

								<div className='border py-1 rounded w-full'>
									<select
										onClick={event => {
											setBUsOperatorState(
												event.target.value
											);
										}}
										{...register("busOperatorName", {
											required: true,
										})}
										name='busOperatorName'
										id='busOperatorName'
										className='py-1 outline-none px-3 w-full'
									>
										<option
											value=''
											hidden
										>
											Select Bus Operator
										</option>
										{busOperator?.map((operator, index) => (
											<option
												key={index}
												value={operator?.busOperatorName}
											>
												{operator?.busOperatorName}
											</option>
										))}
									</select>
								</div>
								{errors.busOperatorName?.type ===
									"required" && (
									<p
										role='alert'
										className='text-[12px] text-red-500'
									>
										Bus Operator Name is required
									</p>
								)}
							</div>

							{/* bus number  */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px] cusTomeRequired'
								>
									Bus Number
								</label>

								<div className='border py-1 rounded w-full'>
									<select
										{...register("busNumber", {
											required: true,
										})}
										name='busNumber'
										id='busNumber'
										className='py-1 outline-none px-3 w-full'
									>
										<option
											value=''
											hidden
										>
											Select Bus Operator
										</option>
										{busNumbersArray?.[0]?.busNumbers?.map(
											number => (
												<option
													key={number}
													value={number}
												>
													{number}
												</option>
											)
										)}
									</select>
								</div>

								{errors.busNumber?.type === "required" && (
									<p
										role='alert'
										className='text-[12px] text-red-500'
									>
										Bus Number is required
									</p>
								)}
							</div>
						</div>

						{/* dastination area and time  */}
						<div className='mt-2 text-[14px] grid grid-cols-3 gap-10 '>
							{/* Starting Point  */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Starting Point
								</label>

								<div className='border py-1 rounded w-full'>
									<select
										{...register("startingPoint", {
											required: true,
										})}
										name='startingPoint'
										id='startingPoint'
										className='py-1 outline-none px-3 w-full'
									>
										<option
											value=''
											hidden
										>
											Starting Point
										</option>

										<option value='Dhaka'>Dhaka</option>
										<option value='Kushtia'>Kushtia</option>
										<option value='Patuakhali'>
											Patuakhali
										</option>
										<option value='Barishal'>
											Barishal
										</option>
										<option value='Comilla'>Comilla</option>
									</select>
								</div>
								{errors.startingPoint?.type === "required" && (
									<p
										role='alert'
										className='text-[12px] text-red-500'
									>
										Starting Point is required
									</p>
								)}
							</div>

							{/*Ending Point */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Ending Point
								</label>

								<div className='border py-1 rounded w-full'>
									<select
										{...register("endingPoint", {
											required: true,
										})}
										name='endingPoint'
										id='endingPoint'
										className='py-1 outline-none px-3 w-full'
									>
										<option
											value=''
											hidden
										>
											Ending Point
										</option>

										<option value='Dhaka'>Dhaka</option>
										<option value='Kushtia'>Kushtia</option>
										<option value='Patuakhali'>
											Patuakhali
										</option>
										<option value='Barishal'>
											Barishal
										</option>
										<option value='Comilla'>Comilla</option>
									</select>
								</div>
								{errors.endingPoint?.type === "required" && (
									<p
										role='alert'
										className='text-[12px] text-red-500'
									>
										Ending Point is required
									</p>
								)}
							</div>

							{/*Date*/}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Jurny Date
								</label>

								<div className='border py-1 rounded w-full'>
									<input
										{...register("journeyDate", {
											required: true,
										})}
										type='date'
										className='py-[2px]  outline-none px-3 w-full'
									/>
								</div>
								{errors.journeyDate?.type === "required" && (
									<p
										role='alert'
										className='text-[12px] text-red-500'
									>
										Journey Date is required
									</p>
								)}
							</div>
						</div>

						{/* startingTime and araiveTime */}
						<div className='mt-2 text-[14px] grid grid-cols-3 gap-10 '>
							{/* startingTime */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Starting Time
								</label>

								<div className='w-full '>
									<div className='border py-1 rounded w-full'>
										<input
											{...register("startingTime", {
												pattern: /^\d{2}:\d{2}$/i,
												required: true,
											})}
											type='text'
											className='py-1  outline-none px-3 w-full'
											placeholder='00:00'
										/>
									</div>
									{errors.startingTime?.type ===
										"required" && (
										<p
											role='alert'
											className='text-[12px] text-red-500'
										>
											Starting Time is required
										</p>
									)}
									{errors.startingTime && (
										<p className='text-red-500 text-[12px]'>
											Invalid time format (use 00:00)
										</p>
									)}

									<p>
										<small className='text-[10px] text-red-500'>
											Type your time 24h fromate like
											24:00
										</small>
									</p>
								</div>
							</div>

							{/*araiveTime  */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Araive Time
								</label>

								<div className='w-full '>
									<div className='border py-1 rounded w-full'>
										<input
											{...register("araiveTime", {
												pattern: /^\d{2}:\d{2}$/i,
												required: true,
											})}
											type='text'
											className='py-1  outline-none px-3 w-full'
											placeholder='00:00'
										/>
									</div>
									{errors.araiveTime?.type === "required" && (
										<p
											role='alert'
											className='text-[12px] text-red-500'
										>
											Araive Time is required
										</p>
									)}
									{errors.araiveTime && (
										<p className='text-red-500 text-[12px]'>
											Invalid time format (use 00:00)
										</p>
									)}

									<p>
										<small className='text-[10px] text-red-500'>
											Type your time 24h fromate like
											24:00
										</small>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='mt-5'>
						<button
							type='submit'
							className='py-1 px-4 bg-[#55BDB8] rounded-lg text-white'
						>
							Proced to set Bus Sedule
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddBusSedule;
