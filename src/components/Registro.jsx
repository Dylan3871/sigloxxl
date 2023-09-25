import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../assets/css/Registro.css';

export const Registro = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    password: '',
    isPatient: '',
    username: '',
    genero: '',
    birth_date: '',
    address: '',
  });

  const [errores, setErrores] = useState({
    nombre: '',
    email: '',
    password: '',
    isPatient: '',
    username: '', 
    genero: '', 
    birth_date: '',
    address: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validación de entrada
    let erroresTemp = {};
    if (formulario.nombre.trim() === '') {
      erroresTemp.nombre = 'El nombre es obligatorio';
    }
    if (formulario.username.trim() === '') {
      erroresTemp.username = 'El nombre de usuario es obligatorio';
    } else if (formulario.username.trim().length < 3) {
      erroresTemp.username = 'El nombre de usuario debe tener al menos 3 caracteres';
    }
    if (formulario.genero.trim() === '') {
      erroresTemp.genero = 'Debe seleccionar su género';
    }  
    if (formulario.birth_date.trim() === '') {
      erroresTemp.birth_date = 'La fecha de nacimiento es obligatoria';
    }
    if (formulario.address.trim() === '') {
      erroresTemp.address = 'La dirección es obligatoria';
    }
    
    
    if (formulario.email.trim() === '') {
      erroresTemp.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formulario.email)) {
      erroresTemp.email = 'El correo electrónico es inválido';
    }
    if (formulario.password.trim() === '') {
      erroresTemp.password = 'La contraseña es obligatoria';
    } else if (formulario.password.trim().length < 6) {
      erroresTemp.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    if (formulario.isPatient.trim() === '') {
      erroresTemp.isPatient = 'Debe seleccionar una opción';
    }
    setErrores(erroresTemp);

    // Si no hay errores, envía el formulario
   if (Object.keys(erroresTemp).length === 0) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formulario);
        console.log(response.data);
        setEnviado(true);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div className="registro-container">
      <Navbar />
     
      <form id="my-form" onSubmit={handleSubmit} className="registro-form">
        <h2>Registros</h2>
        <label htmlFor="name">Nombre Completo:</label>
        <input type="text" id="name" name="nombre" onChange={handleChange} />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      
        <label htmlFor="tipo">Genero:</label>
        <select id="genero" name="genero" onChange={handleChange}>
         <option value="">Seleccione una opción</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="no-binario">Otro</option>
        </select>

        <label htmlFor="fecha-nacimiento">Fecha de nacimiento:</label>
        <input type="date" id="fecha-nacimiento" name="birth_date" onChange={handleChange} />
        {errores.birth_date && <span className="error">{errores.birth_date}</span>}
        <label htmlFor="address">Dirección:</label>
          <input type="text" id="address" name="address" onChange={handleChange} />
{errores.address && <span className="error">{errores.address}</span>}


        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        {errores.email && <span className="error">{errores.email}</span>}

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" onChange={handleChange} />
        {errores.password && <span className="error">{errores.password}</span>}

        <label htmlFor="tipo">Soy:</label>
        <select id="tipo" name="isPatient" onChange={handleChange}>
          <option value="">Seleccione una opción</option>
          <option value="paciente">Paciente</option>
          <option value="psicologo">Doctor</option>
        </select>
        {errores.isPatient && <span className="error">{errores.isPatient}</span>}
        
        {enviado && <span className="confirmacion">¡Registro exitoso!</span>}


        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
