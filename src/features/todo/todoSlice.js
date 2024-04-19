import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text:"hey there !"}] // array of todos
}

export const todoSlice=createSlice({
    name:'todo', // name is property from redux to identify the slice
    initialState, //initial state is passed
    reducers:{      //consists of properties and functions
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },  //state and action are two properties we always get access to in reducer functions
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload //bug fixed 
            )
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions //to be used in components

export default todoSlice.reducer // for awareness of store  

/*  
    State - this varible gives access to current state of  data
    action - this varible gives reference to certain values in state to act upon data eg - giving ids to remove todo
*/