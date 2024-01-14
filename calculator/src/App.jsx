import { useState } from 'react'
import React from 'react';

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  console.log(input)

  const btnClick = (value) => {
    setInput((prevInput) => prevInput + value);
  }

  const setDefault = () => {
    setInput('');
    setResult('');
  }

  const calculate = () => {
    try{
      setResult(eval(input).toString());
    }
    catch(error){
      setResult('Error');
    }
  }



  return (
    <>
      <div className=' bg-slate-700 w-full h-screen'>
        <h1 className=' text-center font-black pt-8 text-3xl '>Calculator</h1>
        <br/>
        <div className=' text-center'>
          <button onClick = {() => btnClick("1")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>1</button>
          <button onClick = {() => btnClick("2")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>2</button>
          <button onClick = {() => btnClick("3")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>3</button>
          </div>
          <br />
          <div className=' text-center'>
          <button onClick = {() => btnClick("4")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>4</button>
          <button onClick = {() => btnClick("5")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>5</button>
          <button onClick = {() => btnClick("6")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>6</button>
          </div>
          <br/>
          <div className=' text-center'>
          <button onClick = {() => btnClick("7")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>7</button>
          <button onClick = {() => btnClick("8")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>8</button>
          <button onClick = {() => btnClick("9")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>9</button>
          </div>
          <br />
          <div className=' text-center'>
          <button onClick = {() => btnClick("+")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>+</button>
          <button onClick = {() => btnClick("-")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>-</button>
          <button onClick = {() => btnClick("/")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>/</button>
          <button onClick = {() => btnClick("*")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>*</button>
          </div>
          <br/>
          <div className=' text-center'>
          <button onClick = {() => btnClick("0")} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>0</button>
          <button onClick = {setDefault} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>C</button>
          <button onClick = {calculate} className=' px-4 py-2 rounded-2xl text-yellow-600 bg-black'>=</button>
        </div>
        <div>
        <p className=' text-center font-bold text-2xl text-black '>Result  : {result}</p>
        </div>
      </div>
    </>
  )
}

export default App
