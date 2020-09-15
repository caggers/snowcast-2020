export interface ISnowReportData {
	conditions: string
	lastsnow: string
	lastsnow_cm: number
	lastsnow_in: number
	lowersnow_cm: number
	lowersnow_in: number
	newsnow_cm: number
	newsnow_in: number
	pctopen: number
	reportdate: string
	reporttime: string
	resortcountry: string
	resortid: number
	resortname: string
	uppersnow_cm: number
	uppersnow_in: number
}

export interface ITodaysForecast {
	base: Forecast | { wx_desc: string }
	upper: Forecast | { wx_desc: string }
	resortid?: number
	resortname?: string
	time?: string
}

export interface Forecast {
	feelslike_avg_c: number
	feelslike_avg_f: number
	feelslike_c: number
	feelslike_f: number
	feelslike_max_c: number
	feelslike_max_f: number
	feelslike_min_c: number
	feelslike_min_f: number
	freshsnow_cm: number
	freshsnow_in: number
	temp_avg_c: number
	temp_avg_f: number
	temp_c: number
	temp_f: number
	temp_max_c: number
	temp_max_f: number
	temp_min_c: number
	temp_min_f: number
	winddir_compass: string
	winddir_deg: number
	windgst_avg_kmh: number
	windgst_avg_kts: number
	windgst_avg_mph: number
	windgst_avg_ms: number
	windgst_kmh: number
	windgst_kts: number
	windgst_max_kmh: number
	windgst_max_kts: number
	windgst_max_mph: number
	windgst_max_ms: number
	windgst_mph: number
	windgst_ms: number
	windspd_avg_kmh: number
	windspd_avg_kts: number
	windspd_avg_mph: number
	windspd_avg_ms: number
	windspd_kmh: number
	windspd_kts: number
	windspd_max_kmh: number
	windspd_max_kts: number
	windspd_max_mph: number
	windspd_max_ms: number
	windspd_mph: number
	windspd_ms: number
	wx_code: number
	wx_desc: string
	wx_icon: string
}

export type option = {
	resortname: string
	resortid: number
}

export type text = {
	label: string
	text: string
}

export interface ServerError {
	config?: any
	data?: { message: string }
	headers?: any
	request?: XMLHttpRequest | any
	status?: number
	statusText?: string
}
