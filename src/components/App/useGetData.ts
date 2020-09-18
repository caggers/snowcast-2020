/* eslint-disable indent */
import * as React from 'react'
import { useEffect, useState, useReducer } from 'react'
import { AxiosResponse, AxiosError } from 'axios'
import { getData } from '../../util/util'
import { ISnowReportData, ITodaysForecast, ServerError } from '../../types/api'

// export function useGetData(
// 	type: string,
// 	resort_id: number,
// 	num_days?: number,
// 	interval?: number
// ): any {
// 	const [loading, setLoading] = useState<boolean>(true)
// 	const [error, setError] = useState<AxiosError<ServerError> | null>(null)

// 	const [data, setData] = useState<ISnowReportData | ITodaysForecast | null>(
// 		null
// 	)
// 	const [resortID, setResortID] = useState<number>(resort_id)

// 	useEffect(() => {
// 		setLoading(true)
// 		const getSnowReport = async () => {
// 			try {
// 				const request: AxiosResponse = await getData(
// 					type,
// 					resortID,
// 					num_days,
// 					interval
// 				)
// 				const data: ISnowReportData | ITodaysForecast = request.data
// 				setData(data)
// 				setLoading(false)
// 				setError(null)
// 			} catch (err) {
// 				if (err && err.response) {
// 					const axiosError = err as AxiosError<ServerError>
// 					setData(null)
// 					setError(axiosError)
// 					setLoading(false)
// 				}
// 			}
// 		}
// 		getSnowReport()
// 	}, [resort_id, type, num_days, interval, resortID])

// 	return [
// 		{
// 			loading,
// 			error,
// 			data,
// 			resortID,
// 		},
// 		setResortID,
// 	]
// }

type State = {
	isLoading: boolean
	isError: boolean
	data?: ISnowReportData | ITodaysForecast | AxiosError<ServerError> | null
}
type Action =
	| { type: 'FETCH_INIT' }
	| {
			type: 'FETCH_SUCCESS'
			payload: ISnowReportData | ITodaysForecast
	  }
	| {
			type: 'FETCH_FAILURE'
			payload: AxiosError<ServerError>
	  }

const dataFetchReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'FETCH_INIT':
			return {
				...state,
				isLoading: true,
				isError: false,
			}
		case 'FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			}
		case 'FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload,
			}
		default:
			throw new Error()
	}
}

export const useDataApi = (
	type: string,
	resort_id: number,
	num_days?: number,
	interval?: number
): { state: State; setResortID: any } => {
	const [resortID, setResortID] = useState(resort_id)

	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: null,
	})

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'FETCH_INIT' })

			try {
				const snowReq: AxiosResponse = await getData(
					type,
					resort_id,
					num_days,
					interval
				)
				const snowReport: ISnowReportData | ITodaysForecast = snowReq.data

				dispatch({ type: 'FETCH_SUCCESS', payload: snowReport })
			} catch (error) {
				dispatch({ type: 'FETCH_FAILURE', payload: error })
			}
		}

		fetchData()
	}, [interval, num_days, resort_id, type, resortID])

	return { state, setResortID }
}
