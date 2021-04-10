import React from 'react'
import logo from '../../assets/images/header.jpg'

const Header = () => {
  return (
    <header class='header'>
      <nav class='flex flex-jc-sb flex-ai-c'>
        <a href='/' class='header__logo'>
          <img src={logo} alt="logo" />
        </a>



        <div class='header__links hide-for-mobile'>
          <a class="btn" href="/">Courses</a>
          <a class="btn" href="/">MCQs</a>
          <a class="btn" href="/">Quiz</a>
          <a class="btn" href="/">Blog</a>
        </div>

        <div class='flex flex-jc-sb flex-ai-c'>
          <button type='button' class='btn btn-outline-primary' id='hide-for-mobile'>Login</button>

          <a href='/' class='header__menu hide-for-desktop'>
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