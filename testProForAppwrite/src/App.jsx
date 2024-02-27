import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SinglePage from './Components/singlePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SinglePage />
    </>
  )
}

export default App
