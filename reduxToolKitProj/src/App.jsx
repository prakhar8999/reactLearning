import AddTodo from './components/AddToDo'
import './App.css'
import Todos from './components/Todos'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addTodo } from './features/todos/todoSlice'

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    storedTodos.forEach(todo => dispatch(addTodo(todo.text)));
  },[dispatch]);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  })

  return (
    <>
      <h1 className=' text-3xl font-bold '>Learn React Redux ToolKit</h1>
      <AddTodo />
      <div>Todos</div>
      {todos.map((todo) => (
      <div key={todo.id} className='w-full'>
              <Todos todo={todo} />
      </div>
      ))}
    </>
  )
}

export default App
