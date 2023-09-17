import { Link } from "react-router-dom";

const DashboardSidBar = () => {
    const role = 'busOperator'
    const adminNavIteams = [
		{
			title: "Home",
			path: "/dashboard",
		},
		{
			title: "Add Bus Sedule",
			path: "/dashboard/add-bus-sedule",
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
    ];
    
    return (
		<div className='p-2 flex flex-col justify-between h-full'>
			<div>
				<div className='w-[20px] h-[20px] bg-gray-500'></div>
			</div>
			{/* nav item  */}
			<ul>
				{busOperatorNavItems.map((item, index) => (
					<Link
						key={index}
						to={item?.path}
					>
						<li className='text-gray-300 py-1'>{item.title}</li>
					</Link>
				))}
			</ul>
			{/* account  */}
			<div>
				<div>
					<div className='w-[40px] h-[40px] bg-red-500'></div>
				</div>
			</div>
		</div>
	);
};

export default DashboardSidBar;