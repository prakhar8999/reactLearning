import AddTodo from './components/AddToDo'
import './App.css'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';

function App() {
  const todos = useSelector(state => state.todos)

  return (
    <>
      <h1 className=' text-3xl font-bold '>Learn React Redux ToolKit</h1>
      <AddTodo />
      <div>Todos</div>
      {todos.map((todo) => (
      <div key={nanoid()} className='w-full'>
              <Todos todo={todo} />
      </div>
      ))}
    </>
  )
}

export default App
