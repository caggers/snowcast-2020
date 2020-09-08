import styled from 'styled-components'

const Background = styled.div`
	background-image: linear-gradient(-45deg, #4158d0, #c850c0, #ffcc70);
	min-width: 250px;
	max-width: 900px;
	height: auto;
	margin: 10vh auto;
	border-radius: 0.5rem;
	box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 100px);
`

const GridItemInput = styled.div`
	grid-column: 1 / span 2;
	grid-row: 1 / span 1;
	padding: 2rem 0 0 2rem;
`

const GridItemPanel = styled.div`
	background: rgba(238, 238, 238, 0.5);
	grid-column: 3 / span 1;
	grid-row: 1 / span 5;
	padding: 2rem 0 0 2rem;
`

const GridItemText = styled.div`
	grid-column: 1 / span 2;
	grid-row: 3 / span 1;
	padding: 0 0 0 2rem;
`

export { Background, Grid, GridItemInput, GridItemPanel, GridItemText }
