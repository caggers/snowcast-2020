import * as React from "react"
import { render } from '@testing-library/react'
import App from "./App"
import axios from "axios"

jest.mock('axios')

describe("App", () => {

	beforeAll(() => {
		const expectedResult: {} = { data: { resortname: "Westendorf" } }
		const mock: jest.SpyInstance = jest.spyOn(axios, 'get')
		mock.mockImplementationOnce(() => Promise.resolve(expectedResult))
	})

	it("renders the App component correctly", async () => {
		const { findByText } = render(<App />)
		await findByText("Westendorf")
	})
})
