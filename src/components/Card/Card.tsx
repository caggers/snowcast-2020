import * as React from 'react'
import { useMemo, FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ISnowReportData } from '../../types/api'
import { OPTIONS } from '../../util/util'
import Text from '../Text/Text'
import Panel from '../Panel/Panel'
import Input from '../Input/Input'
import { Grid, GridCol3, GridRow1, GridRow2, GridRow3 } from './styles'

type option = {
	resortname: string
	resortid: number
}

type Props = {
	handleClickOption: (option: option) => Promise<void>
	panelText: Array<{ label: string; text: string }> | null
	snowReport: ISnowReportData | null
	weatherDesc: { base: string; upper: string }
}

const Background = styled.div`
	background-image: linear-gradient(-45deg, #4158d0, #c850c0, #ffcc70);
	border-radius: 10px;
	box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
	margin: 10vh auto;
	max-width: 750px;
	min-width: 250px;
	max-height: 600px;
	overflow-y: scroll;

	@media screen and (max-width: 600px) {
		margin: 0 auto;
		max-height: none;
	}
`
Background.displayName = 'CardBackground'

const Card: FunctionComponent<Props> = ({
	handleClickOption,
	panelText,
	snowReport,
	weatherDesc,
}) => {
	const [selected, setSelected] = useState({ resortname: '', resortid: 0 })
	useEffect(() => {
		if (snowReport !== null) {
			setSelected({
				resortname: snowReport?.resortname,
				resortid: snowReport?.resortid,
			})
		}
	}, [snowReport])

	const percentageOpen = `${snowReport?.pctopen}% of the runs are open`
	const dropdownOptions = useMemo(() => OPTIONS, [])

	return (
		<Background>
			{snowReport !== null && panelText !== null && (
				<Grid>
					<GridRow1>
						<Input
							options={dropdownOptions}
							selected={selected}
							handleClickOption={handleClickOption}
						/>
					</GridRow1>

					<GridRow2>
						<Text
							label="Bottom station weather conditions"
							text={weatherDesc.base}
						/>
						<Text
							label="Top station weather conditions"
							text={weatherDesc.upper}
						/>
					</GridRow2>

					<GridRow3>
						<Text text={snowReport.conditions} label="Status" />
						<Text
							text={percentageOpen}
							label="Percentage of the runs open"
						/>
					</GridRow3>

					<GridCol3>
						<Panel panelText={panelText} />
					</GridCol3>
				</Grid>
			)}
		</Background>
	)
}

export default Card
