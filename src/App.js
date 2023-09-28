import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { Registro } from './components/Registro';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio'; // Importa "Inicio" sin llaves
import { ResultadosScreen } from './components/ResultadosScreen';
import Citas from './components/Citas';
import Encuesta from './components/Encuesta';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Inicio />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Registro" element={<Registro />} />
              <Route exact path="/Navbar" element={<Navbar />} />
              <Route exact path="/Encuesta" element={<Encuesta />} />
              <Route exact path="/resultado" element={<ResultadosScreen />} />
              <Route exact path="/Citas" element={<Citas />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
