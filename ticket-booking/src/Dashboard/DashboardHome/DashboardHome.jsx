import { Outlet } from "react-router-dom";
import DashboardSidBar from "../../Components/DashboardCompo/DashboardSidBar/DashboardSidBar";


const DashboardHome = () => {
    return (
		<div className='flex h-screen p-3 bg-[#172233]'>
			<div className='w-[15%] h-full '>
				<DashboardSidBar />
			</div>
			<div className='w-[85%] bg-[#FFFFFF] rounded px-5'>
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardHome;