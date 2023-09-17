/** @format */


import logo from "../../../../public/logo.png";

import { AiOutlineDoubleRight } from "react-icons/ai";
import mastarCard from "../../../../public/mastar.svg";
import visaCard from "../../../../public/visa.svg";
import bikash from "../../../../public/bikash.svg";
import tap from "../../../../public/tap.svg";
import nogod from "../../../../public/nogod.svg";
import upay from "../../../../public/upay.svg";
import union from "../../../../public/union.svg";
import Container from "../../Container/Container";

const Footer = () => {
	return (
		<div className='bg-[#1E2A3F] md:py-10'>
			<Container>
				<div className='py-10 text-white flex gap-20'>
					<div className='w-[100%] grid grid-cols-1 md:grid-cols-12 gap-10'>
						{/* Menu  */}
						<div className='col-span-1 md:col-span-1 '>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Menu
							</p>

							<div className='mt-4'>
								<ul className='flex flex-col gap-3'>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										About
									</li>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										FAQs
									</li>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Blog
									</li>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Contact
									</li>
								</ul>
							</div>
						</div>
						{/* Policy */}
						<div className='col-span-1 md:col-span-2 md:ml-8'>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Policies
							</p>
							<div className='mt-4'>
								<ul className='flex flex-col gap-3'>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Privacy Policy
									</li>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Terms and Conditions
									</li>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Ticket Policies
									</li>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Refund Policy
									</li>
								</ul>
							</div>
						</div>
						{/* Company */}
						<div className='col-span-1 md:col-span-2'>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Company
							</p>
							<div className='mt-4'>
								<ul className='flex flex-col gap-3'>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Support
									</li>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Partners
									</li>
									<li className='flex items-center gap-2  border-b md:border-none border-gray-600 cursor-pointer hover:text-[#0E9E4D]'>
										<AiOutlineDoubleRight className='hover:text-[#0E9E4D] duration-300' />{" "}
										Jobs
									</li>
								</ul>
							</div>
						</div>
						{/* Need Help ? */}
						<div className='col-span-1 md:col-span-3'>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Need Help ?
							</p>
							<div className='mt-4'>
								<p>
									We are Always here for you! Knock us on
									Messenger anytime or Call our Hotline (10AM
									- 10PM).
								</p>
							</div>
						</div>
						{/* Payment Methods */}
						<div className='col-span-1 md:col-span-3 '>
							<p className='text-xl font-bold text-[#0E9E4D]'>
								Payment Methods
							</p>
							<div className='mt-4'>
								<div className='flex items-center gap-2 flex-wrap'>
									<div className=''>
										<img
											src={mastarCard}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<img
											src={visaCard}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<img
											src={bikash}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<img
											src={nogod}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<img
											src={tap}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<img
											src={upay}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
									<div className=''>
										<img
											src={union}
											width={40}
											height={40}
											alt='mastercard'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='pt-5  border-t border-gray-200'>
					<div className='flex items-center justify-between'>
						<div>
							<img
								src={logo}
								width={150}
								height={150}
								alt='logo'
							/>
						</div>

						<div>
							<p className='text-white'>© Copyright E-Bus Ltd.</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
