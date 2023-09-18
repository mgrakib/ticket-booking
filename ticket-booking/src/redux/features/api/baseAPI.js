/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
	reducerPath: "fetchTicket",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5000",
	}),
	tagTypes: ["ongoingBus"],

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
			query: busOperator => ({
				url: `/get-bus-number?operatorName=${busOperator}`,
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
		}),
		getUser: builder.query({
			query: email => ({
				url: `/get-user?email=${email}`,
			}),
		}),
	}),
});

export const { useGetBusListQuery, useGetBusOperatorsQuery, useGetBusNumbersQuery, useUpdateBusOnSeduleMutation, useAddNewBusMutation, useGetUserQuery } = baseAPI;
