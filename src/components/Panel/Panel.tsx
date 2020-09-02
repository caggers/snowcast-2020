import * as React from "react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { ISnowReportData } from '../../types/api'

const StyledPanel = styled.div`
	font-size: 1.5em;
	margin-top: 1em;
`

type Props = {
	panelText: Array<{ label: string, text: string }>
}

const Panel = (props: Props) => {
	const { panelText } = props
	return (
		<>
			{panelText.map(item => (
				<div key={item.label}>
					<label>{item.label}</label>
					<div>{item.text}</div>
				</div>
			))}
		</>
	)
}


export default Panel