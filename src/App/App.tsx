import * as React from "react"
import { useState, useEffect } from "react"
import { getData } from "../util/util"
import { AxiosResponse } from "axios"
import styled from "styled-components"
import { ISnowReportResponse } from "../types/api"

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

const App: React.FunctionComponent = () => {
	const [snowReport, setSnowReport] = useState<ISnowReportResponse | null>()

	useEffect(() => {
		const getInitialSnowReport = async () => {
			const report: AxiosResponse = await getData("snowreport", 222036)
			const data: ISnowReportResponse = report.data
			setSnowReport(data)
		}
		getInitialSnowReport()
	}, [])

	return (
		<>
			<Background>
				{snowReport &&
					<div>Hello {snowReport.resortname}</div>
				}
			</Background>

		</>
	)
}

export default App