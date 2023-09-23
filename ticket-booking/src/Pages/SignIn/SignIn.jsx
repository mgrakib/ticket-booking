/** @format */

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import logo from "../../../public/logo.png";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singIn } from "../../redux/features/userSlice/userSlice";
const SignIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const { params } = useParams();
	const {isLoading} = useSelector(state => state.userSlice)

	console.log(isLoading, ' is slo');
	
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = data => {
		const {email, password } = data;
		dispatch(singIn({
			email,
			password
		})).then((response) => {
			if (response && !response.error) {
				// Signup was successful, navigate to the home page
				navigate("/dashboard");
			} else {
				// Handle error, if any
			}
		}).catch((err) => {
			
		});

	};

	if (params === "admin") {
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

					<div className='w-[50%] h-full py-5 px-20 overflow-x-auto '>
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
								Sign In your Account For Admin
							</p>

							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='mt-5'>
									<div className='grid grid-cols-2 gap-5'>
										{/* first name  */}
										<div className='col-span-2 w-full '>
											<TextField
												{...register("email", {
													required: true,
												})}
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
										{/* second name  */}
										<div className='col-span-2 w-full '>
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
									</div>

									<div className='mt-10 flex items-center gap-2'>
										<p className='text-gray-500 ml-auto'>
											<label
												htmlFor='accepting'
												className='text-gray-900 cursor-pointer'
											>
												Forgot Password?
											</label>{" "}
										</p>
									</div>

									<div className='mt-10'>
										<Button
											type='submit'
											variant='contained'
											className={`w-full py-2 bg-[#219051] text-white text-center rounded cursor-pointer `}
										>
											Sing In
										</Button>
									</div>

									{/* <div className='mt-5 flex items-center gap-5'>
										<p className='text-gray-600'>
											Don't have any Account?
										</p>

										<Link to={`/signup/${params}`}>
											<Button
												variant='outlined'
												className='rounded-2xl border border-gray-300 py-1 px-4 text-[#219051] cursor-pointer hover:border-[#219051] duration-300'
											>
												Sign Up
											</Button>
										</Link>
									</div> */}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
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

					<div className='w-[50%] h-full py-5 px-20 overflow-x-auto '>
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
								Sign In your Account For Bus Operator
							</p>

							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='mt-5'>
									<div className='grid grid-cols-2 gap-5'>
										{/* first name  */}
										<div className='col-span-2 w-full '>
											<TextField
												{...register("email", {
													required: true,
												})}
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
										{/* second name  */}
										<div className='col-span-2 w-full '>
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
									</div>

									<div className='mt-10 flex items-center gap-2'>
										<p className='text-gray-500 ml-auto'>
											<label
												htmlFor='accepting'
												className='text-gray-900 cursor-pointer'
											>
												Forgot Password?
											</label>{" "}
										</p>
									</div>

									<div className='mt-10'>
										<Button
											type='submit'
											variant='contained'
											className={`w-full py-2 bg-[#219051] text-white text-center rounded cursor-pointer `}
										>
											Sing In
										</Button>
									</div>

									<div className='mt-5 flex items-center gap-5'>
										<p className='text-gray-600'>
											Don't have any Account?
										</p>

										<Link to={`/signup/${params}`}>
											<Button
												variant='outlined'
												className='rounded-2xl border border-gray-300 py-1 px-4 text-[#219051] cursor-pointer hover:border-[#219051] duration-300'
											>
												Sign Up
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

export default SignIn;
