import * as React from "react"
import { ISnowReportData } from '../types/api'
import styled from 'styled-components'

type Props = {
	snowReport: ISnowReportData
}

const Background = styled.div`
  /* background: rgba(238, 238, 238, 0.5); */
  width: 75%;
	min-width: 250px;
  height: auto;
	margin: 10vh auto;
	border-radius: 0.5rem;
	border: 2px solid white;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-template-rows: repeat(4, 100px);
	/* grid-auto-rows: minmax(min-content, max-content); */
`

const GridItemA = styled.div`
	grid-column: 1 / span 2;
	grid-row: 1 / span 5;
`

const GridItemB = styled.div`
	grid-column: 3 / span 1;
	grid-row: 1 / span 5;
`

const Card = (props: Props) => {
	const { snowReport } = props

	return (
		<>
			<Background>
				<Grid>
					<GridItemA>
						<div></div>
					</GridItemA>
					<GridItemB>
						<div></div>
					</GridItemB>

				</Grid>
			</Background>
		</>
	)
}

export default Card