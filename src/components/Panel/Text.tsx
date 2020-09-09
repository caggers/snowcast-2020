import * as React from 'react'
import styled from 'styled-components'
import { text } from '../../types/api'

const StyledText = styled.div`
	padding-bottom: 0.75rem;
	.text {
		font-size: 2rem;
	}
`

const Text = (props: { item: text }) => {
	const { label, text } = props.item
	return (
		<StyledText>
			<label>{label}:</label>
			<div className="text">{text}</div>
		</StyledText>
	)
}

export default Text
