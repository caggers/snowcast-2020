import styled from 'styled-components'

const Wrapper = styled.div`
	label,
	input {
		display: block;
	}
`
const StyledInput = styled.input`
	background-color: transparent;
	border: none;
	border-bottom: 1px solid rgba(238, 238, 238, 0.5);
	color: white;
	cursor: pointer;
	font-size: 2rem;
	max-width: 210px;
`

const Arrow = styled.i`
	border: solid white;
	border-width: 0 3px 3px 0;
	cursor: pointer;
	display: inline-block;
	margin-left: -20px;
	margin-bottom: -10px;
	padding: 3px;
	transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
`

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
`

const InputWrapper = styled.div`
	display: -webkit-box;
`

export { Arrow, StyledInput, StyledDropdown, InputWrapper, Wrapper }
