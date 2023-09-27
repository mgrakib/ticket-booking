/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
	reducerPath: "fetchTicket",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://ticket-booking-server-mgrakib.vercel.app",
	}),
	tagTypes: ["ongoingBus", "pendingBus"],

	endpoints: builder => ({
		getBusList: builder.query({
			query: ({ fromCity, toCity, doj }) =>
				`/on_going_bus?fromCity=${fromCity}&toCity=${toCity}&doj=${doj}`,
			providesTags: ["ongoingBus"],
		}),
		getBusOperators: builder.query({
			query: () => ({
				url: `/get-all-bus-operators`,
			}),
		}),
		getBusNumbers: builder.query({
			query: ({ busOperatorName, journeyDate }) => ({
				url: `/get-bus-number?operatorName=${busOperatorName}&journeyDate=${journeyDate}`,
			}),
		}),

		updateBusOnSedule: builder.mutation({
			query: ({ ...busInfo }) => ({
				url: "/set-bus-on-sedule",
				method: "POST",
				body: busInfo,
			}),
		}),

		addNewBus: builder.mutation({
			query: ({ ...newBusInfo }) => ({
				url: `/add-new-bus`,
				method: "POST",
				body: newBusInfo,
			}),
			invalidatesTags: ["pendingBus"],
		}),
		getUser: builder.query({
			query: email => ({
				url: `/get-user?email=${email}`,
			}),
		}),
		getBusOwnerBusList: builder.query({
			query: ({ businessReg, busOperatorName, isApproved }) => ({
				url: `/get-all-bus-operator?busOperatorName=${busOperatorName}&businessReg=${businessReg}&isApproved=${isApproved}`,
			}),
		}),
		getAllBusByStatus: builder.query({
			query: isApproved => ({
				url: `get-bus-by-status?isApproved=${isApproved}`,
			}),
			providesTags: ["pendingBus"],
		}),
		acceptBusRequest: builder.mutation({
			query: id => ({
				url: `/accept-bus-request?id=${id}`,
				method: "PATCH",
			}),
			invalidatesTags: ["pendingBus"],
		}),
		getSelectBusToProcessTicket: builder.query({
			query: busNumber => ({
				url: `/single-on-going-bus?busNumber=${busNumber}`,
			}),
		}),
		postOrderPayment: builder.mutation({
			query: body => ({
				url: `/order`,
				method: "POST",
				body,
			}),
		}),
		getPaymentRecept: builder.query({
			query: tran_id => ({
				url: `/get-payment-history?tran_id=${tran_id}`,
			}),
		}),
		getBusStationName: builder.query({
			query: () => ({
				url: `/get-bus-station`,
			}),
		}),
		findTicket: builder.query({
			query: ({ invoiceNumber, passengerMobileNo }) => ({
				url: `/payment-history-by-invoice_mobile?invoiceNumber=${invoiceNumber}&passengerMobileNo=${passengerMobileNo}`,
			}),
		}),
		downloadTicket: builder.mutation({
			query: tran_id => ({
				url: `/generate-ticket-pdf?tran_id=${tran_id}`,
				method: "POST",
			}),
		}),
	}),
});

export const {
	useGetBusListQuery,
	useGetBusOperatorsQuery,
	useGetBusNumbersQuery,
	useUpdateBusOnSeduleMutation,
	useAddNewBusMutation,
	useGetUserQuery,
	useGetBusOwnerBusListQuery,
	useAcceptBusRequestMutation,
	useGetAllBusByStatusQuery,
	useGetSelectBusToProcessTicketQuery,
	usePostOrderPaymentMutation,
	useGetPaymentReceptQuery,
	useGetBusStationNameQuery,
	useFindTicketQuery,
	useDownloadTicketMutation
} = baseAPI;
