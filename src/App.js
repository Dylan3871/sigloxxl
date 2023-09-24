import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { Registro } from './components/Registro';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio'; // Importa "Inicio" sin llaves
import Formulario from './components/Formulario';
import Menu from './components/Menu';
import { ResultadosScreen } from './components/ResultadosScreen';
import Pacientes from './components/Pacientes';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/Inicio" element={<Inicio />} />
              <Route exact path="/Registro" element={<Registro />} />
              <Route exact path="/Navbar" element={<Navbar />} />
              <Route exact path="/Formulario" element={<Formulario />} />
              <Route exact path="/resultado" element={<ResultadosScreen />} />
              <Route exact path="/Pacientes" element={<Pacientes />} />
              <Route exact path="/Menu" element={<Menu />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
