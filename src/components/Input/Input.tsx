import * as React from 'react'
import { MouseEvent } from 'react'
import { useState, useRef, useEffect, MutableRefObject } from 'react'
import {
	Arrow,
	StyledInput,
	StyledDropdown,
	InputWrapper,
	Wrapper,
} from './styles'
import { option } from '../../types/api'

type Props = {
	options: Array<option>
	selected: option
	handleClickOption: (option: option) => Promise<void>
}

const Input = (props: Props) => {
	const { options, selected, handleClickOption } = props
	const ref = useRef() as MutableRefObject<HTMLOListElement>

	const [filteredOption, setFilteredOption] = useState<Array<option> | []>([])
	const [showDropdown, setShowDropdown] = useState(false)
	const [value, setValue] = useState(selected.resortname)

	const onClickInput = (event: MouseEvent<HTMLElement>) => {
		setFilteredOption([])
		setShowDropdown(true)
	}

	const onClickDropdown = (e: MouseEvent) => {
		const target = e.target as HTMLLIElement
		if (ref.current.contains(target)) {
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
			<InputWrapper onClick={(e) => onClickInput(e)}>
				<StyledInput
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

const Dropdown = React.forwardRef(
	(props: { options: Array<option>; onClick: (e: any) => void }, ref: any) => {
		const { options, onClick } = props

		useEffect(() => {
			document.addEventListener('click', clickListener)
			return () => {
				document.removeEventListener('click', clickListener)
			}
		}, [])

		const clickListener = (e: globalThis.MouseEvent) => {
			onClick(e)
		}

		return (
			<StyledDropdown ref={ref} data-testid="dropdown">
				{options.map((item) => (
					<li key={item.resortid}>{item.resortname}</li>
				))}
			</StyledDropdown>
		)
	}
)

export default Input
