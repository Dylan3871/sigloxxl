import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/Tablas.css';
import Navbar from './Navbar';
import api from './api'
//import { API_URL } from '../Config';

function Citas() {
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedPatient, setSelectedPatient] = useState('');
    const [consultorio, setConsultorio] = useState('');
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        // Obtener lista de pacientes con rol_id igual a 3
        api.get('/pacientes') // Utiliza el archivo de utilidad para realizar la solicitud
            .then(response => {
                setPatients(response.data);
            })
            .catch(error => {
                console.error("Error al obtener pacientes: ", error);
            });

        // Obtener lista de médicos con rol_id igual a 2
        api.get('/doctores') // Utiliza el archivo de utilidad para realizar la solicitud
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error("Error al obtener doctores: ", error);
            });

        // Obtener lista de citas
        api.get('/citas') // Utiliza el archivo de utilidad para realizar la solicitud
            .then(response => {
                setCitas(response.data);
            })
            .catch(error => {
                console.error("Error al obtener citas: ", error);
            });
    }, []);

    const handleDoctorChange = (event) => {
        setSelectedDoctor(event.target.value);
        // Aquí deberías obtener la dirección del consultorio del médico seleccionado
        // Puedes hacer una nueva solicitud a la API para obtener esta información
    };

    const handlePatientChange = (event) => {
        setSelectedPatient(event.target.value);
    };

    const handleSaveCita = () => {
        // Aquí deberías enviar los datos de la cita a la API para guardarla
        // Puedes usar Axios para realizar la solicitud POST a tu API
    };

    return (
        <div>
            <Navbar />
            <div>
                <button type="button" className="buttonCitas" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agendar Cita
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Agendar Cita (Datos del paciente) </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col">
                                        <label className="form-label">Nombre del paciente</label>
                                        {selectedPatient === '' && (
                                            <select className="form-select" aria-label="Nombre del paciente" onChange={handlePatientChange}>
                                                <option selected>Seleccione un paciente</option>
                                                {Array.isArray(patients) && patients.length > 0 ? (
                                                    patients.map(patient => (
                                                        <option key={patient.id} value={patient.id}>{patient.name}</option>
                                                    ))
                                                ) : (
                                                    <option value="" disabled>No hay pacientes disponibles</option>
                                                )}

                                            </select>
                                        )}
                                        {selectedPatient !== '' && (
                                            <input type="text" className="form-control" value={patients.find(patient => patient.id === selectedPatient)?.name || ''} readOnly />
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">Elija a su Doctor</label>
                                    <select className="form-select" aria-label="Medico" onChange={handleDoctorChange}>
                                        <option selected>Seleccione a su Médico</option>
                                        {Array.isArray(doctors) && doctors.length > 0 ? (
                                            doctors.map(doctor => (
                                                <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                                            ))
                                        ) : (
                                            <option value="" disabled>No hay médicos disponibles</option>
                                        )}

                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Dirección del consultorio</label>
                                    <input className="form-control form-control-sm" type="text" value={consultorio} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fechaCita" className="form-label">Agende su cita</label>
                                    <input type="date" className="form-control" id="fechaCita" name="fechaCita" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Notas (¿Algo que el Médico deba saber?)</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary" onClick={handleSaveCita}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabla de Citas */}
                <div>
                    <table className="table table-striped mt-4">
                        <thead>
                            <tr>
                                <th scope="col">Nombre del paciente</th>
                                <th scope="col">Fecha de nacimiento</th>
                                <th scope="col">Nombre del Médico</th>
                                <th scope="col">Dirección/Consultorio</th>
                                <th scope="col">Fecha de la cita agendada</th>
                                <th scope="col">Notas</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(citas) && citas.length > 0 ? (
                                citas.map(cita => (
                                    <tr key={cita.id}>
                                        <td>{cita.pacientes.name}</td>
                                        <td>{cita.pacientes.fecha_na}</td>
                                        <td>{cita.doctores.name}</td>
                                        <td>{cita.doctores.consultorio}</td>
                                        <td>{cita.fecha_consulta}</td>
                                        <td>{cita.notas}</td>
                                        <th>
                                            <button type="button" className="btn btn-danger">Cancelar cita</button>
                                            <button type="button" className="btn btn-warning">Reagendar cita</button>
                                        </th>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No hay citas disponibles</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Fin Tabla de Citas */}

            </div>
        </div>
    );
}

export default Citas;
