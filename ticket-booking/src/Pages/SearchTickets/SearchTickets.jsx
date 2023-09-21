/** @format */

import { useLocation } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useGetBusListQuery } from "../../redux/features/api/baseAPI";
import busIcon from "../../../public/journey.svg";
import FiltersSection from "../../Components/FiltersSection/FiltersSection";
import ShowAllTickets from "../../Components/ShowAllTickets/ShowAllTickets";
const SearchTickets = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const fromCity = queryParams.get("fromCity");
	const toCity = queryParams.get("toCity");
	const doj = queryParams.get("doj");

	console.log(fromCity, toCity, doj)
	const { data: targetedTickets, isLoading, isError } = useGetBusListQuery({ fromCity, toCity, doj });
	
	console.log(targetedTickets)

    
	return (
		<div>
			<div className=' bg-[#ECECEC] py-5'>
				<Container>
					<div className='flex items-center gap-2 divide-x'>
						<div className='w-[50%]'>
							<p className='text-[#219051] text-base'>
								Departure
							</p>

							<div className='flex items-center gap-2'>
								<div>
									<img
										src={busIcon}
										alt=''
									/>
								</div>
								<div>
									<p className='text-xl font-bold text-[#219051]'>
										{fromCity} - {toCity}
									</p>
									<p className='text-lg font-bold text-gray-400'>
										{doj}
									</p>
								</div>
							</div>
						</div>

						<div className='w-[50%]'>
							<p className='text-lg font-bold text-gray-400'>
								Return
							</p>

							<div>
								<button className='bg-[#219051] py-2 px-4 text-white rounded'>
									Modify Search
								</button>
							</div>
						</div>
					</div>
				</Container>
			</div>

			<div className='bg-[#F7F7F7]'>
				<Container>
					<div className='flex py-5 gap-10'>
						<div className='w-[25%] bg-white'>
							<FiltersSection />
						</div>

						<div className='w-[75%] '>
							<ShowAllTickets targetedTickets={targetedTickets} />
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default SearchTickets;
