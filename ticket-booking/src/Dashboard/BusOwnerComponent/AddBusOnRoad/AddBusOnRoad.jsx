/** @format */

import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAddNewBusMutation } from "../../../redux/features/api/baseAPI";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import OnPageLink from "../../../Components/OnPageLink/OnPageLink";
import { useLocation } from "react-router-dom";
import Processing from "../../../Components/Processing/Processing";

const AddBusOnRoad = () => {
	   const { pathname } = useLocation();
		const [isAC, setisAC] = useState(false);
		const [isNAC, setisNAC] = useState(true);

		const handleCheckboxChange = checkboxNumber => {
			
			if (checkboxNumber === 1) {
				setisAC(true);
				setisNAC(false);
			} else {
				setisAC(false);
				setisNAC(true);
			}
		};

	const [updateNewBus, {data:newBusAddRes, isLoading}] = useAddNewBusMutation();
	
	const {
		busOperatorName,
		businessReg,
		email: busOperatorEmail,
	} = useSelector(state => state.userSlice);

	

	const {
		register,
		formState: { errors },
		handleSubmit,
		watch,
		reset
	} = useForm();
	const onSubmit = data => {
		const busInfo = { ...data, isAC, busOperatorName, businessReg, busOperatorEmail };
		updateNewBus(busInfo).then(res => {

			
			if (res && res.data.acknowledged) {
				reset();
				toast.success("Successfully Add Bus", {
					
					style: {
						borderRadius: "10px",
						background: "#333",
						color: "#fff",
					},
				});
			} else {
				toast.error("Already Added the Bus", {
					
					style: {
						borderRadius: "10px",
						background: "#333",
						color: "#fff",
					},
				});
			}
		}).catch(err => {
			console.log(err)
		})
		
	};



	const label = { inputProps: { "aria-label": "Checkbox demo" } };
	return (
		<div>
			<OnPageLink pathname={pathname} />
			<div className='mt-5'>
				<p className='text-xl text-[#B8ACA4] font-bold'>Add New Bus</p>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex flex-col gap-3'>
						{/* dastination area and time  */}
						<div className='mt-2 text-[14px] grid md:grid-cols-3 md:gap-10 gap-5 '>
							{/* Starting Point  */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Bus Operator Name
								</label>

								<div className='border py-1 rounded w-full'>
									<input
										disabled
										{...register("busOperatorName", {})}
										name='startingPoint'
										id='startingPoint'
										className='py-1 outline-none px-3 w-full text-gray-400'
										value={busOperatorName}
									/>
								</div>
							</div>

							{/*Ending Point */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Bus Number
								</label>

								<div className='border py-1 rounded w-full'>
									<input
										{...register("busNumber", {
											required: true,
										})}
										name='busNumber'
										id='busNumber'
										className='py-1 outline-none px-3 w-full text-gray-400'
										placeholder='exp210'
									/>
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

							{/*Date*/}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Air Conditioner or Non Air Condition
								</label>

								<div className='border py-[6px] px-2 rounded w-full flex items-center justify-between md:gap-10'>
									<div className='flex  gap-1 items-center md:gap-2'>
										<Checkbox
											checked={isAC}
											{...label}
											size='small'
											className='p-0'
											id='isAC'
											onChange={() =>
												handleCheckboxChange(1)
											}
										/>
										<label htmlFor='isAC'>
											Air Conditioner
										</label>
									</div>
									<div className='flex items-center gap-2'>
										<Checkbox
											checked={isNAC}
											{...label}
											size='small'
											id='isNAC'
											className='p-0'
											onChange={() =>
												handleCheckboxChange(2)
											}
										/>
										<label htmlFor='isNAC'>
											Non Air Condition
										</label>
									</div>
								</div>
							</div>
						</div>

						{/* route and araiveTime */}
						<div className='mt-2 text-[14px] grid md:grid-cols-3 md:gap-10 gap-5 '>
							{/* route */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Root
								</label>

								<div className='w-full '>
									<div className='border py-1 rounded w-full'>
										<input
											{...register("route", {
												required: true,
											})}
											type='text'
											className='py-1  outline-none px-3 w-full'
										/>
									</div>
									{errors.route?.type === "required" && (
										<p
											role='alert'
											className='text-[12px] text-red-500'
										>
											Route is required
										</p>
									)}
								</div>
							</div>

							{/*totalSits  */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Total Sits
								</label>

								<div className='w-full '>
									<div className='border py-1 rounded w-full'>
										<input
											{...register("totalSits", {
												required: true,
												pattern: /^\d{1,2}$/i,
											})}
											className='py-1  outline-none px-3 w-full'
										/>
									</div>
									{errors.totalSits?.type === "required" && (
										<p
											role='alert'
											className='text-[12px] text-red-500'
										>
											Total Sits is required
										</p>
									)}
									{errors.totalSits && (
										<p className='text-red-500 text-[12px]'>
											Invalid Input input just Number
										</p>
									)}
								</div>
							</div>
							{/*rent */}
							<div className='col-span-1 flex flex-col items-start'>
								<label
									htmlFor=''
									className='text-[12px]'
								>
									Rent
								</label>

								<div className='w-full '>
									<div className='border py-1 rounded w-full'>
										<input
											{...register("rent", {
												required: true,
											})}
											className='py-1  outline-none px-3 w-full'
										/>
									</div>
									{errors.rent?.type === "required" && (
										<p
											role='alert'
											className='text-[12px] text-red-500'
										>
											Rent is required
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className='mt-5'>
						<Button
							type='submit'
							className='w-full py-1 px-4 bg-[#55BDB8] rounded-lg text-white'
						>
							Proced to Add New Bus
						</Button>
					</div>
				</form>
			</div>
			{isLoading && <Processing />}
			<Toaster position='top-right' />
		</div>
	);
};

export default AddBusOnRoad;
