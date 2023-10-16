import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/Tablas.css'
import Navbar from './Navbar';

function Citas() {

    return (
        <div>
            <Navbar />
            <div>
                {/* Agendar una nueva cita*/}
                {/* botón Modal */}
                <button type="button" class="buttonCitas" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agendar Cita
                </button>

                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Agendar Cita (Datos del paciente) </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {/* Cuerpo del Modal */}
                            <div class="modal-body">
                                <div class="row g-3">
                                    <div class="col">
                                        <label class="form-label">Nombre(s)</label>
                                        <input type="text" class="form-control" placeholder="Nombre(s)" aria-label="First name"></input>
                                    </div>
                                    <div class="col">
                                        <label class="form-label">Apellidos</label>
                                        <input type="text" class="form-control" placeholder="Apellidos" aria-label="Last name"></input>
                                    </div>
                                    <div class="col-2">
                                        <label class="form-label">Edad</label>
                                        <input type="text" class="form-control" placeholder="Edad" aria-label="Last name"></input>
                                    </div>
                                </div>
                                <div>
                                    <label class="form-label">Genero</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Seleccione su genero</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>
                                        <option value="3">Otro</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Dirección</label>
                                    <input class="form-control form-control-sm" type="text" placeholder="Dirección" aria-label=".form-control-sm example"></input>
                                </div>
                                <div>
                                    <label class="form-label">Elija a su Medíco</label>
                                    <select class="form-select" aria-label="Medico">
                                        <option selected>Seleccione a su Médico de confianza</option>
                                        <option value="1">Médico 1</option>
                                        <option value="2">Médico 2</option>
                                        <option value="3">Médico 3</option>
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <label for="birthdate" class="form-label">Agende su cita</label>
                                    <input type="date" class="form-control" id="fechaCita" name="fechaCita"></input>
                                </div>

                                {/* <div class="mb-3">
                                    <label for="formFileSm" class="form-label">Foto de perfil</label>
                                    <input class="form-control form-control-sm" id="formFileSm" type="file"></input>
                                </div> */}

                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Notas (¿Algo que el Médico deba saber?)</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            {/* Fin de cuerpo del Modal */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Fin Agendar Cita */}

            {/* Tabla de Citas */}
            <div>
                <table class="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Nombre del paciente</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Género</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Nombre del Medico</th>
                            <th scope="col">Fecha de la cita agendada</th>
                            <th scope="col">Notas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Juan Pablo</td>
                            <td>20</td>
                            <td>masculino</td>
                            <td>Xonacatlá, Edo. Mex</td>
                            <td>Dr. Mario</td>
                            <td>07/10/2023</td>
                            <td>Voy en silla de ruedas</td>
                            <th>
                                <button type="button" class="btn btn-danger">Cancelar cita</button>
                                <button type="button" class="btn btn-warning">Reagendar cita</button>
                            </th>
                        </tr>
                        <tr>
                            <td>Juan Pablo</td>
                            <td>20</td>
                            <td>masculino</td>
                            <td>Xonacatlá, Edo. Mex</td>
                            <td>Dr. Mario</td>
                            <td>07/10/2023</td>
                            <td>Voy en silla de ruedas</td>
                            <th>
                                <button type="button" class="btn btn-danger">Cancelar cita</button>
                                <button type="button" class="btn btn-warning">Reagendar cita</button>
                            </th>
                        </tr>
                        <tr>
                            <td>Juan Pablo</td>
                            <td>20</td>
                            <td>masculino</td>
                            <td>Xonacatlá, Edo. Mex</td>
                            <td>Dr. Mario</td>
                            <td>07/10/2023</td>
                            <td>Voy en silla de ruedas</td>
                            <th>
                                <button type="button" class="btn btn-danger">Cancelar cita</button>
                                <button type="button" class="btn btn-warning">Reagendar cita</button>
                            </th>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            {/* Fin Tabla de Citas */}

        </div>
    )
}

export default Citas