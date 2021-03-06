import axios, { AxiosResponse } from 'axios'
import { ISnowReportData, ITodaysForecast } from '../types/api'

const API = process.env.REACT_APP_WEATHER_API
const APP_ID = process.env.REACT_APP_WEATHER_APP_CODE
const APP_KEY = process.env.REACT_APP_WEATHER_API_KEY

const HEADERS = {
	Accept: 'application/json',
}

export function getData(
	type: string,
	resort_id: number,
	num_days?: number,
	interval?: number
): Promise<AxiosResponse<ISnowReportData | ITodaysForecast>> {
	const URL =
		type === 'snowreport' ? `${API}/${type}/${resort_id}?` : `${API}/${type}/${resort_id}`
	return axios.get(URL, {
		headers: HEADERS,
		params: {
			num_of_days: num_days,
			hourly_interval: interval,
			app_id: APP_ID,
			app_key: APP_KEY,
		},
	})
}

function buildTextObject(label: string, text: string) {
	return { label: label, text: text }
}

export function buildTextArrayForPanel(
	snowReport: ISnowReportData
): Array<{
	label: string
	text: string
}> {
	const newSnow = buildTextObject('New Snow', `${snowReport.newsnow_cm} cm`)
	const upperMountain = buildTextObject('Upper Mountain Snow', `${snowReport.uppersnow_cm} cm`)
	const lowerMountain = buildTextObject('Lower Mountain Snow', `${snowReport.lowersnow_cm} cm`)
	const lastSnowedDate = buildTextObject('Last Snowed Date', `${snowReport.lastsnow}`)
	const lastSnowedAmount = buildTextObject('Last Snowed Amount', `${snowReport.lastsnow_cm}`)
	const reportTime = buildTextObject('Report Time', `${snowReport.reporttime}`)
	const reportDate = buildTextObject('Report Date', `${snowReport.reportdate}`)

	return [
		newSnow,
		upperMountain,
		lowerMountain,
		lastSnowedDate,
		lastSnowedAmount,
		reportDate,
		reportTime,
	]
}

export const OPTIONS = [
	{
		resortname: 'Westendorf',
		resortid: 222036,
	},
	{
		resortname: 'Kitzbuhel',
		resortid: 222013,
	},
	{
		resortname: 'Ellmau',
		resortid: 222023,
	},
	// {
	// 	value: "Scheffau",
	// 	id: 54883634
	// },
	{
		resortname: 'Saalbach',
		resortid: 222018,
	},
]
