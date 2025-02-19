import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} alt="React logo" />
          <img src={viteLogo} alt="Vite logo" />
          <h1>Hello, Vite!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis a dolores, suscipit sapiente, laborum dicta possimus molestiae itaque maxime inventore, consectetur corrupti aliquid ullam amet explicabo qui debitis enim! Tenetur, ab alias reiciendis magnam suscipit aspernatur ipsum numquam iusto vitae vero consectetur, consequatur praesentium?
          </p>
        </header>
      </div>

    </>
  )
}

export default App
