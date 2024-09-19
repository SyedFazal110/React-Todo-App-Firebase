import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import React, { useRef } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase/firebaseconfig";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const reg = () => {
  navigate('/register')
  }

  const submit = ((event) => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)

    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate('/todo')
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
       <h1>Login Form</h1>

       <form onSubmit={submit}>
       <input type="email" placeholder="enter your email" ref={email} />
       <input type="password" placeholder="enter your password" ref={password} />

       <button type="submit">Login</button>
       </form>
      </div>

      <div>
        <p>Create an Account!
          <button onClick={reg}>Register</button>
        </p>
      </div>
    </>
  )
}

export default Login