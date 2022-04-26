import './App.css';
import Header from './components/Header';
import  {Footer} from './components/Footer';
import { ToDos } from './components/ToDos';
import React, { useEffect, useState } from 'react';
import { AddTodo } from './components/AddTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { About } from './components/About';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    console.log("This is ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title,description)=>{
     console.log("I am adding this to todo",title,description);
     let no;
     if(todos.length==0){
       no=0;
     }
     else{
    no=todos[todos.length-1].no+1;
     }
    const myTodo={
      no:no,
      title:title,
      description:description
    }
      setTodos([...todos,myTodo]);
      console.log(myTodo);
      localStorage.setItem("todos",JSON.stringify(todos));

  }
  const[todos,setTodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  })
  return (
    <> 
    <BrowserRouter>
    <Header title="My Todos List" searchBar={true} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
            <AddTodo addTodo={addTodo}/>
            <ToDos todos={todos} onDelete={onDelete}/>
            </>
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
