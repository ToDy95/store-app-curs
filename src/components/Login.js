import { useContext, useEffect } from "react"
import React from 'react'
import { globalProvider } from "./context/Context"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = () => {
  const { appUser, tokenAuth } = useContext(globalProvider);
  const [, setUser] = appUser
  const token = tokenAuth
  const navigate = useNavigate()

  useEffect(() => {
    if (token !== 'undefined')
      navigate('/')
  }, [token])


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
    toast.success("Logged successfully!")
    localStorage.setItem('token_store_app', JSON.stringify(res.token))

  }

  return (
    <div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
        <form action="" onSubmit={handlerFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center', alignItems: 'center' }} >
          <label htmlFor="username">User name</label>
          <input type="text" name='username' />
          <label htmlFor="password">Password</label>
          <input type="password" name='password' />
          <button>Login</button>
        </form>
        <Link to={'/register'}>Or create an account</Link>
      </div>

    </div >
  )
}

export default Login
