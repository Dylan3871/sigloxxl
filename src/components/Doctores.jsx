import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/Tablas.css';
import Navbar from './Navbar';

function Doctores() {
  const [doctores, setDoctores] = useState([]);

  useEffect(() => {
    const token = 'OP7ejjCfl8iCNdpbmA5RHaqV2VNvsSBzThlrTDlk1ceeb7f0'; // Reemplaza con tu token real
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    async function fetchDoctores() {
      try {
        const response = await Axios.get('http://127.0.0.1:8000/api/doctores', config);
        console.log('Respuesta de la API:', response.data.doctores);
        if (response.status === 200) {
          const data = response.data.doctores;
          setDoctores(data);
        } else {
          console.error('Error al obtener doctores');
        }
      } catch (error) {
        console.error('Error al obtener doctores', error);
      }
    }

    fetchDoctores();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center mt-4">Doctores</h1>
      </div>

      {/* Tabla de Doctores */}
      <div>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">Nombre del Doctor</th>
              <th scope="col">Email</th>
              <th scope="col">Fecha de Nacimiento</th>
              <th scope="col">Número de Cédula</th>
              <th scope="col">Número de Teléfono</th>
              <th scope="col">Consultorio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {doctores.map((doctor, index) => (
              <tr key={index}>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.fecha_na}</td>
                <td>{doctor.no_cedula}</td>
                <td>{doctor.telefono}</td>
                <td>{doctor.consultorio}</td>
                <th>
                  <button type="button" className="btn btn-danger">Eliminar</button>
                  <button type="button" className="btn btn-warning">Editar Doctor</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Fin Tabla de Doctores */}
    </div>
  );
}

export default Doctores;
