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

import AllBusList from "../Dashboard/BusOwnerComponent/AllBusList/AllBusList";
import LoadingLayout from "../Loyout/LoadingLayout/LoadingLayout";
import PendingBus from "../Dashboard/Admin/PendingBus/PendingBus";
import TicketProcessing from "../Pages/TicketProcessing/TicketProcessing";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../Pages/PaymentFailed/PaymentFailed";

import Invoice from "../Pages/Invoice/Invoice";

import PrivateRoute from "../Loyout/PrivateRoute/PrivateRoute";
import AdminPrivateRoute from "../Loyout/PrivateRoute/AdminPrivateRoute";
import BusOperatorPrivateRoute from "../Loyout/PrivateRoute/BusOperatorPrivateRoute";
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<LoadingLayout>
				<App />
			</LoadingLayout>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/bus/search",
				element: <SearchTickets />,
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
				path: "/booking-bus-trip-info",
				element: <TicketProcessing />,
			},
			{
				path: "/payment-successfull/:tran_id",
				element: <PaymentSuccess />,
			},
			{
				path: "/invoice/:tran_id",
				element: <Invoice />,
			},
			{
				path: "/payment-failed",
				element: <PaymentFailed />,
			},
		],
	},

	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardHome />
			</PrivateRoute>
		),
		children: [
			{
				path: "/dashboard",
				element: <AdminHome />,
			},
			{
				path: "/dashboard/add-bus-sedule",
				element: (
					<AdminPrivateRoute>
						<AddBusSedule />
					</AdminPrivateRoute>
				),
			},
			{
				path: "/dashboard/add-bus-on-road",
				element: (
					<BusOperatorPrivateRoute>
						<AddBusOnRoad />
					</BusOperatorPrivateRoute>
				),
			},
			{
				path: "/dashboard/all-bus-list",
				element: (
					<BusOperatorPrivateRoute>
						<AllBusList />
					</BusOperatorPrivateRoute>
				),
			},
			{
				path: "/dashboard/pending-bus",
				element: (
					<AdminPrivateRoute>
						<PendingBus />
					</AdminPrivateRoute>
				),
			},
		],
	},
]);

export default router;
