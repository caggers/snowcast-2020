import * as React from 'react'
import { useMemo, FunctionComponent } from 'react'
import { ISnowReportData } from '../../types/api'
import styled from 'styled-components'
import { OPTIONS } from '../../util/util'
import Text from './Text'
import Panel from '../Panel/Panel'
import Input from '../Input/Input'

type option = {
	resortname: string
	resortid: number
}

type Props = {
	snowReport: ISnowReportData
	panelText: Array<{ label: string; text: string }>
	handleClickOption: (option: option) => Promise<void>
}

const Background = styled.div`
	background-image: linear-gradient(-45deg, #4158d0, #c850c0, #ffcc70);
	min-width: 250px;
	max-width: 900px;
	margin: 10vh auto;
	border-radius: 0.5rem;
	box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 100px);
`

const GridItemInput = styled.div`
	padding: 3.5rem;
	grid-column: 1 / span 2;
	grid-row: 1 / span 1;
`

const GridItemPanel = styled.div`
	padding: 3rem 2rem;
	background: rgba(238, 238, 238, 0.5);
	grid-column: 3 / span 1;
	grid-row: 1 / span 5;
`

const GridItemText = styled.div`
	padding: 0 3.5rem;
	grid-column: 1 / span 2;
	grid-row: 3 / span 1;
`

const Card: FunctionComponent<Props> = ({
	snowReport,
	panelText,
	handleClickOption,
}) => {
	const selected = {
		resortname: snowReport.resortname,
		resortid: snowReport.resortid,
	}
	const percentageOpen = `${snowReport.pctopen}% of the runs are open`
	const dropdownOptions = useMemo(() => OPTIONS, [])

	return (
		<>
			<Background>
				<Grid>
					<GridItemInput>
						<Input
							options={dropdownOptions}
							selected={selected}
							handleClickOption={handleClickOption}
						/>
					</GridItemInput>
					<GridItemText>
						<Text text={snowReport.conditions} />
						<Text text={percentageOpen} />
					</GridItemText>

					<GridItemPanel>
						<Panel panelText={panelText} />
					</GridItemPanel>
				</Grid>
			</Background>
		</>
	)
}

export default Card
