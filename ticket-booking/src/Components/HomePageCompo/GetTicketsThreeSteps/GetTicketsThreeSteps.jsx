/** @format */


import { FaMoneyBillWave } from "react-icons/fa";
import "./GetTicketsThreeSteps.css";
import { BsSearch, BsTicketPerforatedFill } from "react-icons/bs";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Container from "../../Container/Container";

const GetTicketsThreeSteps = () => {
	return (
		<div className='py-10'>
			<SectionTitle title={"Get Your Tickets With Just 3 Steps"} />
			<Container>
				<div className='mt-10'>
					<div className='grid grid-cols-1 md:grid-cols-12 justify-between gap-5'>
						<div className='col-span-1 md:col-span-4 bg-white shadow-[0_0_5px_rgba(0,0,0,.5)]'>
							<div className='p-5 flex flex-col items-center '>
								<div
									className=' w-[100px] h-[100px] rounded-full 
								bg-[#C3E7D2] shadow-[0_0_1px_8px_rgba(230,245,237)] relative flex items-center justify-center '
								>
									<BsSearch className='text-2xl text-[#0E9E4D]' />
									<div className='w-[30px] h-[30px] bg-[#0E9E4D] rounded-full absolute -right-2 -top-2 flex items-center justify-center text-white'>
										01
									</div>
								</div>

								<div className='mt-5 text-center'>
									<p className='text-2xl font-bold text-gray-500'>
										Search
									</p>
									<p className='mt-2'>
										Choose your origin, destination, journey
										dates and search for buses
									</p>
								</div>
							</div>
						</div>

						<div className='col-span-1 md:col-span-4 bg-white shadow-[0_0_5px_rgba(0,0,0,.5)]'>
							<div className='p-5 flex flex-col items-center '>
								<div
									className=' w-[100px] h-[100px] rounded-full 
								bg-[#C3E7D2] shadow-[0_0_1px_8px_rgba(230,245,237)] relative flex items-center justify-center '
								>
									<BsTicketPerforatedFill className='text-2xl text-[#0E9E4D]' />
									<div className='w-[30px] h-[30px] bg-[#0E9E4D] rounded-full absolute -right-2 -top-2 flex items-center justify-center text-white'>
										02
									</div>
								</div>

								<div className='mt-5 text-center'>
									<p className='text-2xl font-bold text-gray-500'>
										Select
									</p>
									<p className='mt-2'>
										Select your desired trip and choose your
										seats
									</p>
								</div>
							</div>
						</div>

						<div className='col-span-1 md:col-span-4  bg-white shadow-[0_0_5px_rgba(0,0,0,.5)]'>
							<div className='p-5 flex flex-col items-center'>
								<div
									className=' w-[100px] h-[100px] rounded-full 
								bg-[#C3E7D2] shadow-[0_0_1px_8px_rgba(230,245,237)] relative flex items-center justify-center '
								>
									<FaMoneyBillWave className='text-2xl text-[#0E9E4D]' />
									<div className='w-[30px] h-[30px] bg-[#0E9E4D] rounded-full absolute -right-2 -top-2 flex items-center justify-center text-white'>
										03
									</div>
								</div>

								<div className='mt-5 text-center'>
									<p className='text-2xl font-bold text-gray-500'>
										Pay
									</p>
									<p className='mt-2'>
										Choose your origin, destination, journey
										dates and search for buses
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default GetTicketsThreeSteps;
