import vc2 from '../../assets/images/vc2.JPG'
import styled from 'styled-components'

const Vc = () => {
	return (
		<StyledVc>
			<div>
				<span>
					{'<'} <span id='Vc'>Vc</span>
				</span>

				<span>{'/>'}</span>
			</div>
		</StyledVc>
	)
}

const StyledVc = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 40rem) {
		margin-top: calc((100vh - 40rem) / 2);
	}

	@media (max-width: 40rem) {
		margin-top: calc((100vh - 25rem) / 2);
	}

	> div {
		width: 40rem;
		height: 40rem;
		background-color: #343434;
		color: white;
		font-size: 2rem;
		display: grid;
		@media (max-width: 40rem) {
			width: 25rem;
			height: 25rem;
		}

		#Vc {
		}
	}
`

export default Vc
