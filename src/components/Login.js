import { useContext, useEffect } from "react"
import React from 'react'
import { globalProvider } from "./context/Context"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { appUser } = useContext(globalProvider);
  const [user, setUser] = appUser
  const navigate = useNavigate()
  useEffect(() => {
  }, [localStorage])
  const handlerFormSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const data = {
      username: formData.get('username'),
      password: formData.get('password')
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
    // 0lelplR (pass)
    // kminchelle (username)
    const response = await fetch('https://dummyjson.com/auth/login', requestOptions)
    const res = await response.json();
    setUser(res)
    navigate('/')

  }

  return (
    <div>

      <div>
        <form action="" onSubmit={handlerFormSubmit}>
          <label for="username">User name</label>
          <input type="text" name='username' />
          <label for="password">Password</label>
          <input type="password" name='password' />
          <button>Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login
