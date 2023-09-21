/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
	reducerPath: "fetchTicket",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5000",
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
	}),
});

export const { useGetBusListQuery, useGetBusOperatorsQuery, useGetBusNumbersQuery, useUpdateBusOnSeduleMutation, useAddNewBusMutation, useGetUserQuery, useGetBusOwnerBusListQuery, useAcceptBusRequestMutation, useGetAllBusByStatusQuery, useGetSelectBusToProcessTicketQuery } = baseAPI;
