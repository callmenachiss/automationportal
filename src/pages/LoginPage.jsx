import React from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const navigate=useNavigate();

  function handleLogin(e){
    e.preventDefault();
    navigate('/home');
  }

  return (
    <div className="logincontainer">
      <h1>Login Page</h1>
      <form class='covered'>
        <div>
          <label htmlFor="username">Username:</label>
          <input class='padded' type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input class='padded' type="password" id="password" name="password" />
        </div>
        <button  class='padded' type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default LoginPage