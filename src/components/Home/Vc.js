import vc2 from '../../assets/images/vc2.JPG'
import styled from 'styled-components'

const Vc = () => {
	return (
		<StyledVc>
			<div>
				<span>{'<'}</span>
				<span id='Vc'>Vc</span>
				<span>{'/>'}</span>
			</div>
		</StyledVc>
	)
}

const StyledVc = styled.div`
	/* position: relative; */
	display: flex;
  flex-flow: column;
	justify-content: flex-end;
	align-items: center;
  margin-top: calc((100vh - 40rem)/2);

	> div {
		width: 40rem;
		height: 40rem;
		background-color: #343434;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export default Vc
