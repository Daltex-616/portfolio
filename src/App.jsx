import { useState } from 'react'
import { Navbar } from './navbar/Navbar'
import { Profile } from './pages/Profile'
import {Skills} from "./pages/Skills"
import { Portafolio } from './pages/Portafolio'
import { Contacto } from './pages/Contacto'
import { Footer } from './pages/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Navbar/>
      <Profile/>
      <Skills/>
      <Portafolio/>
      <Contacto/>
      <Footer/>
      </>
  )
}

export default App
