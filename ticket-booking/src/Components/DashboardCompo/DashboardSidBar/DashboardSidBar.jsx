import { signOut } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.config";
import { logOut } from "../../../redux/features/userSlice/userSlice";

const DashboardSidBar = () => {
    
    const adminNavIteams = [
		{
			title: "Home",
			path: "/dashboard",
		},
		{
			title: "Add Bus Sedule",
			path: "/dashboard/add-bus-sedule",
		},
		{
			title: "Pending Bus",
			path: "/dashboard/pending-bus",
		},
	];
    
    const busOperatorNavItems = [
		{
			title: "Home",
			path: "/dashboard",
		},
		{
			title: "Add Bus On Road",
			path: "/dashboard/add-bus-on-road",
		},
		{
			title: "All Bus List",
			path: "/dashboard/all-bus-list",
		},
    ];
    
	const { busOperatorName, businessReg, email, name, role } = useSelector(
		state => state.userSlice
	);
	
	const [isModalOpen, setIsModalOpen] = useState(false)

	const dispatch = useDispatch();
	const handelSingOut = () => {
		
		signOut(auth)
			.then(() => {
				dispatch(logOut())
			})
			.catch(error => {
				// An error happened.
			});
	}
    return (
		<div
			onClick={() => setIsModalOpen(false)}
			className='py-2 pl-2 pr-5  flex flex-col justify-between h-full'
		>
			<div>
				<div className='w-[20px] h-[20px] bg-gray-500'></div>
				<div className='text-gray-200 '>
					{role === "busOperator"
						? "Bus Operator Dashboard"
						: "Admin Dashboard"}
				</div>
			</div>
			{/* nav item  */}
			<ul>
				{role === "admin"
					? adminNavIteams.map((item, index) => (
							<Link
								key={index}
								to={item?.path}
							>
								<li className='text-gray-300 py-1'>
									{item.title}
								</li>
							</Link>
					  ))
					: busOperatorNavItems.map((item, index) => (
							<Link
								key={index}
								to={item?.path}
							>
								<li className='text-gray-300 py-1'>
									{item.title}
								</li>
							</Link>
					  ))}
			</ul>
			{/* account  */}
			<div>
				<div
					onClick={event => {
						event.stopPropagation();
						setIsModalOpen(!isModalOpen);
					}}
					className='flex gap-2 items-center cursor-pointer relative'
				>
					<div className='w-[30px] h-[30px] bg-gray-200 rounded '></div>
					<div className='text-gray-200'>
						<p
							title='Bus Operator Name'
							className='text-[14px] leading-3'
						>
							{busOperatorName}
						</p>
						<p className='text-[12px] text-gray-400'>{name}</p>
					</div>

					<div
						className={`w-full bg-gray-300 duration-300 rounded absolute  overflow-hidden ${
							isModalOpen
								? "bottom-[120%] opacity-100 max-h-[40px]"
								: "bottom-[50%]  opacity-0 max-h-0"
						} `}
					>
						<button
							onClick={() => handelSingOut()}
							className='py-2 px-3 hover:bg-gray-500  w-full duration-300 hover:text-white'
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardSidBar;