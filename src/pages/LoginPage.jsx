import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const UserName='callmenachis';
  const Password='test@123';

  function handleLogin(e) {
    e.preventDefault();
     console.log("Username:", name);
    console.log("Password:", pwd);
    if(name!==UserName){
      alert("Invalid Username");
      return;
    }
    if(pwd!==Password){
      alert("Invalid Password");
      return;
    }

    if(name===UserName && pwd===Password){
      navigate('/home');
      console.log("Login Successful");
    }
   
  }

  function handleName(e) {
    
    setName(e.target.value);
    console.log("Username:", e.target.value);
  }

  function handlePassword(e) {
    
    setPwd(e.target.value);
    console.log("Password:",e.target.value);
    
  }

  return (
    <div className="logincontainer">
      <h1>Login Page</h1>
      <form className='covered'>
        <div>
          <label htmlFor="username">Username:</label>
          <input className='padded' onChange={handleName} type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className='padded' onChange={handlePassword} type="password" id="password" name="password" />
        </div>
        <button className='padded' type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
