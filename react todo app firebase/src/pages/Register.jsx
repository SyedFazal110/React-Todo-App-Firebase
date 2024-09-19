import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import React, { useRef, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase/firebaseconfig";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const [ data , setData ] = useState({
    username: "",
    email: "",
    password: "",
  })

  const reg = () => {
  navigate('/login')
  }

  const submit = ((event) => {
    event.preventDefault()

    createUserWithEmailAndPassword(auth, data.username, data.email, data.password)
    
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    
  });


  return (
    <>
    <Outlet/>
      <div>
       <h1>Register Form</h1>

       <form onSubmit={submit}>
       <input type="text" placeholder="enter your name" ref={username} />
       <input type="email" placeholder="enter your email" ref={email} />
       <input type="password" placeholder="enter your password" ref={password} />

       <button type="submit">Register</button>
       </form>
      </div>

      <div>
        <p>Already an Account?
          <button onClick={reg}>Login</button>
        </p>
      </div>
    </>
  )
}

export default Register