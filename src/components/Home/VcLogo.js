import styled from 'styled-components'

const VcLogo = () => {
	return (
		<StyledVcLogo>
			<div>
				<span className='symbol'>{'<'}</span>
				<span className='Vc'>Vc </span>
				<span className='symbol'>{'/>'}</span>
			</div>
		</StyledVcLogo>
	)
}

const StyledVcLogo = styled.div`
	> div {
		/* position: relative; */

		margin-top: 1.5rem;
		margin-left: 2rem;
		font-weight: 500;
		font-size: 2.5rem;

		@media (max-width: 35rem) {
			margin-left: 0.75rem;
			margin-top: 0.3rem;
			font-size: 2rem;
		}
		.Vc {
			color: #66cdaa;
		}
		.symbol {
			color: #00cccc;
		}
	}
`

export default VcLogo
