import * as React from 'react'
import { useEffect, forwardRef } from 'react'
import styled from 'styled-components'
import { option } from '../../types/api'

type DropdownProps = {
	options: Array<option>
	onClick: (e: globalThis.MouseEvent) => void
}

type Ref = HTMLUListElement

const StyledDropdown = styled.ul`
	border-radius: 0.5rem;
	background-color: rgba(238, 238, 238, 1);
	cursor: pointer;
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
	@media screen and (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.fontMed};
	}
`
StyledDropdown.displayName = 'StyledDropdown'

const Dropdown = forwardRef<Ref, DropdownProps>(({ options, onClick }, ref) => {
	useEffect(() => {
		const clickListener = (e: globalThis.MouseEvent) => {
			onClick(e)
		}
		document.addEventListener('click', clickListener)
		return () => {
			document.removeEventListener('click', clickListener)
		}
	}, [onClick])

	return (
		<StyledDropdown ref={ref} data-testid="dropdown">
			{options.map((item) => (
				<li key={item.resortid}>{item.resortname}</li>
			))}
		</StyledDropdown>
	)
})

Dropdown.displayName = 'Dropdown'

export default Dropdown
