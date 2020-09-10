import * as React from 'react'
import { render } from '@testing-library/react'
import Panel from './Panel'
import { ThemeProvider } from 'styled-components'

describe('Panel', () => {
	const props = {
		panelText: [
			{
				label: 'test',
				text: 'test text',
			},
		],
		theme: {
			fontSizes: {
				fontLrg: '1rem',
			},
		},
	}
	it('renders a Panel', () => {
		const { container } = render(
			<ThemeProvider theme={props.theme}>
				<Panel panelText={props.panelText} />
			</ThemeProvider>
		)
	})
})
