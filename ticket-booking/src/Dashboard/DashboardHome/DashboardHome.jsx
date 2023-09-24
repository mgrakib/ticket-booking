import { Outlet } from "react-router-dom";
import DashboardSidBar from "../../Components/DashboardCompo/DashboardSidBar/DashboardSidBar";
import { useState } from "react";

import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";


const DashboardHome = () => {
	const [isSidBarOpen, setIsSidBarOpen] = useState(false)
    return (
		<div
			onClick={() => setIsSidBarOpen(false)}
			className='flex flex-col md:flex-row h-screen p-2 md:p-3 bg-[#172233] relative'
		>
			
			<div className="hidden md:block md:w-[15%] ">
				<DashboardSidBar />
			</div>
			
			{/* mobile sidbar  */}
			<div
				className={` md:hidden h-full absolute top-0 left-0 ${
					isSidBarOpen ? "" : "-translate-x-[100%]"
				}  z-50 bg-[#172233] duration-500`}
			>
				<DashboardSidBar />
				<div className='block md:hidden '>
					<div
						onClick={e => {
							e.stopPropagation();
							setIsSidBarOpen(!isSidBarOpen);
						}}
						className={`inline-block absolute right-0 ${
							isSidBarOpen ? "-translate-x-2" : "translate-x-10"
						} text-white top-5 duration-1000 cursor-pointer`}
					>
						{isSidBarOpen ? (
							<IoClose />
						) : (
							<PiDotsThreeOutlineFill />
						)}
					</div>
				</div>
			</div>

			<div className='block md:hidden w-full p-2'>
				<div className=' '>
					<div className='ml-auto w-[30px] h-[30px] bg-gray-500 rounded-md'></div>
				</div>
			</div>

			<div className='w-[100%] md:w-[85%] overflow-y-auto pb-10 bg-[#FFFFFF] h-full rounded px-5 ml-auto'>
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardHome;