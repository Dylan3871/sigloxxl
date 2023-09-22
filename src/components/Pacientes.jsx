import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';

function Pacientes() {

    return (
        <div>
            <Navbar />
            <div>
                {/* Agregar Nuevo Paciente*/}
                {/* botón Modal */}
                <button type="button" class="buttonPacientes" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Nuevo Paciente
                </button>

                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Agrgar Nuevo Paciente</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {/* Cuerpo del Modal */}
                            <div class="modal-body">
                                <div class="row g-3">
                                    <div class="col">
                                        <label class="form-label">Correo</label>
                                        <input type="email" class="form-control" placeholder="Correo Electrónico"></input>
                                    </div>
                                </div>
                                <div class="row g-3">
                                    <div class="col">
                                        <label class="form-label">Contraseña</label>
                                        <input type="password" class="form-control" placeholder="Contraseña" id="inputPassword"></input>                                     </div>
                                </div>
                                <div class="row g-3">
                                    <div class="col">
                                        <label class="form-label">Nombre(s)</label>
                                        <input type="text" class="form-control" placeholder="Nombre(s)" aria-label="First name"></input>
                                    </div>
                                    <div class="col">
                                        <label class="form-label">Apellidos</label>
                                        <input type="text" class="form-control" placeholder="Apellidos" aria-label="Last name"></input>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="birthdate" class="form-label">Fecha de nacimiento</label>
                                    <input type="date" class="form-control" id="birthdate" name="birthdate"></input>
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
                                    <label for="formFileSm" class="form-label">Foto de perfil</label>
                                    <input class="form-control form-control-sm" id="formFileSm" type="file"></input>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Dirección</label>
                                    <input class="form-control form-control-sm" type="text" placeholder="Dirección" aria-label=".form-control-sm example"></input>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Notas</label>
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
            {/*Fin Agregar Nuevo Paciente */}

            {/* Tabla de pacientes */}
            <div>
                <table class="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Nombre(s)</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Fecha de nacimiento</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Notas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>correo@ejemplo.com</td>
                            <td>07/08/2002</td>
                            <td>Xonacatlá, Edo. Mex</td>
                            <td>El paciente está loquito</td>
                            <th>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>correo@ejemplo.com</td>
                            <td>07/08/2002</td>
                            <td>Xonacatlá, Edo. Mex</td>
                            <td>El paciente está loquito</td>
                            <th>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td></td>
                            <td colspan="2">Larry the Bird</td>
                            <td>correo@ejemplo.com</td>
                            <td>07/08/2002</td>
                            <td>Xonacatlá, Edo. Mex</td>
                            <td>El paciente está loquito</td>
                            <th>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Fin Tabla de pacientes */}

        </div>
    )
}

export default Pacientes