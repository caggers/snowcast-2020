import * as React from 'react'
import styled from 'styled-components'
import { text } from '../../types/api'

type Props = {
	item: text
}

const StyledText = styled.div`
	padding-bottom: 0.75rem;
	.text {
		font-size: 2rem;
	}
`

const Text: React.FunctionComponent<Props> = ({ item }) => {
	const { label, text } = item
	return (
		<StyledText>
			<label>{label}:</label>
			<div className="text">{text}</div>
		</StyledText>
	)
}

export default Text
