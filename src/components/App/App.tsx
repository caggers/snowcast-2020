import * as React from 'react'
import { useState, useEffect } from 'react'
import { getData, buildTextArray } from '../../util/util'
import { AxiosResponse } from 'axios'
import styled, { ThemeProvider } from 'styled-components'
import { ISnowReportData } from '../../types/api'
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
	useEffect(() => {
		const getInitialSnowReport = async () => {
			const report: AxiosResponse = await getData('snowreport', 222036)
			const data: ISnowReportData = report.data
			setSnowReport(data)
		}
		getInitialSnowReport()
	}, [])

	const [panelText, setPanelText] = useState<any>(null)
	useEffect(() => {
		if (snowReport !== null) {
			setPanelText(buildTextArray(snowReport))
		}
	}, [snowReport])

	const handleClickOption = async (option: any) => {
		const report: AxiosResponse = await getData('snowreport', option.resortid)
		const data: ISnowReportData = report.data
		setSnowReport(data)
	}

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
