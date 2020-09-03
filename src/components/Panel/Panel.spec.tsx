import * as React from 'react'
import { render } from '@testing-library/react'
import Panel from './Panel'

describe('Panel', () => {
	const props = {
		panelText: [
			{
				label: 'test',
				text: 'test text',
			},
		],
	}
	it('renders a Panel', () => {
		const { container } = render(<Panel panelText={props.panelText} />)
	})
})
