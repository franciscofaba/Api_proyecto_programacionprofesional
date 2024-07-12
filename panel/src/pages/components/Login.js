import React, { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios'; // Importa la configuración de Axios
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/Dashboard/login', { email, password });
      
      if (response.status === 200) {
        console.log('Login successful');
        navigate('/dashboard'); // Redirige al dashboard después del inicio de sesión
      } else {
        throw new Error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Dashboard<br /> Login Page</h2>
          <p>Only admin can login from here to access.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <button type="submit" className="btn btn-black">Login</button>
              <button type="button" className="btn btn-secondary">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
