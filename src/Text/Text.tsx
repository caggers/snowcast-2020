import * as React from "react"
import styled from "styled-components"

const StyledText = styled.div`
	font-size: 1.5em;
	margin-top: 1em;
`

const Text = (props: { text: string }) => {
	return (<StyledText>{props.text}</StyledText>)
}

export default Text