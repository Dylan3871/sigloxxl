import React, { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {API_URL} from "../Config";
import Navbar from './Navbar';

import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/Tablas.css';
//import {AuthContext} from "../context/AuthProvider";



function Pacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [editingPaciente, setEditingPaciente] = useState(null);
  const [token, setToken] = useState('');

 const getPacientes = useCallback(() => {
   axios.get(API_URL + '/api/pacientes', {
     headers: {
       Authorization: `Bearer ${token}`
     }
   })

   
      .then((response) => {
      setPacientes(response.data.pacientes)
         // console.log(response.data);
      })
      .catch((error) => {

         // console.error(error);
      });
}, [token]);


  useEffect(() => {
    try {
      setToken(localStorage.getItem('token').replace(/['"]+/g, ''));
      getPacientes();
    } catch (e) {
      setToken(null);
    }
  }, [token, getPacientes]);


  const handleEditarPaciente = (paciente) => {
    setEditingPaciente(paciente);
  };

  const handleGuardarCambios = async (doctoresId, fieldName, value) => {
    const editeddoctores = {
      id: doctoresId,
      [fieldName]: value,
    };

    try {
      const response = await axios.patch(`https://sigloxxi.alwaysdata.net/api/doctores/${doctoresId}/update`, editeddoctores, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
      });

      if (response.status === 200) {
        // Actualización exitosa en el servidor, actualiza el estado local y desactiva la edición
        setEditingPaciente(null);
        getPacientes();
      } else {
        console.error('Error al editar el paciente en el servidor');
      }
    } catch (error) {
      console.error('Error al editar el paciente', error);
    }
  };

  const handleEliminarPaciente = async (doctoresId) => {
    try {
      const response = await axios.delete(`https://sigloxxi.alwaysdata.net/api/doctores/${doctoresId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
      });

      if (response.status === 200) {
        // Eliminación exitosa en el servidor, actualiza la lista de pacientes
        getPacientes();
      } else {
        console.error('Error al eliminar el paciente en el servidor');
      }
    } catch (error) {
      console.error('Error al eliminar el paciente', error);
    }
  };

  return (
    <div>
      <Navbar /> {/* Agrega la barra de navegación aquí */}
      <div>
        <h1 className="text-center mt-4">Pacientes</h1>
      </div>

      {/* Tabla de Pacientes */}
      <div>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">Nombre del Paciente</th>
              <th scope="col">Email</th>
              <th scope="col">Fecha de Nacimiento</th>
              <th scope="col">Número de Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td>
                  {editingPaciente && editingPaciente.id === paciente.id ? (
                    <input
                      type="text"
                      value={paciente.name}
                      onChange={(e) => handleGuardarCambios(paciente.id, 'name', e.target.value)}
                    />
                  ) : (
                    paciente.name
                  )}
                </td>
                <td>
                  {editingPaciente && editingPaciente.id === paciente.id ? (
                    <input
                      type="text"
                      value={paciente.email}
                      onChange={(e) => handleGuardarCambios(paciente.id, 'email', e.target.value)}
                    />
                  ) : (
                    paciente.email
                  )}
                </td>
                <td>
                  {editingPaciente && editingPaciente.id === paciente.id ? (
                    <input
                      type="date"
                      value={paciente.fecha_na}
                      onChange={(e) => handleGuardarCambios(paciente.id, 'fecha_na', e.target.value)}
                    />
                  ) : (
                    paciente.fecha_na
                  )}
                </td>
                <td>
                  {editingPaciente && editingPaciente.id === paciente.id ? (
                    <input
                      type="text"
                      value={paciente.telefono}
                      onChange={(e) => handleGuardarCambios(paciente.id, 'telefono', e.target.value)}
                    />
                  ) : (
                    paciente.telefono
                  )}
                </td>
                <th>
                  {editingPaciente && editingPaciente.id === paciente.id ? (
                    <>
                      <button type="button" className="btn btn-success" onClick={() => handleGuardarCambios(paciente.id)}>Guardar</button>
                      <button type="button" className="btn btn-danger" onClick={() => handleEliminarPaciente(paciente.id)}>Eliminar</button>
                    </>
                  ) : (
                    <>
                      <button type="button" className="btn btn-danger" onClick={() => handleEliminarPaciente(paciente.id)}>Eliminar</button>
                      <button type="button" className="btn btn-warning" onClick={() => handleEditarPaciente(paciente)}>Editar Paciente</button>
                    </>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Fin Tabla de Pacientes */}
    </div>
  );
}

export default Pacientes;
