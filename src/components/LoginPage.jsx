import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    const validationErrors = {};

    if (!username.trim()) validationErrors.username = 'Username is required';
    if (!password.trim()) validationErrors.password = 'Password is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (username === 'Automation' && password === 'Admin@456') {
      navigate('/dashboard');
    } else {
      setErrors({ auth: 'Invalid username or password' });
    }
  };

  return (

    <>
      <div className='login-container'>
        <div className="form-container">
          <h1 style={{ color: 'white' }}>Automation Learning portal</h1>

          <div className="mb-3">
            <label className="label" style={{ color: 'white' }}>Username</label>
            <input
              className="input-field"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error-text">{errors.username}</div>}
          </div>

          <div className="mb-3">
            <label className="label" style={{ color: 'white' }}>Password</label>
            <input
              className="input-field"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error-text">{errors.password}</div>}
          </div>

          {errors.auth && <div className="error-text">{errors.auth}</div>}

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              type="button"
              className="btn btn-primary label-btn"
              onClick={handleLogin}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

    </>



  );
};

export default LoginPage;
