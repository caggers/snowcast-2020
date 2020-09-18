import * as React from 'react'
import { render, cleanup, fireEvent, getByTestId, getByText } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Input from './Input'
import { OPTIONS } from '../../util/util'

describe('Input', () => {
	const props = {
		options: OPTIONS,
		selected: OPTIONS[0],
		handleClickOption: jest.fn(),
		theme: {
			fontSizes: {
				fontLrg: '1rem',
			},
		},
	}

	afterAll(cleanup)

	const setup = () => {
		const { container, debug } = render(
			<ThemeProvider theme={props.theme}>
				<Input
					options={props.options}
					selected={props.selected}
					handleClickOption={props.handleClickOption}
				/>
			</ThemeProvider>
		)
		const input = getByTestId(container, 'location-input') as HTMLInputElement

		return {
			input,
			container,
			debug,
		}
	}

	it('renders the input but not the dropdown', () => {
		const { container, input } = setup()

		expect(container).toContainElement(input)
		expect(input.value).toEqual(props.selected.resortname)
		expect(container.querySelector('ul')).not.toBeInTheDocument()
	})

	describe('When the Input is clicked', () => {
		it('opens the dropdown', async () => {
			const { input, container } = setup()

			fireEvent.click(input)

			const dropdown = getByTestId(container, 'dropdown') as HTMLUListElement
			expect(container).toContainElement(dropdown)
		})

		it('clicks an option and the dropdown closes', () => {
			const { input, container } = setup()

			fireEvent.click(input)

			const dropdown = getByTestId(container, 'dropdown') as HTMLUListElement
			const secondOption = getByText(dropdown, props.options[1].resortname)
			fireEvent.click(secondOption)

			expect(input.value).toEqual(props.options[1].resortname)
			expect(container).not.toContainElement(dropdown)
		})

		it('clicks outside of the dropdown, the dropdown closes and the selected option does not change', () => {
			const { container, input } = setup()

			fireEvent.click(input)
			const dropdown = getByTestId(container, 'dropdown') as HTMLUListElement
			expect(container).toContainElement(dropdown)

			const body = document.body
			fireEvent.click(body)
			expect(container).not.toContainElement(dropdown)
		})
	})
})
