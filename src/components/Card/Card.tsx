import * as React from "react"
import { useMemo } from "react"
import { ISnowReportData } from '../../types/api'
import styled from 'styled-components'
import { OPTIONS } from "../../util/util"
import Text from "../Text/Text"
import Panel from "../Panel/Panel"
import Input from "../Input/Input"

type option = {
	resortname: string
	resortid: number
}

type Props = {
	snowReport: ISnowReportData,
	panelText: Array<{ label: string, text: string }>
	handleClickOption: (option: option) => Promise<void>,
}

const Background = styled.div`
  /* background: rgba(238, 238, 238, 0.5); */
  width: 75%;
	min-width: 250px;
  height: auto;
	margin: 10vh auto;
	border-radius: 0.5rem;
	border: 2px solid rgba(238, 238, 238, 0.5);
	box-shadow: 0 5px 5px 0 rgba(0,0,0,0.5);
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-template-rows: repeat(4, 100px);
	/* grid-auto-rows: minmax(min-content, max-content); */
`

const GridItemA = styled.div`
	padding: 5em;
	grid-column: 1 / span 2;
	grid-row: 1 / span 5;
`

const GridItemB = styled.div`
	background: rgba(238, 238, 238, 0.5); 
	grid-column: 3 / span 1;
	grid-row: 1 / span 5;
`

const Card = (props: Props) => {
	const { snowReport, panelText, handleClickOption } = props
	const selected = { resortname: snowReport.resortname, resortid: snowReport.resortid }
	const percentageOpen = `${snowReport.pctopen}% of the Runs are open`
	const dropdownOptions = useMemo(() => OPTIONS, [])

	return (
		<>
			<Background>
				<Grid>
					<GridItemA>
						<Input
							options={dropdownOptions}
							selected={selected}
							handleClickOption={handleClickOption}
						/>
						<Text text={snowReport.conditions} />
						<Text text={percentageOpen} />
					</GridItemA>
					<GridItemB>
						<Panel panelText={panelText} />
					</GridItemB>

				</Grid>
			</Background>
		</>
	)
}

export default Card