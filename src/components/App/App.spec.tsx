import * as React from 'react'
import { render, cleanup, findByTestId } from '@testing-library/react'
import App from './App'
import axios from 'axios'

jest.mock('axios')

describe('App', () => {
	afterAll(cleanup)

	describe('rendering a loading state', () => {
		it('renders a loading component while loading', () => {
			const { container, getByTestId } = render(<App />)
			const fetching = getByTestId('loading')

			expect(container).toContainElement(fetching)
		})
	})

	describe('rendering with a good API response', () => {
		beforeAll(() => {
			const snowReportExpectedResult = {
				data: {
					resortid: 222023,
					resortname: 'Westendorf',
					resortcountry: 'Austria',
					newsnow_cm: 10,
					newsnow_in: 4,
					lowersnow_cm: 40,
					lowersnow_in: 0,
					uppersnow_cm: 60,
					uppersnow_in: 0,
					pctopen: 0,
					lastsnow: '09/04/2020',
					reportdate: '13/04/2020',
					reporttime: '08:19',
					conditions: 'Champagne Skiing!',
					lastsnow_cm: 10,
					lastsnow_in: 4,
				},
			}
			const forecastExpectedResult = {
				data: {
					forecast: [
						{
							time: '07:00',
							base: {
								wx_desc: 'and now for the weather',
							},
							upper: {
								wx_desc: 'and now for the upper weather',
							},
						},
					],
				},
			}
			const mock: jest.SpyInstance = jest.spyOn(axios, 'get')
			mock.mockImplementationOnce(() =>
				Promise.resolve(snowReportExpectedResult)
			)
			mock.mockImplementationOnce(() => Promise.resolve(forecastExpectedResult))
		})

		it('renders the App component correctly with a 200 API response', async () => {
			const { findByText, getByLabelText, container } = render(<App />)

			const conditions = await findByText('Champagne Skiing!')
			expect(container).toContainElement(conditions)

			const baseWeather = getByLabelText('Bottom station weather conditions')
			expect(container).toContainElement(baseWeather)
		})
	})

	describe('rendering with a bad API response', () => {
		it('renders an Error component if the server returns a bad response', async () => {
			const mock: jest.SpyInstance = jest.spyOn(axios, 'get')
			const error = {
				code: '500',
				response: {
					status: 500,
				},
				message: 'Request failed with status code 500',
			}
			mock.mockImplementationOnce(() => Promise.reject(error))
			const { findByTestId, container } = render(<App />)

			const errorDiv = await findByTestId('error')
			expect(container).toContainElement(errorDiv)
		})
	})
})
