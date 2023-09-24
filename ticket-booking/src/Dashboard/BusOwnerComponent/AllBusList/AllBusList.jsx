import { useSelector } from "react-redux";
import { useGetBusOwnerBusListQuery } from "../../../redux/features/api/baseAPI";
import { Link, useLocation, useParams,} from "react-router-dom";
import OnPageLink from "../../../Components/OnPageLink/OnPageLink";
import { FaBus } from "react-icons/fa";
import { MdBusAlert } from "react-icons/md";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Processing from "../../../Components/Processing/Processing";


const AllBusList = () => {
    const { pathname } = useLocation();
    const {  busOperatorName, businessReg } = useSelector(
		state => state.userSlice
	);
	
	const [isApproved, setIsApproved] = useState('');
    const { data, isLoading } = useGetBusOwnerBusListQuery({
		busOperatorName,
		businessReg,
		isApproved,
	});

	
	
	
    return (
		<div>
			<OnPageLink pathname={pathname} />

			<div className=''>
				<p className='text-3xl text-gray-800 font-bold'>Bus List</p>

				<div className='flex flex-col md:flex-row items-center mt-5 gap-5'>
					<div
						onClick={() => setIsApproved("")}
						className='shadow-[0px_0px_5px_#00FE6981] py-2 px-3 rounded-md w-full md:min-w-[100px] flex items-center gap-3  cursor-pointer'
					>
						<div className='w-[40px] h-[40px] bg-red-100  rounded-full flex items-center justify-center'>
							<FaBus />
						</div>
						<div className=' rounded-full font-boldpr'>
							<p className='text-xl font-bold'>
								{data?.totalBus}
							</p>
							<p className='text-[14px] text-gray-500'>
								Total Running Bus
							</p>
						</div>
					</div>
					<div
						onClick={() => setIsApproved(true)}
						className='shadow-[0px_0px_5px_#00FE6981] py-2 px-3 rounded-md w-full md:min-w-[100px] flex items-center gap-3  cursor-pointer'
					>
						<div className='w-[40px] h-[40px] bg-red-100  rounded-full flex items-center justify-center'>
							<FaBus />
						</div>
						<div className=' rounded-full font-boldpr'>
							<p className='text-xl font-bold'>
								{data?.approvedBus}
							</p>
							<p className='text-[14px] text-gray-500'>
								Total Running Bus
							</p>
						</div>
					</div>
					<div
						onClick={() => setIsApproved(false)}
						className='shadow-[0px_0px_5px_#00FE6981] py-2 px-3 rounded-md w-full md:min-w-[100px] flex items-center gap-3  cursor-pointer'
					>
						<div className='w-[40px] h-[40px] bg-red-100  rounded-full flex items-center justify-center'>
							<MdBusAlert className='text-red-500' />
						</div>
						<div className=' rounded-full font-boldpr'>
							<p className='text-xl font-bold'>
								{data?.pendingBus}
							</p>
							<p className='text-[14px] text-gray-500'>
								Total Pending Bus
							</p>
						</div>
					</div>
				</div>

				<div className='mt-10 md:mt-5 '>
					<div className='overflow-x-auto'>
						<table className='min-w-[1000px] md:min-w-full '>
							<thead className=''>
								<tr>
									<th className=' py-1  w-[5%]'>Sl</th>
									<th className=' py-1  w-[10%]'>ID</th>
									<th className=' py-1  w-[17%]'>
										Bus Operator
									</th>
									<th className=' py-1  w-[10%]'>
										Business Reg.
									</th>
									<th className=' py-1  w-[10%]'>Is AC</th>
									<th className=' py-1  w-[10%]'>Status</th>
									<th className=' py-1  w-[10%]'>Rent</th>
									<th className=' py-1  w-[5%]'>Rent</th>
									<th className=' py-1  w-[15%]'>Rent</th>
									<th className=' py-1  w-[8%]'>Rent</th>
								</tr>
							</thead>
							<tbody>
								{data?.busList?.map((bus, i) => {
									const {
										busOperatorName,
										busNumber,
										businessReg,
										isAC,
										isApproved,
										rent,
										route,
										totalSits,
									} = bus;

									return (
										<tr key={bus._id}>
											<td className='py-2 w-[5%]'>{i + 1}</td>
											<td className='py-2 w-[10%]'>
												{busNumber}
											</td>
											<td className='py-2 w-[17%]'>
												{busOperatorName}
											</td>
											<td className='py-2 w-[10%]'>
												{businessReg}
											</td>
											<td className='py-2 w-[10%]'>
												{isAC ? "AC" : "N-AC"}
											</td>
											<td className='py-2 w-[10%]'>
												<div
													className={`${
														isApproved
															? "bg-green-100"
															: "bg-red-100"
													}  items-center justify-center rounded-md text-[12px] py-1 inline-block px-3`}
												>
													{isApproved
														? "Approved"
														: "Pending"}
												</div>
											</td>
											<td className='py-2 w-[10%]'>{rent}</td>
											<td className='py-2 w-[5%]  '>
												{totalSits}
											</td>
											<td className='py-2 w-[15%]'>{route}</td>
											<td className='py-2 w-[8%]'>
												<Button className='bg-[#172233] text-white px-3 py-1 rounded-md text-[11px]'>
													Edit
												</Button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{
				isLoading && <Processing />
			}
		</div>
	);
};

export default AllBusList;