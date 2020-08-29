import * as React from "react"
import { useState, useEffect } from "react"
import { getData } from "../util/util"
import { AxiosResponse } from "axios"
import styled from "styled-components"
import { ISnowReportData } from "../types/api"
import Card from "../Card/Card"

const Background = styled.div`
  background-image: linear-gradient(-45deg, #4158D0, #C850C0, #FFCC70);
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
`

const initialState: ISnowReportData = {
	conditions: "",
	lastsnow: "",
	lastsnow_cm: 0,
	lastsnow_in: 0,
	lowersnow_cm: 0,
	lowersnow_in: 0,
	newsnow_cm: 0,
	newsnow_in: 0,
	pctopen: 0,
	reportdate: "",
	reporttime: "",
	resortcountry: "",
	resortid: 0,
	resortname: "Westendorf",
	uppersnow_cm: 0,
	uppersnow_in: 0,
}

const App: React.FunctionComponent = () => {
	const [snowReport, setSnowReport] = useState<ISnowReportData>(initialState)

	useEffect(() => {
		const getInitialSnowReport = async () => {
			const report: AxiosResponse = await getData("snowreport", 222036)
			const data: ISnowReportData = report.data
			setSnowReport(data)
		}
		getInitialSnowReport()
	}, [])

	return (
		<>
			<Background>
				<Card snowReport={snowReport} />
			</Background>
		</>
	)
}

export default App