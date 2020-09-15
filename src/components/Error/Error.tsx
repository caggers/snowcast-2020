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
			<div data-testid="error">{error.message}</div>
			{error.response?.status === 500 && (
				<p data-testid="response-status">Looks like the server is down :(</p>
			)}
		</ErrorStyles>
	)
}

export default Error
