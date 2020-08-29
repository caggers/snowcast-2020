import * as React from "react"
import { ISnowReportData } from '../types/api'
import styled from 'styled-components'


type Props = {
	snowReport: ISnowReportData
}

const Background = styled.div`
  background-image: linear-gradient(rgba(238, 238, 238, 0.5), rgba(238, 238, 238, 0.5));
  width: 75vw;
  height: auto;
	margin: 10vh auto;
	border-radius: 0.5rem;
`

const Card = (props: Props) => {
	const { snowReport } = props

	return (
		<>
			<Background>
				<div>Hello {snowReport.resortname}</div>
			</Background>

		</>
	)
}

export default Card