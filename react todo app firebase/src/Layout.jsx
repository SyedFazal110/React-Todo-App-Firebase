import React, { useRef, useState } from 'react'

const Layout = () => {
  const [todo, settodo] = useState([])
  let inputRef = useRef()

  function addTodo(event) {
    event.preventDefault()
    if (inputRef.current.value === '') {
      alert("Please Enter a Value!")
    } else {
      todo.unshift(inputRef.current.value)
      settodo([...todo])
      inputRef.current.value = ''
    }
  }


  return (
    <>
      <div>
        <h4 className='text-center'>React Todo App</h4>
        <form onSubmit={addTodo}>
          <input id='inputTodo' type="text" placeholder='Enter Todo' ref={inputRef} />
          <button type='submit'>Add</button>
        </form>
        <div>
          <ul>{todo.map((item) => (
            <li>{item}</li>
          ))}</ul>
        </div>
      </div>
    </>
  )
}

export default Layout