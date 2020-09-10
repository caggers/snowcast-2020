import * as React from 'react'
import styled from 'styled-components'
// import { text } from '../../types/api'

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
		/* label {
			font-size: ${(props) => props.theme.fontSizes.fontXS};
		} */
		.text {
			font-size: ${(props) => props.theme.fontSizes.fontS};
		}
	}
`

const Text: React.FunctionComponent<Props> = ({ text, label }) => {
	return (
		<StyledText>
			{label && <label htmlFor={label}>{label}:</label>}
			<div className="text" id={label}>
				{text}
			</div>
		</StyledText>
	)
}

export default Text
