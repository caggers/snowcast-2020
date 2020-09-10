import * as React from 'react'
import { useState, useRef, FunctionComponent } from 'react'
import { Arrow, StyledInput, InputWrapper, Wrapper } from './styles'
import { option } from '../../types/api'
import Dropdown from './Dropdown'

type Props = {
	options: Array<option>
	selected: option
	handleClickOption: (option: option) => Promise<void>
}

const Input: FunctionComponent<Props> = ({
	options,
	selected,
	handleClickOption,
}) => {
	const ref = useRef<HTMLUListElement | null>(null)

	const [filteredOption, setFilteredOption] = useState<Array<option> | []>([])
	const [showDropdown, setShowDropdown] = useState(false)
	const [value, setValue] = useState(selected.resortname)

	const onClickInput = () => {
		setFilteredOption([])
		setShowDropdown(true)
	}

	const onClickDropdown = (e: globalThis.MouseEvent) => {
		const target = e.target as HTMLLIElement
		if (ref.current !== null && ref.current.contains(target)) {
			const filteredOptionArr = options.filter(
				(option) => option.resortname === target.innerHTML
			)
			setFilteredOption(filteredOptionArr)
			setValue(filteredOptionArr[0].resortname)
			handleClickOption(filteredOptionArr[0])
		}
		setShowDropdown(false)
	}

	return (
		<Wrapper>
			<label htmlFor="location">Select a Ski Area:</label>
			<InputWrapper onClick={() => onClickInput()}>
				<StyledInput
					aria-label="location"
					data-testid="location-input"
					id="location"
					readOnly
					type="text"
					value={value}
				/>
				<Arrow />
			</InputWrapper>
			{showDropdown && (
				<Dropdown
					onClick={(e) => onClickDropdown(e)}
					options={options}
					ref={ref}
				/>
			)}
		</Wrapper>
	)
}

export default Input
