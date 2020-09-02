import * as React from "react"
import { render, fireEvent } from '@testing-library/react'
import Select from "./Select"

describe("Select", () => {
	const location = {
		resortname: "Ellmau",
		resortid: 222036
	}

	it("renders the App component correctly", async () => {
		const { findByText } = render(<Select location={location} />)
		await findByText("Ellmau")
	})


	it("can select a new value", async () => {
		const { getByTestId } = render(<Select location={location} />)
		fireEvent.change(getByTestId("select"), { target: { value: "Westendorf" }, })
	})
})
