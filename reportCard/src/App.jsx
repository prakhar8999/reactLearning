import { useState } from 'react'
import DivUp from './component/DivUp'
import DivDown from './component/DivDown'

function App() {
  const [physics, setPhysics] = useState(0)
  const [chemistry, setchemistry] = useState(0)
  const [math, setmaths] = useState(0)
  const [bio, setbio] = useState(0)
  const [result, setResult] = useState(0)

  console.log(`Physics Marks Are : ${physics}`)
  console.log(`Chemistry Marks Are : ${chemistry}`)
  console.log(`Mathematics Marks Are : ${math}`)
  console.log(`Biology Marks Are : ${bio}`)

  const calculate = () =>{
    const physicsMarks = Number(physics);
    const chemistryMarks = Number(chemistry);
    const mathsMarks = Number(math);
    const biomarks = Number(bio);
    const result = (physicsMarks + chemistryMarks + mathsMarks + biomarks) / 4;
    setResult(result);
  }

  const reset = () => {
    setPhysics(0)
    setchemistry(0)
    setmaths(0)
    setbio(0)
    setResult(0)
  }




  return (
    <>
      <div className=' justify-center w-full h-screen ' style={{backgroundImage : `url('https://e0.pxfuel.com/wallpapers/609/657/desktop-wallpaper-giant-library-night-in-2020-book-background-book-books-library-aesthetic-laptop.jpg')`}}>
        <h1 className='font-bold pt-8 text-white text-4xl text-center '>Report Card</h1>
        <br />
        <div className=' flex flex-wrap justify-center text-center gap-24 '>
        <DivUp input1={physics} subject="Physics" placeHolderValue = "Physics Marks" onSubjectValueChange={ (marks) => setPhysics(marks)} />
        <DivUp input1={chemistry} subject="Chemistry" placeHolderValue = "Chemistry Marks" onSubjectValueChange={ (marks) => setchemistry(marks)} />
        <DivUp input1={math} subject="Mathematics" placeHolderValue = "Mathematics Marks" onSubjectValueChange={ (marks) => setmaths(marks)} />
        <DivUp input1={bio} subject="Biology" placeHolderValue = "Biology Marks" onSubjectValueChange={ (marks) => setbio(marks)} />
        </div>
        <div className=' flex flex-wrap justify-center text-center'>
        <DivDown input1={physics} placeHolderValue = "Physics Marks" onSubjectValueChange={ (marks) => setPhysics(marks)} />
        <DivDown input1={chemistry} placeHolderValue = "Chemistry Marks" onSubjectValueChange={ (marks) => setchemistry(marks)} />
        <DivDown input1={math} placeHolderValue = "Mathematics Marks" onSubjectValueChange={ (marks) => setmaths(marks)} />
        <DivDown input1={bio} placeHolderValue = "Biology Marks" onSubjectValueChange={ (marks) => setbio(marks)} />
        </div>
        <div className=' flex flex-wrap gap-4 justify-center py-6 px-12'>
          <button onClick={calculate} className=' text-white rounded-3xl px-2 py-2 bg-slate-600'>Submit</button>
          <button onClick={reset} className=' text-white rounded-3xl px-2 py-2 bg-slate-600'>Reset</button>
        </div>
        <div>
          <h3 className=' font-bold text-center text-2xl text-white'>Your Percentage Is : {result}%</h3>
        </div>
      </div>

      
    </>
  )
}

export default App
