import React from 'react'
// import Header from './components/Home/Header'
// import Hero from './components/Home/Hero'
import './App.scss'
import ParticleBackground from './components/Particles/ParticleBackground'
import Vc from './components/Home/Vc'
import Header from './components/Home/Header'


class App extends React.Component {
	render() {
		return (
			<>
				<ParticleBackground />
				<Header/>
				
				<Vc />
			</>
		)
	}
}

export default App
