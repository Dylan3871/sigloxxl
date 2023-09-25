import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

function Encuesta() {
  return (
    <body>
      <Navbar/>
      <form className="mt-4 container">
        <div class="form-control">
          <label htmlFor="fecha">Fecha de aplicación</label>
          <input type="date" class="form-control" id="fecha" />
        </div>

        <div class="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" />
        </div>

        <div class="form-group">
          <label htmlFor="nombre">ID</label>
          <input type="text" class="form-control" id="id" />
        </div>

        <div class="form-group">
          <label htmlFor="genero">Género</label>
          <select class="form-control" id="genero">
            <option >Seleccione su género</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="edad">Edad</label>
          <input type="number" class="form-control" id="edad" />
        </div>

        <div class="form-group">
          <label htmlFor="educacion">Educación</label>
          <select class="form-control" id="educacion">
            <option value="">Seleccione su nivel de educación</option>
            <option value="sin_estudios">Sin estudios</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="bachillerato">Bachillerato</option>
            <option value="universidad">Universidad</option>
            <option value="postgrado">Postgrado</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="genero">¿Actualmente trabaja fuera de casa como empleado?</label>
          <select class="form-control" id="actualmente_trabaja_fuera">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="horas_trabajadas">
            ¿Si la respuesta es sí, cuántas horas a la semana trabaja?
          </label>
          <input
            type="number"
            class="form-control"
            id="horas_trabajadas"
          />
        </div>

        <div class="form-group">
          <label htmlFor="ocupacion">¿Cuál es su ocupación actual?</label>
          <select class="form-control" id="ocupacion">
            <option value="">Seleccione su ocupación actual</option>
            <option value="Ejecutivo">Ejecutivo</option>
            <option value="Gerente de negocios">Gerente de negocios</option>
            <option value="Profesionista">Profesionista</option>
            <option value="Profesor">Profesor</option>
            <option value="Personal administrativo">Personal administrativo</option>
            <option value="Dueno de empresa pequena">Dueño de empresa pequeña</option>
            <option value="Ventas">Ventas</option>
            <option value="Tecnico">Técnico</option>
            <option value="Tecnico calificado">Técnico calificado</option>
            <option value="Operador de máquinas">Operador de máquinas</option>
            <option value="Tecnico no calificado">Técnico no calificado</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="idPareja">ID de la pareja:</label>
          <input type="text" class="form-control" id="idPareja" />
        </div>
        <div class="form-group">
          <label htmlFor="duracionRelacion">Duración de la relación o matrimonio actual</label>
          <input type="text" class="form-control" id="duracionRelacion" />
        </div>
        <div class="form-group">
          <label htmlFor="numMatrimonios">Número de matrimonios o relaciones importantes previos</label>
          <input type="text" class="form-control" id="numMatrimonios" />
        </div>
        <div class="form-group">
          <label htmlFor="numHijos">Número de hijos</label>
          <input type="text" class="form-control" id="numHijos" />
        </div>
        <div class="form-group">
          <label htmlFor="edadHijoMayor">Edad del hijo mayor (opcional)</label>
          <input type="text" class="form-control" id="edadHijoMayor" />
        </div>
        <div class="form-group">
          <label htmlFor="edadHijoMenor">Edad del hijo menor (opcional)</label>
          <input type="text" class="form-control" id="edadHijoMenor" />
        </div>
        <div clas="form-group">
          <label htmlFor="origenEtnico">¿Cuál es su origen étnico?</label>
          <select class="form-control" id="origenEtnico">
            <option value="">Seleccione su origen étnico</option>
            <option value="Asiatico">Asiático</option>
            <option value="Afroamericano">Afroamericano</option>
            <option value="Hispanico">Hispánico</option>
            <option value="Nativo americano">Nativo americano</option>
            <option value="Caucasico">Caucásico</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <h3>
          MSI.R Forma autocalificable
          Douglas K. Snyder, PH. D.
        </h3>

        <div class="form-group">
          <label htmlFor="MSI_01">
            Cuando mi cónyuge y yo tenemos opiniones diferentes,
            nos sentamos a hablar sobre ellas
          </label>
          <select class="form-control" id="MSI_01">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_02">
            Estoy satisfecho con la manera como mi cónyuge y yo
            pasamos nuestro tiempo libre
          </label>
          <select class="form-control" id="MSI_02">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_03">
            En todo momento mi cónyuge responde con comprensión a
            mi estado de ánimo
          </label>
          <select class="form-control" id="MSI_03">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_04">
            Mi infancia probablemente fue más feliz que la de la mayoría de las
            personas
          </label>
          <select class="form-control" id="MSI_04">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_05">
            Hay algunas cosas de las que mi cónyuge y yo no podemos hablar
          </label>
          <select class="form-control" id="MSI_05">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_06">
            A veces es más fácil confiar en un amigo que en mi cónyuge
          </label>
          <select class="form-control" id="MSI_06">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_07">
            Parece que mi cónyuge disfruta del sexo tanto como yo
          </label>
          <select class="form-control" id="MSI_07">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_08">
            Me gustaría que mi cónyuge compartiera más mis intereses
          </label>
          <select class="form-control" id="MSI_08">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_09">
            Durante una discusión con mi cónyuge los dos expresamos completamente
            nuestros sentimientos
          </label>
          <select class="form-control" id="MSI_09">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_10">
            De joven estaba muy ansioso por salirme de mi casa
          </label>
          <select class="form-control" id="MSI_10">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_11">
            Me gustaría que tuviéramos relaciones sexuales con más frecuencia que
            ahora
          </label>
          <select class="form-control" id="MSI_11">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_12">
            Aun cuando esté enojado conmigo, mi cónyuge es capaz de reconocer mi
            punto de vista
          </label>
          <select class="form-control" id="MSI_12">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_13">
            A mi cónyuge le gusta pasar conmigo su tiempo libre
          </label>
          <select class="form-control" id="MSI_13">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_14">
            En nuestra relación nos expresamos una buena cantidad de amor y afecto
          </label>
          <select class="form-control" id="MSI_14">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_15">
            A veces no me siento a gusto con nuestra relación sexual
          </label>
          <select class="form-control" id="MSI_15">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_16">
            Hay muchas cosas de nuestra relación que me agradan
          </label>
          <select class="form-control" id="MSI_16">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_17">
            Muchas de nuestras discusiones terminan sin solución
          </label>
          <select class="form-control" id="MSI_17">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_18">
            Aun cuando estoy con mi cónyuge, casi todo el tiempo me siento solo
          </label>
          <select class="form-control" id="MSI_18">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_19">
            En las cuestiones de dinero confío totalmente en mi cónyuge
          </label>
          <select class="form-control" id="MSI_19">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_20">
            Hay algunas cosas de mi cónyuge que no me agradan
          </label>
          <select class="form-control" id="MSI_20">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_21">
            Nuestra relación ha sido muy satisfactoria
          </label>
          <select class="form-control" id="MSI_21">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_22">
            Mi cónyuge me ha abofeteado
          </label>
          <select class="form-control" id="MSI_22">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_23">
            En el matrimonio algo de igualdad es bueno, pero, en general, el hombre
            es quien debe decir la última palabra en las cuestiones familiares
          </label>
          <select class="form-control" id="MSI_23">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_24">
            En nuestra relación las cosas buenas superan a las malas
          </label>
          <select class="form-control" id="MSI_24">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_25">
            Mi cónyuge y yo decidimos juntos la manera como gastamos nuestros
            ingresos
          </label>
          <select class="form-control" id="MSI_25">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_26">
            Hay ocasiones en que mi cónyuge hace cosas que me desagradan
          </label>
          <select class="form-control" id="MSI_26">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_27">
            Cualquier pareja se lleva mejor que mi cónyuge y yo
          </label>
          <select class="form-control" id="MSI_27">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_28">
            Nunca me ha preocupado que mi cónyuge pueda enojarse lo suficiente
            como para hacerme daño
          </label>
          <select class="form-control" id="MSI_28">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_29">
            Deberían existir más estancias infantiles y guarderías para que más
            mamás de niños pequeños puedan trabajar
          </label>
          <select class="form-control" id="MSI_29">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_30">
            Nuestra relación es tan buena como cualquiera
          </label>
          <select class="form-control" id="MSI_30">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_31">
            Nuestra relación nunca ha estado en dificultades relacionadas con asuntos
            financieros
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>

        <div class="form-group">
          <label htmlFor="MSI_32">
          Mi cónyuge y yo nos entendemos completamente.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_33">
          Mi cónyuge azota cosas o lanza objetos cuando está disgustado.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_34">
          Lavar la ropa, hacer la limpieza y cuidar a los hijos son, principalmente,
tareas cuya responsabilidad es de la mujer.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_35">
          Con frecuencia he considerado la posibilidad de pedir a mi cónyuge que
busquemos asesoría matrimonial.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_36">
          Hay algunas cosas de nuestra relación que no me agradan del todo.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_37">
          Si uno de los hijos se enferma, y si los dos padres trabajan, el padre tanto
        como la madre debe estar dispuesto a quedarse una buena madre. en casa
              para cuidar al hijo.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_38">
          Mi cónyuge y yo necesitamos mejorar la forma como arreglamos nuestras
           diferencias
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_39">
          Mi cónyuge y yo compartimos distintas formas de juego y diversión cuando
          pasamos tiempo juntos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>
          

          <div class="form-group">
          <label htmlFor="MSI_39">
          Mi cónyuge y yo compartimos distintas formas de juego y diversión cuando
          pasamos tiempo juntos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_40">
          A veces mi cónyuge no me toma lo suficientemente en serio.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>


           <div class="form-group">
          <label htmlFor="MSI_41">
          El matrimonio de mis padres fue más feliz que el de la mayoría.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_42">
          Mi cónyuge es tan susceptible a algunos temas que ni siquiera puedo
mencionarlos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_43">
          Siempre que me siento triste, mi cónyuge me hace sentir amado y feliz
nuevamente.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_44">
          Me siento un poco insatisfecho cuando hablamos de mejorar nuestra forma
de darnos placer sexualmente.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_45">
          Mi cónyuge y yo no tenemos mucho de qué hablar en común.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_46">
          Cuando discutimos, parece que mi cónyuge y yo hablamos una y otra vez
de las mismas cosas.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_47">
          Todos los matrimonios del lado de mi familia parecen haber funcionado
bien.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_48">
          Mi cónyuge y yo no hablamos lo suficiente de nuestra relación sexual.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_49">
          Es muy fácil herir los sentimientos de mi cónyuge.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_50">
          Tal parece que antes nos divertíamos más que ahora.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_51">
          A veces siento como si mi cónyuge realmente no me necesitara.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_52">
          Mi cónyuge a veces muestra muy poco entusiasmo por el sexo.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_53">
          Nuestra relación ha sido decepcionante en muchos aspectos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_54">
          Los desacuerdos menores con mi cónyuge a menudo terminan en grandes
discusiones.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_55">
          Mi cónyuge y yo nunca hemos estado a punto de terminar la relación.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_56">
          Nuestro futuro financiero parece estar seguro.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_57">
          Hay ocasiones en que me pregunto si elegí al mejor de los cónyuges.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_58">
          Hay ocasiones en que me pregunto si elegí al mejor de los cónyuges.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_59">
          Me preocupa que mi cónyuge pierda el control de su enojo.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_60">
          Ganar el sustento de la familia es la principal responsabilidad del hombre.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_61">
          Tal parece que antes nos divertíamos más que ahora.Mi cónyuge y yo pocas veces tenemos grandes discusiones.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_62">
          A menudo nos resulta difícil hablar de nuestras finanzas sin disgustarnos el
uno con el otro.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_63">
          Mi cónyuge a veces me hace sentir miserable.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_64">
          En nuestra relación nunca me había sentido mejor que ahora.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_65">
          Mi cónyuge nunca me ha lanzado objetos cuando está enojado.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_66">
          El hombre debe ser el jefe de la familia.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_67">
          El futuro de nuestra relación es demasiado incierto para hacer planes
serios.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>




          <div class="form-group">
          <label htmlFor="MSI_68">
          Mi cónyuge siempre está revisando cómo gasto nuestro dinero.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_69">
          Ni por un momento me he arrepentido de nuestra relación.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_70">
          A veces mi cónyuge me grita cuando está enojado.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_71">
          La mujer debe llevar el apellido del esposo al casarse.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_72">
          Mi cónyuge y yo somos más felices que la mayoría de las parejas que
conozco.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>






          <div class="form-group">
          <label htmlFor="MSI_73">
          Tratar de elaborar un presupuesto me provoca más problemas con mi
cónyuge que lo que el presupuesto vale.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>




          <div class="form-group">
          <label htmlFor="MSI_74">
          Lo más importante para una mujer es ser una buena esposa y una buena
madre.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_75">
          Cuando discutimos, sabemos limitar nuestro enfoque a los asuntos
importantes.  
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_76">
          Nuestra vida diaria está llena de cosas interesantes para hacerlas juntos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_77">
          Mi cónyuge a veces no entiende cómo me siento.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_78">
          Mis padres no se comunicaban entre sí como debían.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_79">
          A mi cónyuge no le cuesta trabajo aceptar las críticas.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_79">
          A mi cónyuge no le cuesta trabajo aceptar las críticas.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_80">
          A veces a mi cónyuge no le importa mi satisfacción sexual.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_81">
          A veces a mi cónyuge no le importa mi satisfacción sexual.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_82">
          Mi cónyuge no se toma el tiempo suficiente para hacer algunas de las
cosas que me gustan.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_83">
          Mi cónyuge a veces pretende cambiar algún aspecto de mi personalidad.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_84">
          Mis padres nunca me entendieron en realidad.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_85">
          Mi cónyuge y yo casi nunca estamos de acuerdo en la frecuencia de
nuestras relaciones sexuales.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_86">
          Mi cónyuge y yo podemos pasar varios días sin arreglar nuestras
diferencias.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_87">
          Yo hago alguna actividad con mi cónyuge por lo menos una hora al día.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>



          <div class="form-group">
          <label htmlFor="MSI_88">
          Mi cónyuge hace muchas cosas para demostrarme que me ama.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_89">
          Nunca he pensado seriamente en tener una aventura.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_90">
          Tenemos importantes necesidades en nuestra relación que nunca se
satisfacen.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_91">
          Con frecuencia en nuestras discusiones uno de los dos termina lastimado o
llorando.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_92">
          Hay veces que siento deseos de dejar a mi cónyuge. 
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_93">
          Mi cónyuge maneja muy bien las finanzas.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_94">
          Mi cónyuge tiene todas las cualidades que siempre busqué en una pareja.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_95">
          Hay algunas dificultades serias en nuestra relación.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_96">
          Mi cónyuge nunca me ha empujado ni sujetado cuando está enojado.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_97">
          El lugar donde vive la familia depende principalmente del trabajo del hombre.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_98">
          Tal vez sería más feliz si no tuviera esta relación.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_99">
          Mi cónyuge y yo rara vez discutimos por cuestiones de dinero.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_100">
          Hay ocasiones en que no siento mucho amor ni afecto por mi cónyuge.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_101">
          A menudo me he preguntado si nuestra relación podría terminar en la
separación o el divorcio.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_102">
          Mi cónyuge me ha dejado lesiones o marcas en el cuerpo.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_103">
          En una relación la carrera de la mujer tiene la misma importancia que la del
hombre.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_104">
          Creo que nuestra relación es tan agradable como la de la mayoría de las
personas que conozco.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_105">
          Siento que el nivel en que vivimos está por encima de nuestros
ingresos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_106">
          No creo que alguna pareja viva en más armonía que mi cónyuge y yo.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_107">
          Mi cónyuge nunca me ha amenazado con lastimarme.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_108">
          En una relación, uno de los principales roles de la mujer es el de ama casa.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_109">
          He tenido muy pocos momentos de infelicidad en nuestra relación.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_110">
          Mi cónyuge compra muchas cosas sin consultarme.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_111">
          Para que la madre de un niño pequeño trabaje, sólo puede ser cuando la
familia necesita dinero.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_112">
          Mi cónyuge nunca me ha lastimado físicamente.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_113">
          Cuando no estamos de acuerdo, mi cónyuge me ayuda a encontrar
opciones aceptables para los dos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_114">
          Nuestras actividades recreativas y de ocio parecen cubrir muy bien las
necesidades de los dos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_115">
          Me siento libre de expresar abiertamente a mi cónyuge mis sentimientos de
tristeza.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_116">
          Tuve una vida familiar muy feliz.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_117">
          Mi cónyuge y yo rara vez tenemos relaciones sexuales.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_118">
          A veces me pregunto cuánto me ama realmente mi cónyuge.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_119">
          Me gustaría que mi cónyuge me expresara un poco más de ternura durante
la relación sexual.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_120">
          Los miembros de mi familia siempre estuvieron muy unidos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_121">
          A mi cónyuge y a mí nos cuesta trabajo estar en desacuerdo sin perder el
control.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_122">
          Con frecuencia me pregunté si el matrimonio de mis padres terminaría en
divorcio.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_123">
          Hay algunas cosas que me gustaría que hiciéramos, sexualmente, pero
parecen que no le agradan a mi cónyuge.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_124">
          Mi cónyuge a menudo no entiende mi punto de vista.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_125">
          Mi cónyuge busca mi apoyo siempre que se siente desanimado.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_126">
          Mi cónyuge se guarda casi todos sus sentimientos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_127">
            Nuestra relación sexual es totalmente satisfactoria.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_128">
          Creo que nuestra relación es feliz, dentro de lo razonable.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_129">
          Mi cónyuge a menudo se queja de que no lo entiendo.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <h3>
        
    Las parejas SIN hijos deben terminar aquí. Las parejas CON hijos sigan contestando

       </h3>



       <div class="form-group">
          <label htmlFor="MSI_130">
          La mayor parte del tiempo, nuestros hijos se portan bien.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_131">
          Mi cónyuge y yo rara vez discutimos por los hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_132">
          El sistema de valores de mis hijos es muy parecido al mío.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_133">
          Mi cónyuge no pasa suficiente tiempo con nuestros hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_134">
          Nuestra relación podría estar mejor si no hubiéramos tenido hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_135">
          Mi cónyuge y yo rara vez estamos en desacuerdo acerca de cuándo o
cómo disciplinar a nuestros hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_136">
          Me gustaría que mis hijos mostraran un poco más de interés por mí.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          
          <div class="form-group">
          <label htmlFor="MSI_137">
          Nuestros hijos a veces logran separarnos a mi cónyuge y a mí.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_138">
          Mis hijos y yo no tenemos mucho de qué hablar en común.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_139">
          Mi cónyuge no muestra suficiente afecto por nuestros hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_140">
          Nuestros hijos no muestran respeto por nosotros, sus padres.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_141">
          Mi cónyuge y yo decidimos juntos las reglas que vamos a aplicar a
nuestros hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_142">
          Nuestros hijos no parecen tan felices y despreocupados como otros niños
de su edad.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_143">
          Mi cónyuge no asume la parte que le toca en el cuidado de nuestros hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>



          
          <div class="form-group">
          <label htmlFor="MSI_144">
          Tener hijos no me ha traído todas las satisfacciones que yo esperaba.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>

          <div class="form-group">
          <label htmlFor="MSI_145">
          Mi cónyuge y yo casi siempre estamos de acuerdo en la manera como
respondemos a las solicitudes de nuestros hijos de algunos privilegios.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_146">
          Nuestros hijos rara vez dejan de cumplir sus responsabilidades en la casa.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_147">
          Nuestra relación nunca ha estado en dificultades a causa de nuestros hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_148">
          Criar hijos es un trabajo desesperante.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_149">
          Mi cónyuge y yo asumimos una responsabilidad equitativa en la crianza de
nuestros hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>


          <div class="form-group">
          <label htmlFor="MSI_150">
          Con frecuencia juego en casa con uno o más de nuestros hijos.
          </label>
          <select class="form-control" id="MSI_31">
            <option ></option>
            <option value="si">Si</option> 
            <option value="no">No</option>
          </select>
          </div>



        <button type="submit" class="btn btn-primary">
          Enviar
        </button>
      </form>
    </body>

  );
}

export default Encuesta;

