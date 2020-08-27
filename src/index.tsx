import * as React from "react"
import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useGetSnowData } from "./useGetSnowData"
import { getData } from "./util"
import { AxiosResponse } from "axios"

interface IAPIResponse {
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

const App: React.FunctionComponent = () => {
	const [snowReport, setSnowReport] = useState<AxiosResponse | any>()
	useEffect(() => {
		const getInitialSnowReport = async () => {
			const report = await getData("snowreport", 222036)
			const data: IAPIResponse = report.data
			setSnowReport(data)
		}
		getInitialSnowReport()
	}, [])

	return (
		<>
			{snowReport &&
				<div>Hello {snowReport.resortname}</div>
			}

		</>
	)
}

const mountNode = document.getElementById("app")
ReactDOM.render(<App />, mountNode)
