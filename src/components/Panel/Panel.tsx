import * as React from 'react'
import Text from '../Text/Text'
import { text } from '../../types/api'

type Props = {
	panelText: Array<text>
}

const Panel: React.FunctionComponent<Props> = ({ panelText }) => {
	return (
		<>
			{panelText.map((item) => (
				<Text label={item.label} text={item.text} key={item.label} />
			))}
		</>
	)
}

export default Panel
