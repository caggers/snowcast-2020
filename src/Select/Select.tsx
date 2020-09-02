import * as React from "react"
import { useState } from "react"
import styled from 'styled-components'

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

const StyledSelect = styled.select`
	appearance: none;
  background-color: transparent;
  padding: 0 1em 0 0;
  margin: 0;
	color: white;
	border: none;
	border-bottom: 1px solid rgba(238, 238, 238, 0.5);
	font-size: 3rem;
`

const Select = (props: IProps) => {
	const { location } = props
	const [value, setValue] = useState(location.resortname)

	const handleChange = (event: any) => {
		const target = event.target as HTMLInputElement
		setValue(target.value)
	}

	return (
		<StyledSelect onChange={(e) => handleChange(e)} value={value}>
			{OPTIONS.map((option) =>
				<option
					key={option.resortid}
					value={option.resortname}
				>
					{option.resortname}
				</option>
			)}
		</StyledSelect>
	)
}

export default Select