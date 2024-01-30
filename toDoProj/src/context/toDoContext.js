import React from 'react'
import { useContext } from 'react'

const toDoContext = React.createContext({
    todos : [
        {
            id : 1,
            todo : " ToDo Msg",
            completed : false
        }
    ],
    addToDo : (todo) => {},
    updateToDo : (id , todo) => {},
    deleteToDo : (id) => {},
    toggleComplete : (id) => {}
})

const toDoContextProvider = toDoContext.Provider

const useTodo = () => {
    return useContext(toDoContext)
}  

export {toDoContext, toDoContextProvider, useTodo}