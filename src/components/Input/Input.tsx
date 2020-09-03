import * as React from "react"
import { MouseEvent } from "react"
import { useState, useRef, useEffect, useCallback, MutableRefObject } from "react"
import styled from 'styled-components'

type option = {
	resortname: string
	resortid: number
}

type Props = {
	options: Array<option>
}

const Wrapper = styled.div`
	cursor: pointer;
`
const StyledInput = styled.input`
	border: none;
	border-bottom: 1px solid rgba(238, 238, 238, 0.5);
	color: white;
	cursor: pointer;
	font-size: 2rem;
  background-color: transparent;
`

const Input = (props: Props) => {
	const { options } = props

	const [filteredOption, setFilteredOption] = useState<Array<option> | []>([])
	const [showDropdown, setShowDropdown] = useState(false)
	const [value, setValue] = useState(options[0].resortname)

	const onClick = (event: MouseEvent<HTMLInputElement>) => {
		setFilteredOption([])
		setShowDropdown(true)
	}

	const onClickOption = (string: string) => {
		const filteredOption = options.filter(option =>
			option.resortname === string
		)
		setFilteredOption(filteredOption)
		setShowDropdown(false)
		setValue(string)
	}

	return (
		<Wrapper>
			<StyledInput
				className="search-box"
				onClick={(e) => onClick(e)}
				readOnly
				type="text"
				value={value}
			/>
			{showDropdown &&
				<Dropdown
					onClickOption={(e) => onClickOption(e)}
					options={options}
				/>
			}
		</Wrapper>
	)
}

const StyledDropdown = styled.ul`
	border-radius: 0.5rem;
	background-color: rgba(238, 238, 238, 1);
	margin: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  min-width: 160px;
  padding: 12px 16px;
  position: absolute;
  z-index: 1;
	color: black;
	list-style:none;
	>li:hover {
		background: white;
	}
`

const Dropdown = (props: { options: Array<option>, onClickOption: (e: any) => void }) => {
	const { options, onClickOption } = props
	const ref = useRef() as MutableRefObject<HTMLOListElement>

	useEffect(() => {
		document.addEventListener('click', clickListener)
		return () => {
			document.removeEventListener('click', clickListener)
		}
	}, [])

	const clickListener = (e: globalThis.MouseEvent) => {
		if (ref.current.contains(e.target as Node)) {
			const innerHTML = (e.target as HTMLLIElement).innerHTML
			onClickOption(innerHTML)
		} else {

		}
	}

	return (
		<StyledDropdown ref={ref}>
			{options.map(item => (
				<li
					key={item.resortid}
				>
					{item.resortname}
				</li>
			))}
		</StyledDropdown>
	)
}

export default Input