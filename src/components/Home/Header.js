// import styled from 'styled-components'
// // import RightIcons from './RightIcons';
// import VcLogo from './VcLogo'
// import { FaUser, FaTh } from 'react-icons/fa'

// const Header = () => {
// 	return (
// 		<StyledHeader>
// 			<div>
// 				<VcLogo />
// 				<div className='icon-container'>
// 					<StyledTh />
// 					{/* <i class='material-icons'>apps</i> */}
// 					<StyledUser />
// 				</div>
// 			</div>
// 		</StyledHeader>
// 	)
// }

// const StyledHeader = styled.div`
// 	> div {
// 		position: relative;
// 		.icon-container {
// 			position: absolute;
// 			display: flex;
// 			justify-content: flex-end;
// 			top: 0rem;
// 			right: 2rem;
// 			padding-top: 0;
// 			align-items: center;
// 			@media (max-width: 35rem) {
// 				right: 0.25rem;
// 				top: 0rem;
// 			}

// 			/* > i {
// 				font-weight: 400;
// 				color: white;
// 				font-size: 3rem;
// 				padding-right: 1rem;
// 				padding-left: 1rem;
// 				&:hover {
// 					opacity: 0.8;
// 					cursor: pointer;
// 				}

// 				@media (max-width: 35rem) {
// 					font-size: 2.5rem;
// 			}

// 			} */
// 		}
// 	}
// `
// const StyledUser = styled(FaUser)`
// 	/* right: 2rem;
// 			top: 0.5rem; */
// 	font-weight: 400;
// 	color: white;
// 	/* padding-right: 1rem;
// 	padding-left: 1rem; */
// 	padding-right: 1.5rem;
// 	font-size: 3.25rem;
// 	&:hover {
// 		opacity: 0.8;
// 		cursor: pointer;
// 	}

// 	@media (max-width: 35rem) {
// 		font-size: 2.9rem;

// 	}
// `

// const StyledTh = styled(FaTh)`
// 	/* right: 2rem;
// 			top: 0.5rem; */
// 	font-weight: 400;
// 	color: white;
// 	/* padding-right: 1rem;
// 	padding-left: 1rem; */
// 	padding-right: 1.5rem;
// 	font-size: 3.7rem;
// 	&:hover {
// 		opacity: 0.8;
// 		cursor: pointer;
// 	}

// 	@media (max-width: 35rem) {
// 		font-size: 3.25rem;
// 	}
// `

// export default Header

//New Header
import styled from 'styled-components'
import VcLogo from './VcLogo'
import { FaUser, FaTh } from 'react-icons/fa'

const Header = () => {
	return (
		<StyledHeader>
			<VcLogo />
			<div>
				<StyledTh />
				<StyledUser />
			</div>
		</StyledHeader>
	)
}

const primaryColor = '#0082e6'
const fontA = '1.1rem'
// const containerColorBlack = '#262626'
const jetColor = '#343434'
// const favBlueBackground = '#4398ff'

const StyledHeader = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding-left: 1.5rem;
	padding-right: 1.5rem;
	padding-top: 1rem;
	width: 100%;

	@media (max-width: 76rem) {
		width: 100%;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	@media (max-width: 40rem) {
		width: 100%;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
	}

	/* .forButton {
		display: flex;

		@media (max-width: 55rem) {
			height: 1.875rem;
		}
	} */

	.button {
		font-size: ${fontA};
		background-color: ${primaryColor};
		color: white;
		height: 2.3rem;
		border: 1px solid ${primaryColor};
		border-radius: 5px;
		padding: 0 0.75rem;
		&:hover {
			color: ${primaryColor};
			background-color: white;
		}

		@media (max-width: 55rem) {
			font-size: 1rem;
			height: 2rem;
		}
	}

	> a > img {
		height: 4.375rem;
		&:hover {
			height: 4.205rem;
			margin: 0.085rem 0.225rem;
			opacity: 0.9;
		}
		//For mobile, set header height to 60px
		@media (max-width: 55rem) {
			height: 3.75rem;
			&:hover {
				height: 3.58rem;
				margin: 0.085rem 0.225rem;
			}
		}
	}
`

const StyledUser = styled(FaUser)`
	/* right: 2rem;
			top: 0.5rem; */
	font-weight: 400;
	color: white;
	/* padding-right: 1rem;
	padding-left: 1rem; */
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	font-size: 3rem;
	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}

	@media (max-width: 35rem) {
		font-size: 2.45rem;
	}
`

const StyledTh = styled(FaTh)`
	/* right: 2rem;
			top: 0.5rem; */
	font-weight: 400;
	color: white;
	/* padding-right: 1rem;
	padding-left: 1rem; */
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	font-size: 3.45rem;
	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}

	@media (max-width: 35rem) {
		font-size: 2.75rem;
	}
`

export default Header
