import styled from 'styled-components'

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 1fr);
	@media screen and (max-width: 600px) {
		grid-template-columns: auto;
		grid-template-rows: auto;
	}
`
Grid.displayName = 'Grid'

const GridRow1 = styled.div`
	grid-column: 1 / span 2;
	grid-row: 1 / span 1;
	padding: 10% 0 0 10%;
	@media screen and (max-width: 600px) {
		grid-column: 1 / span 1;
		grid-row: 1 / span 1;
		padding: 10% 0 0 10%;
	}
`
GridRow1.displayName = 'GridRow1'

const GridRow2 = styled.div`
	grid-column: 1 / span 2;
	grid-row: 2 / span 1;
	padding: 0 0 0 10%;
	@media screen and (max-width: 600px) {
		grid-column: 1 / span 1;
		grid-row: 2 / span 1;
		padding: 10% 0 0 10%;
	}
`
GridRow2.displayName = 'GridRow2'

const GridRow3 = styled.div`
	grid-column: 1 / span 2;
	grid-row: 3 / span 1;
	padding: 0 0 0 10%;
	@media screen and (max-width: 600px) {
		grid-column: 1 / span 1;
		grid-row: 3 / span 1;
		padding: 0 0 0 10%;
	}
`
GridRow3.displayName = 'GridRow3'

const GridCol3 = styled.div`
	background: rgba(238, 238, 238, 0.5);
	grid-column: 3 / span 1;
	grid-row: 1 / span 4;
	padding: 15% 0 10% 10%;
	/* filter: invert(1); */
	/* color: black; */
	@media screen and (max-width: 600px) {
		grid-column: 1 / span 1;
		grid-row: 4 / span 1;
		background: transparent;
		padding: 0 0 0 10%;
	}
`
GridCol3.displayName = 'GridCol3'

export { Grid, GridCol3, GridRow1, GridRow2, GridRow3 }
