import * as React from 'react'
import { useState, useEffect } from 'react'
import { getData, buildTextArray, getForecast } from '../../util/util'
import { AxiosResponse } from 'axios'
import styled, { ThemeProvider } from 'styled-components'
import { ISnowReportData, ITodaysForecast, text } from '../../types/api'
import { theme } from '../../util/themes'
import Card from '../Card/Card'

const Background = styled.div`
	background-color: rgba(238, 238, 238, 0.5);
	color: white;
	font-family: 'Public Sans', sans-serif;
	height: auto;
	left: 0;
	min-height: 100%;
	min-width: 1024px;
	position: fixed;
	top: 0;
	width: 100%;
`

const App: React.FunctionComponent = () => {
	const [snowReport, setSnowReport] = useState<ISnowReportData | null>(null)
	const [resortID, setResortID] = useState<number>(222036)

	useEffect(() => {
		const getInitialSnowReport = async () => {
			const report: AxiosResponse = await getData('snowreport', resortID)
			const data: ISnowReportData = report.data
			setSnowReport(data)
		}
		getInitialSnowReport()
	}, [])

	const [panelText, setPanelText] = useState<Array<text>>([])
	useEffect(() => {
		if (snowReport !== null) {
			setPanelText(buildTextArray(snowReport))
		}
	}, [snowReport])

	const handleClickOption = async (option: any) => {
		const report: AxiosResponse = await getData('snowreport', option.resortid)
		const data: ISnowReportData = report.data
		setSnowReport(data)
		setResortID(data.resortid)
	}

	const [todaysForecast, setTodaysForecast] = useState<ITodaysForecast | null>()
	useEffect(() => {
		const getInitialResortForecast = async () => {
			const report: AxiosResponse = await getForecast(resortID, 1, 6)
			const morningForecast = report.data.forecast.find(
				(item: any) => item.time === '07:00'
			)

			const forecast: ITodaysForecast = {
				base: morningForecast.base,
				resortid: report.data.id,
				resortname: report.data.name,
				time: morningForecast.time,
				upper: morningForecast.upper,
			}
			setTodaysForecast(forecast)
		}
		getInitialResortForecast()
	}, [resortID])

	return (
		<>
			{snowReport !== null && panelText !== null && (
				<ThemeProvider theme={theme}>
					<Background>
						<Card
							snowReport={snowReport}
							panelText={panelText}
							handleClickOption={handleClickOption}
						/>
					</Background>
				</ThemeProvider>
			)}
		</>
	)
}

export default App
