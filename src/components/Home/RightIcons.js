import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'

const RightIcons = () => {
	return (
		<StyledIcons>
			<div>
			<StyledUser />
			</div>
		</StyledIcons>
	)
}

const StyledIcons = styled(FaUser)`
	> div {
    width: 10rem;
	}
`

const StyledUser = styled(FaUser)`
			position: absolute;
			right: 2rem;
			top: 1rem;
			font-weight: 500;
			font-size: 2.5rem;
      color: white;
`




export default RightIcons
