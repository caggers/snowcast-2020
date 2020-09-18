import { getData } from './util'
import axios from 'axios'

describe('API', () => {
	it('makes a successful call to the snowReport API', async () => {
		const expectedResult: { data: { resortname: string } } = {
			data: { resortname: 'Westendorf' },
		}

		const mock: jest.SpyInstance = jest.spyOn(axios, 'get')
		mock.mockImplementationOnce(() => Promise.resolve(expectedResult))

		const res = await getData('', 1)

		expect(mock).toHaveBeenCalled()
		expect(res).toBe(expectedResult)
		mock.mockRestore()
	})
})
