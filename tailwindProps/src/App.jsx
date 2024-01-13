import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)
  let myObj = {
    name : "Prakhar",
    age : 24
  }
  let myArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black'>TailWind Test</h1>
      <br />
      <Card  channel = "Prak" Arr = {myArr} obj = {myObj}/>
      <Card  Name = "Prakhar" btnTxt = "Hit Me"/>
      <Card  Name = "Shikhar" btnTxt = "Touch Me"/>
      <Card />
      
    </>
  )
}

export default App