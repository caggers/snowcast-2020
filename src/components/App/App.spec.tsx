import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './App'
import axios from 'axios'

jest.mock('axios')

describe('App', () => {
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

	afterAll(cleanup)

	describe('rendering with a good API response', () => {
		beforeAll(() => {
			const mock: jest.SpyInstance = jest.spyOn(axios, 'get')
			mock.mockImplementationOnce(() => Promise.resolve(snowReportExpectedResult))
			mock.mockImplementationOnce(() => Promise.resolve(forecastExpectedResult))
		})

		it('renders the App component correctly with a 200 API response', async () => {
			const { findByText, getByTestId, getByLabelText, container } = render(<App />)
			const loading = getByTestId('loading')
			expect(container).toContainElement(loading)

			const conditions = await findByText('Champagne Skiing!')
			expect(container).toContainElement(conditions)

			const baseWeather = getByLabelText('Bottom station weather conditions')
			expect(container).toContainElement(baseWeather)

			expect(container).not.toContainElement(loading)
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
			const { findByTestId, container, getByTestId } = render(<App />)
			const loading = getByTestId('loading')
			expect(container).toContainElement(loading)

			const errorDiv = await findByTestId('error')
			expect(container).toContainElement(errorDiv)
			expect(container).not.toContainElement(loading)
		})
	})
})
