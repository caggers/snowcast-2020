import * as React from "react"
import { useState, useContext, useEffect, useLayoutEffect } from "react"

export const OPTIONS = [
	{
		resortname: "Westendorf",
		resortid: 222036
	},
	{
		resortname: "Kitzbuhel",
		resortid: 222013
	},
	{
		resortname: "Ellmau",
		resortid: 222023
	},
	// {
	// 	value: "Scheffau",
	// 	id: 54883634
	// },
	{
		resortname: "Saalbach",
		resortid: 222018
	}
]

type IProps = {
	location: {
		resortname: string,
		resortid: number
	}
}

const Select = (props: IProps) => {
	const { location } = props
	const [value, setValue] = useState(location.resortname)

	const handleChange = (event: any) => {
		const target = event.target as HTMLInputElement
		setValue(target.value)
	}

	return (
		<select onChange={(e) => handleChange(e)} value={value}>
			{OPTIONS.map((option) =>
				<option
					key={option.resortid}
					value={option.resortname}
				>
					{option.resortname}
				</option>
			)}
		</select>
	)
}

export default Select