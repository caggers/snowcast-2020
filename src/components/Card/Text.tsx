import * as React from 'react'
import styled from 'styled-components'

type Props = {
	text: string
}
const StyledText = styled.div`
	font-size: 1.5em;
	margin-top: 1em;
`

const Text: React.FunctionComponent<Props> = ({ text }) => {
	return <StyledText>{text}</StyledText>
}

export default Text
