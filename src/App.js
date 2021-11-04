import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import uuidv4 from 'uuid/v4'



function App() {
  //object destructuring
  const [todo, setTodo] = useState([])
  const addRef = useRef()

  function addTodo (e) {
    const addElementTodo = addRef.current.value;
    if (addElementTodo === '') return
    setTodo (listTodo => [...listTodo, { id: uuidv4(), name: addElementTodo, complete: false}])
  }

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
