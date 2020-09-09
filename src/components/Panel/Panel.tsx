import * as React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { text } from '../../types/api'

const StyledPanel = styled.div``

type Props = {
	panelText: Array<text>
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
