import { useState } from 'react' //this is used to bring hook in code
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 8
  
  let [counter,setCounter] = useState(15) //This is hook

  const addNum = () => {
    if(counter<=19 && counter>=0){
    console.log(`Button 1 Clicked ${counter}`)
    //counter+= 1
    setCounter(counter+1)}
    else{
      alert('Number cannot exceed 20')
    }
  }

  const subVal = () => {
    //console.log(`Button 1 Clicked ${counter}`)
    //counter+= 1
    if(counter>=1 && counter<=20){
    setCounter(counter-1)}
    else{
      alert('Number cannot be less than 0')
    }
  }

  return (
    <>
      <h1>React Learing From YT Hitesh Sir</h1>
      <br />
      <h3>Counter Number : {counter}</h3>

      <button onClick={addNum}>Add Number : {counter}</button>
      <br />
      <button onClick={subVal}>Substract Number : {counter}</button>
      <br />
      <p>footer : {counter}</p>
    </>
  )
}

export default App
