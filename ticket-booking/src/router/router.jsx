/** @format */

import { createBrowserRouter } from "react-router-dom"; 
import App from "../App";
import Home from "../Pages/Home/Home";
import SearchTickets from "../Pages/SearchTickets/SearchTickets";
import AdminHome from "../Dashboard/Admin/AdminHome/AdminHome";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import AddBusSedule from "../Dashboard/Admin/AddBusSedule/AddBusSedule";
import AddBusOnRoad from "../Dashboard/BusOwnerComponent/AddBusOnRoad/AddBusOnRoad";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/bus/search",
				element: <SearchTickets />,
			},
		],
	},
	{
		path: "/signup/:params",
		element: <Register />,
	},
	{
		path: "/singin/:params",
		element: <SignIn />,
	},
	
	{
		path: "/dashboard",
		element: <DashboardHome />,
		children: [
			{
				path: "/dashboard",
				element: <AdminHome />,
			},
			{
				path: "/dashboard/add-bus-sedule",
				element: <AddBusSedule />,
			},
			{
				path: "/dashboard/add-bus-on-road",
				element: <AddBusOnRoad />,
			},
		],
	},
]);

export default router;
