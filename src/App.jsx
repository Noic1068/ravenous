import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Business from './Business.jsx'
import BusinessList from './BusinessList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BusinessList />
  )
}

export default App
