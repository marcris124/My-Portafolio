import { useState } from 'react'

import './App.css'
import './styles/Animations.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import TechnicalSkills from './Components/TechnicalSkills'
import Proyects from './Components/Proyects'

function App() {
 

  return (
    <div className="App">
      
      <Nav/>
      <Home/>
      <TechnicalSkills/>
      <Proyects/>


    </div>
  )
}

export default App
