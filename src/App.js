import React from 'react'
// import Header from './components/Home/Header'
// import Hero from './components/Home/Hero'
import './App.scss'
import logo from './assets/images/logo.JPG'
import styled from 'styled-components'

class App extends React.Component {
	render() {
		return (
			<div className='video'>
				<iframe
					src='https://drive.google.com/file/d/1XQjeVRgjvglsDWS-c9wVxAFIdD4k6CS3/preview'
					width='640px'
					height='480px'
					frameborder='0'
					scrolling='no'
					seamless=''
					allowfullscreen='true'
					webkitallowfullscreen='true'
					mozallowfullscreen='true'
				></iframe>

				<div>&nbsp;</div>
				<img src={logo} alt='afdafd' />
			</div>
		)
	}
}

export default App
