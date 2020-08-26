import * as React from "react"
import { useEffect } from "react"
import ReactDOM from "react-dom"
import { getData } from "./util"

const App: React.FunctionComponent = () => {
	useEffect(() => {
		async function getTheData() {
			console.log(await getData("snowreport", 222036))
		}
		getTheData()
	}, [])

	return (
		<div>Hello</div>
	)
}

const mountNode = document.getElementById("app")
ReactDOM.render(<App />, mountNode)
