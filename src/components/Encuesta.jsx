import React, { Component } from 'react';
import Navbar from './Navbar';
import '../assets/css/Encuestas.css';


class EncuestaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edad: '',
      imc: '',
      perimetroAbdominalHombres: '',
      perimetroAbdominalMujeres: '',
      actividadFisica: '',
      consumoFrutasVerduras: '',
      hipertension: '',
      nivelesAltosGlucosa: '',
      antecedentesDM: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos recopilados, como calcular el puntaje.
    // Por ahora, solo mostraremos los datos en la consola.
    console.log('Datos del formulario:', this.state);
  }


  render() {
  
    return (
     
      <div>
         <Navbar />
        <h1>Formulario de Encuesta</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="pregunta edad">
        <div className="pregunta">
          <div>
          <label className="pregunta-label">¿Cuál es su edad?</label>
            <br />
            <select name="edad" value={this.state.edad} 
            onChange={this.handleInputChange}
            className="pregunta-select">
              <option value="">Seleccione una opción</option>
              <option value="Menos de 45 años">Menos de 45 años</option>
              <option value="Entre 45-54 años">Entre 45-54 años</option>
              <option value="Entre 55-64 años">Entre 55-64 años</option>
              <option value="Más de 64 años">Más de 64 años</option>
            </select>
          </div>
          </div>
          </div>

           {/*////////////////////////////////////////////////////////////////////////////////////////*/}

          <div className="pregunta imc">
          <div className="pregunta">
          <div>
          <label className="pregunta-label">¿Cuál es su índice de masa corporal (IMC)?</label>
            <br />
            <select name="imc" value={this.state.imc} 
            onChange={this.handleInputChange}
            className="pregunta-select">
              <option value="">Seleccione una opción</option>
              <option value="Menos de 25 kg/m²">Menos de 25 kg/m²</option>
              <option value="Entre 25/30 kg/m²">Entre 25/30 kg/m²</option>
              <option value="Más de 30 kg/m²">Más de 30 kg/m²</option>
            </select>
          </div>
          </div>
          </div>


          {/*////////////////////////////////////////////////////////////////////////////////////////*/}

          <div className="pregunta perimetro">
          <div className="pregunta">
          <div>
          <label className="pregunta-label">¿Cuál es su Perímetro abdominal?<br />
                    (Hombres) ,(Mujeres) 
            </label>
            <br />
            <select name="Pa" value={this.state.Pa} 
            onChange={this.handleInputChange}
            className="pregunta-select">
              <option value="">Seleccione una opción</option>
              <option value="Menos de 94 cm Menos de 80 cm">(Menos de 94 cm) (Menos de 80 cm)</option>
              <option value="Entre 94-102 cm Entre 80-88 cm">(Entre 94-102)(Entre 80-88 cm)</option>
              <option value="Más de 102 cm Más de 88 cm ">(Más de 102 cm)(Más de 88 cm)</option>
            </select>
          </div>
          </div>
          </div>


          {/*////////////////////////////////////////////////////////////////////////////////////////*/}

          <div className="pregunta actividad">
          <div className="pregunta">
          <div>
          <label className="pregunta-label">¿Realiza normalmente al menos 30 minutos diarios de actividad física?</label>
            <br />
            <select name="Rf" value={this.state.Rf} 
            onChange={this.handleInputChange}
            className="pregunta-select">
              <option value="">Seleccione una opción</option>
              <option value="Si ">Si</option>
              <option value="No ">No</option>
            </select>
          </div>
          </div>
          </div>

 
        {/*////////////////////////////////////////////////////////////////////////////////////////*/}


          <div className="pregunta consumo">
          <div className="pregunta">
          <div>
          <label className="pregunta-label">¿Con qué frecuencia come frutas, verduras y hortalizas?</label>
            <br />
            <select name="Ch" value={this.state.ch} 
            onChange={this.handleInputChange}
            className="pregunta-select">
              <option value="">Seleccione una opción</option>
              <option value=" A diario "> A diario</option>
              <option value="No a diario ">No a diario</option>
            </select>
          </div>
          </div>
          </div>

          {/*////////////////////////////////////////////////////////////////////////////////////////*/}

          <div className="pregunta hipertension">
          <div className="pregunta">
          <div>
          <label className="pregunta-label">¿Le han recetado alguna vez medicamentos contra la Hipertensión arterial ?</label>
            <br />
            <select name="La" value={this.state.La} 
            onChange={this.handleInputChange}
            className="pregunta-select">
              <option value="">Seleccione una opción</option>
              <option value=" Si "> Si </option>
              <option value=" No "> No </option>
            </select>
          </div>
          </div>
          </div>


          {/*////////////////////////////////////////////////////////////////////////////////////////*/}


          <div className="pregunta glucosa">
          <div className="pregunta">
          <div>
          <label className="pregunta-label">¿Le han detectado alguna vez niveles altos de glucosa en sangre?</label>
            <br />
            <select name="Ls" value={this.state.Ls} 
            onChange={this.handleInputChange}
            className="pregunta-select">
              <option value="">Seleccione una opción</option>
              <option value=" Si "> Si </option>
              <option value=" No "> No </option>
            </select>
          </div>
          </div>
          </div>

        {/*////////////////////////////////////////////////////////////////////////////////////////*/}

          <div className="pregunta antecedentes">
          <div className="pregunta">
          <div>
          <label className="pregunta-label">¿Ha habido algún diagnóstico de DM (Diabetes Mellitus) en su familia?</label>
            <br />
            <select name="Dm" value={this.state.Dm} 
            onChange={this.handleInputChange}
            className="pregunta-select">
              <option value="">Seleccione una opción</option>
              <option value=" Si "> Si: abuelos, tíos o primos 
                                    hermanos (pero no padres, 
                                    hermanos o hijos)  </option>
              <option value=" Si "> Si: padres, hermanos o hijos  </option>
            </select>
          </div>
          </div>
          </div>
          
       
          
          <button type="submit">Calcular Puntaje</button>
        </form>
      </div>
    );
  }
}

export default EncuestaForm;
