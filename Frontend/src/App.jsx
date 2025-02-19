import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="logo-container">
        <img src={reactLogo} alt="React logo" />
        <img src={viteLogo} alt="Vite logo" />
        <p>
        test
        </p>
      </div>
    </>
  )
}

export default App
