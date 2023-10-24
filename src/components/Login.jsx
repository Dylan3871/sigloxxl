import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../assets/scss/Login.scss';
import Navbar from './Navbar';
import {API_URL} from "../Config";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API_URL}/login`, { email, password })
      .then((response) => {
        setToken(response.data.token);
        setError(null);

        // // Redirigir a la página de inicio
        window.location.replace('/');
        // console.log(response);
      })
      .catch((error) => {
        setError('Email o contraseña incorrectos');
        setToken(null);
      });
  };

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token))
  }, [token]);


  return (
    <div>
      <Navbar />
      <div className='bodyLogin'>
        <div className='wrapperLogin'>
          <div className='innerLogin'>

            <form className='formLogin' id='form_login' onSubmit={handleSubmit}>
              <h3 className='h3Login'>
                <a className='aLogin'>Iniciar Sesión</a>
              </h3>
              <div className='form-holderLogin active'>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={handleEmailChange}
                  placeholder='CORREO'
                  className='form-controlLogin'
                />
              </div>
              <div className='form-holderLogin'>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='CONTRASEÑA'
                  className='form-controlLogin'
                />
              </div>
              <div className='form-loginLogin'>
                {error && <div>{error}</div>}
                <button className='buttonLogin' type='submit'>
                  Acceder
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;