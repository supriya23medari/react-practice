import React from 'react'
import { TodoItem } from './TodoItem'
export const ToDos = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin:"40px auto"
    }
  return (
    <div className="container my-3" style={myStyle}>
    <h3 className="text-center my-3">ToDos List</h3>
    {props.todos.length==0?"No todos to display":
    props.todos.map((todo)=>{
        return (
            <>
        <TodoItem todo = {todo} key={todo.no} onDelete={props.onDelete}/><hr/>
        </>
        )
    })
   
    } 
   
    </div>
  )
}
