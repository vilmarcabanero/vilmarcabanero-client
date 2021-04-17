import NavBar from './NavBar'
import styled from 'styled-components'

// import './logic/header.js'

const Header = () => {
	return (
		<StyledHeader>
			<NavBar />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	-webkit-box-shadow: 0 6px 4px -5px #888888;
	-moz-box-shadow: 0 6px 4px -5px #888888;
	box-shadow: 0 6px 4px -5px #888888;


	margin: 0;
	padding: 0;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
`

export default Header
