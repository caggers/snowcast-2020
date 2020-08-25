import * as React from "react"
import ReactDOM from "react-dom"

interface IProps {
  name: string;
}

const App: React.FunctionComponent<IProps> = props => {
	const {name} = props

	return (
		<div>Hello {name}</div>
	)
}

const mountNode = document.getElementById("app")
ReactDOM.render(<App name="Jane" />, mountNode)
