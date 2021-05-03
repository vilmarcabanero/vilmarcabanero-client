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
					<span id='symbol1' className='equals m4rem'>{'<'} </span>
					<span id='Vc'>StyledVc</span>
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
						{/* <span className='braces'>{'{'}</span>{' '} */}
						<a
							className='link'
							href='https://www.entropiya.ph/'
							target='_blank'
							rel='noreferrer'
						>
							'www.entropiya.ph'
						</a>{' '}
						{/* <span className='braces'>{'}'}</span> */}
					</span>
				</span>

				<span className='attribute'>
					startupProject2 <span className='equals'>=</span>{' '}
					<span className='string'>
						{/* <span className='braces'>{'{'}</span>{' '} */}
						<a
							className='link'
							href='https://www.niventa.net/'
							target='_blank'
							rel='noreferrer'
						>
							'www.niventa.net'
						</a>{' '}
						{/* <span className='braces'>{'}'}</span> */}
					</span>
				</span>

				<span className='attribute'>
					webApps <span className='equals'>=</span>{' '}
					<span className='string'>
						{/* <span className='braces'>{'{'}</span>{' '} */}
						<a
							className='link'
							href='https://www.vilmarcabanero.com/apps'
							target='_blank'
							rel='noreferrer'
						>
							'www.vilmarcabanero.com/apps'
						</a>{' '}
						{/* <span className='braces'>{'}'}</span> */}
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
						{/* <span className='braces'>{'{'}</span>{' '} */}
						<a
							className='link'
							href='https://www.github.com/vilmarcabanero'
							target='_blank'
							rel='noreferrer'
						>
							'github.com/vilmarcabanero'
						</a>{' '}
						{/* <span className='braces'>{'}'}</span> */}
					</span>
				</span>

				<span className='attribute'>
					email <span className='equals'>=</span>{' '}
					<span className='string'>
						{/* <span className='braces'>{'{'}</span>{' '} */}
						<a
							className='link'
							href='https://mail.google.com/'
							target='_blank'
							rel='noreferrer'
						>
							'contact@vilmarcabanero.com'
						</a>{' '}
						{/* <span className='braces'>{'}'}</span> */}
					</span>
				</span>

				<span id='symbol2' className='equals m4rem'>{'/>'}</span>
				<span className='return m2rem'>)</span>
				<span className='braces'>{'}'}</span>
			</div>
		</StyledVc>
	)
}

const StyledVc = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* background: transparent; */
	@media (min-width: 45rem) {
		margin-top: 2rem;
	}

	@media (max-width: 55rem) {
		margin-top: 2rem;
		margin-left: auto;
		margin-right: auto;
	}

	@media (max-width: 30rem) {
		margin-top: 2rem;
		margin-left: auto;
		margin-right: auto;
	}

	> div {
    position: relative;
		width: 55rem;
		height: 45rem;
		/* background: transparent; */
		/* background-color: #343434; */
		color: white;
		font-size: 2rem;
		display: grid;
		margin: 0 1rem;
		@media (max-width: 55rem) {
			width: 35rem;
			height: 35rem;
			font-size: 1.25rem;
		}

    @media (max-width: 22.5) {
			font-size: 1rem;
		}

		#Vc {
			color: #66cdaa;
			@media (max-width: 55rem) {
				font-size: 1.25rem;
			}
      @media (max-width: 22.5rem) {
				font-size: 1.25rem;
			}
		}

    #symbol1, #symbol2 {
      font-size: 2.25rem;
			@media (max-width: 55rem) {
				font-size: 1.25rem;
			}
      @media (max-width: 22.5rem) {
				font-size: 1.25rem;
			}
    }

		.attribute {
			color: #6495ed;
			margin-left: 9rem;
      /* font-family: Comic Sans MS, Comic Sans, cursive; */
      font-style: italic;
			@media (max-width: 55rem) {
				margin-left: 3rem;
			}
		}

		.string {
			/* color: #20b2aa; */
			color: #00cccc;
      font-style: normal;
      /* background-color: #343434;  */
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
      /* background-color: #343434;  */
			/* font-style: italic; */
			font-weight: 375;
	
			&:hover {
				opacity: 0.8;
				cursor: pointer;
				font-weight: 500;
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
			/* color: LightSkyBlue; */
			color: #87cefa;
		}

		.m2rem {
			margin-left: 3rem;
			@media (max-width: 55rem) {
				margin-left: 1rem;
			}
		}

		.m4rem {
			margin-left: 6rem;
			@media (max-width: 55rem) {
				margin-left: 2rem;
			}
		}
	}
`

export default Vc
