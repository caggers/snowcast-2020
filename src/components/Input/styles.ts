import styled from 'styled-components'

const Wrapper = styled.div`
	label,
	input {
		display: block;
	}
	@media screen and (max-width: 600px) {
		label {
			font-size: ${(props) => props.theme.fontSizes.fontS};
		}
	}
`
const StyledInput = styled.input`
	background-color: transparent;
	border: none;
	border-bottom: 1px solid rgba(238, 238, 238, 0.5);
	color: white;
	cursor: pointer;
	font-size: ${(props) => props.theme.fontSizes.fontLrg};
	width: fit-content;
	@media screen and (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.fontMed};
	}
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
	@media screen and (max-width: 600px) {
		margin-bottom: 0;
	}
`

const InputWrapper = styled.div`
	display: -webkit-box;
`

export { Arrow, StyledInput, InputWrapper, Wrapper }
