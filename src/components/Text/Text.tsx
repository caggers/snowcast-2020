import * as React from 'react'
import styled from 'styled-components'

type Props = {
	text: string
	label?: string
}

const StyledText = styled.div`
	padding-bottom: 0.75rem;
	.text {
		font-size: ${(props) => props.theme.fontSizes.fontLrg};
	}
	@media screen and (max-width: 600px) {
		label {
			font-size: ${(props) => props.theme.fontSizes.fontS};
		}
		.text {
			font-size: ${(props) => props.theme.fontSizes.fontMed};
		}
	}
`

const Text: React.FunctionComponent<Props> = ({ text, label }) => {
	return (
		<StyledText>
			{label && <label htmlFor={label}>{label}:</label>}
			<div className="text" id={label} aria-label={label}>
				{text}
			</div>
		</StyledText>
	)
}

export default Text
