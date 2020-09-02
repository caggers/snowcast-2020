import * as React from "react"
import { useState, useEffect } from "react"
import { getData } from "../../util/util"
import { AxiosResponse } from "axios"
import styled, { ThemeProvider } from "styled-components"
import { ISnowReportData } from "../../types/api"
import { theme } from "../../util/themes"
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
	color: white;
	font-family: Arial;
`

const App: React.FunctionComponent = () => {
	const [snowReport, setSnowReport] = useState<ISnowReportData | null>(null)

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
			{snowReport !== null &&
				<ThemeProvider theme={theme}>
					<Background>
						<Card snowReport={snowReport} />
					</Background>
				</ThemeProvider>
			}
		</>
	)
}

export default App