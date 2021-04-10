import React from 'react'
import logo from '../../assets/images/logo.png'

const Header: React.FC = () => {
  return (
    <header className='header bottom-shadow'>
      <nav className='flex flex-jc-sb flex-ai-c'>
          <a href='/' className='header__logo'>
          <img src={logo} alt="logo" />
          </a>

        <div className='header__links hide-for-mobile'>
          <a className="btn" href="/">Skills</a>
          <a className="btn" href="/">Front-end Projects</a>
          <a className="btn" href="/">Full Stack Projects</a>
          <a className="btn" href="/">About me</a>
        </div>

        <div className='flex flex-jc-sb flex-ai-c'>
          <a href='/' className='btn btn-outline-primary' id='hide-for-mobile'>Startup Project</a>

          <a href='/' className='header__menu hide-for-desktop'>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>


      </nav>
        
    </header>

  )
}

export default Header