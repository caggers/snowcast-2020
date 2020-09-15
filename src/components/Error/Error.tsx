import * as React from 'react'
import { FunctionComponent } from 'react'
import { AxiosError } from 'axios'
import styled from 'styled-components'
import { ServerError } from '../../types/api'

const ErrorStyles = styled.div`
	color: black;
	margin: 10% auto;
	width: 600px;
`

type Props = {
	error: AxiosError<ServerError>
}

const Error: FunctionComponent<Props> = ({ error }) => {
	return (
		<ErrorStyles>
			<div>{error.message}</div>
		</ErrorStyles>
	)
}

export default Error
