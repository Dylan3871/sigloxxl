import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
 

function Doctores() {

    return (
        <div> 
            <Navbar />
            <div>
                <h1 class="text-center mt-4">Doctores</h1>
            </div>

            {/* Tabla de Citas */}
            <div>
                <table class="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Nombre del Doctor</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Género</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Numero de cedula</th>
                
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Juan Pablo</td>
                            <td>35</td>
                            <td>masculino</td>
                            <td>Toluca, Colonia Centro</td>
                            <td>739201832</td>
                            <th>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                            <button type="button" class="btn btn-warning">Editar Doctor</button>
                            </th>
                        </tr>
                        <tr>
                            <td>Marcos Cruz</td>
                            <td>45</td>
                            <td>masculino</td>
                            <td>Xonacatlán, Colonia San jose</td>
                            <td>829180293</td>
                            <th>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                            <button type="button" class="btn btn-warning">Editar Doctor</button>
                            </th>
                        </tr>
                        <tr>
                            <td>Pedro Sanchez</td>
                            <td>32</td>
                            <td>masculino</td>
                            <td>Metepec, Barrio San Mateo</td>
                            <td>7289271820</td>
                            <th>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                                <button type="button" class="btn btn-warning">Editar Doctor</button>
                            </th>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            {/* Fin Tabla de Citas */}

        </div>
    )
}

export default Doctores