import { useState } from 'react'
import { Navbar } from './navbar/Navbar'
import { Profile } from './pages/Profile'
import {Skills} from "./pages/Skills"
import { Portafolio } from './pages/Portafolio'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Navbar/>
      <Profile/>
      <Skills/>
      <Portafolio/>
      </>
  )
}

export default App
