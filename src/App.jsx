import { useState } from 'react'
import './styles/App.css'

import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HomePage />
  )
}

export default App
