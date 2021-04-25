import vc2 from '../../assets/images/vc2.JPG'
import styled from 'styled-components'

const Vc = () => {
	return (
		<StyledVc>
			<div>
				<span>
					<span className='support'>const</span>{' '}
					<span className='function'>about</span>
					<span className='equals'> =</span>{' '}
					<span className='braces'>( ) </span>{' '}
					<span className='support'>{'=>'}</span>{' '}
					<span className='braces'>{'{'}</span>
				</span>
				<span className='return m2rem'>return (</span>
				<span>
					<span className='equals m4rem'>{'<'} </span>
					<span id='Vc'>Vc</span>
				</span>
				<span className='attribute'>
					name <span className='equals'>=</span>{' '}
					<span className='string'>'Vilmar Cabañero'</span>
				</span>
				<span className='attribute'>
					profession <span className='equals'>=</span>{' '}
					<span className='string'>'Full Stack Developer'</span>
				</span>
				<span className='attribute'>
					expertise <span className='equals'>=</span>{' '}
					<span className='string'>'MERN Stack'</span>
				</span>
				<span className='attribute'>
					startupProject1 <span className='equals'>=</span>{' '}
					<span className='string'>
						<span className='braces'>{'{'}</span>{' '}
						<a
							className='link'
							href='https://www.entropiya.ph/'
							target='_blank'
							rel='noreferrer'
						>
							www.entropiya.ph
						</a>{' '}
						<span className='braces'>{'}'}</span>
					</span>
				</span>

				<span className='attribute'>
					startupProject2 <span className='equals'>=</span>{' '}
					<span className='string'>
						<span className='braces'>{'{'}</span>{' '}
						<a
							className='link'
							href='https://www.niventa.net/'
							target='_blank'
							rel='noreferrer'
						>
							www.niventa.net
						</a>{' '}
						<span className='braces'>{'}'}</span>
					</span>
				</span>

				<span className='attribute'>
					webApps <span className='equals'>=</span>{' '}
					<span className='string'>
						<span className='braces'>{'{'}</span>{' '}
						<a
							className='link'
							href='https://www.vilmarcabanero.com/apps'
							target='_blank'
							rel='noreferrer'
						>
							www.vilmarcabanero.com/apps
						</a>{' '}
						<span className='braces'>{'}'}</span>
					</span>
				</span>

				<span className='attribute'>
					degree <span className='equals'>=</span>{' '}
					<span className='string'>'BS Mechanical Engineering'</span>
				</span>

				<span className='attribute'>
					greatestAchievement <span className='equals'>=</span>{' '}
					<span className='string'>'Top 5 in Board Exam'</span>
				</span>

				<span className='attribute'>
					github <span className='equals'>=</span>{' '}
					<span className='string'>
						<span className='braces'>{'{'}</span>{' '}
						<a
							className='link'
							href='https://www.niventa.net/'
							target='_blank'
							rel='noreferrer'
						>
							github.com/vilmarcabanero
						</a>{' '}
						<span className='braces'>{'}'}</span>
					</span>
				</span>

				<span className='equals m4rem'>{'/>'}</span>
				<span className='return m2rem'>)</span>
				<span className='braces'>{'}'}</span>
			</div>
		</StyledVc>
	)
}

const StyledVc = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
	@media (min-width: 45rem) {
		margin-top: calc((100vh - 45rem) / 2);
	}

	@media (max-width: 55rem) {
		margin-top: calc((100vh - 35rem) / 2);
    margin-left: auto;
    margin-right: auto;
	}

	> div {
		width: 55rem;
		height: 45rem;
		background: transparent;
		background-color: #343434;
		color: white;
		font-size: 2rem;
		display: grid;
		margin: 0 1rem;
		@media (max-width: 55rem) {
			width: 35rem;
			height: 35rem;
			font-size: 1.25rem;
		}

		#Vc {
			font-size: 2.25rem;
			color: #66cdaa;
			@media (max-width: 55rem) {
				font-size: 1.25rem;
			}
		}

		.attribute {
			color: #6495ed;
			margin-left: 9rem;
			@media (max-width: 55rem) {
				margin-left: 4.5rem;

			}
		}

		.string {
			/* color: #20b2aa; */
			color: #00cccc;
			font-weight: 500;
			display: inline-block;
		}

		.equals {
			color: #00cccc;
		}

		.braces {
			color: #66cdaa;
		}

		.link {
			text-decoration: none;
			color: #00cccc;
			font-style: italic;
			font-weight: 500;
			&:hover {
				opacity: 0.8;
				cursor: pointer;
			}
		}

		.support {
			color: Orchid;
			font-style: italic;
		}

		.return {
			color: Orchid;
		}

		.function {
			color: LightSkyBlue;
		}

		.m2rem {
			margin-left: 1.5rem;
		}

		.m4rem {
			margin-left: 3rem;
		}
	}
`

export default Vc
