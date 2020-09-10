import * as React from 'react'
import { useState, useEffect, FunctionComponent } from 'react'
import { getData, buildTextArrayForPanel, getForecast } from '../../util/util'
import { AxiosResponse } from 'axios'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ISnowReportData, ITodaysForecast, text, option } from '../../types/api'
import { theme } from '../../util/themes'
import Card from '../Card/Card'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(238, 238, 238, 0.5);
		color: white;
		font-family: 'Public Sans', sans-serif;
  }
	@media screen and (max-width: 600px) {
  body {
    font-size: ${theme.fontSizes.fontS};
  }
}
`

const App: FunctionComponent = () => {
	const [resortID, setResortID] = useState<number>(222036)

	const [snowReport, setSnowReport] = useState<ISnowReportData | null>(null)
	useEffect(() => {
		const getInitialSnowReport = async () => {
			const report: AxiosResponse = await getData('snowreport', resortID)
			const data: ISnowReportData = report.data
			setSnowReport(data)
		}
		getInitialSnowReport()
	}, [resortID])

	const [panelText, setPanelText] = useState<Array<text>>([])
	useEffect(() => {
		if (snowReport !== null) {
			setPanelText(buildTextArrayForPanel(snowReport))
		}
	}, [snowReport])

	const handleClickOption = async (option: option) => {
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
					<GlobalStyle />
					<Card
						handleClickOption={handleClickOption}
						panelText={panelText}
						snowReport={snowReport}
						weatherDesc={{
							base: todaysForecast?.base.wx_desc,
							upper: todaysForecast?.base.wx_desc,
						}}
					/>
				</ThemeProvider>
			)}
		</>
	)
}

export default App
