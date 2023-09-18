/** @format */

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import logo from "../../../public/logo.png";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/features/userSlice/userSlice";
const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
    
    const [isDisable, setIsDisable] = useState(false);

	// Function to handle checkbox changes
	const handleCheckboxChange = event => {
		setIsDisable(event.target.checked);
    };
    
    const { params } = useParams();
    
    const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = data => {
		const {
			businessReg,
			busOperatorName,

			email,
			firstName,
			password,
			phoneNumber,
			secondName,
		} = data;
		const name = `${firstName} ${secondName}`; 
		const role = params;
		dispatch(
			createUser({
				email,
				password,
				name,
				businessReg,
				busOperatorName,
				phoneNumber,
				role,
			})
		)
			.then(response => {
				if (response && !response.error) {
					// Signup was successful, navigate to the home page
					navigate("/dashboard");
				} else {
					// Handle error, if any
				}
			})
			.catch(error => {
				// Handle error
			});

		
		
	};


	if (params === "user") {
		return <div>alsfj</div>;
	} else {
        return (
			<div className='w-screen h-screen'>
				<div className='flex items-center h-full'>
					<div
						style={{
							backgroundImage: `url(https://i.ibb.co/cFRNLxV/61f281283d54b1643282728.jpg)`,
							backgroundPosition: "bottom left",
							objectFit: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className='w-[50%] h-full '
					></div>

					<div className='w-[50%] h-full py-5 px-10 overflow-x-auto'>
						<div className='w-[30%]'>
							<img
								src={logo}
								alt=''
							/>
						</div>

						<div>
							<p className='text-3xl font-bold text-[#219051]'>
								Welcome to Bus Booking
							</p>
							<p className='text-gray-500'>
								Sign Up your Account
							</p>

							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='mt-5'>
									<div className='grid grid-cols-2 gap-10'>
										{/* first name  */}
										<div className='col-span-1 w-full '>
											<TextField
												{...register("firstName", {
													required: true,
												})}
												label='First Name *'
												variant='standard'
												className='w-full'
											/>
											{errors.firstName?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[11px] text-red-500'
												>
													First name is required
												</p>
											)}
										</div>
										{/* second name  */}
										<div className='col-span-1 w-full '>
											<TextField
												{...register("secondName", {
													required: true,
												})}
												id='standard-basic'
												label='Second Name *'
												variant='standard'
												className='w-full'
											/>
											{errors.secondName?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[11px] text-red-500'
												>
													Second Name is required
												</p>
											)}
										</div>
										{/* Bus Operator Name   */}
										<div className='col-span-1 w-full '>
											<TextField
												{...register(
													"busOperatorName",
													{
														required: true,
													}
												)}
												id='standard-basic'
												label='Bus Operator Name *'
												variant='standard'
												className='w-full'
											/>
											{errors.busOperatorName?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[11px] text-red-500'
												>
													Bus Operator Name is
													required
												</p>
											)}
										</div>
										{/* Bus Number   */}
										<div className='col-span-1 w-full '>
											<TextField
												{...register("businessReg", {
													required: true,
												})}
												id='standard-basic'
												label='Business Registation No *'
												variant='standard'
												className='w-full'
											/>
											{errors.businessReg?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[11px] text-red-500'
												>
													Business Registation is required
												</p>
											)}
										</div>
										{/* Email   */}
										<div className='col-span-1 w-full '>
											<TextField
												{...register("email", {
													required: true,
												})}
												id='standard-basic'
												label='Email *'
												variant='standard'
												className='w-full'
											/>
											{errors.email?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[11px] text-red-500'
												>
													Email is required
												</p>
											)}
										</div>
										{/* Phone Number   */}
										<div className='col-span-1 w-full '>
											<TextField
												{...register("phoneNumber", {
													required: true,
												})}
												id='standard-basic'
												label='Phone Number *'
												variant='standard'
												className='w-full'
											/>
											{errors.phoneNumber?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[11px] text-red-500'
												>
													Phone Number is required
												</p>
											)}
										</div>
										{/* Password   */}
										<div className='col-span-1 w-full '>
											<TextField
												{...register("password", {
													required: true,
												})}
												id='standard-basic'
												label='Password *'
												variant='standard'
												className='w-full'
											/>
											{errors.password?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[11px] text-red-500'
												>
													Password is required
												</p>
											)}
										</div>
										{/* Confirm Password   */}
										<div className='col-span-1 w-full '>
											<TextField
												{...register(
													"confirmPassword",
													{
														required: true,
													}
												)}
												id='standard-basic'
												label='Confirm Password *'
												variant='standard'
												className='w-full'
											/>
											{errors.confirmPassword?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[11px] text-red-500'
												>
													Confirm Password is required
												</p>
											)}
										</div>
									</div>

									<div className='mt-5 flex items-center gap-2'>
										<input
											onChange={handleCheckboxChange}
											id='accepting'
											type='checkbox'
											className='cursor-pointer'
										/>
										<p className='text-gray-500'>
											<label
												htmlFor='accepting'
												className='text-gray-900 cursor-pointer'
											>
												Accepting all
											</label>{" "}
											Refund Policy , Ticket Policies ,
											Terms and Conditions
										</p>
									</div>

									<div className='mt-5'>
										<Button
											disabled={isDisable === false}
											type='submit'
											variant='contained'
											className={`w-full py-2 bg-[#219051] text-white text-center rounded cursor-pointer `}
										>
											Sing Up
										</Button>
									</div>

									<div className='mt-5 flex items-center gap-5'>
										<p className='text-gray-600'>
											Already have an Account?
										</p>

										<Link to={`/singin/${params}`}>
											<Button
												variant='outlined'
												className='rounded-2xl border border-gray-300 py-1 px-4 text-[#219051] cursor-pointer hover:border-[#219051] duration-300'
											>
												Sign In
											</Button>
										</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Register;
