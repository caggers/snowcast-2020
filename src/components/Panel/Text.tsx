import * as React from "React"

const Text = (props: { item: any }) => {
	const { label, text } = props.item
	console.log("label")
	return (
		<>
			<label>{label}</label>
			<div>{text}</div>
		</>
	)
}

export default Text