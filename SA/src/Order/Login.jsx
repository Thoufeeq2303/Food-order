import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()

    const userData = { fullName, username, password }
    localStorage.setItem("user", JSON.stringify(userData))

    alert("Account created successfully!")
    setIsSignup(false)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    const savedUser = JSON.parse(localStorage.getItem("user"))

    if (!savedUser) {
      setError("No account found. Please signup first.")
      return
    }

    if (
      username === savedUser.username &&
      password === savedUser.password
    ) {
      navigate("/dash") 
    } else {
      setError("Invalid username or password")
    }
  }

  return (
    <div className='login'>
      <form 
        className='login-text'
        onSubmit={isSignup ? handleSignup : handleLogin}
      >
        <h2>{isSignup ? "CREATE ACCOUNT" : "LOGIN"}</h2>

        {error && <p style={{color:"red"}}>{error}</p>}

        {isSignup && (
          <input 
            type='text' 
            placeholder='Full name' 
            required 
            onChange={(e) => setFullName(e.target.value)}
          />
        )}

        <input 
          type='text' 
          placeholder='Username' 
          required 
          onChange={(e) => setUsername(e.target.value)}
        />

        <input 
          type='password' 
          placeholder='Password' 
          required 
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          {isSignup ? "Sign up" : "Login"}
        </button>

        <h6 
          onClick={() => {
            setIsSignup(!isSignup)
            setError("")
          }}
          style={{cursor:"pointer"}}
        >
          {isSignup 
            ? "Already have an account? Login" 
            : "Create an account"}
        </h6>
      </form>
    </div>
  )
}

export default Login
