import { Outlet } from "react-router-dom";
import DashboardSidBar from "../../Components/DashboardCompo/DashboardSidBar/DashboardSidBar";
import { useGetBusStationNameQuery } from "../../redux/features/api/baseAPI";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setBusStationName } from "../../redux/features/busStationNameSlice/busStationNameSlice";


const DashboardHome = () => {
	const { data: busStationName } = useGetBusStationNameQuery();
	const dispatch = useDispatch();
		useEffect(() => {
			dispatch(setBusStationName(busStationName));
		}, [busStationName, dispatch]);
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