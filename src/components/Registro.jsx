import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../assets/css/Registro.css';

export const Registro = () => {
  const [formulario, setFormulario] = useState({
    name: '',
    email: '',
    password: '',
    fecha_na: '',
    no_cedula: '',
    telefono: '', // Campo de teléfono añadido
    consultorio: '',
  });

  const [errores, setErrores] = useState({
    name: '',
    email: '',
    password: '',
    fecha_na: '',
    no_cedula: '',
    telefono: '',
    consultorio: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let erroresTemp = {};

    // ... Validaciones ...

    if (Object.keys(erroresTemp).length === 0) {
      try {
        const token = '06JpmVhudMG8XXFs1S6TDUbNXrzDGOblR9P20PSBc615ee48'; // Reemplaza esto con tu token real
        const headers = {
          'Authorization': `Bearer ${token}`,
        };

        const response = await axios.post('http://127.0.0.1:8000/api/doctores/crear', formulario, { headers });
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
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        {errores.name && <span className="error">{errores.name}</span>}

        <label htmlFor="fecha-na">Fecha de nacimiento:</label>
        <input type="date" id="fecha-na" name="fecha_na" onChange={handleChange} />
        {errores.fecha_na && <span className="error">{errores.fecha_na}</span>}

        <label htmlFor="consultorio">Dirección/Consultorio:</label>
        <input type="text" id="consultorio" name="consultorio" onChange={handleChange} />
        {errores.consultorio && <span className="error">{errores.consultorio}</span>}

        <label htmlFor="cedula">Cédula:</label>
        <input type="text" id="cedula" name="no_cedula" onChange={handleChange} />
        {errores.no_cedula && <span className="error">{errores.no_cedula}</span>}

        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" onChange={handleChange} />
        {errores.telefono && <span className="error">{errores.telefono}</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        {errores.email && <span className="error">{errores.email}</span>}

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" onChange={handleChange} />
        {errores.password && <span className="error">{errores.password}</span>}

        {enviado && <span className="confirmacion">¡Registro exitoso!</span>}

        <button type="submit">Enviar</button>
        <Link to="/" className="boton-regresar">Regresar</Link>
      </form>
    </div>
  );
};
