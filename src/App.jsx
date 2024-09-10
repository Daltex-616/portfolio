import { useState } from 'react'
import { Navbar } from './navbar/Navbar'
import { Profile } from './pages/Profile'
import {Skills} from "./pages/Skills"
import { Portafolio } from './pages/Portafolio'
import { Contacto } from './pages/Contacto'
import { Footer } from './pages/Footer'
function App() {

  return (
      <>
      <Navbar/>
      <Profile name="profile"/>
      <Skills name="skills"/>
      <Portafolio name="portafolio"/>
      <Contacto  />
      <Footer />
      </>
  )
}

export default App
