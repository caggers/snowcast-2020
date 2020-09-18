import * as React from 'react'
import { useState, useEffect, FunctionComponent } from 'react'
import { buildTextArrayForPanel } from '../../util/util'
import { AxiosError } from 'axios'
import { ISnowReportData, ServerError, option, text } from '../../types/api'
import Card from '../Card/Card'

type Props = {
	error: AxiosError<ServerError> | undefined
	handleClickOption: (option: option) => Promise<void>
	loading: boolean
	snowReport: ISnowReportData | null
	weatherDesc: { base: { wx_desc: string }; upper: { wx_desc: string } }
}

const Content: FunctionComponent<Props> = ({
	handleClickOption,
	snowReport,
	weatherDesc,
}) => {
	const [panelText, setPanelText] = useState<Array<text> | null>(null)
	useEffect(() => {
		if (snowReport !== null) {
			setPanelText(buildTextArrayForPanel(snowReport))
		}
	}, [snowReport])

	return (
		<>
			<Card
				handleClickOption={handleClickOption}
				panelText={panelText}
				snowReport={snowReport}
				weatherDesc={{
					base: weatherDesc.base.wx_desc,
					upper: weatherDesc.base.wx_desc,
				}}
			/>
		</>
	)
}

export default Content
