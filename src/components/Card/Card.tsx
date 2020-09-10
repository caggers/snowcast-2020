import * as React from 'react'
import { useMemo, FunctionComponent } from 'react'
import { ISnowReportData } from '../../types/api'
import { OPTIONS } from '../../util/util'
import Text from '../Text/Text'
import Panel from '../Panel/Panel'
import Input from '../Input/Input'
import {
	Background,
	Grid,
	GridCol3,
	GridRow1,
	GridRow2,
	GridRow3,
} from './styles'

type option = {
	resortname: string
	resortid: number
}

type Props = {
	handleClickOption: (option: option) => Promise<void>
	panelText: Array<{ label: string; text: string }>
	snowReport: ISnowReportData
	weatherDesc: { base: any; upper: any }
}

const Card: FunctionComponent<Props> = ({
	handleClickOption,
	panelText,
	snowReport,
	weatherDesc,
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
						<Text text={percentageOpen} label="Percentage of the runs open" />
					</GridRow3>

					<GridCol3>
						<Panel panelText={panelText} />
					</GridCol3>
				</Grid>
			</Background>
		</>
	)
}

export default Card
