import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';

function Citas() {
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedPatient, setSelectedPatient] = useState('');
    const [fechaConsulta, setFechaConsulta] = useState('');
    // const [nota, setNota] = useState('');
    const [citas, setCitas] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    //const [showModal, setShowModal] = useState(false);
    // Nuevo estado para manejar el modal después de realizar una acción
    const [afterAction, setAfterAction] = useState(false);
    const [token, setToken] = useState(null);
    //const [config] = useState({
      //  headers: {
        //  'Authorization': `Bearer ${token}`, // Reemplaza con tu token real
        //}
//});

    useEffect(() => {
        try {
            setToken(localStorage.getItem('token').replace(/['"]+/g, ''));
        }
        catch (e) {
            setToken(null);
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };

            // Obtener pacientes
            axios.get('http://127.0.0.1:8000/api/pacientes', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(response => {
                    console.log("Respuesta de pacientes:", response.data);
                    if (Array.isArray(response.data.pacientes)) {
                        setPatients(response.data.pacientes);

                        // Filtra solo los pacientes (rol_id === 3)
                        const filteredPaciente = response.data.pacientes.filter(paciente => paciente.rol_id === 3);
                        console.log("Pacientes filtrados:", filteredPaciente);
                        setPatients(filteredPaciente);
                    } else {
                        console.error("La respuesta de pacientes no es un array:", response.data);
                    }
                })
                .catch(error => {
                    console.error("Error al obtener pacientes: ", error);
                });

        // Obtener médicos y pacientes al mismo tiempo
        axios.get('http://127.0.0.1:8000/api/doctores', config)
            .then(response => {
                console.log("Respuesta de usuarios (doctores):", response.data);
                if (Array.isArray(response.data.doctores)) {
                    setDoctors(response.data.doctores);

                    const usersInfo = { ...userInfo }; // Copiamos el estado anterior
                    response.data.doctores.forEach(user => {
                        usersInfo[user.id] = user;
                    });

                        // Obtener información de usuarios (pacientes)
                        axios.get('http://127.0.0.1:8000/api/pacientes', {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        })
                            .then(response => {
                                console.log("Respuesta de usuarios (pacientes):", response.data);
                                if (Array.isArray(response.data.pacientes)) {
                                    response.data.pacientes.forEach(user => {
                                        if (user.rol_id === 3) { // Filtramos pacientes con rol_id igual a 3
                                            usersInfo[user.id] = user;
                                        }
                                    });
                                    setUserInfo(usersInfo);
                                } else {
                                    console.error("La respuesta de usuarios (pacientes) no es un array:", response.data);
                                }
                            })
                            .catch(error => {
                                console.error("Error al obtener información de usuarios (pacientes): ", error);
                            });
                    } else {
                        console.error("La respuesta de usuarios (doctores) no es un array:", response.data);
                    }
                })
                .catch(error => {
                    console.error("Error al obtener información de usuarios (doctores): ", error);
                });

        // Obtener citas
        axios.get('http://127.0.0.1:8000/api/citas', config)
            .then(response => {
                console.log("Respuesta de citas:", response.data);
                if (Array.isArray(response.data.citas)) {
                    setCitas(response.data.citas);
                } else {
                    console.error("La respuesta de citas no es un array:", response.data);
                }
            })

            .catch(error => {
                console.error("Error al obtener citas: ", error);
            });
    }, [afterAction, token, userInfo]);

    

    const handleDoctorChange = (event) => {
        setSelectedDoctor(event.target.value);
    };

    const handlePatientChange = (event) => {
        setSelectedPatient(event.target.value);
    };

    const handleFechaConsultaChange = (event) => {
        setFechaConsulta(event.target.value);
    };

    // const handleNotaChange = (event) => {
    //     setNota(event.target.value);
    // };
    
    const resetModalData = () => {
        setSelectedPatient('');
        setSelectedDoctor('');
        setFechaConsulta('');
        // setNota('');  // Si es necesario resetear más estados, agrégales aquí
    };

    const handleGuardarCita = (event) => {
        event.preventDefault();
    
        const nuevaCita = {
            paciente_id: selectedPatient,
            medico_id: selectedDoctor,
            fecha_consulta: fechaConsulta,
            // nota: nota,
        };
    
        axios.post('http://127.0.0.1:8000/api/citas/crear', nuevaCita, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => {
            //setShowModal(false);
            setAfterAction(!afterAction);
            resetModalData();  // Resetear los datos del modal
        })
        .catch(error => {
            console.error("Error al guardar la cita: ", error);
        });
    };

    const handleCancelCita = (citaId) => {
        // Realiza una solicitud DELETE al servidor para eliminar la cita
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        axios.delete(`http://127.0.0.1:8000/api/citas/${citaId}`, config)
            .then(response => {
                // Elimina la cita del estado local
                const updatedCitas = citas.filter(cita => cita.id !== citaId);
                setCitas(updatedCitas);
            })
            .catch(error => {
                console.error("Error al cancelar la cita: ", error);
            });
    };


    return (
        <div>
            <Navbar />
            <div>
                {/* Botón modal */}
                <button type="button" className="buttonCitas" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agendar Cita
                </button>

                {/* Inicio del modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Agendar cita</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={handleGuardarCita}>
                                    <div className="form-group">
                                        <label htmlFor="paciente">Paciente</label>
                                        <select id="paciente" className="form-control" value={selectedPatient} onChange={handlePatientChange}>
                                            {patients.map(patient => (
                                                <option key={patient.id} value={patient.id}>
                                                    {patient.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="medico">Médico</label>
                                        <select id="medico" className="form-control" value={selectedDoctor} onChange={handleDoctorChange}>
                                            {doctors.map(doctor => (
                                                <option key={doctor.id} value={doctor.id}>
                                                    {doctor.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fechaConsulta">Fecha de la cita</label>
                                        <input type="date" className="form-control" id="fechaConsulta" value={fechaConsulta} onChange={handleFechaConsultaChange} />
                                    </div>
                                    {/* <div className="form-group">
                                        <label htmlFor="nota">Nota</label>
                                        <textarea className="form-control" id="nota" value={nota} onChange={handleNotaChange}></textarea>
                                    </div> */}
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary" onClick={handleGuardarCita} data-bs-dismiss="modal">Agendar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fin  del modal */}


                {/* Tabla de Citas */}
                <div>
                    <table className="table table-striped mt-4">
                        <thead>
                            <tr>
                                <th scope="col">Nombre del paciente</th>
                                <th scope="col">Fecha de nacimiento del paciente</th>
                                <th scope="col">Nombre del Médico</th>
                                <th scope="col">Consultorio</th>
                                <th scope="col">Fecha de la cita agendada</th>
                                {/* <th scope="col">Notas</th> */}
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(citas) && citas.length > 0 ? (
                                citas.map(cita => (
                                    <tr key={cita.id}>
                                        <td>{userInfo[cita.paciente_id]?.name || ''}</td>
                                        <td>{userInfo[cita.paciente_id]?.fecha_na || ''}</td>
                                        <td>{userInfo[cita.medico_id]?.name || ''}</td>
                                        <td>{userInfo[cita.medico_id]?.consultorio || ''}</td>
                                        <td>{cita.fecha_consulta}</td>
                                        {/* <td>{cita.nota}</td> */}
                                        <th>
                                            <button type="button" className="btn btn-danger" onClick={() => handleCancelCita(cita.id)}>Cancelar cita</button>
                                            <button type="button" className="btn btn-warning">Reagendar cita</button>
                                        </th>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No hay citas disponibles</td>
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