import * as React from 'react'
import styled from 'styled-components'
import Text from './Text'

const StyledPanel = styled.div`
	font-size: 1.5em;
	margin-top: 1em;
`

type Props = {
	panelText: Array<{ label: string; text: string }>
}

const Panel = (props: Props) => {
	const { panelText } = props
	return (
		<>
			{panelText.map((item) => (
				<Text item={item} key={item.label} />
			))}
		</>
	)
}

export default Panel
