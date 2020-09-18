import { AxiosError, AxiosRequestConfig } from 'axios'

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

export interface Forecast {
	date: string
	time: string
	lowcloud_pct: number
	lowcloud_min_pct: number
	lowcloud_max_pct: number
	lowcloud_avg_pct: number
	midcloud_pct: number
	midcloud_min_pct: number
	midcloud_max_pct: number
	midcloud_avg_pct: number
	highcloud_pct: number
	highcloud_min_pct: number
	highcloud_max_pct: number
	highcloud_avg_pct: number
	totalcloud_pct: number
	totalcloud_min_pct: number
	totalcloud_max_pct: number
	totalcloud_avg_pct: number
	frzglvl_ft: number
	frzglvl_min_ft: number
	frzglvl_max_ft: number
	frzglvl_avg_ft: number
	frzglvl_m: number
	frzglvl_min_m: number
	frzglvl_max_m: number
	frzglvl_avg_m: number
	precip_mm: number
	precip_in: number
	rain_mm: number
	rain_in: number
	snow_mm: number
	snow_in: number
	hum_pct: number
	hum_min_pct: number
	hum_max_pct: number
	hum_avg_pct: number
	dewpoint_c: number
	dewpoint_min_c: number
	dewpoint_max_c: number
	dewpoint_avg_c: number
	dewpoint_f: number
	dewpoint_min_f: number
	dewpoint_max_f: number
	dewpoint_avg_f: number
	vis_km: number
	vis_min_km: number
	vis_max_km: number
	vis_avg_km: number
	vis_mi: number
	vis_min_mi: number
	vis_max_mi: number
	vis_avg_mi: number
	slp_mb: number
	slp_min_mb: number
	slp_max_mb: number
	slp_avg_mb: number
	slp_in: number
	slp_min_in: number
	slp_max_in: number
	slp_avg_in: number
	base: LevelForecast
	mid: LevelForecast
	upper: LevelForecast
}
interface IResortForecastData {
	id: number
	name: string
	country: string
	continent: string
	forecast: Array<Forecast>
}

export interface ITodaysForecast {
	base: LevelForecast | { wx_desc: string }
	upper: LevelForecast | { wx_desc: string }
	resortid?: number
	resortname?: string
	time?: string
}

export interface LevelForecast {
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
	config?: AxiosRequestConfig
	data?: { message: string }
	headers?: any
	request?: XMLHttpRequest
	status?: number
	statusText?: string
}
