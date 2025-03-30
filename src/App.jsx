import { useState } from 'react'

import './styles/global.css'
import './styles/TechStack.css'
import './styles/Experience.css'

import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HomePage />
  )
}

export default App
