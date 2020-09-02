import axios from "axios"
import { ISnowReportData } from '../types/api'

const API = process.env.REACT_APP_WEATHER_API
const APP_ID = process.env.REACT_APP_WEATHER_APP_CODE
const APP_KEY = process.env.REACT_APP_WEATHER_API_KEY

const HEADERS = {
	Accept: "application/json",
}

export function getData(type: string, resort_id: number) {
	const URL = `${API}/${type}/${resort_id}?`
	return axios.get(URL, {
		headers: HEADERS,
		params: {
			app_id: APP_ID,
			app_key: APP_KEY,
		},
	})
}

export async function buildContext() {
	return {
		222036: await getData("snowreport", 222036),
		222013: await getData("snowreport", 222013),
		222023: await getData("snowreport", 222023),
		222018: await getData("snowreport", 222018),
	}
}

function buildTextObject(label: string, text: string) {
	return { label: label, text: text }
}

export function buildTextArray(snowReport: ISnowReportData) {
	const newSnow = buildTextObject("New Snow", `${snowReport.newsnow_cm} cm`)
	const upperMountain = buildTextObject("Upper Mountain Snow", `${snowReport.uppersnow_cm} cm`)
	const lowerMountain = buildTextObject("Lower Mountain Snow", `${snowReport.lowersnow_cm} cm`)
	const lastSnowedDate = buildTextObject("Last Snowed Date", `${snowReport.lastsnow}`)
	const lastSnowedAmount = buildTextObject("Last Snowed Amount", `${snowReport.lastsnow_cm}`)
	const reportTime = buildTextObject("Report Time", `${snowReport.reporttime}`)
	const reportDate = buildTextObject("Report Date", `${snowReport.reportdate}`)

	return [
		newSnow, upperMountain, lowerMountain, lastSnowedDate, lastSnowedAmount, reportDate, reportTime
	]
}