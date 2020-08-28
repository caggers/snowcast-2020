import { useState, useEffect } from "react"
import axios from "axios"

const API = process.env.REACT_APP_WEATHER_API
const APP_ID = process.env.REACT_APP_WEATHER_APP_CODE
const APP_KEY = process.env.REACT_APP_WEATHER_API_KEY

const HEADERS = {
	Accept: "application/json",
}

export function useGetSnowData(type: string, resort_id: number): any {
	const [state, setState] = useState({})

	useEffect(() => {
		async function getData() {
			const URL = `${API}/${type}/${resort_id}?`
			const data = await axios.get(URL, {
				headers: HEADERS,
				params: {
					app_id: APP_ID,
					app_key: APP_KEY,
				},
			})
			setState(data)
		}

		getData()
	}, [resort_id, type])

	console.log(state)

	return state
}


// import axios from "axios"

// const API = process.env.REACT_APP_WEATHER_API
// const APP_ID = process.env.REACT_APP_WEATHER_APP_CODE
// const APP_KEY = process.env.REACT_APP_WEATHER_API_KEY

// const HEADERS = {
// 	Accept: "application/json",
// }

// export function getData(type, resort_id) {
// 	const URL = `${API}/${type}/${resort_id}?`
// 	return axios.get(URL, {
// 		headers: HEADERS,
// 		params: {
// 			app_id: APP_ID,
// 			app_key: APP_KEY,
// 		},
// 	})
// }