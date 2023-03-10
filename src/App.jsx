import { useState } from 'react'

import './App.css'
import './styles/Animations.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import TechnicalSkills from './Components/TechnicalSkills'
import Proyects from './Components/Proyects'
import Footer from './Components/Footer'
import ContactMe from './Components/ContactMe'


function App() {
 

  return (
    <div className="App">
      <Nav/>
      <Home/>
      <TechnicalSkills/>
      <Proyects/>
      <ContactMe/>


      <Footer/>

    </div>
  )
}

export default App
