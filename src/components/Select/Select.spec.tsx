import * as React from "react"
import { render, fireEvent } from '@testing-library/react'
import Select from "./Select"

describe("Select", () => {
	const location = {
		resortname: "Ellmau",
		resortid: 222036
	}

	it("renders the Select component correctly", () => {
		const { getByText } = render(<Select location={location} />)
		getByText("Ellmau")
	})


	it("can select a new value", () => {
		const { getByTestId } = render(<Select location={location} />)
		fireEvent.change(getByTestId("select"), { target: { value: "Westendorf" }, })
	})
})
