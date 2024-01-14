import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
        <div className='fixed flex justify-center bottom-10 px-4 py-2 inset-x-0 '>
          <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-slate-600 px-4 py-2 rounded-full '>
            <button onClick={() => setColor("red")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'red', color: 'white'}}>Red</button>
            <button onClick={() => setColor("yellow")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'yellow', color: 'black'}}>Yellow</button>
            <button onClick={() => setColor("green")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'green', color: 'white'}}>Green</button>
            <button onClick={() => setColor("purple")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'purple', color: 'white'}}>Purple</button>
            <button onClick={() => setColor("violet")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'violet', color: 'black'}}>Violet</button>
            <button onClick={() => setColor("blue")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'blue', color: 'white'}}>Blue</button>
            <button onClick={() => setColor("black")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'black', color: 'white'}}>Black</button>
            <button onClick={() => setColor("maroon")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'maroon', color: 'white'}}>Maroon</button>
            <button onClick={() => setColor("orange")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'orange', color: 'black'}}>Orange</button>
            <button onClick={() => setColor("olive")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'olive', color: 'white'}}>Olive</button>
            <button onClick={() => setColor("brown")}className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'brown', color: 'white'}}>Brown</button>
            <button onClick={() => setColor("silver")} className='px-4 py-2 outline-none rounded-full shadow-2xl font-bold ' style={{backgroundColor : 'silver', color: 'black'}}>Silver</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
