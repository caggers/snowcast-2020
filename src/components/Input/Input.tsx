import * as React from 'react'
import { MouseEvent } from 'react'
import { useState, useRef, useEffect, MutableRefObject } from 'react'
import styled from 'styled-components'

type option = {
	resortname: string
	resortid: number
}

type Props = {
	options: Array<option>
	selected: option
	handleClickOption: (option: option) => Promise<void>
}

const Wrapper = styled.div`
	cursor: pointer;
`
const StyledInput = styled.input`
	background-color: transparent;
	border: none;
	border-bottom: 1px solid rgba(238, 238, 238, 0.5);
	color: white;
	cursor: pointer;
	font-size: 2rem;
	max-width: 240px;
`

const Input = (props: Props) => {
	const { options, selected, handleClickOption } = props
	const ref = useRef() as MutableRefObject<HTMLOListElement>

	const [filteredOption, setFilteredOption] = useState<Array<option> | []>([])
	const [showDropdown, setShowDropdown] = useState(false)
	const [value, setValue] = useState(selected.resortname)

	const onClickInput = (event: MouseEvent<HTMLInputElement>) => {
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
			<StyledInput
				data-testid="location-input"
				onClick={(e) => onClickInput(e)}
				readOnly
				type="text"
				value={value}
			/>
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

const StyledDropdown = styled.ul`
	border-radius: 0.5rem;
	background-color: rgba(238, 238, 238, 1);
	margin: 0;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	min-width: 160px;
	padding: 12px 16px;
	position: absolute;
	z-index: 1;
	color: black;
	list-style: none;
	> li:hover {
		background: white;
	}
`

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
