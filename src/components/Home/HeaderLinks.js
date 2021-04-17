import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'

const HeaderLinks = () => {
	return (
		<StyledHeaderLinks className='headerlinks'>
			<a href='/'>Skills</a>
			<a href='/'>Entropiya</a>
			<a href='/'>Mini Projects</a>
			<a id='projects' href='/'>
				Projects
				<StyledFaAngleDownProjects className='projects' />
			</a>
			<a href='/'>About Me</a>
		</StyledHeaderLinks>
	)
}

const primaryColor = '#0082e6'
const celticBlue = '#246BCE'
const fontA = '1.05rem'

// const Button = styled.button`
//   ${Wrapper}:hover & {
//     display: none;
//   }
// `;

const StyledHeaderLinks = styled.div`
	display: flex;
	flex-flow: row;
	> a {
		padding: 1.2rem 1.9em;
		text-decoration: none;
		color: black;
		font-size: ${fontA};

		@media (max-width: 60.125rem) {
			padding: 1.2rem 0.7em;
		}
		//913px - 953px. 962px if may arrow down ang quiz.
		@media (max-width: 55rem) {
			display: none;
		}

		&::after {
			position: relative;
			content: '';
			display: block;
			width: 0;
			height: 3px;
			background: ${primaryColor};
			transition: width 0.6s;
			bottom: -1.7rem;
		}

		&:hover {
			color: ${celticBlue};
		}

		&:hover::after {
			width: 100%;
			transition: width 0.6s;
		}
	}
`

const StyledFaAngleDownProjects = styled(FaAngleDown)`
	margin-left: 2px;
	font-size: 0.9rem;
	color: ${celticBlue};
`

// const StyledFaAngleDownMCQs = styled(FaAngleDown)`
// 	margin-left: 2px;
// 	font-size: 0.9rem;
// 	color: ${celticBlue};
// `

// const StyledFaAngleDownProjects = styled(FaAngleDown)`
// 	margin-left: 2px;
// 	font-size: 0.9rem;
// 	color: ${celticBlue};
// `

// const StyledFaAngleDownAboutMe = styled(FaAngleDown)`
// 	margin-left: 2px;
// 	font-size: 0.9rem;
// 	color: ${celticBlue};
// `

export default HeaderLinks
