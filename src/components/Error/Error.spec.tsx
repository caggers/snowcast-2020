import * as React from 'react'
import { render } from '@testing-library/react'
import Error from './Error'
import { AxiosError } from 'axios'
import { ServerError } from '../../types/api'

describe('Error', () => {
	const error: AxiosError<ServerError> = {
		config: {},
		code: '500',
		response: {
			data: {},
			status: 500,
			statusText: 'Internal Server Error',
			headers: {},
			config: {},
		},
		isAxiosError: true,
		toJSON: jest.fn(),
		name: '',
		message: 'Request failed with status code 500',
	}
	const props = {
		error,
	}
	it('renders a 500 error as expected', () => {
		const { container, getByText } = render(<Error error={props.error} />)

		const message = getByText(props.error.message)
		expect(container).toContainElement(message)

		const text = getByText('Looks like the server is down :(')
		expect(container).toContainElement(text)
	})

	it('does not render the additional text if the error is not 500', async () => {
		const newError = {
			code: '501',
			message: 'Some other message',
			response: {
				data: {},
				headers: {},
				config: {},
				status: 501,
				statusText: 'Not Implemented',
			},
			isAxiosError: true,
		}
		const newProps = {
			error: {
				...error,
				...newError,
			},
		}
		const { container, getByText, queryByTestId } = render(<Error error={newProps.error} />)

		const message = getByText(newProps.error.message)
		expect(container).toContainElement(message)

		expect(queryByTestId('response-status')).toBeNull()
	})
})
