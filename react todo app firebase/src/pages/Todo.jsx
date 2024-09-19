import React from 'react'
import { useState, useRef } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const inputValue = useRef()

  let addTodo = event => {
    event.preventDefault()
    const newTodo = inputValue.current.value;
    if (newTodo) {
      setTodo([...todo, newTodo]);
      inputValue.current.value = '';
    } else {
      alert(`Enter a Todo First`)
    }
  }
  
  function deleteTodo(i) {
    todo.splice(i, 1)
      setTodo([...todo])
      console.log(i, `delete`);
      console.log(todo);
  }

  function editTodo(i) {
    let editTodoValue = prompt(`Enter new Value`, todo[i])
    todo.splice(i, 1, editTodoValue)
    setTodo([...todo])
    console.log(i, `edit`);
    console.log(todo);
  }

  return (
    <>
    <div>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Add Todo" ref={inputValue}/>
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <div>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </ul>

    </div>
    </>
  )
}

export default Todo