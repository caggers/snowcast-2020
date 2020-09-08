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

export type option = {
	resortname: string
	resortid: number
}
