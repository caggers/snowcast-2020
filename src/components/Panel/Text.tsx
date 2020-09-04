import * as React from 'React'
import styled from 'styled-components'

const StyledText = styled.div`
	margin: 1rem;

	label {
		font-size: 1rem;
	}
	.text {
		font-size: 2rem;
	}
`

const Text = (props: { item: any }) => {
	const { label, text } = props.item
	return (
		<StyledText>
			<label>{label}:</label>
			<div className="text">{text}</div>
		</StyledText>
	)
}

export default Text
