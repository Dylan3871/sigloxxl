import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/Tablas.css';

import Navbar from './Navbar'; // Importa la componente Navbar

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [editingPaciente, setEditingPaciente] = useState(null);

  const config = {
    headers: {
      'Authorization': 'Bearer ultslzgfv9RaEcASqwc3H6pn0DvrvBytRdTDTwgQ2afe3c45', // Reemplaza con tu token real
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = async () => {
    try {
      const response = await Axios.get('http://127.0.0.1:8000/api/pacientes', config);
      if (response.status === 200) {
        const data = response.data.pacientes;
        setPacientes(data);
      } else {
        console.error('Error al obtener pacientes');
      }
    } catch (error) {
      console.error('Error al obtener pacientes', error);
    }
  };

  const handleEditarPaciente = (paciente) => {
    setEditingPaciente(paciente);
  };

  const handleGuardarCambios = async (doctoresId, fieldName, value) => {
    const editeddoctores = {
      id: doctoresId,
      [fieldName]: value,
    };

    try {
      const response = await Axios.patch(`http://127.0.0.1:8000/api/doctores/${doctoresId}/update`, editeddoctores, config);

      if (response.status === 200) {
        // Actualización exitosa en el servidor, actualiza el estado local y desactiva la edición
        setEditingPaciente(null);
        fetchPacientes(); // Actualiza la lista de pacientes
      } else {
        console.error('Error al editar el paciente en el servidor');
      }
    } catch (error) {
      console.error('Error al editar el paciente', error);
    }
  };

  const handleEliminarPaciente = async (doctoresId) => {
    try {
      const response = await Axios.delete(`http://127.0.0.1:8000/api/doctores/${doctoresId}`, config);

      if (response.status === 200) {
        // Eliminación exitosa en el servidor, actualiza la lista de pacientes
        fetchPacientes();
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
              <th scope="col">Número de Cédula</th>
              <th scope="col">Número de Teléfono</th>
              <th scope="col">Consultorio</th>
              <th scope="col">Acciones</th>
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
                      value={paciente.no_cedula}
                      onChange={(e) => handleGuardarCambios(paciente.id, 'no_cedula', e.target.value)}
                    />
                  ) : (
                    paciente.no_cedula
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
                <td>
                  {editingPaciente && editingPaciente.id === paciente.id ? (
                    <input
                      type="text"
                      value={paciente.consultorio}
                      onChange={(e) => handleGuardarCambios(paciente.id, 'consultorio', e.target.value)}
                    />
                  ) : (
                    paciente.consultorio
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
