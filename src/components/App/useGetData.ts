import { useEffect, useState, useReducer, SetStateAction, Dispatch } from 'react'
import { AxiosResponse, AxiosError } from 'axios'
import { getData } from '../../util/util'
import { ISnowReportData, ServerError, IResortForecastData } from '../../types/api'

type State = {
	isLoading: boolean
	isError: boolean
	snowReportData?: ISnowReportData
	resortForecastData?: IResortForecastData
	error?: AxiosError<ServerError>
}
type Action =
	| { type: 'FETCH_INIT' }
	| {
			type: 'FETCH_SUCCESS_SNOW'
			payload: ISnowReportData
	  }
	| {
			type: 'FETCH_SUCCESS_FORECAST'
			payload: IResortForecastData
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
		case 'FETCH_SUCCESS_SNOW':
			return {
				...state,
				isLoading: false,
				isError: false,
				snowReportData: action.payload,
			}
		case 'FETCH_SUCCESS_FORECAST':
			return {
				...state,
				isLoading: false,
				isError: false,
				resortForecastData: action.payload,
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

export const useGetData = (
	type: string,
	resort_id: number,
	num_days?: number,
	interval?: number
): { state: State; setResortID: Dispatch<SetStateAction<number>> } => {
	const [resortID, setResortID] = useState(resort_id)

	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
	})

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'FETCH_INIT' })

			try {
				if (type === 'snowreport') {
					const req: AxiosResponse = await getData(type, resortID)
					const data: ISnowReportData = req.data
					dispatch({ type: 'FETCH_SUCCESS_SNOW', payload: data })
				} else {
					const req: AxiosResponse = await getData(type, resortID, num_days, interval)
					const data: IResortForecastData = req.data
					dispatch({ type: 'FETCH_SUCCESS_FORECAST', payload: data })
				}
			} catch (error) {
				dispatch({ type: 'FETCH_FAILURE', payload: error })
			}
		}

		fetchData()
	}, [interval, num_days, resort_id, type, resortID])

	return { state, setResortID }
}
