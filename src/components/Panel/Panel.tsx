import * as React from 'react'
import Text from './Text'
import { text } from '../../types/api'

type Props = {
	panelText: Array<text>
}

const Panel: React.FunctionComponent<Props> = ({ panelText }) => {
	return (
		<>
			{panelText.map((item) => (
				<Text item={item} key={item.label} />
			))}
		</>
	)
}

export default Panel
