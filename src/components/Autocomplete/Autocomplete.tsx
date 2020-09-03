import * as React from "react"
import { MouseEvent } from "react"
import { useState, useRef, useEffect, useCallback } from "react"
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

const Autocomplete = (props: Props) => {
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
				autoComplete="on"
				className="search-box"
				onClick={(e) => onClick(e)}
				readOnly
				type="text"
				value={value}
			/>
			<Dropdown
				onClickOption={(e) => onClickOption(e)}
				open={showDropdown}
				options={options}
			/>
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

const Dropdown = (props: { open: boolean, options: Array<option>, onClickOption: (e: any) => void }) => {
	const { options, open, onClickOption } = props


	// const ref = useRef(null)

	// useEffect(() => {
	// 	// Attach the listeners on component mount.
	// 	document.addEventListener('click', clickListener)
	// 	// Detach the listeners on component unmount.
	// 	return () => {
	// 		document.removeEventListener('click', clickListener)
	// 	}
	// }, [])

	const onClick = (e: MouseEvent<HTMLLIElement>) => {
		onClickOption(e.currentTarget.innerText)
	}

	// const clickListener = useCallback(
	// 	(ev: MouseEvent) => {
	// 		if (!(ref.current! as any).contains(ev.currentTarget)) {
	// 			// console.log(e.currentTarget)
	// 			onClickOption?.(ev.currentTarget.innerText) // using optional chaining here, change to onClose && onClose(), if required
	// 		}
	// 	},
	// 	[ref.current],
	// )


	// const clickListener = useCallback(
	// 	(e: MouseEvent) => {
	// 		// console.log(ref.current)
	// 		// console.log(e.target)
	// 		if (ref.current.contains(e.target)) {
	// 			console.log(e.target)
	// 			onClickOption(e.currentTarget.innerText)
	// 		}
	// 	}, [ref.current])

	return (
		<>
			{open &&
				<StyledDropdown>
					{options.map(item => (
						<li
							key={item.resortid}
							onClick={(e) => onClick(e)}
						>{item.resortname}

						</li>
					))}
				</StyledDropdown>
			}
		</>
	)
}

export default Autocomplete