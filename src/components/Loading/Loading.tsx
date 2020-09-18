import * as React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const LoadingStyles = styled.div`
	bottom: 0;
	color: black;
	height: 10%;
	left: 0;
	margin: 15px auto;
	position: fixed;
	right: 0;
	text-align: center;
	top: 0;
	width: 600px;
	z-index: 2;
`
const Loading: FunctionComponent = () => {
	return (
		<LoadingStyles>
			<div data-testid="loading">Fetching Data from the API....</div>
		</LoadingStyles>
	)
}

export default Loading
