import * as React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const LoadingStyles = styled.div`
	color: black;
	margin: 10% auto;
	width: 600px;
`
const Loading: FunctionComponent = () => {
	return (
		<LoadingStyles>
			<div>Fetching Data from the API....</div>
		</LoadingStyles>
	)
}

export default Loading
