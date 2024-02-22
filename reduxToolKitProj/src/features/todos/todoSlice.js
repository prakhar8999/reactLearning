import { createSlice, nanoid } from "@reduxjs/toolkit";

// const TodoID = localStorage.getItem("todoId") != null ? JSON.parse(localStorage.getItem("todoId")) : nanoid();
// const TodoTEXT = localStorage.getItem("todoText") != null ? JSON.parse(localStorage.getItem("todoText")) : "";

// var LocalStorageObj = {id : TodoID, text : TodoTEXT}

const initialState = {
    todos : []
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
                const todo = {
                    id : nanoid(),
                    text : action.payload
                }
                state.todos.push(todo)
                // localStorage.setItem('todoId', JSON.stringify(todo.id))
                // localStorage.setItem('todoText', JSON.stringify(todo.text))
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer