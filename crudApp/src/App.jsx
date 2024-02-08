import { useState } from 'react'
import './App.css'
import AddRow from './components/AddRow'
import ViewRow from './components/ViewRow'
import { CrudContextProvider } from './context/crudContext'

function App() {
  const [data, setData] = useState([])

  const addDetail = (enteredData) => {
    setData((prev) => [{id: Date.now(), ...enteredData}, ...prev])
  }

  const deleteDetail = (id) =>{
    setData((prev) => prev.filter((prevData) => prevData.id != id))
  }

  const updateCrud = (id, data) => {
    setData((prev) => prev.map((prevData) => (prevData.id === id ? data : prevData)))
  }

  return (
    <CrudContextProvider value={{data, addDetail, deleteDetail, updateCrud}}>
      <h1 className=' text-4xl font-bold underline '>CRUD App</h1>
      <br />
      <AddRow />
      <br />
      <hr className=' border-t-2 border-black' />
      <br />
      {data.map((sinData) => (
        <div key={Date.now()} className='w-full'>
          <ViewRow sinData ={sinData} />
        </div>
      ))}
    </CrudContextProvider>
  )
}

export default App
