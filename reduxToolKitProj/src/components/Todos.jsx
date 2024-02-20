import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todos/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

function Todos({todo}) {
    //const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [txt,setTxt] = useState(todo.text)
    const [isEditable,setisEditable] = useState(false)

    const editTodo = () => {
      if(isEditable === false){
      setisEditable(true)
      }
      else{
        dispatch(updateTodo({id : todo.id,text : txt}))
        setisEditable(false)
      
    }
  }

  return (
    <>
    <ul className="list-none">
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded relative"
            key={todo.id}
          >
            <div className='text-white'>
              <input type = 'text' value={txt} onChange={(e) => setTxt(e.target.value)} readOnly={!isEditable} 
              className= {`${isEditable ? " bg-black" : "bg-zinc-800"}`}/>
            </div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md absolute right-2"
            >
              Remove
            </button>
            <button
             onClick={() => editTodo()}
              className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md absolute right-28"
            >
              {isEditable ? 'Update' : 'Edit'}
            </button>
          </li>
      </ul>
    </>
  )
}

export default Todos