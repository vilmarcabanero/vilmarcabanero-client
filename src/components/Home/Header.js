import styled from 'styled-components'
// import RightIcons from './RightIcons';
import VcLogo from './VcLogo'
import { FaUser, FaTh } from 'react-icons/fa'

const Header = () => {
	return (
		<StyledHeader>
			<div>
				<VcLogo />
				<div className='icon-container'>
					<StyledTh />
					{/* <i class='material-icons'>apps</i> */}
					<StyledUser />
				</div>
			</div>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	> div {
		position: relative;

		.icon-container {
			position: absolute;
			display: flex;
			justify-content: flex-end;
			top: 0rem;
			right: 2rem;
			align-items: center;
			@media (max-width: 35rem) {
				right: 0.25rem;
				top: 0rem;
			}

			/* > i {
				font-weight: 400;
				color: white;
				font-size: 3rem;
				padding-right: 1rem;
				padding-left: 1rem;
				&:hover {
					opacity: 0.8;
					cursor: pointer;
				}

				@media (max-width: 35rem) {
					font-size: 2.5rem;
			}
				
			} */
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
	padding-right: 1.5rem;
	font-size: 3.25rem;
	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}

	@media (max-width: 35rem) {
		font-size: 2.9rem;
	}
`

const StyledTh = styled(FaTh)`
	/* right: 2rem;
			top: 0.5rem; */
	font-weight: 400;
	color: white;
	/* padding-right: 1rem;
	padding-left: 1rem; */
	padding-right: 1.5rem;
	font-size: 3.7rem;
	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}

	@media (max-width: 35rem) {
		font-size: 3.25rem;
	}
`

export default Header
