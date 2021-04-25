import React from 'react'
// import Header from './components/Home/Header'
// import Hero from './components/Home/Hero'
import './App.scss'
import logo from './assets/images/logo.png'

class App extends React.Component {
	render() {
		return (
			<div className='video'>
				<iframe title="Algebra 1.3"
					src='https://drive.google.com/file/d/1XQjeVRgjvglsDWS-c9wVxAFIdD4k6CS3/preview'
					width='100%'
					height='100%'
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
