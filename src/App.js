import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = "todoApp.todo"

function App() {
  //object destructuring
  const [todo, setTodo] = useState([]) //[element, overwrite the element]
  const addRef = useRef()
  
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodo(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo))
  },[todo])

  //add & give an id, name and a complete status to elements to "todo"
  function addTodo (e) {
    const addElementTodo = addRef.current.value;
    if (addElementTodo === '') return
    setTodo (listTodo => [...listTodo, { id: uuidv4(), name: addElementTodo, complete: false}])
  }

  //the injected component to the index
  return (
    <>
    <input ref={addRef} type="text"/>
    <button onClick={addTodo}>Add to List</button>
    <button>Clear List</button>
    <TodoList todoList={todo}/>
    </>
  )
}

export default App;
